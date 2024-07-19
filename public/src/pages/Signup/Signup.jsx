import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function Signup() {
    return (
      <div className="signup-container">
      <div className="head">
        <h1>Signup ChatApp</h1>
      </div>
      <div className="user-form">
      <form action="">
          <label htmlFor="FullName">FullName:</label>
          <input type="text" id='FullName' name='FullName' placeholder='Enter Your FullName'/>
        </form>
        <form action="">
          <label htmlFor="username">Username:</label>
          <input type="text" id='username' name='username' placeholder='Enter Your Username'/>
        </form>
        <form action="">
          <label htmlFor="passowrd">Password:</label>
          <input type="text" id='passowrd' name='passowrd' placeholder='Enter Your passowrd'/>
        </form>
        <form action="">
          <label htmlFor="confirmpassword">Confirm <br/>Password:</label>
          <input type="text" id='confirmpassowrd' name='confirmpassword' placeholder='Re-enter Your passowrd'/>
        </form>
       <GenderCheckbox />
      </div>
      <div className="btn">
        <button type='Submit'>Signup</button>
      </div>
      <div className="link">
      <a href="/login">Already have an Account?</a>
      </div>
    </div>
    )
  }

export default Signup