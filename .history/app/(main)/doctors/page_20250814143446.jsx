import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";
import Link from "next/link";



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
                    <Link key={specialty.name} href={`/doctors/${specialty.name}`}>
                        <Card>
                            <CardContent>
                                <div>
                                    <div>{s }</div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        
        </>
    )
}