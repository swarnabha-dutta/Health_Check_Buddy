import { getPendingDoctors, getVerifiedDoctors } from '@/actions/admin'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'

const AdminPage = async() => {



    const [pendIngDoctorsData, verifiedDoctorsData] = await Promise.all([
        getPendingDoctors(),
        getVerifiedDoctors(),     
    ]);
    return (
        <>
            <TabsContent value="account" className={`border-none p-0`}>
                Pending
            </TabsContent>
            <TabsContent value="password" className={`border-none p-0`}>
                Doctors
            </TabsContent>
        </>
    )
}

export default AdminPage