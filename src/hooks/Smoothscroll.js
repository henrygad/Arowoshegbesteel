
const Smoothscroll = (el_id, behavior) =>  {
    const targer_el = document.getElementById(el_id)
    const targetPositionY = targer_el.getBoundingClientRect().top
    const currentPostionY = window.pageYOffset
    const distance =  currentPostionY + targetPositionY
  
    window.scroll({top: distance, behavior: behavior})
  
}

export default Smoothscroll
