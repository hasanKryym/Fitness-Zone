import React, { useEffect, useState } from 'react';
import Login from './Login';

const Home = () => {
  
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAccount, setUserAccount] = useState(localStorage.getItem('loggedInAccount'));
  
  const closeLogin = () => {
    setShowLogin(false);
  };
  const openLogin = () => {
    setShowLogin(true);
  };
  const loggedIn = () => {
    setIsLoggedIn(true);
    checkAccount();
  };
  const logout = () => {
    localStorage.removeItem('loggedInAccount');
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if(localStorage.getItem('loggedInAccount') !== null){
      setIsLoggedIn(true);
      checkAccount();
    };
    closeLogin();
  },[]);

  
    const checkAccount = () => {
      if(localStorage.getItem('loggedInAccount') !== null){
        const loggedIn = JSON.parse(localStorage.getItem('loggedInAccount'));
        setUserAccount(loggedIn);
        setIsLoggedIn(true);
      }
    }


  return (
    <main className='home'>
        <section className='home-section'>
            <div className="home-content">
              <img src={require('./images/home2.jpg')} alt="fitness" />
              <div className="home-info">
                <h2>{isLoggedIn && 'Welcome ' + userAccount.name +" !" }</h2>
                 {isLoggedIn ?<button className='login-btn' onClick={() => logout()}>logout</button>  : <button onClick={openLogin} className='login-btn'>join now</button>}
              </div>
            </div>
        </section>

        {showLogin && <Login loggedIn={loggedIn} closeLogin={closeLogin} />}
    </main>
  )
}

export default Home