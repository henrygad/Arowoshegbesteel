import { Autoplayslider } from '../../slider/navigation'
import './Projectsslider.css'


const Projectsslider = ({img1, img2, img3, img4,
                        img5, img6, img7, img8,
                        img9, img10, img11, index, style}) => {
  return (
    <div className='projects_slider_container'>
      <div className={`slides ${'js-projects-slides'+index}`} style={style}>
        <div className='slide'><img src={img1} alt='projects' /></div>
        <div className='slide'><img src={img2} alt='projects' /></div>
        <div className='slide'><img src={img3} alt='projects' /></div>
        <div className='slide'><img src={img4} alt='projects' /></div>
        <div className='slide'><img src={img5} alt='projects' /></div>
        <div className='slide'><img src={img6} alt='projects' /></div>
        <div className='slide'><img src={img7} alt='projects' /></div>
        <div className='slide'><img src={img8} alt='projects' /></div>
        <div className='slide'><img src={img9} alt='projects' /></div>
        <div className='slide'><img src={img10} alt='projects' /></div>
        <div className='slide'><img src={img11} alt='projects' /></div>

        <div className='slide'><img src={img1} alt='projects' /></div>
        <div className='slide'><img src={img2} alt='projects' /></div>
        <div className='slide'><img src={img3} alt='projects' /></div>
        <div className='slide'><img src={img4} alt='projects' /></div>
      </div>
    </div>
  )
}


let clearId;
function Autoplay() {
  clearId = setInterval(() => {
    const slidesEl = document.querySelector('.js-projects-slides0')

    const moves = 30
    const numberOfSlides = 11
    const transAnimation = 'all 8s linear'

   Autoplayslider(slidesEl, numberOfSlides, moves, transAnimation)
  }, 8000) 
}
function Clear() {
  clearInterval(clearId)
}


let clearId1;
function Autoplay1() {
  clearId1 = setInterval(() => {
    const slidesEl = document.querySelector('.js-projects-slides1')
    const moves = 30
    const numberOfSlides = 11
    const transAnimation = 'all 8s linear'
    const slideRight = 'right'

    Autoplayslider(slidesEl, numberOfSlides, moves, transAnimation, slideRight)
  }, 8000) 

}
function Clear1() {
  clearInterval(clearId1)
}


function Pauseautoplay(){
  setTimeout(e=>{
    const slidesEl = document.querySelector('.js-projects-slides0')
    slidesEl.addEventListener('mouseover', e=> Clear())
    slidesEl.addEventListener('mouseout', e=> Autoplay())


    const slidesEl1 = document.querySelector('.js-projects-slides1')
    slidesEl1.addEventListener('mouseover', e=> Clear1())
    slidesEl1.addEventListener('mouseout', e=> Autoplay1())

  }, 500)
}

Pauseautoplay()
Autoplay()
Autoplay1()





export default Projectsslider