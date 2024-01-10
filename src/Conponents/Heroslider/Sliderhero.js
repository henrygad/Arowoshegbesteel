import {Navigation }from '../../slider/slider'
import { useRef } from 'react'

import Heroslide1 from './Heroslide1/Heroslide1'
import Heroslide2 from './Heroslide2/Heroslide2'
import Heroslide3 from './Heroslide3/Heroslide3'
import './Sliderhero.css'


import heroicon1 from '../../Asset/hero/heroicon1.svg'
import heroicon2 from '../../Asset/hero/heroicon2.svg'
import heroicon3 from '../../Asset/hero/heroicon3.svg'


const Sliderheader = () => {
   const useSlides = useRef(null)



  return (
    <div className='hero_slider' >
      <div className='hero_slides' ref={useSlides}>
        <Heroslide1  heroicon1={heroicon1} heroicon2={heroicon2} heroicon3={heroicon3} />
        <Heroslide2  />
        <Heroslide3   />
        <Heroslide1   heroicon1={heroicon1} heroicon2={heroicon2} heroicon3={heroicon3} />
      </div>  
      <div className='dots_nav'>
        <div className='dot js-gray' ></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
    </div>
  )
}



export default Sliderheader
