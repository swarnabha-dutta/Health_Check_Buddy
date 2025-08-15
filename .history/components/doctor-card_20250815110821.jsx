import React from 'react'
import { Card, CardContent } from './ui/card'
import {  Calendar, Star, User } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';


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
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h3 className="font-medium text-white text-lg">{doctor.name}</h3>
                            <Badge>
                                <Star className="h-3 w-3 mr-1" />
                                Verified
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                            {doctor.specialty} . {doctor.experience} years of experience
                        </p>

                        <div className="mt-4 line-clamp-2 text-muted-foreground mb-4">
                            {doctor.description}
                        </div>
                        <Button
                        asChild
                        variant="outline"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 mt-2"
                        >
                        <Link href={`/doctors/${doctor.specialty}/${doctor.id}`}>
                                <Calendar/>
                        </Link>    
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default DoctorCard