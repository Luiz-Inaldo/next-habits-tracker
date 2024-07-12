import { HabitsProps } from '@/types/appTypes'
import Image from 'next/image';
import React from 'react'
import { BiTrash } from 'react-icons/bi';
import DayCheck from '../DayCheck';

const HabitsList = () => {

    const [habits, setHabits] = React.useState<HabitsProps[] | []>([]);
    const weekDays: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    const date = new Date()
    console.log(date)

    React.useEffect(() => {

        if (!localStorage.getItem('habits')) return;
        const habits: HabitsProps[] = JSON.parse(localStorage.getItem('habits') || '');
        if (habits) {
            setHabits(habits);
        }

    }, [])

    return (
        <React.Fragment>
            <h2 className='text-xl font-bold text-center text-snow mb-5'>
                Minha lista de hábitos
            </h2>
            {habits.length > 0 ? (
                <ul className='list-none flex flex-col gap-5'>
                    {habits.map((habits, index) => (
                        <li key={index} className='p-4 rounded-md bg-neutral-800'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-lg font-light text-snow'>
                                        {habits.name}
                                    </h2>
                                    <div className='flex gap-2 items-center'>
                                        <span>prioridade: </span>
                                        <span className={`w-fit text-sm py-x px-3 rounded-full ${habits.priority === 'baixa' ? 'bg-green-400 text-black-2' : habits.priority === 'moderada' ? 'bg-yellow-300 text-black-2' : 'bg-red text-snow'}`}>{habits.priority}</span>
                                    </div>
                                </div>
                                <BiTrash className='text-2xl text-red self-start' />
                            </div>
                            <div className='grid grid-cols-7 gap-4 mt-5'>
                                {weekDays.map((day, index) => (
                                    <div key={index} className='flex flex-col gap-4 items-center'>
                                        <span>{day}</span>
                                        <DayCheck check={false} />
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className='flex flex-col items-center'>
                    <Image
                        src={'/images/no-habits.svg'}
                        alt='pessoa olhando para o telefone'
                        width={250}
                        height={250}
                        className='mt-10 mb-6'
                    />
                    <p className='text-center'>
                        você não tem hábitos cadastrados (ainda)
                    </p>
                </div>
            )}
        </React.Fragment>
    )
}

export default HabitsList
