import React from 'react'
import { Card, CardContent } from './ui/card'
import { PricingTable } from '@clerk/clerk-react'

const Pricing = () => {
    return (
        <Card>
            <CardContent>
                <PricingTable />
            </CardContent>
        </Card>
    )
}

export default Pricing