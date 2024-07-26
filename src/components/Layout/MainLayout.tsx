import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen max-w-md mx-auto items-center justify-center">
            <div className='w-full h-screen p-4 flex flex-col'>
                <div className='mb-10 w-fit mx-auto'>
                    <div className='flex gap-2 items-end mb-2'>
                        <IoMdCheckmarkCircleOutline className='text-white w-13 h-13' />
                        <h1 className='text-white font-bold text-4xl'>meta.<span className='text-green-400 font-light'>diária</span></h1>
                    </div>
                    <p className=''>
                        a sua nova forma de gerenciar hábitos
                    </p>
                </div>
                {children}
            </div>
        </main>
    )
}

export default MainLayout