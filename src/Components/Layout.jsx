
import Headers from './Header/Header'
import Course from './Courses/Courses'
import About from './About/About'
import Gallery from './Gallery/Gallery'
import Consultation from './Consultation/Consultation'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <div>
      <Headers />
      <Course />
      <About/>
      <Gallery/>
      <Consultation />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Layout
