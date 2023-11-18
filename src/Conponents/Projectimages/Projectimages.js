import Titlestroke from '../../Conponents/Titlestroke/Titlestroke'
import Sliderproject from '../Sliders/Project/Sliderproject'
import './Projectimages.css'

import industrialextractor1 from './projectimage/industrialexractor1.jpg'
import industrialextractor2 from './projectimage/industrialexractor2.jpg'
import industrialextractor3 from './projectimage/industrialexractor3.jpg'
import industrialinstallation1 from './projectimage/IndustrialInstallation1.jpg'
import industrialinstallation2 from './projectimage/IndustrialInstallation2.jpg'
import industrialinstallation3 from './projectimage/IndustrialInstallation3.jpg'
import kitchentractor1 from './projectimage/kitchentractor1.jpg'
import kitchentractor2 from './projectimage/kitchentractor2.jpg'
import kitchentractor3 from './projectimage/kitchentractor3.jpg'
import metalfracbication1 from './projectimage/metalfracbication1.jpg'
import metalfracbication2 from './projectimage/metalfracbication2.jpg'
import metalfracbication3 from './projectimage/metalfracbication3.jpg'
import steelfracbication1 from './projectimage/steelfracbication1.jpg'
import steelfracbication2 from './projectimage/steelfracbication2.jpg'
import steelfracbication3 from './projectimage/steelfracbication3.jpg'
import Trusses1 from './projectimage/Trussses1.jpg'
import Trusses2 from './projectimage/Trussses2.jpg'
import Trusses3 from './projectimage/Trussses3.jpg'



const Projectimages = () => {
  return (
   <>
      <div className='title'>
       <Titlestroke text={"feature project"} />
      </div>
      <div className='sliders_div'>
        <div>
          <Sliderproject img1={industrialextractor1} img2={industrialinstallation2} img3={kitchentractor1} img4={metalfracbication2} img5={steelfracbication1} img6={Trusses1} />
        </div>
        <div>
          <Sliderproject img1={industrialextractor2} img2={industrialinstallation3} img3={kitchentractor2} img4={metalfracbication3} img5={steelfracbication2} img6={Trusses2} />
        </div>
      </div>
    </>
  )
}

export default Projectimages
