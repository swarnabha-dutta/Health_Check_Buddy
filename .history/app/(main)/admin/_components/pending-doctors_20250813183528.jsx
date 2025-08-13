"use client";

import { updateDoctorStatus } from '@/actions/admin';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useFetch from '@/hooks/use-fetch';
import React, { useState } from 'react'

export const  PendingDoctors = ({doctors}) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
     // Custom hook for approve/reject server action
    const {
        loading,
        data,
        fn: submitStatusUpdate,
    } = useFetch(updateDoctorStatus);
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
                            {doctors.map()}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

