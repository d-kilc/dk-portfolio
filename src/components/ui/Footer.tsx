import { FunctionComponent } from 'preact'

const Footer: FunctionComponent = () => {
  return (
    <footer class="footer">
      <div class="container">
        <p>Built with Preact and Vite</p>
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
    </footer>   
  )
}

export default Footer