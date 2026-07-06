import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { contactPeople, proofSignals } from '../data/siteContent'
import { Reveal } from './Reveal'

const mapsHref =
  'https://www.google.com/maps/search/?api=1&query=OccUhealth%2C%20Vision%2085%2C%20Clonminam%20Business%20Park%2C%20Knockmay%2C%20Portlaoise%2C%20Co.%20Laois%2C%20R32%20F5T6'

export function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="page-shell contact-web">
        <div className="contact-web__panel">
          <Reveal className="contact-web__copy">
            <img
              className="contact-wordmark"
              src="/logos/Horizontal%20Logo_White%20Green%20Trans.svg"
              alt="OccUhealth"
              loading="lazy"
            />
            <p className="section-label">OccUhealth Ireland</p>
            <h2>
              Get
              <span>In Touch</span>
            </h2>
            <p>
              Ready to make OccUhealth your preferred Occupational Health &
              Safety partner? Speak to our team today, we'd love to understand
              your challenges and show you what fully integrated Occupational
              Health and EHS can deliver for your organisation.
            </p>
            <a className="button button--lime" href="mailto:enquiries@occuhealth.ie">
              Start the Conversation <ArrowRight aria-hidden="true" />
            </a>
            <div className="contact-proof-strip">
              {proofSignals.map((signal) => {
                const Icon = signal.icon

                return (
                  <span className="contact-proof" key={signal.label}>
                    <Icon aria-hidden="true" />
                    {signal.label}
                  </span>
                )
              })}
            </div>
          </Reveal>

          <Reveal className="contact-web__details" delay={120}>
            <address className="contact-routes">
              <a href="mailto:enquiries@occuhealth.ie">
                <Mail aria-hidden="true" />
                <span>Email</span>
                <strong>enquiries@occuhealth.ie</strong>
              </a>
              <a href={mapsHref} rel="noreferrer" target="_blank">
                <MapPin aria-hidden="true" />
                <span>Location</span>
                <strong>Portlaoise</strong>
              </a>
            </address>

            <div className="contact-team-note">
              <p className="contact-team-note__label">Led by qualified occupational health nurses</p>
              <p>
                Speak directly with the clinical team behind your Occupational
                Health, EHS and workforce wellbeing programme.
              </p>
            </div>

            <div className="contact-people-list">
              {contactPeople.map((person) => (
                <article className="contact-person" key={person.name}>
                  <div className="contact-person__photo">
                    <img
                      src={person.image}
                      alt={`${person.name}, ${person.role}`}
                      loading="lazy"
                      style={{ objectPosition: person.imagePosition }}
                    />
                  </div>
                  <div className="contact-person__body">
                    <p>{person.role}</p>
                    <h3>{person.name}</h3>
                    <a className="contact-person__phone" href={person.phoneHref}>
                      <Phone aria-hidden="true" />
                      <span>Phone</span>
                      <strong>{person.phone}</strong>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
