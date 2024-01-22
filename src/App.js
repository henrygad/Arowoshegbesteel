import Home from './Home'
import Scrollingnavup from './hooks/Scrollingnavcontrol'


const App = () => {

  return (
    <Home />
  )
}

export default App

window.onscroll = Scrollingnavup;