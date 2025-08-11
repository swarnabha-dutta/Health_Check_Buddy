import React from 'react'
import { Card, CardContent } from './ui/card';
import { PricingTable } from '@clerk/nextjs';

const Pricing = () => {
    return (
        <Card className="border-amber-300 shadow-lg bg-gradient-to-b">
            <CardContent>
                <PricingTable />
            </CardContent>
        </Card>
    )
}

export default Pricing