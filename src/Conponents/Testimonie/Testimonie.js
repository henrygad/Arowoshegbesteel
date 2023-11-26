import Titlestroke from '../Titlestroke/Titlestroke'
import Testimonieslider from '../Sliders/Testimonie/Testimonieslider'
import './Testimonie.css'

import testimonial1 from '../../Asset/testimonies/testimonialslogo1.jpg'
import testimonial2 from '../../Asset/testimonies/testimonialslogo2.jpg'
import testimonial3 from '../../Asset/testimonies/testimonialslogo3.jpg'
import testimonial4 from '../../Asset/testimonies/testimonialslogo4.jpg'


import slidernavrleft from '../../Asset/slidernavleft.svg'
import slidernavright from '../../Asset/slidernavright.svg'

const Testimonie = () => {
  return (
    <>
      <div className='title'>
       <Titlestroke text={"what clients say"} />
      </div>
      <div className='content'>
        <Testimonieslider img1={testimonial3} img2={testimonial1} img3={testimonial2} img={testimonial4} nav1={slidernavright}  nav2={slidernavrleft} />
      </div>
    </>
  )
}

export default Testimonie
