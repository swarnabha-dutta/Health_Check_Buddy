import { verifyAdmin } from '@/actions/admin';
import React from 'react'


export const metadata = {
    title: "Admin Settings - HealthCheckBuddy",
    description: "Manage doctors, patients, and platform settings",
};
export default async function AdminLayout({children}) {
    // Verify the user has admin access
    const isAdmin = await verifyAdmin();
    // Redirect if not an admin
    if (!isAdmin) {
        redirect("/onboarding");
    }
}
