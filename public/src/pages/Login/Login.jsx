import React from 'react'
import { useState } from 'react';
import useLogin from '../../hooks/useLogin.js';

const Login = () => {
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");

  const{loading , login} = useLogin();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className="container">
      <div className="head">
        <h1>Login ChatApp</h1>
      </div>
      <div className="user-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id='username' name='username' placeholder='Enter Your Username'
          value={username} onChange={(e)=> setUsername(e.target.value)}
          />
        
          <label htmlFor="password">Password:</label>
          <input type="password" id='password' name='password' placeholder='Enter Your password'
          value={password} onChange={(e)=> setPassword(e.target.value)}
          />
          <div className="btn">
        <button type='submit'
        disabled={loading}>Login</button>
      </div>
        </form>
      </div>
      
      <div className="link">
      <a href="/signup">Dont have an Account?</a>
      </div>
    </div>
  )
}

export default Login;