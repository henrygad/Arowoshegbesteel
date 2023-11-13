import Titlestroke from '../../Conponents/Titlestroke/Titlestroke'
import Sliderproject from '../Sliders/Project/Sliderproject'
import './Projectimages.css'

import kitchenextractor from '../../Asset/services/kitchen&toiletextractor.jpg'
import factoryextractor from '../../Asset/services/factoryextractor.jpg'
import roofvent from '../../Asset/services/roofvent.jpg'
import aluminumroofin from '../../Asset/services/aluminumroofin.jpg'
import centralaircondition from '../../Asset/services/centralair-condition.jpg'
import factoryrafter from '../../Asset/services/factoryrafter.jpg'
import coldroom from '../../Asset/services/coldroom.jpg'
import metalfracbic from '../../Asset/services/metalfracbic.jpg'

const Projectimages = () => {
  return (
   <>
      <div className='title'>
       <Titlestroke text={"feature project"} />
      </div>
      <div className='sliders_div'>
        <div>
          <Sliderproject img1={kitchenextractor} img2={factoryextractor} img3={roofvent} img4={aluminumroofin} />
        </div>
        <div>
          <Sliderproject img1={centralaircondition} img2={factoryrafter} img3={coldroom} img4={metalfracbic} />
        </div>
      </div>
    </>
  )
}

export default Projectimages
