"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";



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
        const pendingDoctors = await db.user.findMany({
            where: {
                role: "DOCTOR",
                verificationStatus: "PENDING",
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return { doctors:pendingDoctors };
    } catch (error) {
        throw new Error("Failed to fetch pending doctors");
    }
}


/**
 * Gets all verified doctors
 */
export async function getVerifiedDoctors() {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) throw new Error("Unauthorized");
    try {
        const verifiedDoctors = await db.user.findMany({
            where: {
                role: "DOCTOR",
                verificationStatus: "VERIFIED",
            },
            orderBy: {
                createdAt: "asc",
            },
        });
        return { doctors:verifiedDoctors };
    } catch (error) {
        console.log("Failed to get verified doctors:", error);
        return { error: "Failed to fetch verified doctors" };
    }
} 


/**
 * Updates a doctor's verification status
 */
export async function updateDoctorStatus(formData) {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) throw new Error("Unauthorized");

    const doctorId = formData.get("doctorId");
    const status = formData.get("status");
    if (!doctorId || !["VERIFIED", "REJECTED"].includes(status)) {
        throw new Error("Invalid input");
    }

    try {
        await db.user.update({
            where: {
                id: doctorId,
            },
            data: {
                verificationStatus: status,
            },
        });

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.log("Failed to update doctor status:", error);
        throw new Error(`Failed to update doctor status: ${error.message}`);
    }
}


/**
 * Updates a doctor's verification status
 */
export async function update