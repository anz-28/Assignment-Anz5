import React from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  return (
    <>
    <div id='logindiv'>
                <h3>Login</h3>
        <form id='loginform'>
        <label for = 'emailin'><h2>Email</h2></label>
        <input type='email' placeholder='xyz@mail.com' id='emailin' required></input>
        <label for= 'passin'><h2>Password</h2></label>
        <input type='password' placeholder='password' id='passin' required></input>
        <button type='submit'>Login</button>
        </form>
    </div>
    <button id='prev3'onClick={() => navigate(-1)}><ion-icon name="arrow-back-outline"></ion-icon></button>
    <button id='tosignup'onClick={() => navigate("/Signup")}><h2>Sign up</h2></button>
    </>
  )
}

export default Login