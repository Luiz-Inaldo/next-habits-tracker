'use client'
import ReturnButton from '@/components/Buttons/Return'
import Container from '@/components/Container'
import MainLayout from '@/components/Layout/MainLayout'
import AlertMessage from '@/components/Modals/Alert'
import useLocalStorage from '@/hooks/useLocalStorage'
import { HabitsProps } from '@/types/appTypes'
import React, { Suspense, use } from 'react'
import { useForm } from 'react-hook-form'
import { BiCheck } from 'react-icons/bi'
import { ImSpinner2 } from 'react-icons/im'

export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<HabitsProps>();
    const { setHabits } = useLocalStorage();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [resultType, setResultType] = React.useState<string>('');

    const onSubmit = async (data: HabitsProps) => {

        setLoading(true);

        const response = await setHabits(data);

        if (response === 0) {
            setLoading(false);
            setModalOpen(true);
            setResultType('success');
        } else {
            setLoading(false);
            setModalOpen(true);
            setResultType('error');
        }

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
                <AlertMessage loading={loading} messageType={resultType} modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </Suspense>
        </MainLayout>
    )
}
