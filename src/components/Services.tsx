import { BadgeCheck, FileCheck2, Scale } from 'lucide-react'
import { complianceNote, services } from '../data/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Services() {
  const statutoryFrameworks =
    services.find((service) => service.id === 'compliance')?.points ?? []
  const bestPracticeStandards = ['ISO 45001', 'ISO 14001', 'OHSAS guidelines']

  return (
    <section className="section section--soft" id="services">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            accent="What"
            title="We Deliver"
          />
        </Reveal>

        <div className="services-layout">
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
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="compliance-note" delay={120}>
            <div className="compliance-note__seal" aria-hidden="true">
              <BadgeCheck />
            </div>
            <div className="compliance-note__copy">
              <h3>{complianceNote.title}</h3>
              <p>{complianceNote.description}</p>
              <p>{complianceNote.standards}</p>
            </div>
            <div className="compliance-note__register" aria-label="Compliance references">
              <div>
                <h4>
                  <Scale aria-hidden="true" />
                  Legislative frameworks
                </h4>
                <ul>
                  {statutoryFrameworks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>
                  <FileCheck2 aria-hidden="true" />
                  Best-practice standards
                </h4>
                <ul>
                  {bestPracticeStandards.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
