import './Footer.css'
import footerlogo from '../../Asset/footer/footerlogo.svg'
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'



const Footer = () => {
  return (
    <>
      <div className='first_div'>
         <div className='usefull_link'>
           <div className='footer_logo'><img src={footerlogo} alt='' /></div>
           <div className='content'>
            <p>
              Arowoshegbesteel is a leading expert in industry installations, steel fabrication, and ventilation system design and installations.
            </p>
           </div>
         </div>
         <div className='contact'>
          <h3>contact us</h3>
          <div className='content'>
            <p>
              59, Morrision Christain,
              Opp, Morrision Christain Company,
              Alausa B/Stop Aluasa Ikeja, Lagos.
            </p>
            <p>
              08135805321
              090559114437
              09055434441
            </p>
            <p>
             arowosegbesteelconstruction@gmail.com
             yinka4real01@email.com
            </p>
          </div>
         </div>
         <div className='footer_social'>
          <h3>find us here</h3>
          <div className='content'>
            <AiFillFacebook className='img' />
            <AiFillTwitterSquare className='img' />
            <AiFillInstagram className='img' />
            <AiFillLinkedin className='img' />
         </div>
          </div>
       </div>
       <div className='second_div'>
        <br />
        <p>&copy; 2023 AROWOSHEGBE STEEL CONSTRUCTION | All Right Reserved</p>
       </div>  
    </>
  )
}
 
export default Footer
