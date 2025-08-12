"use server";
import { db } from "@/lib/prisma";
import {auth} from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";




export async function setUserRole(formData) {
    const { userId } = await auth();
    if (!userId) {
        throw new Error("User not authenticated");
    }

    // Find the user in our Database
    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId
        },
    });

    if (!user) throw new Error("User not found in database");

    const role = formData.get("role");

    if (!role || !["PATIENT", "DOCTOR"].includes(role)) {
        throw new Error("Invalid role selection");
    }

    try {
        
        // For patient role - simple update
        if (role === "PATIENT") {
            await db.user.update({
                where: {
                    clerkUserId: userId,
                },
                data: {
                    role: "PATIENT",
                },
            });

            revalidatePath("/");
            return { success: true, redirect: "/doctors" };
        }


        // For doctor role - need additional information
        if (role === "DOCTOR") {
            const specialty = formData.get("specialty");
            const experience = parseInt(formData.get("experience"), 10);
            const credentialUrl = formData.get("credentialUrl");
            const description = formData.get("description");

            // Validate inputs
            if (!specialty || !experience || !credentialUrl || !description) {
                throw new Error("All fields are required");
            }

        }
    } catch (error) {
        console.log("Failed to set user role:", error);
        throw new Error(`Failed to update user profile: ${error.message}`);
    }




}


