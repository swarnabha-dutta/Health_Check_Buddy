"use server";

import { auth } from "@clerk/nextjs/server";



export async function verifyAdmin() {
    const { userId } = await auth();
}