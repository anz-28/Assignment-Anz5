import React from 'react'
import Header from '../../Components/Header'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <Header></Header>
    <div id='maindiv'>
      <h1>A CINEMA</h1><h1>YOU ARE A PART OF</h1>
      <h3>~Anz</h3>
      <p>login to access other info.</p>
     <button onClick={() => navigate("/About")}  id='nextp1' ><ion-icon name="arrow-forward-outline" id="arrow"></ion-icon></button>
    </div>

    </>
  )
}

export default Home