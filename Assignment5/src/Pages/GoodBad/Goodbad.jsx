import React from 'react'
import Header from '../../Components/header'
import './GoodBad.css'
import { useNavigate } from 'react-router-dom'

function Goodbad() {
    const navigate = useNavigate();
  return (
    <>
    <Header></Header>
    <div id='GBmain'>
        <div id='GBbigtext'>
            <div id='GBt'>
            <h4>YOUR LIFE IS</h4><h4>YOUR CINEMA</h4>
            </div>
            <button id='prev2' onClick={() => navigate("/About")}><ion-icon name="arrow-back-outline"></ion-icon></button>
        </div>
        <div id='GBimgdiv'>
            <div id='GBimgt'>
            <p>Your cinema goes how you want it to go</p>
            <p>Adventurous, Relentless, Lively or Boring, Tired, Sad</p>
            </div>
            <div id='GBred'>
                <div id='Hcat'></div>
                <div id='Scat'></div>
            </div>
            <button id='nextp3'><ion-icon name="arrow-forward-outline" id="arrow"></ion-icon></button>
        </div>
    </div>
    </>
  )
}

export default Goodbad