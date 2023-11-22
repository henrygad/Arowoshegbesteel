import './Nav.css'

const Nav = () => {


  const Addresponsivenav = () => {
    const hamburgar_el = document.querySelector('.hamburgar')
    hamburgar_el.classList.add('responsivenav')
  }
  const Removeresponsivenav = () => {
    const hamburgar_el = document.querySelector('.hamburgar')
    hamburgar_el.classList.remove('responsivenav')
  }

  return (
    <>
      <div className='hamburgar' onClick={ () => Addresponsivenav()} >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='header_nav'>
        <div className='close' onClick={ () => Removeresponsivenav() } >
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
