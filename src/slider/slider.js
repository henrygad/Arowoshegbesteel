import './slider.css'



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
 
 
const Arrownavigation = (slidesEle, numberOfSlides, navPosition, transition) => {
    const getCurrentPosition = Currectposition(slidesEle)

    if(navPosition.toLowerCase() === 'next'){
       Moveslide(getCurrentPosition, slidesEle, numberOfSlides, transition)
    }else if(navPosition.toLowerCase() === 'previous'){ 
       Moveslide(getCurrentPosition - 200, slidesEle, numberOfSlides, transition)
    }
}


const Displayarrownav = (slidesEle, numberOfSlides, useArrowNavPrevious, useArrowNavNext) => {
  const getCurrentPosition = Currectposition(slidesEle)
  const displayOn = 'flex'
  const displayOff = 'none' 
  useArrowNavNext.style.display = useArrowNavPrevious.style.display = displayOn

  if(getCurrentPosition === parseFloat(numberOfSlides - 1 + '00') ||
     getCurrentPosition === parseFloat(numberOfSlides + '00')){
     useArrowNavNext.style.display = displayOff
  }else if(getCurrentPosition === - 0 ){
    useArrowNavPrevious.style.display = displayOff
  }

}

export const Slider = (slidesEl, numberOfSlides, transAnimation, arrowNavPosition, arrowNavPrevious, arrowNavNext) => { 
    const getCurrentPosition = Currectposition(slidesEl)

    if(arrowNavPosition === undefined){
        Moveslide(getCurrentPosition, slidesEl, numberOfSlides, transAnimation)
    }else{
        Arrownavigation(slidesEl, numberOfSlides, arrowNavPosition, transAnimation)
    }

    if(arrowNavPrevious !== undefined || arrowNavNext !== undefined){
        return;
    }else{
        Displayarrownav(slidesEl, numberOfSlides, arrowNavPrevious, arrowNavNext)
    }

}