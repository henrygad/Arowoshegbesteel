import Titlestroke from '../../Conponents/Titlestroke/Titlestroke'
import Sliderservices from '../Sliders/Services/Sliderservices'
import './Services.css'

import kitchenextractor from './servicesimgs/kitchen&toiletextractor.jpg'
import factoryextractor from './servicesimgs/factoryextractor.jpg'
import Industrialequipment from './servicesimgs/Industrialequipment.jpg'
import aluminumroofin from './servicesimgs/aluminumroofin.jpg'
import coldroom from './servicesimgs/coldroom.jpg'
import metalfracbic from './servicesimgs/metalfracbic.jpg'
import buttonarrow from '../../Asset/buttonarrow.svg'

import slidernavrleft from '../../Asset/slidernavleft.svg'
import slidernavright from '../../Asset/slidernavright.svg'

const Services = () => {
  return (
    <>
      <div className='title'>
       <Titlestroke text={"services"} />
      </div>
      <div className='grid_container'>
          <div className='box one'>
            <Sliderservices img1={kitchenextractor} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>domestic ventilation installation</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box two'>
            <Sliderservices img1={factoryextractor} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>industrial ventilation installation</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box three'>
            <Sliderservices img1={Industrialequipment} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>Industrial equipment installation</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box four'>
            <Sliderservices img1={metalfracbic} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>metal fabrications</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box five'>
            <Sliderservices img1={coldroom} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>cold room</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box six'>
            <Sliderservices img1={aluminumroofin} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>aluminum roofing & trussses</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
      </div>
      </>

  )
}

export default Services
