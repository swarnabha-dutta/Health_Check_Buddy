import React from 'react'

const DoctorsLayout = ({children}) => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">{children}</div>
        </div>
    )
}

export default DoctorsLayout;