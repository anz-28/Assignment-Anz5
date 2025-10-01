import React from 'react'
import Cinemaimg from '../../assets/Cineimg.jpg'
import './Cinema.css'
import { useNavigate } from 'react-router-dom'

function Cinema() {
    const navigate = useNavigate();
  return (
    <div id='cinediv'>
        <button id='prev5' onClick={()=> navigate("/GB")}><ion-icon name="arrow-back-outline"></ion-icon></button>
    <img src= {Cinemaimg}></img>
    </div>
  )
}

export default Cinema