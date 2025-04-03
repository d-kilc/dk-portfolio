import { useState, useEffect } from 'preact/hooks'
import './app.css'

export function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div id="app">
      <div id="content">
        <header class="header">
          <div class="container">
            <nav class="nav">
              <h2>DK</h2>
              <div class="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button class="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                  {theme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  <span>{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
                </button>
              </div>
            </nav>
            <div class="hero">
              <h1>Daniel Kilcullen</h1>
              <p>Full-stack developer crafting beautiful and functional web experiences</p>
            </div>
          </div>
        </header>

        <section id="about" class="section">
          <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="card">
              <p>
                I'm a passionate developer with expertise in modern web technologies.
                I love creating elegant solutions to complex problems and building
                user-friendly applications that make a difference.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" class="section">
          <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="grid">
              <div class="card">
                <h3>Project One</h3>
                <p>A modern web application built with React and TypeScript</p>
              </div>
              <div class="card">
                <h3>Project Two</h3>
                <p>Full-stack application with Node.js and PostgreSQL</p>
              </div>
              <div class="card">
                <h3>Project Three</h3>
                <p>Mobile-first responsive website with modern design</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="section">
          <div class="container">
            <h2 class="section-title">Get in Touch</h2>
            <div class="card">
              <p>
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
              <a href="mailto:your.email@example.com" class="nav-links">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>© 2024 Daniel K. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
