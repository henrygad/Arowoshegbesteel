import Nav from './Conponents/Nav/Nav'
import Sliderhero from './Conponents/Heroslider/Sliderhero'
import './Home.css'
import logo from "./Asset/header/logo.svg"
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

import React from 'react'
import Titlestroke from './Conponents/Titlestroke/Titlestroke'
import aboutimage from './Asset/about/aboutusimg.jpg'
import phoneicon from './Asset/about/phoneicon.svg'
import {products_list} from './productslist'
import arrowbtn from './Asset/buttonarrow.svg'
import Productsslider from './Conponents/Productsslider/Productsslider'



const Home = () => {
  return (
    <div className='body_wraper'>
      <header className='header'>
        <div className='header_container_10vh'>
          <div className='grid_box_3areas grid_wrap'>
            <div className='header_social_icon'>
              <a href='https://facebook.com'><AiFillFacebook color='var( --primary-color)' size="20px" /></a>
              <a href='https://facebook.com'><AiFillTwitterSquare color='var( --primary-color)' size="20px" /></a>
              <a href='https://facebook.com'><AiFillInstagram color='var( --primary-color)' size="20px" /></a>
              <a href='https://facebook.com'><AiFillLinkedin color='var( --primary-color)' size="20px" /></a>
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
        <section className='container_2clm about_section'>
          <div className='about_title'><Titlestroke text={"About Us"} color={"var(--primary-color)"}/></div>
          <div className='flex_box_2d  about_content'>
            <div className='text'>
              <div className='text_wrap'>
                <p>
                  Arowoshegbesteel is a leading expert in industry installations, steel fabrication, 
                  and ventilation system design and installations. Our team of experienced professionals has 
                  been providing top-notch services to industries for decade. We understand the importance of
                    reliable and efficient equipment in industrial operations, which is why we are dedicated 
                    to providing the highest quality solutions for our clients. From custom steel fabrication
                    to advanced ventilation systems, we have the expertise to meet all your industrial needs.
                  <span>
                  Founded by Mr. Arowoshegbe in 1993, we believe that quality is non-negotiable. 
                  That's why all our products undergo rigorous testing and adhere to international safety standards. 
                  We take pride in our work and strive to exceed our clients' expectations every time.
                  </span>     
                </p>
                <div className='phone_no'> <img src={phoneicon} alt=''/> <p>+2348135805321</p></div>
              </div>
            </div>
            <div className='image'><img src={aboutimage} alt=''/></div>
          </div>
        </section>
        <section className='container_2clm products_section'>
          <div className='products_title'><Titlestroke text={'feature project'} color={'#fff'} /></div>
          <div className='product_content'>
            <div className='grid_box_4clm products_grid'>
              {
                products_list.map( (ele, index) => (
                  <div  key={index} className='product_content'>
                    <div className='product_slider'>
                      < Productsslider img1={ele.img1} img2={ele.img2} img3={ele.img3}/>
                    </div>
                    <div className='product_title'><h3>{ele.producttitle}</h3></div>
                    <div className='product_btn'><a href='#link' className='button'>Make appiontment  <img src={arrowbtn}  alt=''/> </a></div>
                   </div>
                ))
              }
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home
