import './CTA.css'
import {CPCTA, CPcontactform} from '../../Conponents'

const CTA = () => {
  return (
    <section className='cta_container'>
      <div>
        <CPCTA />
      </div>
      <div id='contact'>
       <CPcontactform />
      </div>
    </section>
  )
}

export default CTA
