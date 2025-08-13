import { getPendingDoctors, getVerifiedDoctors } from '@/actions/admin'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'

const AdminPage = async() => {



    const [pendIngDoctorsData, verifiedDoctorsData] = Promise.all([
        getPendingDoctors(),
        getVerifiedDoctors(),     
    ]);
    return (
        <>
            <TabsContent value="account" className={`border-none p-0`}>
                Make changes to your account here.
            </TabsContent>
            <TabsContent value="password" className={`border-none p-0`}>
                Change your password here.
            </TabsContent>
        </>
    )
}

export default AdminPage