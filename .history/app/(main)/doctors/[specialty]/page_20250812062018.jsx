"use client";

import { useParams } from 'next/navigation';
import React from 'react'

const SpecialityPage = () => {

    const {special} = useParams();
    return (
        <div>SpecialityPage</div>
    )
}

export default SpecialityPage