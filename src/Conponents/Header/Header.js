import "./Header.css"
import logo from "../../Asset/header/logo.svg"

function Header() {
  return (
    <div className="header_logo">
      <img src={logo} alt="Arowoshegbe logo" onClick={ e => window.location.href = 'https://arowoshegbesteel.com/'} />
    </div>
  )
}


export default Header