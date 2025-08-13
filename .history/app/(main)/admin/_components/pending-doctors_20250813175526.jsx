"use client";

import React, { useState } from 'react'

const PendingDoctors = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
     // Custom hook for approve/reject server action
    const {
        loading,
        data,
        fn: submitStatusUpdate,
    } = useFetch(updateDoctorStatus);
    return (
        <div>PendingDoctors</div>
    )
}

export default PendingDoctors;