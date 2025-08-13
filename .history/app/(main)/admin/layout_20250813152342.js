import { verifyAdmin } from '@/actions/admin';
import { PageHeader } from '@/components/page-header';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShieldCheck } from 'lucide-react';
import { redirect } from 'next/navigation';



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
    return (
        <div className='container mx-auto px-4 py-8'>
            <PageHeader icon={<ShieldCheck />} title="Admin Settings" />
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Pending </TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                {children}
                
            </Tabs>
        </div>
    )
}
