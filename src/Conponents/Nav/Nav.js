import './Nav.css'

const Nav = () => {


  const openmenu = () => {
    const hamburgar_el = document.querySelector('.hamburgar')
    const body_el = document.querySelector('body')
    hamburgar_el.classList.toggle('openmenu')
    body_el.classList.toggle('body')
  }
  const removemenu = () => {
    const hamburgar_el = document.querySelector('.hamburgar')
    const body_el = document.querySelector('body')
    hamburgar_el.classList.remove('openmenu')
    body_el.classList.remove('body')
  }

  return (
    <nav className='header_nav_container'>

      <div className='hamburgar' onClick={openmenu}>
        <div className='wrap'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className='header_nav_wraper'>

        <div className='close_wraper' onClick={removemenu}>
          <span></span>
          <span></span>
        </div>
        
        <ul className='nav_list'>
          <li className='list'><a href='#about'>about</a></li>
          <li className='list'><a href='#services'>services</a></li>
          <li className='list'><a href='#projects'>projects</a></li>
          <li className='list'><a href='#contact'>contact</a></li>
        </ul>
      </div>
    </nav>      
  )
}

export default Nav
