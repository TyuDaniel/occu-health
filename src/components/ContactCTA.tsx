import { ArrowRight, Mail, Phone } from 'lucide-react'
import { contactPeople } from '../data/siteContent'
import { Reveal } from './Reveal'

export function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="page-shell contact-layout">
        <Reveal className="contact-copy">
          <h2>
            Get
            <span>In Touch.</span>
          </h2>
          <p>
            Ready to make Occuhealth your preferred Occupational Health &
            Safety partner? Speak to our team today, we'd love to understand
            your challenges and show you what fully integrated Occupational
            Health and EHS can deliver for your organisation.
          </p>
          <div className="contact-actions">
            <a className="button button--lime" href="mailto:enquiries@occuhealth.ie">
              Get in Touch <ArrowRight aria-hidden="true" />
            </a>
            <a className="contact-link" href="mailto:enquiries@occuhealth.ie">
              <Mail aria-hidden="true" />
              enquiries@occuhealth.ie
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-panel" delay={100}>
          <p className="contact-panel__label">Occuhealth Ireland</p>
          <div className="contact-people">
            {contactPeople.map((person) => (
              <article className="contact-person-card" key={person.name}>
                <img
                  className="contact-portrait"
                  src={person.image}
                  alt={`${person.name}, ${person.role}`}
                  loading="lazy"
                  style={{ objectPosition: person.imagePosition }}
                />
                <div className="contact-person-card__body">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="phone-list">
            <a href="tel:+353838851340">
              <Phone aria-hidden="true" />
              083 885 1340
            </a>
            <a href="tel:+353863095495">
              <Phone aria-hidden="true" />
              086 309 5495
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
