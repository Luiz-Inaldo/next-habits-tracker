import Image from 'next/image';
import React from 'react'
import { BiTrash } from 'react-icons/bi';
import DayCheck from '../DayCheck';
import useLocalStorage from '@/hooks/useLocalStorage';

const HabitsList = () => {

    const [loading, setLoading] = React.useState<boolean>(true);
    const weekDays: string[] = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
    const { habitsList, fetchLocalStorage, setHabitsList, getHabits, updateHabits } = useLocalStorage();

    // pega os últimos 7 dias da semana
    const last7Days = weekDays.map((_, index) => {
        const date = new Date();
        date.setDate(date.getDate() + index);
        return date.toISOString().slice(0, 10);
    })

    console.log(last7Days);

    React.useEffect(() => {
        const fetchHabits = async () => {
            setLoading(true);
            await fetchLocalStorage();
            setLoading(false);
        }
        fetchHabits();
    }, []);

    return (
        <React.Fragment>
            <h2 className='text-xl font-bold text-center text-snow mb-5'>
                Minha lista de hábitos
            </h2>
            {loading ? (
                <p className='text-center mt-20'>
                    Carregando hábitos...
                </p>
            ) : (
                <>
                    {habitsList && habitsList.length > 0 ? (
                        <ul className='list-none flex flex-col gap-5'>
                            {habitsList.map((habit, index) => (
                                <li key={index} className='p-4 rounded-md bg-neutral-800'>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex flex-col gap-2'>
                                            <h2 className='text-lg font-light text-snow'>
                                                {habit.name}
                                            </h2>
                                            <div className='flex gap-2 items-center'>
                                                <span>prioridade: </span>
                                                <span className={`w-fit text-sm py-x px-3 rounded-full ${habit.priority === 'baixa' ? 'bg-green-400 text-black-2' : habit.priority === 'moderada' ? 'bg-yellow-300 text-black-2' : 'bg-red text-snow'}`}>{habit.priority}</span>
                                            </div>
                                        </div>
                                        <BiTrash className='text-2xl text-red self-start' />
                                    </div>
                                    <div className='grid grid-cols-7 gap-4 mt-5'>
                                        {weekDays.map((day, index) => (
                                            <div key={index} className='flex flex-col gap-4 items-center'>
                                                <span>{day}</span>
                                                <DayCheck
                                                    check={habit.days[last7Days[index]]}
                                                    habitName={habit.name}
                                                    day={last7Days[index]}
                                                    updateHabits={updateHabits}
                                                />
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
                </>
            )}
        </React.Fragment>
    )
}

export default HabitsList
