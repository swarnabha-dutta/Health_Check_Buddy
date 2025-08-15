import { PageHeader } from '@/components/page-header';
import React from 'react'

const SpecialityPage =async  ({params}) => {

    const { specialty } = await params;
    
    // Decode all encoded characters in URL
    const decodedSpecialty = decodeURIComponent(specialty);
    
    return (
        <div>
            <PageHeader
                title={specialty.split("%20").join(" ")}
                backLink="/doctors"
                backLabel="All Specialties"
            />
        </div>
    )
}

export default SpecialityPage