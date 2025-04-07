import Section from './components/ui/Section'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import Nav from './components/ui/Nav'
import ThemeToggler from './components/ui/ThemeToggler'
import About from './components/content/About'
import WorkExperience from './components/content/WorkExperience'
import Education from './components/content/Education'  
import Contact from './components/content/Contact'
import Certifications from './components/content/Certifications'
import './App.css'

const App = () => {
  return (
    <>
    <Nav/>
    <div id="content">
      <Header/>
      <Section id="about" title="About Me">
        <About/>
      </Section>
      <Section id="education" title="Education">
        <Education/>
      </Section>
      <Section id="work" title="Experience">
        <WorkExperience/>
      </Section>
      <Section id="certifications" title="Certifications">
        <Certifications/>
      </Section>
      <Section id="contact" title="Contact">
        <Contact/>
      </Section>
      <Footer/>
      <div class="theme-toggle-container">
        <ThemeToggler/>
      </div>
    </div>
    </>
  )
}

export default App
