"use client";



import { setAvailabilitySlots } from '@/actions/doctor';
import useFetch from '@/hooks/use-fetch';
import React from 'react'
import { useForm } from 'react-hook-form';

const AvailabilitySettings = ({ slots }) => {
    // Show the form or hide by applying s
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
        <div>AvailabilitySettings</div>
    )
}

export default AvailabilitySettings;