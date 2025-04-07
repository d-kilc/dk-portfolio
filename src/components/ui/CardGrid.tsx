import { type FunctionComponent, type ComponentChildren } from "preact";

type TCard = {
  title?: string
  subtitle?: string
  description?: string
  children?: ComponentChildren
}

type TCards = {
  cards: Array<TCard>
}

const Card: FunctionComponent<TCard> = ({
  title,
  subtitle,
  description,
  children
}) => {
  return (
    <div className='card'>
      { title ? <h3>{title}</h3> : null }
      { subtitle ? <h4>{subtitle}</h4> : null }
      { description ? <p>{description}</p> : null }
      { children }
    </div>
  )
}

const CardGrid: FunctionComponent<TCards> = ({cards}) => {
  return (
    <div class="grid">
      {cards.map((c, i) => <Card key={i} {...c} />)}
    </div>
  )
}

export { Card, CardGrid }