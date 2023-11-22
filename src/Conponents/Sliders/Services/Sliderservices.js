import React from './Sliderservices.css'

const Leftnav = (e) =>{
  const serviceslidernavleft_el = document.querySelectorAll('#serviceslidernavleft')

  /* serviceslidernavleft_el.forEach((value, index) => {
    if(index === 0) console.log(value)
  })
 */
}
const Rightnav = (e) => {
  console.log('right')
}

function sliderservices({img1, img2, img3, navright, navleft}) {
  return (
    <div className='slider'>
        <div className='slider_nav left' id='serviceslidernavleft' onClick={(e) => Leftnav(e) } ><img src={navleft} alt='' /></div>
         <div className='slides'>
          <img src={img1} alt='' />
          <img src={img2}  alt=''/>
          <img src={img3} alt=''/>
        </div>
        <div className='slider_nav right'  onClick={(e) => Rightnav(e) } ><img src={navright} alt='' /></div>
    </div>
  )
}

export default sliderservices
