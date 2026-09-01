import { Check } from 'lucide-react'
import { services } from '../data/siteContent'
import { ProcessTimeline } from './ProcessTimeline'
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

const serviceGroups: ReadonlyArray<{
  id: string
  title: string
  serviceIds: readonly string[]
}> = [
  {
    id: 'occupational-health',
    title: 'Occupational Health',
    serviceIds: ['occupational-health', 'absence'],
  },
  {
    id: 'environmental-health-safety',
    title: 'Environmental Health & Safety',
    serviceIds: ['ehs', 'advisory'],
  },
] as const

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

          <div className="services-core">
            {serviceGroups.map((group, groupIndex) => {
              const groupedServices = services.filter((service) =>
                group.serviceIds.includes(service.id),
              )
              const GroupIcon = groupedServices[0].icon

              return (
                <Reveal
                  className={`service-group service-group--${group.id}`}
                  delay={groupIndex * 80}
                  key={group.id}
                >
                  <div className="service-group__heading">
                    <span className="service-group__icon" aria-hidden="true">
                      <GroupIcon />
                    </span>
                    <h3>{group.title}</h3>
                  </div>

                  <div className="service-group__services">
                    {groupedServices.map((service) => {
                      const featuredCopy = featuredServiceCopy[service.id]

                      return (
                        <article className="service-entry" key={service.id}>
                          <h4>{service.title}</h4>
                          {featuredCopy ? (
                            <>
                              <p className="service-entry__headline">
                                {featuredCopy.headline}
                              </p>
                              <p>{featuredCopy.summary}</p>
                            </>
                          ) : (
                            <p>{service.description}</p>
                          )}
                          <ul aria-label={`${service.title} services`}>
                            {service.points.map((point) => (
                              <li key={point}>
                                <Check aria-hidden="true" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      )
                    })}
                  </div>
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
