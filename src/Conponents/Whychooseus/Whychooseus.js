import Titlestroke from '../../Conponents/Titlestroke/Titlestroke'
import React from './Whychooseus.css'

import { FaAward } from 'react-icons/fa';
import { MdWorkHistory } from 'react-icons/md';
import { GiTeamIdea } from 'react-icons/gi';

const Whychooseus = () => {
  return (
    <>
      <div className='title'>
        <Titlestroke text={"Why choose us"} />
      </div>
        <div className='choose_us_grid'>
          <div className='box one'>
            <div className='first_div'>
              <MdWorkHistory className='img' />
              <h3>experience</h3>
            </div>
            <div className='second_div'>
              <p>
                We've been active since 2010.  
                We have over the years provided services for both commercial and industrial 
                establishments within and outside Nigeria. with over 100 done projects, we guarantee 
                that will give you the best.
              </p>
            </div>
          </div>
          <div className='box two'>
            <div className='first_div'>
              <GiTeamIdea  className='img'/>
              <h3>expertise</h3>
            </div>
            <div className='second_div'>
              <p>
               Our top priority at Arowoshegbe Steel Construction is expertise. 
               For this reason, we have professionals on our staff.  
               We assign the best workers to each project, from design and manufacturing through installation, 
               plant modification, maintenance, down to service and consultancy.
              </p>
            </div>
          </div>
          <div className='box three'>
            <div className='first_div'>
              <FaAward  className='img'/>
              <h3>quality</h3>
            </div>
            <div className='second_div'>
              <p>
               Quality is our goal at Arowoshegbe Steel Construction. 
               For that reason, we deploy and supply heigh quality 
               materials within and outside the country for fabrication manufacturing
              </p>
            </div>
          </div>
        </div>
      </>
  )
}

export default Whychooseus
