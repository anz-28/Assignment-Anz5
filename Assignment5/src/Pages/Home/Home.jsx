import React from 'react'
import Header from '../../Components/header'
import './Home.css'

function Home() {
  return (
    <>
    <Header></Header>
    <div id='maindiv'>
      <h1>A CINEMA</h1><h1>YOU ARE A PART OF</h1>
      <h3>Anz</h3>
      <p>login to try the templet and other info.</p>
      <button id='nextp1'><ion-icon name="arrow-forward-outline" id="arrow"></ion-icon></button>
    </div>

    </>
  )
}

export default Home