"use client";
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

export const VerifiedDoctors = () => {
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
                        </div>
                        <CardTitle>
                            Card Title
                        
                        </CardTitle>
                        
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
            </Card>
        </div>
    )
}

