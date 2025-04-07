import { motion } from 'framer-motion'
import { FunctionComponent } from 'preact'

export type TimelineEvent = {
  title: string
  subtitle: string
  smallText: string
  bullets: Array<string>
  badges?: Array<string>
}

type TimelineProps = {
  events: Array<TimelineEvent>
}

const Timeline: FunctionComponent<TimelineProps> = ({ events }) => {
  return (
    <section className="timeline">
      <div className="timeline-container">
        <div className="timeline-line-container">
          {/* Vertical line */}
          <div className="timeline-line" />
          
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className='timeline-content-wrapper'>
                {/* Timeline dot */}
                <div className="timeline-dot" />
                
                {/* Content */}
                <div className="timeline-content">
                  <div className="timeline-card">
                    <h3 className="timeline-title">{event.title}</h3>
                    <h4 className="timeline-subtitle">{event.subtitle}</h4>
                    <p className="timeline-small-text">{event.smallText}</p>
                    <ul className="timeline-bullets-list">
                      {event.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    {event.badges && (
                      <div className="timeline-badge-container">
                        {event.badges.map((badge, i) => (
                          <span key={i} className="timeline-badge">
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline 