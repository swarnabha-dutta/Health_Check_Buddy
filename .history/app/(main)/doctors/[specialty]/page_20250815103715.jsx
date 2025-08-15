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
        console.log("Error fetching doctors:", error);
    }

    // Decode all encoded characters in URL
    const decodedSpecialty = decodeURIComponent(specialty).split('&')[0].trim();
    
    return (
        <div className='space-y-5'>
            <PageHeader
                title={decodedSpecialty}
                backLink="/doctors"
                backLabel="All Specialties"
            />

            {doctors && doctors.length > 0 ? (
                <div className='grid grid-cols-1 '>

                </div>
            ): (
                <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-white mb-2">
                        No doctors available
                    </h3>
                    <p className="text-muted-foreground">
                        There are currently no verified doctors in this specialty. Please
                        check back later or choose another specialty.
                    </p>
                </div>
            )}
        </div>
    )
}

export default SpecialityPage