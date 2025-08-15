import React from 'react'
import { Card, CardContent } from './ui/card'
import { User } from 'lucide-react';


const DoctorCard = ({doctor}) => {
    return (
        <Card className="border-emerald-900/20 hover:border-emerald-700/40 transition-all cursor-pointer">
            <CardContent>
                <div>
                    {/* Show the doctor's image */}
                    <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center flex-shrink-0">
                        {doctor.imageUrl ? (
                            <img
                                src={doctor.imageUrl}
                                alt={doctor.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        ): (
                                <User className="w-6 h-6 text-emerald-400"/>
                        )}
                    </div>
                    {/* Show doctor Information  */}
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">

                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default DoctorCard