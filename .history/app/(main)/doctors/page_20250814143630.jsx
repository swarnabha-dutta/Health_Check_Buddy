import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";
import Link from "next/link";



export default function DoctorPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mb-8 text-center">
                <h1></h1>
                <p>

                </p>
            </div>
            <div>
                {SPECIALTIES.map((specialty) => (
                    <Link key={specialty.name} href={`/doctors/${specialty.name}`}>
                        <Card>
                            <CardContent>
                                <div>
                                    <div>{specialty.icon }</div>
                                </div>
                                <h3>{specialty.name}</h3>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        
        </>
    )
}