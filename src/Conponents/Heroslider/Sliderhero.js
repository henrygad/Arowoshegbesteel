import {changeposition, currectposition, sliderdotsnav }from '../../slider/autoslider'

import Heroslide1 from './Heroslide1/Heroslide1'
import Heroslide2 from './Heroslide2/Heroslide2'
import Heroslide3 from './Heroslide3/Heroslide3'
import './Sliderhero.css'


import heroicon1 from '../../Asset/hero/heroicon1.svg'
import heroicon2 from '../../Asset/hero/heroicon2.svg'
import heroicon3 from '../../Asset/hero/heroicon3.svg'


const sliderheader = () => {
  return (
    <div className='hero_slider' >
      <div className='hero_slides' >
        <Heroslide1  heroicon1={heroicon1} heroicon2={heroicon2} heroicon3={heroicon3} />
        <Heroslide2  />
        <Heroslide3   />
        <Heroslide1   heroicon1={heroicon1} heroicon2={heroicon2} heroicon3={heroicon3} />
      </div>  
      <div className='dots_nav'>
        <div className='dot' onClick={ e => {
            const el = document.querySelector('.hero_slides')
          sliderdotsnav(el, 1)}}></div>
        <div className='dot' onClick={ e => {
            const el = document.querySelector('.hero_slides')
          sliderdotsnav(el, 2)}}></div>
        <div className='dot' onClick={ e => {
            const el = document.querySelector('.hero_slides')
          sliderdotsnav(el, 3)}}></div>
      </div>
    </div>
  )
}
/** start auto slide functions **/

let setIntervalId ;
   function autoslide() {
        /* auto play */
         setIntervalId = setInterval(e => {
            const el = document.querySelector('.hero_slides')

            const index = currectposition(4)
            changeposition(el, index)
        }, 2000);
    }
    //autoslide()

/** end auto slide functions **/


export default sliderheader
