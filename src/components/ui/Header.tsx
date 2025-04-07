import { FunctionComponent } from 'preact'
import aviUrl from '../../assets/avi.jpg'

const Header: FunctionComponent = () => {
  return (
    <header class="header">
      <div class="container">
        <div class="hero">
          <img class='avatar' src={aviUrl} alt="Daniel Kilcullen" />
          <h1>Daniel Kilcullen</h1>
          <p>Full-stack developer, problem solver, and lifelong learner</p>
        </div>
      </div>
    </header>
  )
}

export default Header