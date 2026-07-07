import { complianceNote, services } from '../data/siteContent'
import { Reveal } from './Reveal'

export function Services() {
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
                className={`service-panel service-panel--${service.id}`}
                delay={index * 65}
                key={service.id}
              >
                <h3>{service.title}</h3>
                <div className="service-panel__body">
                  <div className="service-panel__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <p>{service.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="services-assurance" delay={180}>
          <img src="/logos/oo-master-transparent.webp" alt="" aria-hidden="true" />
          <strong>Compliance note</strong>
          <p>
            {complianceNote.standards} Fully aligned with Irish, European and
            global legislative frameworks.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
