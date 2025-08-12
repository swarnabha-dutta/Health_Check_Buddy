"use client";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const OnboardingPage = () => {
    const [step, setStep] = useState("choose-role");
    const { } = useForm({
        resolver:zodRes
    });


    return (
        <div>OnboardingPage</div>
    )
}

export default OnboardingPage