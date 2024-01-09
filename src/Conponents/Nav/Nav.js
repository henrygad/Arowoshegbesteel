import './Nav.css'

const Nav = () => {


  const openmenu = () => {
    const hamburgar_el = document.querySelector('.hamburgar')
    hamburgar_el.classList.toggle('openmenu')
  }
  const removemenu = () => {
    const hamburgar_el = document.querySelector('.hamburgar')
    hamburgar_el.classList.remove('openmenu')
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
