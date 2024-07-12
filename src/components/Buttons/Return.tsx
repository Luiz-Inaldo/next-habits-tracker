'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'

const ReturnButton = () => {

    const router = useRouter();

    return (
        <div className='pb-3 border-b border-gray-400'>
            <button onClick={() => router.push('/')} className='flex gap-3 items-center py-2 px-3 text-snow hover:bg-white/30 transition-all duration-300 rounded-full'>
                <BiChevronLeft className='w-6 h-6 fill-green-400' />
                <span>voltar</span>
            </button>
        </div>
    )
}

export default ReturnButton