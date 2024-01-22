import './Testimonieslider.css'
import { useRef } from 'react'
import {Arrownavigation} from '../../slider/navigation'

import navPrevious from '../../Asset/slidernavleft.svg'
import navNext from "../../Asset/slidernavright.svg"

const Testimonieslider = ( {img1, img2, img3, img4, reviewStar}) => {
  
  const useSlide = useRef(null)
  //const useArrowNavNext = useRef(null)
  //const useArrowNavPrevious = useRef(null)

  const Arrownavs = value =>{
    const slidesEl = useSlide.current
    const numberOfSlides = 4
    const moves = 100
    const transAnimation ='all 2s ease-in-out'

    Arrownavigation(slidesEl, numberOfSlides, moves, transAnimation, value, false, false)
  }
 


  return (
    <div className='review_slider'>
      <div className='navigation previous' onClick={e=> Arrownavs('previous')} ><img src={navPrevious} alt='arrow icon'/></div>
      <div className='slides' ref={useSlide} style={{left:'0',}}>
        <div className='slide one'>  
          <div className='slide_wrap'>
              <img src={reviewStar}  alt='review star'/>     
              <img  src={img1} alt=''/>
              <h3>Nurex Aluminum</h3>
              <p>
                "Thanks for the good job Arowoshegbe construction 🦺 I really appreciate how you do your job is very, very neat and definite, you have a good finish up….keep it up…I still need you to come for more job for us." 
              </p>
          </div>
        </div>
        <div className='slide two'>    
          <div className='slide_wrap'>
                <img src={reviewStar}  alt='review star'/>      
                <img  src={img2} alt=''/>
                <h3>5 Stor Technical Services</h3>
                <p>
                  "I would like to formally and sincerely express my gratitude for the amazing work you accomplished for us @Arowoshegbesteelconstruction   You are highly worthy and trusted."
                </p>
          </div>
        </div>
        <div className='slide three'>  
          <div className='slide_wrap'>
                <img src={reviewStar}  alt='review star'/>         
                <img  src={img3} alt=''/>
                <h3>For Technical Services</h3>
                <p>
                  "Fantastic work, there delivered the best quality, partner with them on a project, they did not disappoint Us 👍." 
                </p>
          </div>
        </div>
        <div className='slide four'>   
          <div className='slide_wrap'>
                <img src={reviewStar}  alt='review star'/>         
                <img  src={img4} alt=''/>
                <h3>Adetech Aluminum</h3>
                  <p>
                "Working with experts always make a difference in our industry and @aworosegbe steel construction are definitely one of the best."
                </p>
          </div>
        </div>
        <div className='slide one'>  
          <div className='slide_wrap'>
              <img src={reviewStar}  alt='review star'/>     
              <img  src={img1} alt=''/>
              <h3>Nurex Aluminum</h3>
              <p>
                "Thanks for the good job Arowoshegbe construction 🦺 I really appreciate how you do your job is very, very neat and definite, you have a good finish up….keep it up…I still need you to come for more job for us." 
              </p>
          </div>
        </div>
      </div>
      <div className='navigation next' onClick={e=> Arrownavs('next')}><img src={navNext} alt='arrow icon'/></div>
    </div>
  )
}

export default Testimonieslider
