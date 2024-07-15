import useLocalStorage from '@/hooks/useLocalStorage';
import React from 'react'
import { BiCheck, BiX } from 'react-icons/bi';
import { GoDotFill } from 'react-icons/go';

const DayCheck = ({ check, habitName, day, updateHabits }: {
    check: boolean | undefined
    habitName: string,
    day: string,
    updateHabits: (name: string, day: string, value: boolean | undefined) => void
}) => {

    return (
        <React.Fragment>
            {
                check === undefined ?
                    <GoDotFill onClick={() => updateHabits(habitName, day, true)} className='text-2xl' /> :
                    check ? <BiCheck onClick={() => updateHabits(habitName, day, false)} className='text-2xl text-green-400' /> :
                        <BiX onClick={() => updateHabits(habitName, day, undefined)} className='text-2xl text-red' />
            }
        </React.Fragment>
    )
}

export default DayCheck
