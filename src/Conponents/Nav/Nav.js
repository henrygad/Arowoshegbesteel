import './Nav.css'
import Smoothscroll from '../../hooks/Smoothscroll'
import Getcurrentsection from '../../hooks/Getcurrentsection'
import Addcolor from '../../hooks/Addcolor'


export function Whilescrollingaddcolor() {
  const aboutValue = Getcurrentsection('js-about-us')
  const serviceValue = Getcurrentsection('js-services')
  const myprojectsValue = Getcurrentsection('js-myprojects')
  const contactValue = Getcurrentsection('js-contact-us')
  let index;
 
  if(aboutValue){
    index = 0
  }else if(serviceValue){
    index = 1
  }else if(myprojectsValue){
    index = 2
  }else if(contactValue){
    index = 3
  }

  Addcolor(index, 'js-header-nav-list')
}





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

  function Navigate(index, value) {
    Smoothscroll(value, 'smooth')
    Addcolor(index, 'js-header-nav-list')
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

        <div className='close_wraper' onClick={e=> removemenu()}>
          <span></span>
          <span></span>
        </div>
        
        <ul className='nav_list'>
          <li className='list js-header-nav-list' onClick={e=> { Navigate(0, 'js-about-us'); removemenu()}} >about</li>
          <li className='list js-header-nav-list' onClick={e=> {Navigate(1, 'js-services'); removemenu()}}>services</li>
          <li className='list js-header-nav-list' onClick={e=> {Navigate(2, 'js-myprojects'); removemenu()}}>projects</li>
          <li className='list js-header-nav-list' onClick={e=> {Navigate(3, 'js-contact-us'); removemenu()}}>contact</li>
        </ul>
      </div>
    </nav>      
  )
}


 export default Nav;