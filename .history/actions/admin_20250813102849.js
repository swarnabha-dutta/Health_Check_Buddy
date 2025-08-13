"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


/**
 * Verifies if current user has admin role
 */
export async function verifyAdmin() {
    const { userId } = await auth();
    if (!userId) {
        return false;
    }
    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
        });
        return user?.role === "ADMIN";
    } catch (error) {
        console.log("Failed to Verify admin:", error);
        return false;
    }
}


/**
 * Gets all doctors with pending verification
 */
export async function getPendingDoctors() {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) throw new Error("Unauthorized");

    try {
        
    } catch (error) {
        
    }
}