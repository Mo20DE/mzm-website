
import { useEffect } from 'react'
import { ThemeProvider } from './components/theme/ThemeProvider'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Home from './components/main/home/Home'
import About from './components/main/about/About'
import Skills from './components/main/skills/Skills'
import Projects from './components/main/projects/Projects'
import Contact from './components/main/contact/Contact'
import Footer from './components/footer/Footer'
import GoUpButton from './components/general/GoUpButton'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (

    <ThemeProvider>
      <Header />
      <Main>
        {/* Home Section */}
        <Home />
        {/* About Section */}
        <About />
        {/* Skills Section */}
        <Skills />
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <Contact />
      </Main>
      <GoUpButton />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
