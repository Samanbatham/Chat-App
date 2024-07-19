import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container">
      <div className="head">
        <h1>Login ChatApp</h1>
      </div>
      <div className="user-form">
        <form action="">
          <label htmlFor="username">Username:</label>
          <input type="text" id='username' name='username' placeholder='Enter Ur Username'/>
        </form>
        <form action="">
          <label htmlFor="passowrd">Password:</label>
          <input type="text" id='passowrd' name='passowrd' placeholder='Enter Ur passowrd'/>
        </form>
      </div>
      <div className="btn">
        <button type='Submit'>Login</button>
      </div>
      <div className="link">
      <a href="/signup">Dont have an Account?</a>
      </div>
    </div>
  )
}

export default Login;