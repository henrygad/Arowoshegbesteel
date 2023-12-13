import Nav from './Conponents/Nav/Nav'
import Sliderhero from './Conponents/Heroslider/Sliderhero'
import './Home.css'
import logo from "./Asset/header/logo.svg"
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

import React from 'react'

const Home = () => {
  return (
    <div className='body_wraper'>
      <header>
        <div className='header_container_10vh header'>
          <div className='grid_box_3areas grid_wrap'>
            <div className='header_social_icon'>
              <AiFillFacebook className='img' />
              <AiFillTwitterSquare className='img' />
              <AiFillInstagram className='img' />
              <AiFillLinkedin className='img' />
            </div>
            <div className='header_logo'>
              <img src={logo} alt="Arowoshegbe logo" onClick={ e => window.location.href = 'https://arowoshegbesteel.com/'} />
            </div>
            <div className='header_nav'>
              <Nav />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className='hero_container_90vh hero'>
          <Sliderhero />
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home
