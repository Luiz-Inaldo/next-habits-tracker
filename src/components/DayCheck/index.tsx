import React from 'react'
import { BiCheck, BiX } from 'react-icons/bi';
import { GoDotFill } from 'react-icons/go';

const DayCheck = ({ check }: { check: boolean | undefined }) => {

    return (
        <React.Fragment>
            {
                check === undefined ? 
                <GoDotFill className='text-lg'/> : 
                check ? <BiCheck className='text-2xl text-green-400' /> : 
                <BiX className='text-2xl text-red'/>
            }
        </React.Fragment>
    )
}

export default DayCheck
