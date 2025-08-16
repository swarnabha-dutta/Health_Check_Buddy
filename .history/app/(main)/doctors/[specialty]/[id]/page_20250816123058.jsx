import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

const DoctorProfilePage = async ({ params }) => {
    
    const { id } = await params;
    try {
        
    } catch (error) {
        console.error("Error loading doctor profile:", error);
        redirect("/doctors");
    }
}

export default DoctorProfilePage