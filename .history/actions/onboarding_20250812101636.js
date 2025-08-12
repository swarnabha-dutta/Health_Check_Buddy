"use server";
import { db } from "@/lib/prisma";
import {auth} from "@clerk/nextjs/server";



export async function setUserRole(formData) {
    const { userId } = await auth();
    if (!userId) {
        throw new Error("User not authenticated");
    }

    // Find the user in our Database
    const user = await db.user.findUnique({
        where: {
            clerkUserId:userId
        },
    })




}


