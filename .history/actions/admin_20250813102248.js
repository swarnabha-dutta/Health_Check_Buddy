"use server";

import { auth } from "@clerk/nextjs/dist/types/server";



export async function verifyAdmin() {
    const { userId } = await auth();
}