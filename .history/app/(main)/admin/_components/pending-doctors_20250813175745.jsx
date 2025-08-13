"use client";

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react'

const PendingDoctors = () => {
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
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default PendingDoctors;