import { PageHeader } from '@/components/page-header';
import React from 'react'

const SpecialityPage =async  ({params}) => {

    const {specialty} = await params;
    return (
        <div>
            <PageHeader
            title={specialty.split("%20").join(" ")}
            
            
            />
        </div>
    )
}

export default SpecialityPage