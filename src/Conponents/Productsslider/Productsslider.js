import './Productsslider.css'
import navprivious from '../../Asset/slidernavleft.svg'
import navnext from '../../Asset/slidernavright.svg'
import { useRef } from 'react'




const Productsslider = ( {img1, img2, img3}) => {
  const useSlide = useRef(null)

  const Currectposition = slidesEle =>{
    const getCurrentPosition = slidesEle.style.left
    return parseFloat(getCurrentPosition) * -100 / 100;
  }




  const Moveslide = (getCurrentPosition, slidesEle, numberOfSlides, transition) => {
     let movesPosition;
     const transitionOn = transition
     const transitionOff = 'none'
     slidesEle.style.transition = transitionOn
    
     if(getCurrentPosition === parseFloat(numberOfSlides + '00')){
              slidesEle.style.transition = transitionOff
              movesPosition = '0%'
              //
              setTimeout(() => {
                slidesEle.style.transition = transitionOn
                slidesEle.style.left = '-100%'
              }, .1);
      }else if(getCurrentPosition <= -200){
               slidesEle.style.transition = transitionOff
               movesPosition = '-' + numberOfSlides + '00%'
               //
               setTimeout(() => {
                slidesEle.style.transition = transitionOn
                slidesEle.style.left = '-200%'
              }, .1);
      }else if(getCurrentPosition === -100){
               movesPosition = '0%'
      }else if(getCurrentPosition === 0){
               movesPosition = '-100%'
     }else if(getCurrentPosition === 100) {
              movesPosition = '-200%' 
     }else if(getCurrentPosition === 200){
              movesPosition = '-300%'
     } else if(getCurrentPosition === 300){
              movesPosition = '-400%'
     }else if(getCurrentPosition === 400){
            movesPosition = '-500%'
     }else if(getCurrentPosition === 500){
             movesPosition = '-600%'
     }else{
         alert("Wrong entries")
     }


     slidesEle.style.left = movesPosition;
  }
 
 
 const Navigation = (slidesEle, numberOfSlides, navPosition, transition) => {
    const getCurrentPosition = Currectposition(slidesEle)

    if(navPosition.toLowerCase() === 'next'){
       Moveslide(getCurrentPosition, slidesEle, numberOfSlides, transition)
    }else if(navPosition.toLowerCase() === 'previous'){ 
       Moveslide(getCurrentPosition - 200, slidesEle, numberOfSlides, transition)
    }
    
}
 

  return (
    <div className='products_slider_container'>
      <div className='slider_nav privious' onClick={e=> Navigation(useSlide.current, 3, 'previous', 'all 1s ease-in-out') }><img src={navprivious} alt='' /></div>
        <div className='slides' ref={useSlide} style={{left: '0',}} >
            <img className='slide one' src={img1} alt='' />
            <img className='slide two' src={img2} alt='' />
            <img className='slide three' src={img3} alt='' />
            <img className='slide five'src={img1} alt='' />      
        </div>
      <div className='slider_nav next' onClick={e=> Navigation(useSlide.current, 3, 'next', 'all 1s ease-in-out') }><img src={navnext} alt='' /></div>
    </div>
  )
}



export default Productsslider;