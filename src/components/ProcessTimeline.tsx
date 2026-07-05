import { processSteps } from '../data/siteContent'
import { Reveal } from './Reveal'
import type { CSSProperties } from 'react'

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

        <Reveal className="timeline-shell" delay={80}>
          <div className="timeline" aria-label="Wellness delivery process">
            {processSteps.map((step, index) => (
              <article
                className="timeline-step"
                key={step.title}
                style={
                  {
                    '--node-delay': `${260 + index * 130}ms`,
                    '--step-delay': `${180 + index * 130}ms`,
                  } as CSSProperties
                }
              >
                <div className="timeline-node">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
