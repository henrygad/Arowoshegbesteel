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
      <div className='hero_slides' onMouseOver={Pouseautoplay} onMouseOut={Autoplayslider}>
        <Heroslide1  heroicon1={heroicon1} heroicon2={heroicon2} heroicon3={heroicon3} />
        <Heroslide2  />
        <Heroslide3   />
        <Heroslide1   heroicon1={heroicon1} heroicon2={heroicon2} heroicon3={heroicon3} />
      </div>  
      <div className='dots_nav'>
        <div className='dot js-gray' onClick={ e => dots(0)}></div>
        <div className='dot' onClick={ e => dots(1)}></div>
        <div className='dot' onClick={ e => dots(2)}></div>
      </div>
    </div>
  )
}

const wid = 3

function dots(index){
  const slides_el = document.querySelector('.hero_slides')
  const dot_el = document.querySelectorAll('.dot')
  sliderdotsnav(slides_el, index, wid, dot_el )
}

/** start auto slide functions **/
let setIntervalId;
function Autoplayslider () {
    setIntervalId = setInterval(e => {
      const slides_el = document.querySelector('.hero_slides')
      const dot_el = document.querySelectorAll('.dot')

      const index = currectposition(slides_el, wid)
      changeposition(slides_el, index, wid, dot_el)
  }, 10000);

}

const Pouseautoplay = e => {
    clearInterval(setIntervalId)
}


Autoplayslider()
/** end auto slide functions **/


export default sliderheader
