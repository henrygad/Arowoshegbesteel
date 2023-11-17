import './Nav.css'

const Nav = () => {
  return (
    <>
      <div className='hamburgar'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='header_nav'>
        <div className='close'>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>about</li>
          <li>services</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </div>
    </>      
  )
}

export default Nav
