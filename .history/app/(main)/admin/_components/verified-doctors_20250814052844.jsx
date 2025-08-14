"use client";
import { updateDoctorActiveStatus } from '@/actions/admin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import useFetch from '@/hooks/use-fetch';
import { Search } from 'lucide-react';
import React, { useState } from 'react'

export const VerifiedDoctors = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [targetDoctor, setTargetDoctor] = useState(null);
    const [actionType, setActionType] = useState(null);

    const {
        loading,
        

    } =
        useFetch(updateDoctorActiveStatus);

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
                        
                    </CardContent>
            </Card>
        </div>
    )
}

