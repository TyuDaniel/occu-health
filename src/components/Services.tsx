import { Check } from 'lucide-react'
import { services } from '../data/siteContent'
import { ProcessTimeline } from './ProcessTimeline'
import { Reveal } from './Reveal'

const featuredServiceCopy = {
  'occupational-health': {
    headline:
      'Protect employee health and make confident fitness-for-work decisions.',
    summary:
      "Clinical clarity around a person's health, their role and workplace exposure.",
  },
  absence: {
    headline:
      'Support employees back to work with fair, practical clinical guidance.',
    summary:
      'Impartial support when absence is recurring, complex or long-term.',
  },
} as const

const featuredPointIndexes = [0, 1, 2, 4]

export function Services() {
  const featuredServices = services.filter(
    (service) => service.id === 'occupational-health' || service.id === 'absence',
  )
  return (
    <section className="section services-section" id="services">
      <div className="page-shell services-shell">
        <div className="services-frame">
          <Reveal className="services-intro">
            <img
              className="services-intro__photo"
              src="/images/occuhealth-personal-consultation.webp"
              alt="An occupational health professional speaking with an employee"
              loading="lazy"
              decoding="async"
            />
            <div className="services-intro__copy">
              <p>Clinical support for healthier workplaces</p>
              <h2>Our services</h2>
              <span>Two connected services, delivered by one clinical team.</span>
            </div>
          </Reveal>

          <div className="services-core">
            {featuredServices.map((service, index) => {
              const copy =
                featuredServiceCopy[
                  service.id as keyof typeof featuredServiceCopy
                ]

              return (
                <Reveal
                  className={`service-feature service-feature--${service.id}`}
                  delay={index * 80}
                  key={service.id}
                >
                  <p className="service-feature__name">{service.title}</p>
                  <h3>{copy.headline}</h3>
                  <p className="service-feature__summary">{copy.summary}</p>
                  <ul aria-label={`${service.title} services`}>
                    {featuredPointIndexes.map((pointIndex) => (
                      <li key={service.points[pointIndex]}>
                        <Check aria-hidden="true" />
                        <span>{service.points[pointIndex]}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>

        <ProcessTimeline />
      </div>
    </section>
  )
}
