import { services } from '../data/siteContent'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section className="section services-section" id="services">
      <Reveal className="services-intro">
        <img
          className="services-intro__brand-o"
          src="/logos/oo-master-white-transparent.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="page-shell services-intro__copy">
          <p>Clinical support for healthier workplaces</p>
          <h2>Our services</h2>
          <span>Occupational health, safety, strategic support and wellbeing — brought together around your organisation.</span>
        </div>
      </Reveal>

      <div className="services-rows">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <article
              className={`service-row service-row--${index + 1}`}
              id={service.id}
              key={service.id}
            >
              <div className="page-shell service-row__layout">
                <Reveal className="service-row__intro" delay={Math.min(index * 45, 150)}>
                  <span className="service-row__icon" aria-hidden="true"><Icon /></span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.image && (
                    <figure className="service-row__media">
                      <img src={service.image.src} alt={service.image.alt} loading="lazy" />
                    </figure>
                  )}
                </Reveal>
                <Reveal className="service-row__items" delay={Math.min(index * 45 + 70, 220)}>
                  <ul aria-label={`${service.title} services`}>
                    {service.items.map((item) => (
                      <li key={item.title}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </li>
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
