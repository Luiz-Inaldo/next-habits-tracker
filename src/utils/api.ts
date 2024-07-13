"use server";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getHabits() {

    try {
        const habits: any = await kv.hgetall("habits");

        if (habits) {
            return habits;
        } else {
            return null;
        }
    } catch (error) {
        console.log("Houve um erro ao buscar os hábitos" + error)
    }

}

async function setHabits(data: any) {

    try {
        const registerHabit = await kv.hset("habits", {
            [data.name]: {
                priority: data.priority,
                days: {
                    monday: false,
                    tuesday: false,
                    wednesday: false,
                    thursday: false,
                    friday: false,
                    saturday: false,
                    sunday: false
                }
            }
        });
        return registerHabit;
    } catch (error) {
        console.log("Houve um erro ao cadastrar o hábito" + error)
    }

}

export { getHabits, setHabits };
