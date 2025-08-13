import { getPendingDoctors, getVerifiedDoctors } from '@/actions/admin'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'

const AdminPage = () => {



        Promise.all([
            getPendingDoctors(),
            getVerifiedDoctors(),
            
        ])
    return (
        <div>
            <TabsContent value="account">
                Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
                Change your password here.
            </TabsContent>
        </div>
    )
}

export default AdminPage