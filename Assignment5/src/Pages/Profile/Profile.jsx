import React from 'react'
import './Profile.css'
import Header from '../../Components/Header'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate();
  return (
    <>
    <Header></Header>
    <div id='profilemaindiv'>
        <div id='profilebigtxt'>
            <h4>THE DIRECTOR,</h4><h4>THE WRITER,</h4><h4>THE STAR</h4>
            <h3 id='profileAnz'>Anz</h3>
            <p>‘Just start, even if you don’t know how to do it’</p>
            <button id='prev1' onClick={() => navigate("/")}><ion-icon name="arrow-back-outline"></ion-icon></button>
        </div>
        <div id='profileimgdiv'>
            <div id='reddiv'>
                <div id='info'>
                    <div id='pfp'></div>
                    <h3>ANZ</h3>
                    <div id='paradiv'>
                    <p>20 Yo</p>
                    <p>B.TECH in Computer Science Engg.</p>
                    <p>Web Developer, Designer, Photographer</p>
                    <p>Teamwork, SoloDev</p>
                    </div>
                </div>
                <div id='links'>
                   <a href='mailto:anshudharmashahary@gmail.com' target='_blank'> <button  className='lbtn' id='mail'><ion-icon name="mail-outline"></ion-icon></button></a>
                   <a href='https://github.com/Anz-28' target='_blank'> <button className='lbtn' id='github' ><ion-icon name="logo-github"></ion-icon></button></a>
                   <a href='https://discordapp.com/users/749895105791393844' target='_blank'><button  className='lbtn' id='discord' ><ion-icon name="logo-discord"></ion-icon></button></a>
                </div>
            </div>
            <button id='nextp2' onClick={() => navigate("/GB")}><ion-icon name="arrow-forward-outline" id="arrow"></ion-icon></button>
        </div>
    </div>
    </>
  )
}

export default Profile