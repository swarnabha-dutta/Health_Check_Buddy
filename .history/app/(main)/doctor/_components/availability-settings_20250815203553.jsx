"use client";


import { useState, useEffect } from "react";
import { setAvailabilitySlots } from '@/actions/doctor';
import useFetch from '@/hooks/use-fetch';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Card ,CardHeader , CardTitle,CardContent,CardDescription} from "@/components/ui/card";
import { Clock, Plus, Loader2, AlertCircle } from "lucide-react";
const AvailabilitySettings = ({ slots }) => {
    // Show the form or hide by applying state
    const [showForm, setShowForm] = useState(false);
    // Apply Custom hook for server action
    const { loading, fn: submitSlots, data } = useFetch(setAvailabilitySlots);

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            startTime: "",
            endTime:"",
        }
    });
    return (
        <Card className="border-emerald-900/20">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                <Clock className="h-5 w-5 mr-2 text-emerald-400" />
                Availability Settings
                </CardTitle>
                <CardDescription>
                Set your daily availability for patient appointments
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Current Availability Display */}
                {!showForm ? <></> : <>}
            </CardContent>
        </Card>
    )
}

export default AvailabilitySettings;