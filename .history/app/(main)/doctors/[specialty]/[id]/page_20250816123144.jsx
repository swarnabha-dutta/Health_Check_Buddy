
import { redirect } from 'next/navigation';
import React from 'react'

const DoctorProfilePage = async ({ params }) => {
    
    const { id } = await params;
    try {
        // Fetch doctor data and available slots in parallel
        const [doctorData,slotsData]= await Promise.all
    } catch (error) {
        console.error("Error loading doctor profile:", error);
        redirect("/doctors");
    }
}

export default DoctorProfilePage