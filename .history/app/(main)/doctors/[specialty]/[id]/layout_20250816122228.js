import { getDoctorById } from '@/actions/appointments';



export async function generateMetaData({ params }) {

    const { id } = await params;
    const { doctor } = await getDoctorById(id);

    return {
        title: `Dr. ${doctor.name} - MediMeet`,
        description: `Book an appointment with Dr. ${doctor.name}, ${doctor.specialty} specialist with ${doctor.experience} years of experience.`,
    };

}


const DoctorProfileLayout = ({ params }) => {
    return (
        <div>DoctorProfileLayout</div>
    )
}

export default DoctorProfileLayout