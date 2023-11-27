import Titlestroke from '../Titlestroke/Titlestroke'

import './About.css'
import aboutimage from '../../Asset/about/aboutusimg.jpg'
import phoneicon from '../../Asset/about/phoneicon.svg'

const About = () => {
  return (
    <>
      <div className='first_div'>
        <div className='title'>
          <Titlestroke text={"About us"} />
        </div>
        <div className='texts'>
          <p>
             Arowoshegbesteel is a leading expert in industry installations, steel fabrication, 
             and ventilation system design and installations. Our team of experienced professionals has 
             been providing top-notch services to industries for decade. We understand the importance of
              reliable and efficient equipment in industrial operations, which is why we are dedicated 
              to providing the highest quality solutions for our clients. From custom steel fabrication
               to advanced ventilation systems, we have the expertise to meet all your industrial needs.
            <span>
            Founded by Mr. Arowoshegbe in 1993, we believe that quality is non-negotiable. 
            That's why all our products undergo rigorous testing and adhere to international safety standards. 
            We take pride in our work and strive to exceed our clients' expectations every time.
            </span>     
          </p>
          <div className='number'> <img src={phoneicon} alt=''/> <p>+2348135805321</p></div>
        </div>
        </div>
      <div className=' second_div image'>
        <img src={aboutimage} alt=''/>
      </div>
    </>
  )
}

export default About
