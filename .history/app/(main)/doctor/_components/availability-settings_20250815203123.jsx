"use client";


import { useState, useEffect } from "react";
import { setAvailabilitySlots } from '@/actions/doctor';
import useFetch from '@/hooks/use-fetch';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Card ,CardHeader , CardTitle,Card} from "@/components/ui/card";

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
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                <Clock className="h-5 w-5 mr-2 text-emerald-400" />
                Availability Settings
                </CardTitle>
                <CardDescription>
                Set your daily availability for patient appointments
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default AvailabilitySettings;