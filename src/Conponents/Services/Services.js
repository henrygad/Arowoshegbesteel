import Titlestroke from '../../Conponents/Titlestroke/Titlestroke'
import Sliderservices from '../Sliders/Services/Sliderservices'
import './Services.css'

import buttonarrow from '../../Asset/buttonarrow.svg'
import industrialextractor1 from './servicesimages/industrialexractor1.jpg'
import industrialextractor2 from './servicesimages/industrialexractor2.jpg'
import industrialextractor3 from './servicesimages/industrialexractor3.jpg'
import industrialinstallation1 from './servicesimages/IndustrialInstallation1.jpg'
import industrialinstallation2 from './servicesimages/IndustrialInstallation2.jpg'
import industrialinstallation3 from './servicesimages/IndustrialInstallation3.jpg'
import kitchentractor1 from './servicesimages/kitchentractor1.jpg'
import kitchentractor2 from './servicesimages/kitchentractor2.jpg'
import kitchentractor3 from './servicesimages/kitchentractor3.jpg'
import metalfracbication1 from './servicesimages/metalfracbication1.jpg'
import metalfracbication2 from './servicesimages/metalfracbication2.jpg'
import metalfracbication3 from './servicesimages/metalfracbication3.jpg'
import steelfracbication1 from './servicesimages/steelfracbication1.jpg'
import steelfracbication2 from './servicesimages/steelfracbication2.jpg'
import steelfracbication3 from './servicesimages/steelfracbication3.jpg'
import Trusses1 from './servicesimages/Trussses1.jpg'
import Trusses2 from './servicesimages/Trussses2.jpg'
import Trusses3 from './servicesimages/Trussses3.jpg'


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
            <Sliderservices img3={kitchentractor3} img2={kitchentractor2} img1={kitchentractor1} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>Kitchen industrial and domestic extractor system</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box two'>
            <Sliderservices img3={industrialextractor3} img2={industrialextractor2} img1={industrialextractor1} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>industrial ventilation installation</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box three'>
            <Sliderservices img3={industrialinstallation3} img2={industrialinstallation2} img1={industrialinstallation1} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>Industrial equipment installation</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box four'>
            <Sliderservices img3={steelfracbication3} img2={steelfracbication2} img1={steelfracbication1} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p> stainless steel fabrications </p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box five'>
            <Sliderservices img3={metalfracbication3} img2={metalfracbication2} img1={metalfracbication1} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>welding fabrications</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
          <div className='box six'>
            <Sliderservices img3={Trusses3} img2={Trusses2} img1={Trusses1} navright={slidernavright} navleft={slidernavrleft} />
            <div className='second_div'>
              <p>Trusses</p>
              <a href='#contact' >Appiontment<img src={buttonarrow} alt='' /></a>
            </div>
          </div>
      </div>
      </>

  )
}

export default Services
