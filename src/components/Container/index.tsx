import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full py-7 px-5'>
            {children}
        </div>
    )
}

export default Container