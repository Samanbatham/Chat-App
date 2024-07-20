import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup.js'

function Signup() {

  const [input , setInputs] = useState({
    fullName: '',
    username: '',
    password:'',
    confirmpassword:'',
    gender:''
  })

  const{loading,signup} = useSignup();

  const handleCheckBoxChange = (gender) =>{
    setInputs({...input , gender})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(input);

  }

    return (
      <div className="signup-container">
      <div className="head">
        <h1>Signup ChatApp</h1>
      </div>
      <div className="user-form">
      <form onSubmit={handleSubmit}>
          <label htmlFor="FullName">FullName:</label>
          <input type="text" id='FullName' name='FullName' placeholder='Enter Your FullName'
          value={input.fullName}
          onChange={(e) => setInputs({...input , fullName: e.target.value})}
          />
          <label htmlFor="username">Username:</label>
          <input type="text" id='username' name='username' placeholder='Enter Your Username'
          value={input.username}
          onChange={(e) => setInputs({...input , username: e.target.value})}
          />
          <label htmlFor="passowrd">Password:</label>
          <input type="password" id='passowrd' name='passowrd' placeholder='Enter Your password'
          value={input.password}
          onChange={(e) => setInputs({...input , password: e.target.value})}
          />
          <label htmlFor="confirmpassword">Confirm <br/>Password:</label>
          <input type="password" id='confirmpassowrd' name='confirmpassword' placeholder='Re-enter Your password'
          value={input.confirmpassword}
          onChange={(e) => setInputs({...input , confirmpassword: e.target.value})}
          />
          
        
       < GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={input.gender} />
       <div className="btn">
        <button type='submit'
        disabled={loading}
        >Signup</button>
      </div>
      </form>
      </div>
      
      <div className="link">
      <a href="/login">Already have an Account?</a>
      </div>
    </div>
    )
  }

export default Signup