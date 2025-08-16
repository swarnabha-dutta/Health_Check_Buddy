import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const DoctorProfile = ({doctor,availableDays}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* left part -> of Doctor image and information */}
            <div className="md:col-span-1">
                <div className="md:sticky md:top-24">
                    <Card className="border-emerald-900/20">
                        <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                                <div v className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-emerald-900/20">
                                    {doctor.imageUrl}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/*Right part-> Here the description , professional background and expertise and Appointments */}
            <div></div>
        </div>
    )
}

export default DoctorProfile