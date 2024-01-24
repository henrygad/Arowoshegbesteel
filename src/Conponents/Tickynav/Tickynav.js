import './Tickynav.css'
import arrowbtn from '../../Asset/buttonarrow.svg'
import Getcurrentsection from '../../hooks/Getcurrentsection' 



export function Showtickynav(e) { 
  const tickynav_el = document.getElementById('js-ticky-nav') 
  const headerId = 'js-home'
  const heroId = 'js-hero'
  const header_value = Getcurrentsection(headerId)
  const hero_value = Getcurrentsection(heroId)

  
  if(!header_value && !hero_value){
    tickynav_el.style.display = 'flex'
    tickynav_el.style.opacity = '1'

    setTimeout(() => {
      tickynav_el.style.opacity = '0'
    }, 10000);
  }else{
    tickynav_el.style.display = 'none'
  }
}


const Tickynav = () => {

  return (
    <div className="tickynav " id='js-ticky-nav' onClick={e=>  window.scroll({top: 0, behavior: 'smooth'})}>
        <img  src={arrowbtn} alt="ticky navigation" /> 
    </div>
  )
}

export default Tickynav