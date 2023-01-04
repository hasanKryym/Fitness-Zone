import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { exercises } from './data';
import Exercise from './Exercise';
import HomeLink from './HomeLink';
import { filterArray } from './filterArray';
import FilterAside from './FilterAside';
const MyPlan = () => {
  
  const [myPlanExercises, setMyPlanExercises] = useState([]);
  const fromMyPlan = true;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  let addedExercises = [];

  useEffect(() => {
    if(localStorage.getItem('loggedInAccount') !== null){
      setIsLoggedIn(true);
      const loggedInAccount = JSON.parse(localStorage.getItem('loggedInAccount'));
      if(loggedInAccount.exercises.length === 0){
        setIsEmpty(true);
      }
        setMyPlanExercises(getExercises(loggedInAccount));
    }
  },[]);
  
  const getExercises = (loggedInAccount) => {
    addedExercises = [];
        const exercisesIdArray = loggedInAccount.exercises;
        exercisesIdArray.map(({id}) => {
          const singleExercise = exercises.filter((exercise) => exercise.id === id);
          addedExercises.push(singleExercise[0]);
        });
        return addedExercises;
  }

    const filterEx = (category) => {
      // console.log(myPlanExercises);
      const loggedInAccount = JSON.parse(localStorage.getItem('loggedInAccount'));
      setMyPlanExercises(filterArray(category, getExercises(loggedInAccount)));
}
  return (
    <>
      <HomeLink />
      <FilterAside filterEx={filterEx}/> 
    <section className='myplan-section'>
        <h2 className="title">My Plan</h2>
        <div className="line"></div>
        { isLoggedIn && <div className="exercises-container">
          {myPlanExercises.map((exercise) => {
            return <Exercise fromMyPlan={fromMyPlan} key={exercise.id} {...exercise}/>
          })}
        </div>}
        {!isLoggedIn && <aside>
            <h3>need a plan?</h3>
            <p>please login to create your own workout</p>
            <Link className='link' to='/'>login</Link>
          </aside>}

          { isEmpty && <div className='container'><Link className='link' to='/exercises'>Add Exercises</Link></div>}
    </section>

    </>
  )
}

export default MyPlan