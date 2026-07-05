import { processSteps } from '../data/siteContent'
import { Reveal } from './Reveal'

export function ProcessTimeline() {
  return (
    <section className="section section--soft process-section">
      <div className="page-shell">
        <Reveal className="process-heading">
          <h2>
            Simple. Seamless.
            <span>Delivered at Your Workplace.</span>
          </h2>
          <p>
            From first contact to completed clinic in as little as 3 weeks.
          </p>
        </Reveal>

        <div className="timeline" aria-label="Wellness delivery process">
          {processSteps.map((step, index) => (
            <Reveal className="timeline-step" delay={index * 70} key={step.title}>
              <div className="timeline-node">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
