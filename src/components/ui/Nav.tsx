import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import MobileMenu from './MobileMenu'

const Nav: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav class="nav">
      <div class="nav-container">
        {/* Mobile menu toggle button */}
        <button class="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span class={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <h2>DK</h2>
        
        {/* Desktop navigation links */}
        <div class="desktop-nav-links">
          <a href="#about">About Me</a>
          <a href="#education">Education</a>
          <a href="#work">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
          <span>|</span>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/danielkilcullen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.goodreads.com/user/show/179130373-daniel-kilcullen" target="_blank" rel="noopener noreferrer" aria-label="Goodreads">
              <i class="fab fa-goodreads"></i>
            </a>
            <a href="https://letterboxd.com/dkilc/" target="_blank" rel="noopener noreferrer" aria-label="Goodreads">
              <i class="fab fa-letterboxd"></i>
            </a>
            <a href="https://github.com/d-kilc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>

        <MobileMenu open={isMenuOpen} handleToggle={toggleMenu}/>

      </div>
    </nav>
  )
}

export default Nav