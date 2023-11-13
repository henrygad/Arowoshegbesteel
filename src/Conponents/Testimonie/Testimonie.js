import Titlestroke from '../Titlestroke/Titlestroke'
import Testimonieslider from '../Sliders/Testimonie/Testimonieslider'
import './Testimonie.css'

import testimonie1 from '../../Asset/testimonies/testimonie1.jpg'
import testimonie2 from '../../Asset/testimonies/testimonie2.jpg'


import slidernavrleft from '../../Asset/slidernavleft.svg'
import slidernavright from '../../Asset/slidernavright.svg'

const Testimonie = () => {
  return (
    <>
      <div className='title'>
       <Titlestroke text={"what clients say"} />
      </div>
      <div className='content'>
        <Testimonieslider img1={testimonie1} img2={testimonie2}  nav1={slidernavright}  nav2={slidernavrleft} />
      </div>
    </>
  )
}

export default Testimonie
