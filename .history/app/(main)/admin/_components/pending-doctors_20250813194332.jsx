"use client";

import { updateDoctorStatus } from '@/actions/admin';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useFetch from '@/hooks/use-fetch';
import { User } from 'lucide-react';
import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';

export const  PendingDoctors = ({doctors}) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
     // Custom hook for approve/reject server action
    const {
        loading,
        data,
        fn: submitStatusUpdate,
    } = useFetch(updateDoctorStatus);

    const handleWiewDetails = (doctor) => {
        setSelectedDoctor(doctor);
    }
    return (
        <div>
            <Card className="bg-muted/20 border-emerald-900/20">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">
                        Pending Doctor Verifications
                    </CardTitle>
                    <CardDescription>
                        Review and approve doctor applications
                    </CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    {doctors.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                            No pending verification requests at this time.
                        </div>
                    ) : (
                        <div className="space-y-4">
                                {doctors.map((doctor) => (
                                    <Card
                                        key={doctor.id}
                                        className="bg-background border-emerald-900/20 hover:border-emerald-700/30 transition-all cursor-pointer"
                                    >
                                        <CardContent>
                                            <div  className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div  className="flex items-center gap-3">
                                                    <div className="bg-muted/20 rounded-full p-2">
                                                        <User className="h-5 w-5 text-emerald-400"/>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-white">
                                                            {doctor.name}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {doctor.specialty} • {doctor.experience} years
                                                            experience
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Badge
                                                        variant="outline"
                                                        className="bg-amber-900/20 border-amber-900/30 text-amber-400"
                                                        >
                                                        Pending
                                                    </Badge>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleViewDetails(doctor)}
                                                        className="border-emerald-900/30 hover:bg-muted/80
                                                        cursor-pointer"
                                                        >
                                                        View Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

