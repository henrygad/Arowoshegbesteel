import {Header, Hero, About, Services, Whychooseus, Projectimages, Testimonie, CTA, Footer} from "./Containers"

const App = () => {
  return (
    <>
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
    </>
  )
}

export default App
