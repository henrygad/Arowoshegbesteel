import React from './Sliderservices.css'

function sliderservices({img1, img2, img3, navright, navleft}) {
  return (
    <div className='slider'>
        <div className='slider_nav left'><img src={navleft} alt=''/></div>
        <div className='slides'>
        <img src={img1} alt='' />
        <img src=''  alt=''/>
        <img src='' alt=''/>
        </div>
        <div className='slider_nav right'><img src={navright} alt='' /></div>
    </div>
  )
}

export default sliderservices
