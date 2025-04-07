import { FunctionComponent, ComponentChildren } from 'preact'

type SectionProps = {
  title: string
  id: string
  children: ComponentChildren
}

const Section: FunctionComponent<SectionProps> = ({ 
  title,
  id,
  children
}) => {
  return (
    <section id={id} class="section">
      <div class="container">
        <h2 class="section-title">{title}</h2>
        { children }
      </div>
    </section>
  )
}

export default Section