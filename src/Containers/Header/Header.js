import {CPheader, CPnav, CPsocials }from "../../Conponents"

import "./Header.css"

const Header = () => {
  return (
    <div  className='header_grid' id="home">
       <div className='header_social_media'>
         <CPsocials />
        </div>
       <header>
         <CPheader/>
       </header  >
       <nav>
        <CPnav />
       </nav>
    </div>
  )
}

export default Header
