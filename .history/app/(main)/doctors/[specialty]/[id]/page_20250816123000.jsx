import React from 'react'

const DoctorProfilePage = async ({ params }) => {
    
    const { id } = await params;
    return (
        <div>DoctorProfilePage</div>
    )
}

export default DoctorProfilePage