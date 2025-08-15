import { PageHeader } from '@/components/page-header';
import React from 'react'

const SpecialityPage =async  ({params}) => {

    const {specialty} = await params;
    return (
        <div>
            <PageHeader
            title={specialty.split("%20")}
            
            
            />
        </div>
    )
}

export default SpecialityPage