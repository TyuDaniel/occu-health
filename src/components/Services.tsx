import { Check } from 'lucide-react'
import { services } from '../data/siteContent'
import { Reveal } from './Reveal'

const featuredServiceCopy: Record<
  string,
  { headline: string; summary: string }
> = {
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
}

const primaryServices = services.filter((service) => service.featured)
const supportingServices = services.filter((service) => !service.featured)

export function Services() {
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

          <div className="services-core services-primary">
            {primaryServices.map((service, index) => {
              const Icon = service.icon
              const copy = featuredServiceCopy[service.id]

              return (
                <Reveal
                  className={`service-feature service-feature--${service.id}`}
                  delay={index * 80}
                  key={service.id}
                >
                  <div className="service-feature__heading">
                    <span className="service-feature__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <p className="service-feature__name">{service.title}</p>
                  </div>
                  <h3>{copy.headline}</h3>
                  <p className="service-feature__summary">{copy.summary}</p>
                  <ul aria-label={`${service.title} services`}>
                    {service.points.map((point) => (
                      <li key={point}>
                        <Check aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="services-supporting" delay={100}>
            <div className="services-supporting__intro">
              <p>Supporting services</p>
              <h3>Connected expertise when your programme needs it.</h3>
            </div>

            <div className="services-supporting__items">
              {supportingServices.map((service) => {
                const Icon = service.icon

                return (
                  <article className="supporting-service" key={service.id}>
                    <span className="supporting-service__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <ul aria-label={`${service.title} includes`}>
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
