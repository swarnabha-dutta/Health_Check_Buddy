

import { PageHeader } from '@/components/page-header';
import React from 'react'

const SpecialityPage =async  ({params}) => {

    const { specialty } = await params;
    

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