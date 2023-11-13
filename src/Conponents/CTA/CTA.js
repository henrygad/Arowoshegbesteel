import './CTA.css'
import  {FaHandshake} from 'react-icons/fa'
import  {FcIdea} from 'react-icons/fc'
import  {MdDesignServices} from 'react-icons/md'
import  {IoMdBuild} from 'react-icons/io'
import buttonarrow from '../../Asset/buttonarrow.svg'

const CTA = () => {

  return (

    <div className='cta_div'> 
    <div className='contents_wrap'>
      <div className='box up'>
        <div className='img_div'>< FaHandshake className='img' /></div>
        <div className='content'>
          <h3>we meet</h3>
          <p>  
            Our team of experts is prepared to learn about your requirements and present you with our finest offerings.
          </p>
        </div>
      </div>
      <div className=' box left'>
        <div className='img_div'>< FcIdea className='img' /></div>
        <div className='content'>
            <h3>we brainstorm</h3>
            <p>
             Our professionals then map out the best course of action for your engineering needs.
            </p>
        </div>
      </div>
      <div className='cta_button' >
        <h3>Make an appiontment today!</h3>
        <a href='#contact'>get free consultation <img src={buttonarrow} alt='' /> </a>
      </div>
      <div className=' box right'>
        <div className='img_div'>< MdDesignServices className='img' /></div>
        <div className='content'>
          <h3>we design</h3>
           <p>
              After that, we show you a variety of designs that are customized to meet your requirements.
            </p>
        </div>
      </div>
      <div className=' box down'>
        <div className='img_div'><IoMdBuild className='img' /></div>
          <div className='content'>
            <h3>we install</h3>
             <p>
              Following our assessment of the project and creation of a design system that meets your needs, we construct and install.
            </p>
          </div>
      </div>
    </div>
    </div>
    
  )
}

export default CTA
