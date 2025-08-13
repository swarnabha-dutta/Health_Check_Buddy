import { getCurrentUser } from '@/actions/onboarding';
import React from 'react'

const VerificationPage =async () => {
    // get the information of the user 
    const user = await getCurrentUser();

    // If user is already verified then redirect to their Dashboard page
    if (user?.verificationStatus === "VERIFIED") {
        redirect("/doctor");
    }
    

    return (
        <div>VerificationPage</div>
    )
}

export default VerificationPage