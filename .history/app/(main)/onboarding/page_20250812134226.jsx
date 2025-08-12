"use client";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const doctorFormSchema = z.object({
    specialty: z.string().min(1, "Specialty is required"),
    experience: z
        .number()
        .min(1, "Experience must be at least 1 year")
        .max(50, "Experience must be less than 50 years"),
    credentialUrl: z
        .string()
        .url("Please enter a valid URL")
        .min(1, "Credential URL is required"),
    description: z
        .string()
        .min(20, "Description must be at least 20 characters")
    .max

})
const OnboardingPage = () => {
    const [step, setStep] = useState("choose-role");
    const { } = useForm({
        resolver: zodResolver(doctorFormSchema),
    });


    return (
        <div>OnboardingPage</div>
    )
}

export default OnboardingPage