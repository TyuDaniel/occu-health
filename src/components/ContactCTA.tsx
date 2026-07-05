import { ArrowRight, Mail, Phone } from 'lucide-react'
import { contactPeople } from '../data/siteContent'
import { Reveal } from './Reveal'

export function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="page-shell contact-layout">
        <Reveal className="contact-copy">
          <h2>
            Ready to Make Business Health
            <span>More Personal?</span>
          </h2>
          <p>
            Speak to the Occuhealth team about your Occupational Health, EHS or
            workforce wellbeing requirements.
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
          <p className="contact-panel__label">Your first conversation</p>
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
