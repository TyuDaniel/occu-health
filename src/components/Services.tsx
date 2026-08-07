import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { complianceNote, services } from '../data/siteContent'
import { ProcessTimeline } from './ProcessTimeline'
import { Reveal } from './Reveal'

export function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <section className="section section--soft services-section" id="services">
      <div className="page-shell services-shell">
        <Reveal className="services-lede">
          <div className="services-lede__title">
            <p className="section-label">What We Deliver</p>
            <h2>
              Business Health.
              <span>Made Personal.</span>
            </h2>
          </div>
          <p className="services-lede__copy">
            Occupational Health, absence management, Environmental Health &
            Safety, wellbeing and training support in one joined-up service.
          </p>
        </Reveal>

        <div className="services-matrix">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal
                className={`service-panel service-panel--${service.id}${service.featured ? ' service-panel--featured' : ''}${expandedService === service.id ? ' is-expanded' : ''}`}
                delay={index * 65}
                key={service.id}
              >
                <h3>{service.title}</h3>
                <div className="service-panel__body">
                  <div className="service-panel__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <div className="service-panel__copy">
                    <p>{service.description}</p>
                    {service.featured && (
                      <>
                        <button
                          className="service-panel__toggle"
                          type="button"
                          aria-expanded={expandedService === service.id}
                          aria-controls={`${service.id}-details`}
                          onClick={() =>
                            setExpandedService((current) =>
                              current === service.id ? null : service.id,
                            )
                          }
                        >
                          {expandedService === service.id
                            ? 'Hide service details'
                            : 'View service details'}
                          <ChevronDown aria-hidden="true" />
                        </button>
                        <ul
                          id={`${service.id}-details`}
                          aria-label={`${service.title} services`}
                        >
                          {service.points.map((point) => (
                            <li key={point}>
                              <Check aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="services-assurance" delay={180}>
          <img src="/logos/oo-master-white-transparent.webp" alt="" aria-hidden="true" />
          <strong>Compliance note</strong>
          <p>
            {complianceNote.standards} Fully aligned with Irish, European and
            global legislative frameworks.
          </p>
        </Reveal>

        <ProcessTimeline />
      </div>
    </section>
  )
}
