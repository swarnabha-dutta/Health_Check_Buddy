import { getDoctorById } from '@/actions/appointments';
import React from 'react'


export async function generateMetaData({ params }) {

    const { id } = await params;
    const { doctor } = await getDoctorById(id);

    

}


const DoctorProfileLayout = () => {
    return (
        <div>DoctorProfileLayout</div>
    )
}

export default DoctorProfileLayout