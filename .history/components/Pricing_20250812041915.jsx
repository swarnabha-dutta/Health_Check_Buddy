import React from 'react'
import { Card, CardContent } from './ui/card';
import { PricingTable } from '@clerk/nextjs';

const Pricing = () => {
    return (
        <Card className="border-amber-500 shadow-lg bg-gradient-to-b from-amber-300 to-transparent">
            <CardContent className="p-6 md:p-8">
                <PricingTable />
            </CardContent>
        </Card>
    )
}

export default Pricing