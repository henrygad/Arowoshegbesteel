import Home from './Home'
//import buttonarrow from './Asset/buttonarrow.svg'


const App = () => {

  return (
    <Home />
   /*  < div className="body_wraper"  >
      <div className="header_wrap">
        <Header />
      </div>
      <main>
        <Hero />
        <About />
        <Services />
        <Whychooseus/>
        <Projectimages />
        <Testimonie />
        <CTA />
      </main>
      <footer>
        <Footer />
      </footer>
      <div className="side_nav">
        <a href="#home"><img src={buttonarrow} alt="" /></a>
      </div>
    </div> */
  )
}

/* function displaysidenav() {
  const sidenav_el = document.querySelector('.side_nav')
  const result = checksection()
  if(result){
     sidenav_el.style.display = 'flex'
  } else{
    sidenav_el.style.display = 'none'
  }
}

const checksection = () => {
  const hero_el = document.querySelector('.hero_container')
  const rect = hero_el.getBoundingClientRect()
  return(
    rect.bottom <= 0 &&
    rect.left <= 0 &&
    rect.right >= 0
  )

}

window.onscroll = displaysidenav;
 */

export default App
