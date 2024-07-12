'use client'
import React from 'react'
import NewHabitButton from '../Buttons/NewHabit';
import Container from '../Container';
import HabitsList from '../List';

const Habits = () => {

  return (
    <React.Fragment>
      <NewHabitButton />
      <Container>
        <HabitsList />
      </Container>
    </React.Fragment>
  )
}

export default Habits