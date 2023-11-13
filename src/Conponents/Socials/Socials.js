import './Socials.css'
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

const Social = () => {

  return (
    <div className="header_social_icons">
      <AiFillFacebook className='img' />
      <AiFillTwitterSquare className='img' />
      <AiFillInstagram className='img' />
      <AiFillLinkedin className='img' />
    </div>
  )
}

export default Social
