"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


/**
 * Book a new appointment with a doctor
 */
export async function bookAppointment(formData) { 
    const { userId } = await auth();
    // if user is not logged in
    if (!userId) {
        throw new Error("Unauthorized");
    }
    try {
        // Get the patient user
        const patient = await db.user.findUnique({
            where: {
                clerkUserId: userId,
                role: "PATIENT",
            },
        });
        // If patient is not found
        if (!patient) {
            throw new Error("Patient not found");
        }
        // Parse form data
        const doctorId = formData.get("doctorId");
        const startTime = new Date(formData.get("startTime"));
        const endTime = new Date(formData.get("endTime"));
        // Patient Description 
        const patientDescription = formData.get("description") || null;

        // Validate input if any one is missing 
        if (!doctorId || !startTime || !endTime) {
            throw new Error("Doctor, start time, and end time are required for doctor to appointment");
        }

        // Check if the doctor exists and is verified
        const doctor = await db.user.findUnique({
            where: {
                id: doctorId,
                role: "DOCTOR",
                verificationStatus: "VERIFIED",
            
            },
        });
        // Either doctor is not found or not verified 
        if (!doctor) {
            throw new Error("Doctor not found or not verified");
        }
        // Check if the patient has enough credits (2 credits per appointment)
        if (patient.credits < 2) {
            throw new Error("Insufficient credits to book an appointment");
        }
        // Check if the requested time slot is available
        const overlappingAppointment = await db.appointment.findFirst({
            where: {
                doctorId: doctorId,
                status: "SCHEDULED",
                OR: [
                    {
                        // New appointment starts during an existing appointment
                        startTime: {
                            lte: startTime,
                        },
                        endTime: {
                            gt: startTime,
                        },
                    },
                    {
                        // New appointment ends during an existing appointment
                        startTime: {
                            lt: endTime,
                        },
                        endTime: {
                            gte: endTime,
                        },
                    },
                    {
                        // New appointment completely overlaps an existing appointment
                        startTime: {
                            gte: startTime,
                        },
                        endTime: {
                            lte: endTime,
                        },
                    },
                ],
            },
        });
        if (overlappingAppointment) {
            throw new Error("This time slot is already booked");
        }
        // Create a new Vonage Video API session
        const sessionId = await createVideoSession();

        // Deduct credits from patient and add to doctor
        const { success, error } = await deductCreditsForAppointment(
            patient.id,
            doctor.id
        );

        if (!success) {
            throw new Error(error || "Failed to deduct credits for appointment");
        }

        // Create the appointment with the video session ID
        const appointment = await db.appointment.create({
            data: {
                patientId: patient.id,
                doctorId: doctor.id,
                startTime,
                endTime,
                patientDescription,
                status: "SCHEDULED",
                // Store the Vonage session ID
                videoSessionId: sessionId,
            },
        });
        revalidatePath("/appointments");
        return { success: true, appointment: appointment };

    } catch (error) {
        console.log("Failed to book appointment:", error);
        throw new Error("Failed to book appointment:" + error.message);
    }
}


/**
 * Generate a Vonage Video API session
*/
async function createVideoSession() { 
    try {
        const session = await Vonage.video.createSession({ mediMode: "routed" });
        return session.sessionId;
    } catch (error) {
        throw new Error("Failed to create video session: " + error.message);
    }
}

/**
 * Generate a token for a video session
 * This will be called when either doctor or patient is about to join the call
*/

export async function generateVideoToken(formData) {

    const { userId } = await auth();
    // if user is not logged in
    if (!userId) {
        throw new Error("Unauthorized");
    }

    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        const appointmentId = formData.get("appointmentId");
        // if appointmentId is not provided or found
        if (!appointmentId) {
            throw new Error("Appointment ID is required");
        }
        // Find the appointment and verify the user is part of it
        const appointment = await db.appointment.findUnique({
            where: {
                id: appointmentId,
            },
        });
        // if appointment is not found
        if (!appointment) {
            throw new Error("Appointment not found");
        }
        // User must be verified and have correct appointment id to join the call 
        if(appointment.doctorId !== user.id && appointment.patientId !== user.id){
            throw new Error("You are not authorized to join this call");
        }
        // Verify the appointment is scheduled
        if (appointment.status !== "SCHEDULED") {
            throw new Error("This appointment is not currently scheduled");
        }

        // Verify the appointment is within a valid time range (e.g., starting 5 minutes before scheduled time)
        const now = new Date();
        const appointmentTime = new Date(appointment.startTime);
        // difference in minutes
        const timeDifference = (appointmentTime - now) / (1000 * 60);
        if (timeDifference > 30) {
            throw new Error(
                "The call will be available 30 minutes before the scheduled time"
            );
        }
        // Generate a token for the video session
        // Token expires 2 hours after the appointment start time
        const appointmentEndTime = new Date(appointment.endTime);
        
        const expirationTime =
            Math.floor(appointmentEndTime.getTime() / 1000) + 60 * 60;
    
        // Use user's name and role as connection data
        const connectionData = JSON.stringify({
            name: user.name,
            role: user.role,
            userId: user.id,
        });
        // Generate the token with appropriate role and expiration
        const token = vonage.video.generateClientToken(appointment.videoSessionId, {
            role: "publisher",
            expireTime: expirationTime,
            data: connectionData,
        });
        // Update the appointment with the token
        await db.appointment.update({
            where: {
                id: appointmentId,
            },
            data: {
                videoSessionToken: token,
            },
        });
        return {
            success: true,
            videoSessionId: appointment.videoSessionId,
            token: token,
        };
    
    } catch (error) {
        console.log("Failed to generate video token:", error);
        throw new Error("Failed to generate video token:" + error.message);
    }
}

/**
 * Get doctor by ID
 */
export async function getDoctorById(doctorId) {
try {
    const doctor = await db.user.findUnique({
        where: {
            id: doctorId,
            role: "DOCTOR",
            verificationStatus: "VERIFIED",
        },
    });
    // if doctor is not found
    if (!doctor) {
        throw new Error("Doctor not found");
    }
    return { doctor };
} catch (error) {
    console.log("Failed to fetch doctor:", error);
    throw new Error("Failed to fetch doctor details");
}



}

/**
 * Get available time slots for booking for the next 4 days
 */
export async function getAvailableTimeSlots(doctorId) { 
    try {
        // Validate doctor existence and verification
        const doctor = await db.user.findUnique({
            where: {
                id: doctorId,
                role: "DOCTOR",
                verificationStatus: "VERIFIED",
            },
        });
        // if doctor is not found
        if (!doctor) {
            throw new Error("Doctor not found or not verified");
        }
        // Fetch a single availability record
        const availability = await db.availability.findFirst({
            where: {
                doctorId: doctor.id,
                status: "AVAILABLE",
            },
        });
        // if availability is not found
        if (!availability) {
            throw new Error("No availability set by doctor");
        }
        // Get the next 4 days
        const now = new Date();
        const days = [now, addDays(now, 1), addDays(now, 2), addDays(now, 3)];
    } catch (error) {
        console.error("Failed to fetch available slots:", error);
        throw new Error("Failed to fetch available time slots: " + error.message);
    }
}