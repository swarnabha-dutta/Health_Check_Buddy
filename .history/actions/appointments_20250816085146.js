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
                role:""
            }
        })
    } catch (error) {
        console.log("Failed to book appointment:", error);
        throw new Error("Failed to book appointment:" + error.message);
    }
}
