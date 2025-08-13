import { getPendingDoctors, getVerifiedDoctors } from '@/actions/admin'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import PendingDoctors from './_components/pending-doctors';
import VerifiedDoctors from './_components/verified-doctors';

const AdminPage = async() => {



    const [pendIngDoctorsData, verifiedDoctorsData] = await Promise.all([
        getPendingDoctors(),
        getVerifiedDoctors(),     
    ]);
    return (
        <>
            <TabsContent value="account" className={`border-none p-0`}>
                <PendingDoctors doctors={pendIngDoctorsData.doctors || []} />
            </TabsContent>
            <TabsContent value="password" className={`border-none p-0`}>
                <VerifiedDoctors doctors={verifiedDoctorsData.doctors || []} />
            </TabsContent>
        </>
    )
}

export default AdminPage