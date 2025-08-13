"use client";

import { updateDoctorStatus } from '@/actions/admin';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useFetch from '@/hooks/use-fetch';
import { ExternalLink, FileText, Medal, User } from 'lucide-react';
import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

export const  PendingDoctors = ({doctors}) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
     // Custom hook for approve/reject server action
    const {
        loading,
        data,
        fn: submitStatusUpdate,
    } = useFetch(updateDoctorStatus);

    const handleViewDetails = (doctor) => {
        setSelectedDoctor(doctor);
    }
    // Close doctor details dialog
    const handleCloseDialog = () => {
        setSelectedDoctor(null);
    };
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
                                                <div className="flex items-center gap-2 self-end md:self-auto">
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
            {/* Doctor Details Dialog */}
            {selectedDoctor && (
                    // if doctor have any information on their profile, then only   display it
                    <Dialog open={!!selectedDoctor} onOpenChange={handleCloseDialog}>
                        <DialogContent  className="max-w-3xl">
                            <DialogHeader>
                            <DialogTitle
                                className="text-xl font-bold text-white"
                            >
                                Doctor Verification Details
                            </DialogTitle>
                            <DialogDescription >
                                Review the doctor&apos;s information carefully before making a
                                decision
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 py-4">
                            {/* Basic Info */}
                            <div className="flex flex-col md:flex-row gap-6">
                                <div  className="space-y-1 flex-1">
                                    <h4 className="text-sm font-medium text-muted-foreground">
                                        Full Name
                                    </h4>
                                    <p className="text-sm text-white">{selectedDoctor.name}
                                    </p>
                                </div>
                                <div className="space-y-1 flex-1">
                                    <h4 className="text-sm font-medium text-muted-foreground">
                                        Email
                                    </h4>
                                    <p className="text-base font-medium text-white">
                                        {selectedDoctor.email}
                                    </p>
                                </div>
                                <div className="space-y-1 flex-1">
                                    <h4 className="text-sm font-medium text-muted-foreground">
                                        Application Date
                                    </h4>
                                    <p className="text-base font-medium text-white">
                                        {format(new Date(selectedDoctor.createdAt), "PPP")}
                                    </p>
                                </div>
                            </div>
                            <Separator className="bg-emerald-900/20" />
                            {/* Professional Details */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Medal className="h-5 w-5 text-emerald-400" />
                                    <h3 className="text-white font-medium">
                                        Professional Information
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-medium text-muted-foreground">
                                        Specialty
                                        </h4>
                                        <p className="text-white">{selectedDoctor.specialty}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-medium text-muted-foreground">
                                        Years of Experience
                                        </h4>
                                        <p className="text-white">
                                        {selectedDoctor.experience} years
                                        </p>
                                    </div>
                                    <div className="space-y-1 col-span-2">
                                        <h4 className="text-sm font-medium text-muted-foreground">
                                            Credentials
                                        </h4>
                                        <div className="flex items-center">
                                                <a
                                                    href={selectedDoctor.credentialUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-emerald-400 hover:text-emerald-300 flex items-center"
                                                >
                                                    View Credentials
                                                    <ExternalLink className="h-4 w-4 ml-1" />
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Separator className="bg-emerald-900/20" />

                            {/* Description */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-emerald-400" />
                                    <h3 className="text-white font-medium">
                        Service Description
                    </h3>
                                </div>
                            </div>
                        </div>
                        </DialogContent>
                    </Dialog>    
                )}
        </div>
    )
}

