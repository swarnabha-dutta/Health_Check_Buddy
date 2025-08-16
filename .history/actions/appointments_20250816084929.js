"use server";

import { auth } from "@clerk/nextjs/server";


export async function bookAppointment(formData) { 
    const { userId } = await auth();
}
