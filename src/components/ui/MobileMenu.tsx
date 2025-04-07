import { type FunctionComponent } from "preact"

type MobileMenuProps = {
  open: boolean
  handleToggle(): void
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  open,
  handleToggle
}) => {
  return (
    <>
    {/* Menu: */}
    <div class={`mobile-sidebar ${open ? 'open' : ''}`}>
      <div class="mobile-sidebar-content">
        <a href="#about" onClick={handleToggle}>About Me</a>
        <a href="#education" onClick={handleToggle}>Education</a>
        <a href="#work" onClick={handleToggle}>Experience</a>
        <a href="#certifications" onClick={handleToggle}>Certifications</a>
        <a href="#contact" onClick={handleToggle}>Contact</a>
        <div class="socials-list">
          <a href="https://www.linkedin.com/in/danielkilcullen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://www.goodreads.com/user/show/179130373-daniel-kilcullen" target="_blank" rel="noopener noreferrer" aria-label="Goodreads">
            <i class="fab fa-goodreads"></i>
            <span>Goodreads</span>
          </a>
          <a href="https://letterboxd.com/dkilc/" target="_blank" rel="noopener noreferrer" aria-label="Goodreads">
            <i class="fab fa-letterboxd"></i>
            <span>Letterboxd</span>
          </a>
          <a href="https://github.com/d-kilc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>

    {/* Overlay: */}
    {open
      ? <div class="sidebar-overlay open" onClick={handleToggle}></div>
      : null
    }
    </>
  )
}

export default MobileMenu