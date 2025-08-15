import React from 'react'
import { Card, CardContent } from './ui/card'

const DoctorCard = ({doctor}) => {
    return (
        <Card className="border-emerald-900/20 hover:border-emerald-700/40 transition-all cursor-pointer">
            <CardContent>
                <div>
                    <div className="w-12 h-12 rounded-full bg-emerald">

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default DoctorCard