import { getDoctorsBySpecialty } from '@/actions/doctors-listing';
import { PageHeader } from '@/components/page-header';
import { redirect } from 'next/navigation';
import React from 'react'

const SpecialityPage =async  ({params}) => {

    const { specialty } = await params;
    // Redirect to main doctors page if no specialty is provided
    if (!specialty) {
        redirect("/doctors");
    }

    // Fetch doctors by specialty
    const { doctors, error } = await getDoctorsBySpecialty(specialty);

    if (error) {
        console.log(object)
    }

    // Decode all encoded characters in URL
    const decodedSpecialty = decodeURIComponent(specialty).split('&')[0].trim();
    
    return (
        <div>
            <PageHeader
                title={decodedSpecialty}
                backLink="/doctors"
                backLabel="All Specialties"
            />
        </div>
    )
}

export default SpecialityPage