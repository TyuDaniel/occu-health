import { services } from '../data/siteContent'
import { Reveal } from './Reveal'

const serviceImages = [
  {
    src: '/images/occupational-health-audiometry.webp',
    alt: 'An occupational health clinician carrying out a hearing assessment with a maintenance technician.',
    position: '54% center',
    width: 1536,
    height: 1024,
  },
  {
    src: '/images/ehs-team-on-site.webp',
    alt: 'Two workplace safety specialists reviewing an on-site inspection together.',
    position: '32% center',
    width: 740,
    height: 400,
  },
  {
    src: '/images/workplace-ergonomic-guidance.webp',
    alt: 'Practical workplace guidance being delivered to an employee.',
    position: '46% center',
    width: 1536,
    height: 1024,
  },
  {
    src: '/images/workplace-wellness-screening.webp',
    alt: 'A clinician carrying out a workplace wellbeing screening.',
    position: 'center',
    width: 1536,
    height: 1024,
  },
]

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="services-chapters">
        {services.map((service, index) => {
          const image = serviceImages[index]
          const Icon = service.icon

          return (
            <article
              className={`service-chapter service-chapter--${index + 1}`}
              id={service.id}
              key={service.id}
            >
              <div className="page-shell service-chapter__layout">
                <Reveal className="service-chapter__media" delay={40}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading={index > 0 ? 'lazy' : 'eager'}
                    decoding="async"
                    sizes="(max-width: 920px) 100vw, 46vw"
                    style={{ objectPosition: image.position }}
                  />
                  <span className="service-chapter__icon" aria-hidden="true"><Icon /></span>
                </Reveal>

                <Reveal className="service-chapter__content" delay={120}>
                  <h3>{service.title}</h3>
                  <p className="service-chapter__summary">{service.description}</p>
                  <ul aria-label={`${service.title} services`}>
                    {service.items.map((item) => (
                      <li key={item.title}>{item.title}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
