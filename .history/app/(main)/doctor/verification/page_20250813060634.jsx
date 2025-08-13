import { getCurrentUser } from '@/actions/onboarding';
import React from 'react'

const VerificationPage =async () => {
    // get the information of the user 
    const user = await getCurrentUser();
    return (
        <div>VerificationPage</div>
    )
}

export default VerificationPage