import React from 'react'

const DoctorsLayout = ({children}) => {
    return (
        
        <div className='container mx-auto px-4 py-12'>
            <div className=''>
                {children}
            </div>
        </div>
    )
}

export default DoctorsLayout