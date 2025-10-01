import React from 'react'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Goodbad from './Pages/GoodBad/Goodbad'
import { Routes,Route } from 'react-router-dom'
import Cinema from './Pages/Cinema/Cinema'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<Profile/>}/>
      <Route path="/GB" element={<Goodbad/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Cinema" element={<Cinema/>}/>
    </Routes>
    </>
  )
}

export default App