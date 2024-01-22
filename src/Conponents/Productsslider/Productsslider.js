import './Productsslider.css'
import navprivious from '../../Asset/slidernavleft.svg'
import navnext from '../../Asset/slidernavright.svg'
import {products_list} from '../../productslist'
import { useRef } from 'react'
import {Arrownavigation, Autoplayslider} from '../../slider/navigation'


const Productsslider = ( {img1, img2, img3, index, transAnimation}) => {

  const useSlide = useRef(null)
  const useArrowNavNext = useRef(null)
  const useArrowNavPrevious = useRef(null)

  const Arrownavs = value =>{
    const numberOfSlides = 3
    const moves = 100

    Arrownavigation(useSlide.current, numberOfSlides, moves, 'all 1s ease-in-out', value, false, useArrowNavNext.current)
  }
  

  return (
    <div className='products_slider_container' onMouseOver={e=> Clear()} onMouseOut={e=> Autoplay(transAnimation, index)}>
      <div className='slider_nav privious slider_nav_js' ref={useArrowNavPrevious} onClick={e=> Arrownavs('previous') }><img src={navprivious} alt='' /></div>
        <div className={`slides ${'js-products-slides'+index}`} ref={useSlide} style={{left: 0,}}>
            <img className='slide one' src={img1} alt='' />
            <img className='slide two' src={img2} alt='' />
            <img className='slide three' src={img3} alt='' />
            <img className='slide one'src={img1} alt='' />      
        </div>
      <div className='slider_nav next slider_nav_js' ref={useArrowNavNext} onClick={e=> Arrownavs('next') }><img src={navnext} alt='' /></div>
    </div>

  )
}


let clearId
function Autoplay(transAnimation, index){
  clearId = setInterval(e=> {
    const slidesEl = document.querySelector('.js-products-slides'+ index)
    const numberOfSlides = 3
    const moves = 100

   Autoplayslider(slidesEl, numberOfSlides, moves, transAnimation)   
  }, 10000)
}


function Clear(){
  clearInterval(clearId)
}


products_list.forEach((ele, index) => {
 Autoplay(ele.transAnimation, index)
})




export default Productsslider;