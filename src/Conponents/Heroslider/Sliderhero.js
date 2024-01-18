import './Sliderhero.css'
import { Autoplayslider, Dotnavavigation} from '../../slider/slider'
import { useRef } from 'react'

import Heroslide1 from './Heroslide1/Heroslide1'
import Heroslide2 from './Heroslide2/Heroslide2'
import Heroslide3 from './Heroslide3/Heroslide3'


import heroicon1 from '../../Asset/hero/heroicon1.svg'
import heroicon2 from '../../Asset/hero/heroicon2.svg'
import heroicon3 from '../../Asset/hero/heroicon3.svg'


const Sliderheader = () => {
  const useSlides = useRef(null)
  const useDotOne = useRef(null)
  const useDotTwo = useRef(null)
  const useDotThree = useRef(null)
  

  function Dotnavs(value) {
    const dotNavsArray = [useDotOne.current, useDotTwo.current, useDotThree.current]
    const numberOfSlides = 3
    const moves = 100
    const transAnimation = 'none'

    Dotnavavigation( useSlides.current, value, moves, transAnimation, dotNavsArray, numberOfSlides)
  }


  return (
    <div className='hero_slider' onMouseOver={e=> Clear()} onMouseOut={e=> Autoplay()}>
      <div className='hero_slides js-hero-slides' ref={useSlides} style={{left: 0}}>
        <Heroslide1  heroicon1={heroicon1} heroicon2={heroicon2} heroicon3={heroicon3} />
        <Heroslide2  />
        <Heroslide3   />
        <Heroslide1   heroicon1={heroicon1} heroicon2={heroicon2} heroicon3={heroicon3} />
      </div>  
      <div className='dots_nav'>
        <div className='dot js-dots' style={{backgroundColor: 'gray'}} ref={useDotOne} onClick={ e=> Dotnavs('first')}></div>
        <div className='dot js-dots' ref={useDotTwo} onClick={ e=> Dotnavs('second')}></div>
        <div className='dot js-dots' ref={useDotThree} onClick={e=> Dotnavs('third')}></div>
      </div>
    </div>
  )
}


let clearId;
function Autoplay(){
   clearId = setInterval(() => {
    const slidesEl = document.querySelector('.js-hero-slides')
    const jotNavElArr = document.querySelectorAll('.js-dots')
    const numberOfSlides = 3
    const moves = 100
    const transAnimation = 'all 2s ease-in-out'
    const sliderLeft = 'left'

    Autoplayslider(slidesEl, numberOfSlides, moves,  transAnimation, sliderLeft, undefined, undefined, jotNavElArr)
  }, 5000);
}

function Clear(){
  clearInterval(clearId)
}


Autoplay()







export default Sliderheader;