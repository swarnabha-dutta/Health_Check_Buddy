"use client";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Card } from '@/components/ui/card';


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
    .max(1000, "Description must be less than 1000 characters"),

})
const OnboardingPage = () => {
    const [step, setStep] = useState("choose-role");
    const { register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch    
    } = useForm({
        resolver: zodResolver(doctorFormSchema),
        defaultValues: {
            specialty: "",
            experience: undefined,
            credentialUrl: "",
            description: "",
        }
    });
    const specialtyValue = watch("specialty");
    // const experienceValue = watch("experience");
    // const credentialUrlValue = watch("credentialUrl");
    // const descriptionValue = watch("description");
    if (role == "choose-role") {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>
        )
    }

    if (role == "doctor-form") { 
        return <>doctor form</>
    }
    return (
        <div>OnboardingPage</div>
    )
}

export default OnboardingPage