import React, { useEffect } from 'react'
import { useState } from 'react';
import Exercise from './Exercise';
import {exercises} from './data';
import HomeLink from './HomeLink';
import { filterArray } from './filterArray';
import FilterAside from './FilterAside';

const Exercises = () => {
  const [exercisesArr, setExercisesArr] = useState(exercises);

  const filterEx = (category) => {
    setExercisesArr(filterArray(category, exercises));
  }

  return (
    <>
      <HomeLink/>
    <section className='exercises-section'>
            <FilterAside filterEx={filterEx}/>
            <main className='exercises-container'>
                {exercisesArr.map((exercise) => {
                  let loggedInAccount = localStorage.getItem('loggedInAccount');
                  let isAdded = false;
                  if(loggedInAccount){
                    loggedInAccount = JSON.parse(loggedInAccount);
                    const accountExercises = loggedInAccount.exercises
                    accountExercises.map(({id}) => {
                      if(exercise.id === id){
                        isAdded = true;
                      }
                    })
                  }
                        return <Exercise isAdded={isAdded} key={exercise.id} {...exercise}/>
                })}
            </main>
    </section>
    </>
  );

  
}

export default Exercises