"use client";
import { Card } from '@/components/ui/card';
import React from 'react'

export const VerifiedDoctors = () => {
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

