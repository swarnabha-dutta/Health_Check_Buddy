"use client";

import useFetch from "@/hooks/use-fetch";

export default function DoctorAppointmentsList() {
    const {
    loading,
    data,
    fn: fetchAppointments,
    } = useFetch();

    useEffect(() => {
    fetchAppointments();
    }, []);

    const appointments 

}


