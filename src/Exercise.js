import React from 'react'
import { useState } from 'react';

const Exercise = ({name, img, detailedImage, focusArea, id, equipment, preperation, keyTips, fromMyPlan, isAdded}) => {
  const [showDetails, setShowDetail] = useState(false);
  const [added, setAdded] = useState(isAdded);


  const handleAddExercise = (id) => {
    let loggedInAcc = localStorage.getItem('loggedInAccount');
    if(loggedInAcc === null){
      alert('please login');
    }
    else {
      loggedInAcc = JSON.parse(loggedInAcc);
      let oldExercises = loggedInAcc.exercises;
        let newExercise = {id};
        const exercises = [...oldExercises, newExercise];
        loggedInAcc = {...loggedInAcc, exercises}
        localStorage.setItem('loggedInAccount', JSON.stringify(loggedInAcc));
        updateAccounts();
        setAdded(true);
    }
  };

  const updateAccounts = () => {
      let loggedInAcc = localStorage.getItem('loggedInAccount');
      loggedInAcc = JSON.parse(loggedInAcc);
  
       const accounts = JSON.parse(localStorage.getItem('accounts'));
      let userAccounts = accounts.filter((account) => {
        return account.name !== loggedInAcc.name;
      });
      userAccounts = [...userAccounts, loggedInAcc];
      localStorage.setItem('accounts', JSON.stringify(userAccounts));
  }
  
  const handleRemoveExercise = (id) => {
    let loggedInAcc = JSON.parse(localStorage.getItem('loggedInAccount'));
    let oldExercises = loggedInAcc.exercises;
    // console.log(oldExercises);
    const exercises = oldExercises.filter((exercise) => {
      return exercise.id !== id;
    });
    loggedInAcc = {...loggedInAcc, exercises};
    localStorage.setItem('loggedInAccount', JSON.stringify(loggedInAcc));
    updateAccounts();
    window.location.reload();
  }
  
  return (
    <article className='exercise' onClick={() => setShowDetail(!showDetails)}>
      <main className='main-info'>
        <div className="exercise-info">
        <img src={require(`${img}`)} alt={name} />
          <div className="text">
        <h3>{name}</h3>
        <p>{focusArea}</p>
          </div>
        </div>
        <button className='arrow-btn' onClick={() => setShowDetail(!showDetails)}>{showDetails ? <i className="fa-sharp fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}</button>
      </main>
        {showDetails && <section className='details-section'>
          <button className='details-btns'>INSTRUCTIONS</button>
          <div className="detail-img">
            <img src={require(`${detailedImage}`)} alt="" />
          </div>
          <div className="more-info">
            {/* <h3 className='title'>{name}</h3>
            <h3 className='title'>FOCUS AREA <span>{focusArea}</span></h3> */}
            <h3 className='title'>Equipment <span>{equipment.map((e) => e.name + ', ')}</span></h3>
            <hr />
            <h3 className='title'>preperation</h3>
            <p>{preperation}</p>
            <h3 className='title'>Key Tips</h3>
            <div>{keyTips.map((e,index) => <p key={index}>{index+1} {e.details}</p>)}</div>
          </div>
          
          <div className='add-btn_container'>

          {/* { fromMyPlan ? <button onClick={() => handleRemoveExercise(id)} className='add-btn'>Remove</button> : <button onClick={() => handleAddExercise(id)} className='add-btn'>Add</button>}  */}

          {fromMyPlan && <button onClick={() => handleRemoveExercise(id)} className='add-btn'>Remove</button>}
          {(!fromMyPlan && added) && <p className='add-btn'>Added</p>}
          {(!fromMyPlan && !added) && <button onClick={() => handleAddExercise(id)} className='add-btn'>Add</button>}
          </div>
        </section>}
    </article>
  )
}



export default Exercise