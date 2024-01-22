import Home from './Home'
import './responsivelayout/index.css'
import Scrollingnavup from './hooks/Scrollingnavcontrol'


const App = () => {
  return (
    <Home />
  )
}

export default App


window.onscroll = Scrollingnavup;