import './Productsslider.css'
import navprivious from '../../Asset/slidernavleft.svg'
import navnext from '../../Asset/slidernavright.svg'
import { useRef } from 'react'
import { Slider } from '../../slider/slider'




const Productsslider = ( {img1, img2, img3}) => {
  const useSlide = useRef(null)
  const useArrowNavNext = useRef(null)
  const useArrowNavPrevious = useRef(null)


  return (
    <div className='products_slider_container'>
      <div className='slider_nav privious slider_nav_js'ref={useArrowNavPrevious} onClick={e=> Slider(useSlide.current, 3, 'all 1s ease-in-out', 'previous', undefined, useArrowNavNext.current) }><img src={navprivious} alt='' /></div>
        <div className='slides slides-js' ref={useSlide} style={{left: '0',}} >
            <img className='slide one' src={img1} alt='' />
            <img className='slide two' src={img2} alt='' />
            <img className='slide three' src={img3} alt='' />
            <img className='slide five'src={img1} alt='' />      
        </div>
      <div className='slider_nav next slider_nav_js' ref={useArrowNavNext} onClick={e=> Slider(useSlide.current, 3, 'all 1s ease-in-out', 'next', undefined, useArrowNavNext.current)}><img src={navnext} alt='' /></div>
    </div>
  )
}

/* setInterval(() => {
  const slides = document.querySelector('.slides-js')
  console.log(slides)
  Slider(slides, 3, undefined, 'all 1s ease-in-out', undefined, undefined)
  
}, 2000); */


export default Productsslider;