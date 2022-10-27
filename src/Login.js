import React from 'react'
import { useState } from 'react'
import CreateAcc from './CreateAcc'

const Login = ({closeLogin, loggedIn}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
    const [showCreateAcc, setShowCreateAcc] = useState(false);
    const openCreateAcc = () => {
        setShowCreateAcc(true);        
    };
    const closeCreateAcc = () => {
        setShowCreateAcc(false);
    };

    const login = () => {
        if(!name || !password){
          alert('fill all the inputs');
        }
        else {
          if(localStorage.getItem('accounts') !== null){
            const accounts = JSON.parse(localStorage.getItem('accounts'));
            let validation = false;
            accounts.map((account) => {
              if(name === account.name && password === account.password){
                validation = true;
                localStorage.setItem('loggedInAccount', JSON.stringify(account));
              }
            });

            if(validation){
                  setName('');
                  setPassword('');
                  loggedIn();
                  closeLogin();
              }
              else {
                alert('Invalid username/password combination');
              }
          }
          else {
            alert('Invalid username/password combination');
          }
        }
    }
  return (
    <>
    {!showCreateAcc && <article className='login-article'>
        <button onClick={closeLogin} className='close-btn'><i className="fa-solid fa-xmark"></i></button>
        <h2>Login</h2>
        <div className="login-info">
        <input 
        placeholder='name'
        value={name}
        onChange={(e) => setName(e.currentTarget.value)} 
        type="text" 
        />
        <br />
        <input 
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        type="password" />
        <button onClick={() => login()} className='login-btn'>login</button>
        </div>
        <button onClick={() => openCreateAcc()} className='create_acc-btn'>create account</button>
    </article>
    }
    
    { showCreateAcc && <CreateAcc closeCreateAcc={closeCreateAcc} closeLogin={closeLogin}/>    }
    </>

  )
}

export default Login