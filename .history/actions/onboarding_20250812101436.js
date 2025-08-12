"use server";
import {auth} 


export async function setUserRole(formData) {
    const { userId } = await auth();
}


