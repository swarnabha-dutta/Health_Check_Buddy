"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


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
                status:"SCHEDULED",
            }
        })

    } catch (error) {
        console.log("Failed to book appointment:", error);
        throw new Error("Failed to book appointment:" + error.message);
    }
}
