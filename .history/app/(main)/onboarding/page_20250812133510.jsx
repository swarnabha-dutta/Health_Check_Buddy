"use client";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const OnboardingPage = () => {
    const [step, setStep] = useState("choose-role");
    const { } = useForm({
        resolver:zodResolver
    });


    return (
        <div>OnboardingPage</div>
    )
}

export default OnboardingPage