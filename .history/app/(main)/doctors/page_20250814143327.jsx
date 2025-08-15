import { SPECIALTIES } from "@/lib/specialities";



export default function DoctorPage() {
    return (
        <>
            <div>
                <h1></h1>
                <p>

                </p>
            </div>
            <div>
                {SPECIALTIES.map((specialty) => (
                    <Link key={specialty.name} href={`/doctors/${specialty.name}`}></Link>
                ))}
            </div>
        
        </>
    )
}