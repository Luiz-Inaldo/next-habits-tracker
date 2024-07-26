'use client'
import Container from '@/components/Container';
import MainLayout from '@/components/Layout/MainLayout';
import useLocalStorage from '@/hooks/useLocalStorage';
import { HabitsProps } from '@/types/appTypes';
import React, { useEffect, useState } from 'react'

const path = window.location.pathname.split('/')[1]
const decodedString = decodeURI(path);

export default function HabitName() {

    const { habitsList, fetchLocalStorage } = useLocalStorage();
    const [filteredHabit, setFilteredHabit] = useState<HabitsProps | undefined>(undefined);

    useEffect(() => {
        if (habitsList.length > 0) {
            setFilteredHabit(habitsList.find(habit => habit.name.toLowerCase() === decodedString.toLowerCase()))
        }
    }, [habitsList]);

    useEffect(() => {
        const fetchHabits = async () => {
            await fetchLocalStorage();
        }
        fetchHabits();
    }, []);

    return (
        <MainLayout>
            <Container>
                <div>{filteredHabit?.name}</div>
            </Container>
        </MainLayout>
    )
}
