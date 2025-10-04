import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Signup/Signup.css'


function Signup() {
  const navigate = useNavigate();
  return (
    <div id='Signupdiv'>
                <h3>Sign up</h3>
        <form id='Signupform'>
        <label for = 'uname'><h2>Username</h2></label>
        <input type='text' placeholder='abc' id='uname' required></input>
        <label for = 'emailin'><h2>Email</h2></label>
        <input type='email' placeholder='xyz@mail.com' id='emailin' required></input>
        <label for= 'passin'><h2>Password</h2></label>
        <input type='password' placeholder='password' name='passin' required></input>
        <label for= 'cpassin'><h2>Confirm Password</h2></label>
        <input type='password' placeholder='confirm password' name='cpassin'  required></input>
        <button type='submit'>Sign up</button>
        </form>
        <button id='prev4'onClick={() => navigate(-1)}><ion-icon name="arrow-back-outline"></ion-icon></button>
    </div>
  )
}

export default Signup
