"use client";
import { updateDoctorActiveStatus } from '@/actions/admin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import useFetch from '@/hooks/use-fetch';
import { Search, User } from 'lucide-react';
import React, { useState } from 'react'

export const VerifiedDoctors = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [targetDoctor, setTargetDoctor] = useState(null);
    const [actionType, setActionType] = useState(null);

    const {
        loading,
        data,
        fn:submitStatusUpdate,
    } =
        useFetch(updateDoctorActiveStatus);
    const filteredDoctors = doctors.filter((doctor) => {
        const query = searchTerm.toLowerCase();
        return (
            doctor.name.toLowerCase().includes(query) ||
            doctor.specialty.toLowerCase().includes(query) ||
            doctor.email.toLowerCase().includes(query)
        )
    })
    return (
        <div>
                <Card className="bg-muted/20 border-emerald-900/20">
                    <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <CardTitle className="text-xl font-bold text-white">
                                Manage Doctors
                            </CardTitle>
                            <CardDescription>
                                View and manage all verified doctors
                            </CardDescription>
                        </div>
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search doctors..."
                                className="pl-8 bg-background border-emerald-900/20"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                    {filteredDoctors.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                {searchTerm
                                    ? "No doctors match your search criteria."
                                    : "No verified doctors available."
                                }
                            </div>
                        ): (
                            <div className="space-y-4">
                                {filteredDoctors.map((doctor) => {
                                    const isSuspended = doctor.verificationStatus === "REJECTED";
                                    return (
                                        <Card
                                            key={doctor.id}
                                            className="bg-background border-emerald-900/20 hover:border-emerald-700/30 transition-all"
                                        >
                                            <CardContent className={`p-4`}>
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-muted/20 rounded-full p-2">
                                                            <User className="h-5 w-5 text-emerald-400" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-medium text-white">
                                                                {doctor.name}
                                                                </h3>
                                                                <p className="text-sm text-muted-foreground">
                                                                {doctor.specialty} • {doctor.experience} years
                                                                experience
                                                                </p>
                                                                <p className="text-sm text-muted-foreground mt-1">
                                                                {doctor.email}
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 self-end md:self-auto">

                                                    </div>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        )}
                    </CardContent>
            </Card>
        </div>
    )
}

