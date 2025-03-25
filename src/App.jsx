import React, { useContext } from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Services from './components/services/Services'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { themeContext } from './Context'
import RecentProjects from './components/recentProjects/RecentProjects'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {

 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;

  return (
    <div className="app"
     style ={{background :darkMode ? 'black':'',
     color : darkMode ? 'white':''}}

    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <RecentProjects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App