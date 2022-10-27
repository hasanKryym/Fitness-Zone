import React, { useState } from 'react'
import { useEffect } from 'react'

const CreateAcc = ({closeLogin, closeCreateAcc}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (name, password) => {
    if(!name || !password){
      alert('fill all the inputs');
    }
    else {
      if(localStorage.getItem('accounts') == null){
        localStorage.setItem('accounts', '[]');
      }
        const oldAccounts = JSON.parse(localStorage.getItem('accounts'));
        let flag = true;
        oldAccounts.map((account) => {
          if(name === account.name){
            alert('name already excists');
            flag = false;
          }
        });
        if(flag){
          const newAccount = {
                name,
                password,
                exercises: []
              }
          const newAccounts = [...oldAccounts, newAccount];
          localStorage.setItem('accounts', JSON.stringify(newAccounts));
          setName('');
          setPassword('');
          closeCreateAcc();
          closeLogin();
        }
    }
  }
  return (
    <article className='login-article'>
        <button onClick={closeLogin} className='close-btn'>X</button>
        <h2>Create account</h2>
        <div className="login-info">
        <input 
        placeholder='name'
        value={name} 
        type="text" 
        onChange={(e) => setName(e.currentTarget.value)}
        />
        <br />
        <input
        placeholder='password'
         value={password}
         type="password" 
         onChange={(e) => setPassword(e.currentTarget.value)}
         />
        <button onClick={() => handleSubmit(name, password)} className='login-btn'>create account</button>
        </div>
        <button onClick={closeCreateAcc} className='create_acc-btn'>Login</button>
    </article>
  )
}

export default CreateAcc