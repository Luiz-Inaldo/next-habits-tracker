/*
    hook that retrieve, save, remove and update habits
    data from localStorage.
*/

"use client"
import { HabitsProps } from "@/types/appTypes";
import { wait } from "@/functions/wait";
import React from "react";

const useLocalStorage = () => {

    const [habitsList, setHabitsList] = React.useState<HabitsProps[]>([]);

    const getHabits = async () => {
        await wait(1);
        const storedLocalValues = localStorage.getItem('habits');

        if (storedLocalValues) return JSON.parse(storedLocalValues);
    }

    const setHabits = async (data: HabitsProps) => {

        const newHabit = {
            ...data,
            days: {}
        }

        if (!localStorage.getItem('habits')) {
            await wait(2);
            localStorage.setItem('habits', JSON.stringify([newHabit]));
        } else {
            const habits: HabitsProps[] = JSON.parse(localStorage.getItem('habits') || '');
            let habitExists: boolean = false;

            habits?.map((habit) => {
                if (habit.name.toLowerCase() === data.name.toLowerCase()) {
                    habitExists = true;
                    return;
                }
            });

            if (habitExists) return 1;

            habits.push(newHabit);
            await wait(2);
            localStorage.setItem('habits', JSON.stringify(habits))

        }

        return 0;

    }

    const updateHabits = async (name: string, day: string, value: boolean | undefined) => {

        if (habitsList) {
            habitsList.forEach(habit => {
                if (habit.name.toLowerCase() === name.toLowerCase()) {
                    if (habit.days[day]) {
                        habit.days[day] = value;
                    } else {
                        habit.days = {
                            ...habit.days,
                            [day]: value
                        }
                    }
                }
            })
            localStorage.setItem('habits', JSON.stringify(habitsList));
            fetchLocalStorage();
        }


    }

    const fetchLocalStorage = async () => {
        const fetchHabits: any = await getHabits();
        if (fetchHabits) {
            setHabitsList(fetchHabits);
        }
    }

    return {
        getHabits,
        setHabits,
        updateHabits,
        habitsList,
        setHabitsList,
        fetchLocalStorage
    }

}

export default useLocalStorage;