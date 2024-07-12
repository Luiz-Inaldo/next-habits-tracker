'use client'
import ReturnButton from '@/components/Buttons/Return'
import Container from '@/components/Container'
import MainLayout from '@/components/Layout'
import AlertMessage from '@/components/Modals/Alert'
import { HabitsProps } from '@/types/appTypes'
import React, { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { BiCheck } from 'react-icons/bi'
import { ImSpinner2 } from 'react-icons/im'

export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<HabitsProps>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [resultType, setResultType] = React.useState<string>('');

    const onSubmit = async (data: HabitsProps) => {
        /*  creating habit on localStorage.
            This block will verify if the key already exists
            in localStorage. If true, will increment the new habit
            on the list. If false, will create the key and set a 
            new habit on it.
            P.S.: If the habit name already exists in list, will throw
            a error.
        */
        
        console.log(data);
        // setLoading(true);
        // if (!localStorage.getItem('habits')) {
        //     localStorage.setItem('habits', JSON.stringify([data]));
        //     setResultType('success');
        //     setModalOpen(true);
        // } else {
        //     const habits: HabitsProps[] = JSON.parse(localStorage.getItem('habits') || '');
        //     let isDuplicated: boolean = false;
        //     // verifying if the habit already exists to fire error message
        //     habits.forEach(habit => {
        //         if (habit.name.toLowerCase() === data.name.toLowerCase()) {
        //             isDuplicated = true;
        //             return;
        //         }
        //     })

        //     if (isDuplicated) {
        //         setResultType('error');
        //     } else {
        //         localStorage.setItem('habits', JSON.stringify([...JSON.parse(localStorage.getItem('habits')!), data]));
        //         setResultType('success');
        //     }
        //     setModalOpen(true);
        // }
        // setLoading(false);
    }

    return (
        <MainLayout>
            <ReturnButton />
            <Container>
                <>
                    <h1 className='text-xl font-bold text-center text-snow mb-5'>
                        Criar novo hábito
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between'>
                        <div className='grid gap-6 mb-10'>
                            <label htmlFor="name" className='relative flex flex-col gap-1'>
                                <span>Nome do hábito *</span>
                                <input
                                    type="text"
                                    placeholder='Digite o nome do hábito'
                                    {...register("name", { required: true })}
                                    className='bg-[#FFFFFF20] w-full rounded-md border-none focus-within:ring-0'
                                />
                                {errors.name && (
                                    <span className='absolute -bottom-4.5 left-1.5 text-xs text-red'>
                                        Defina um nome para o hábito
                                    </span>
                                )}
                            </label>
                            <label htmlFor="priority" className='relative flex flex-col gap-1'>
                                <span>Prioridade do hábito *</span>
                                <div className='flex gap-4'>
                                    <div className='flex items-center gap-1'>
                                        <input
                                            type="radio"
                                            defaultValue='baixa'
                                            {...register("priority", { required: true })}
                                            className='focus-within:ring-0 focus-within:bg-green-400 checked:bg-green-400'
                                        />
                                        <span>Baixa</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <input
                                            type="radio"
                                            defaultValue='moderada'
                                            {...register("priority", { required: true })}
                                            className='focus-within:ring-0 focus-within:bg-green-400 checked:bg-green-400'
                                        />
                                        <span>Moderada</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <input
                                            type="radio"
                                            defaultValue='alta'
                                            {...register("priority", { required: true })}
                                            className='focus-within:ring-0 focus-within:bg-green-400 checked:bg-green-400'
                                        />
                                        <span>Alta</span>
                                    </div>
                                    {errors.priority && (
                                        <span className='absolute -bottom-4.5 left-1.5 text-xs text-red'>
                                            Defina a prioridade do hábito
                                        </span>
                                    )}
                                </div>
                            </label>
                        </div>

                        <button className='flex gap-2 items-center text-sm mx-auto py-2 px-6 bg-green-400 rounded-lg text-black-2'>
                            {loading ? (
                                <>
                                    <span>CRIANDO HÁBITO</span>
                                    <ImSpinner2 className='text-lg animate-spin' />
                                </>
                            ) : (
                                <>
                                    <span>SALVAR</span>
                                    <BiCheck className='text-lg' />
                                </>
                            )}
                        </button>

                    </form>
                </>
            </Container>
            <Suspense fallback={null}>
                <AlertMessage messageType={resultType} modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </Suspense>
        </MainLayout>
    )
}
