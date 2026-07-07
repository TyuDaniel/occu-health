import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { processSteps } from '../data/siteContent'
import { Reveal } from './Reveal'
import type { CSSProperties } from 'react'

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(-1)

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
                className={`timeline-step${activeStep === index ? ' is-active' : ''}`}
                key={step.title}
                style={
                  {
                    '--node-delay': `${260 + index * 130}ms`,
                    '--step-delay': `${180 + index * 130}ms`,
                  } as CSSProperties
                }
              >
                <button
                  className="timeline-step__button"
                  type="button"
                  aria-expanded={activeStep === index}
                  aria-controls={`process-step-${index + 1}`}
                  onClick={() => setActiveStep((current) => (current === index ? -1 : index))}
                >
                  <span className="timeline-node">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </span>
                  <span className="timeline-step__title">{step.title}</span>
                  <ChevronDown className="timeline-step__icon" aria-hidden="true" />
                </button>
                <p id={`process-step-${index + 1}`}>{step.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
