"use server";

import { auth } from "@clerk/nextjs/server";



export async function verifyAdmin() {
    const { userId } = await auth();
    if (!userId) {
        return false;
    }
    try {
        
    } catch (error) {
        console.log("Failed to Verify ")
    }
}