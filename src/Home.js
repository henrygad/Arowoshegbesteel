import './Home.css'
import {products_list} from './productslist'
import Nav from './Conponents/Nav/Nav'
import Sliderhero from './Conponents/Heroslider/Sliderhero'
import Productsslider from './Conponents/Productsslider/Productsslider'
import Projectsslider from './Conponents/Projectsslider/Projectsslider'
import Testimonieslider from './Conponents/Testimonieslider/Testimonieslider'


import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'
import { MdWorkHistory } from 'react-icons/md'
import { GiTeamIdea } from 'react-icons/gi'
import  {FaHandshake} from 'react-icons/fa'
import  {FcIdea} from 'react-icons/fc'
import  {MdDesignServices} from 'react-icons/md'
import  {IoMdBuild} from 'react-icons/io'

import logo from "./Asset/header/logo.svg"
import Titlestroke from './Conponents/Titlestroke/Titlestroke'
import aboutimage from './Asset/about/aboutusimg.jpg'
import phoneicon from './Asset/about/phoneicon.svg'
import arrowbtn from './Asset/buttonarrow.svg'


/* services and project images */
import industrialextractor1 from './Asset/servicesimages/industrialexractor1.jpg'
import industrialextractor2 from './Asset/servicesimages/industrialexractor2.jpg'
import industrialextractor3 from './Asset/servicesimages/industrialexractor3.jpg'
import industrialinstallation1 from './Asset/servicesimages/IndustrialInstallation1.jpg'
import industrialinstallation2 from './Asset/servicesimages/IndustrialInstallation2.jpg'
import industrialinstallation3 from './Asset/servicesimages/IndustrialInstallation3.jpg'
import kitchentractor1 from './Asset/servicesimages/kitchentractor1.jpg'
import kitchentractor2 from './Asset/servicesimages/kitchentractor2.jpg'
import kitchentractor3 from './Asset/servicesimages/kitchentractor3.jpg'
import kitchentractor4 from './Asset/servicesimages/kitchentractor5.jpg'
import metalfracbication1 from './Asset/servicesimages/metalfracbication1.jpg'
import metalfracbication2 from './Asset/servicesimages/metalfracbication2.jpg'
import metalfracbication3 from './Asset/servicesimages/metalfracbication3.jpg'
import roofrafter1 from './Asset/servicesimages/roofrafter1.jpg'
import roofrafter2 from './Asset/servicesimages/roofrafter2.jpg'
import roofrafter3 from './Asset/servicesimages/roofrafter3.jpg'
import steelfracbication1 from './Asset/servicesimages/steelfracbication1.jpg'
import steelfracbication2 from './Asset/servicesimages/steelfracbication2.jpg'
import steelfracbication3 from './Asset/servicesimages/steelfracbication3.jpg'
import Trusses1 from './Asset/servicesimages/Trussses1.jpg'
import Trusses2 from './Asset/servicesimages/Trussses2.jpg'
import Trusses3 from './Asset/servicesimages/Trussses3.jpg'


