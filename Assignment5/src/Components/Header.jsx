import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

function Header() {
  const navigate = useNavigate();
  return (
    <>
    <div id='headdiv'>
        <div className='hd' id='litem'><h2>Today : {day}/{month}/{year}</h2></div>
        <div className='hd'><h2>Absolute Cinema</h2> </div>
        <div className='hd'id='ritem'><h2  onClick={() => navigate("/Login")}>Login</h2></div>
    </div>
    </>
  )
}

export default Header