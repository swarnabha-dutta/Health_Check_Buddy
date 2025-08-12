"use client";

import { useParams } from 'next/navigation';
import React from 'react'

const SpecialityPage =async  ({params}) => {

    const {specialty} = useParams();
    return (
        <div>SpecialityPage:{ specialty}</div>
    )
}

export default SpecialityPage