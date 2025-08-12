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