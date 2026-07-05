import { ArrowRight } from 'lucide-react'
import { services } from '../data/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section className="section section--soft" id="services">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            accent="What"
            title="We Deliver"
          >
            Integrated services across Occupational Health, EHS, absence,
            compliance and workforce wellbeing.
          </SectionHeading>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal
                className={`service-item${service.featured ? ' service-item--featured' : ''}`}
                delay={index * 55}
                key={service.id}
              >
                <div className="service-item__meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a href="#contact">
                  Learn more <ArrowRight aria-hidden="true" />
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
