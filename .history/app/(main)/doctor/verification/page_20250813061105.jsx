import { getCurrentUser } from '@/actions/onboarding';
import { redirect } from 'next/navigation';
import React from 'react'

const VerificationPage =async () => {
    // get the information of the user 
    const user = await getCurrentUser();

    // If user is already verified then redirect to their Dashboard page
    if (user?.verificationStatus === "VERIFIED") {
        redirect("/doctor");
    }

    const isRejected = user?.verificationStatus === "REJECTED";
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">

            </div>
        </div>
    )
}

export default VerificationPage