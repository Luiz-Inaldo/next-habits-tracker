'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';

const NewHabitButton = () => {

    const router = useRouter();

    return (
        <div className='pb-3 border-b border-gray-400'>
            <button onClick={() => router.push('/new')} className='flex gap-3 items-center py-2 px-3 text-snow hover:bg-white/30 transition-all duration-300 rounded-full'>
                <AiFillPlusCircle className='w-6 h-6 fill-green-400' />
                <span>novo hábito</span>
            </button>
        </div>
    )
}

export default NewHabitButton