/* client  reviews images */
import reviewImage1 from './Asset/testimonies/testimonialslogo1.jpg'
import reviewImage2 from './Asset/testimonies/testimonialslogo2.jpg'
import reviewImage3 from './Asset/testimonies/testimonialslogo3.jpg'
import reviewImage4 from './Asset/testimonies/testimonialslogo4.jpg'
import reviewStar from './Asset/testimonies/reviewstars.png'





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
          <div className='products_title'><Titlestroke text={'Our Services'} color={'#fff'} /></div>
          <div className='product_content'>
            <div className='grid_box_4clm products_grid'>
              {
                products_list.map( (ele, index) => (
                  <div  key={index} className='product_content'>
                    <div className='product_slider'>
                      < Productsslider img1={ele.img1} img2={ele.img2} img3={ele.img3} index={index} transAnimation={ele.transAnimation}/>
                    </div>
                    <div className='product_title'><h3>{ele.producttitle}</h3></div>
                    <div className='product_btn'><a href='#link' className='button'>Make appiontment  <img src={arrowbtn}  alt=''/> </a></div>
                   </div>
                ))
              }
            </div>
          </div>
        </section>
        <section className=' container_2clm whychooseus_container'>
          <div className='title'><Titlestroke text={'Why Choose Us'} color={'var(--primary-color)'} /></div>
          <div className='flex_box_3d whychooseus_flexbox'>
            <div className='one'>
              <div className='img'><FaAward color='var( --primary-color)' size={'50px'} /></div>
              <div className='title'><h3>Experience</h3></div>
              <div className='text'><p> We've been active since 1993.  
                We have over the years provided services for both commercial and industrial 
                establishments within and outside Nigeria. with over 200 done projects, we guarantee 
                that will give you the best.</p></div>
            </div>
            <div className='two'>
              <div className='img'><MdWorkHistory color='var( --primary-color)' size={'50px'} /></div>
              <div className='title'><h3>Expertise</h3></div>
              <div className='text'><p>Our top priority at Arowoshegbe Steel Construction is expertise. 
               For this reason, we have professionals on our staff.  
               We assign the best workers to each project, from design and manufacturing through installation, 
               plant modification, maintenance, down to service and consultancy.</p></div>
            </div>
            <div className='three'>
              <div className='img'><GiTeamIdea color='var( --primary-color)' size={'50px'} /></div>
              <div className='title'><h3>Quality</h3></div>
              <div className='text'><p> Quality is our goal at Arowoshegbe Steel Construction. 
               For that reason, we deploy and supply heigh quality 
               materials within and outside the country for fabrication manufacturing</p></div>
            </div>
          </div>
        </section>
        <section className='container_2clm featureprojects_container'>
          <div className='title'><Titlestroke text={'Feature Projects'} color={'var(--primary-color)'}/></div>
          <div className='container_2clm projects_sliders'>
            <div className='slider one'>
              <Projectsslider 
                        img1={industrialextractor1} img2={industrialinstallation2} img3={kitchentractor1} img4={ metalfracbication2}
                        img5={roofrafter1} img6={steelfracbication2} img7={Trusses1}
                        img8={Trusses3} img9={roofrafter3} img10={kitchentractor3} img11={industrialextractor3} index={0} style={{left: '0'}}/>
            </div>
            <div className='slider two'>
              <Projectsslider 
                        img1={industrialextractor2} img2={industrialinstallation1} img3={kitchentractor2} img4={ metalfracbication1}
                        img5={roofrafter2} img6={steelfracbication1} img7={Trusses2}
                        img8={steelfracbication3} img9={ metalfracbication3} img10={kitchentractor4} img11={industrialinstallation3} index={1} style={{left: '-330%'}}/>
            </div>
          </div>
        </section>
        <section className='container_2clm clientreviews_container'>
          <div className='title'><Titlestroke text={'What Clients Say'} color={'var(--primary-color)'} /></div>
          <div className='clientreviews_slider'>
            <Testimonieslider img1={reviewImage1} img2={reviewImage2} img3={reviewImage3} img4={reviewImage4} reviewStar={reviewStar} />
          </div>
        </section>
        <section className='container_2clm contactus_container'>
          <div className='title'><Titlestroke text={'Reach Us'} color={'var(--primary-color)'} /></div>
          <div className='container_2clm contactus_content'>
            <div className='container_2clm ideaprocess-container'>
              <div className='flex_box_4d flex_boxs'>
                <div className='flex_box one'>
                  <div className='img_div'>< FaHandshake color='var(--secondary-color)' size='40px' /></div>
                  <div><h3>we meet</h3></div>
                  <div><p>Our team of experts is prepared to learn about your requirements and present you with our finest offerings.</p></div>
                </div>
                <div className='flex_box two'>
                  <div className='img_div'>< FcIdea color='var(--secondary-color)' size='40px' /></div>
                  <h3>we brainstorm</h3>
                  <div><p>Our professionals then map out the best course of action for your engineering needs.</p></div>
                </div>
                <div className='flex_box three'>
                  <div className='img_div'>< MdDesignServices color='var(--secondary-color)' size='40px' /></div>
                  <div><h3>we design</h3></div>
                  <div><p>After that, we show you a variety of designs that are customized to meet your requirements..</p></div>
                </div>
                <div className='flex_box four'>
                  <div className='img_div'><IoMdBuild color='var(--secondary-color)' size='40px'/></div>
                  <div><h3>we install</h3></div>
                  <div><p>Following our assessment of the project and creation of a design system that meets your needs, we construct and install.</p></div>
                </div>
              </div>
              <div className='ctanavigation'>
                <div><h3>Make an appiontment today!</h3></div>
                <div><a href='#contact-me'>get free consultation <img src={arrowbtn} alt='' /></a></div>
              </div>
            </div>
            <div className='contactusform_container'></div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home


