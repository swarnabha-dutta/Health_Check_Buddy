"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";



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
        return user
    } catch (error) {
        console.log("Failed to Verify admin:", error);
        return false;
    }
}