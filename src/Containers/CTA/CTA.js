import './CTA.css'
import {CPCTA, CPcontactform} from '../../Conponents'
import Titlestroke from '../../Conponents/Titlestroke/Titlestroke'

const CTA = () => {
  return (
    <section className='cta_container'>
      <div className='title'>
        <Titlestroke text={"Contact us"} />
      </div>
      <div className='content'>
        <div>
          <CPCTA />
        </div>
        <div id='contact'>
        <CPcontactform />
        </div>
      </div>
    </section>
  )
}

export default CTA
