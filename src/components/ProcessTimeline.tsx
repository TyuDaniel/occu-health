import { ChevronDown, MapPin } from 'lucide-react'
import { useState } from 'react'
import { processSteps } from '../data/siteContent'
import { Reveal } from './Reveal'
import type { CSSProperties } from 'react'

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(-1)

  return (
    <section className="section process-section" id="how-we-work">
      <div className="page-shell services-process">
        <Reveal className="process-heading">
          <div>
            <p className="section-label">How We Work</p>
            <h2>
              Simple. Seamless.
              <span>Built Around Your Organisation.</span>
            </h2>
          </div>
          <p>
            From first conversation to a tailored occupational health programme,
            our clinical team keeps every step clear and practical.
          </p>
        </Reveal>

        <Reveal className="timeline-shell" delay={80}>
          <div className="timeline" aria-label="Occupational health service process">
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

        <Reveal className="services-coverage" delay={140}>
          <MapPin aria-hidden="true" />
          <div>
            <strong>
              Occupational health services delivered nationwide, with offices in
              Portlaoise and Galway.
            </strong>
            <p>
              Vision 85, Portlaoise <span aria-hidden="true">·</span> Platform 94,
              Mervue Business Park, Galway, H91 D932
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
