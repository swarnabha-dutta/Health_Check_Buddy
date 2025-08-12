"use client";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Card>
                    <CardHeader>
                    </CardHeader>
                    <CardContent>
                        <CardTitle>
                            Join as a Patient
                        </CardTitle>
                        <CardDescription>
                            Book appointments, consult with doctors, and manage your healthcare journey
                        </CardDescription>
                        <Button
                            className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700"
                            disabled={loading}
                            >
                            {loading ? (
                                <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                                </>
                            ) : (
                                "Continue as Patient"
                            )}
                        </Button>
                    </CardContent>
                </Card>
                <Card
                    className="border-emerald-900/20 hover:border-emerald-700/40 cursor-pointer transition-all"
                    onClick={() => !loading && setStep("doctor-form")}
                    >
                    <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                        <div className="p-4 bg-emerald-900/20 rounded-full mb-4">
                        <Stethoscope className="h-8 w-8 text-emerald-400" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-white mb-2">
                        Join as a Doctor
                        </CardTitle>
                        <CardDescription className="mb-4">
                        Create your professional profile, set your availability, and
                        provide consultations
                        </CardDescription>
                        <Button
                        className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700"
                        disabled={loading}
                        >
                        Continue as Doctor
                        </Button>
                    </CardContent>
                </Card>
            </div>
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