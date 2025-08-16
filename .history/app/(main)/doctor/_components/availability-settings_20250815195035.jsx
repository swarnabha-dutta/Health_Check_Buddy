"use client";



import React from 'react'
import { useForm } from 'react-hook-form';

const AvailabilitySettings = ({ slots }) => {
    

    // Apply Custom hook for server action
    
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
        <div>AvailabilitySettings</div>
    )
}

export default AvailabilitySettings;