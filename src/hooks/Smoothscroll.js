/**
 * el_id props: collect the element id attribute name
 * 
 * behavior prop: collect the behavior of the scolling (eg, smooth)
 * 
 * Smoothscroll(el_id, behavior) a function the allows for a smooth scrolling through a givent piont in a web page
 * 
*/
const Smoothscroll = (el_id, behavior) =>  {
    const targer_el = document.getElementById(el_id)
    const targetPositionY = targer_el.getBoundingClientRect().top
    const currentPostionY = window.pageYOffset
    const distance =  currentPostionY + targetPositionY
  
    window.scroll({top: distance, behavior: behavior}) 
}

export default Smoothscroll
