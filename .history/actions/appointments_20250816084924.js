"use server";

import { auth } from "@clerk/nextjs/dist/types/server";


export async function bookAppointment(formData) { 
    const { userId } = await auth();
}
