import { contactPeople, images, proofSignals } from '../data/siteContent'
import { Reveal } from './Reveal'

export function ContactCTA() {
  const [sharon, cathy] = contactPeople
  const slideImage = { backgroundImage: `url(${images.hero})` }

  return (
    <section className="contact-cta" id="contact">
      <div className="contact-slide__wash contact-slide__wash--top" style={slideImage}>
        <Reveal className="contact-slide__intro">
          <div className="contact-slide__brand" aria-label="Occuhealth">
            <span className="contact-slide__brand-o">O</span>
            <span>cc</span>
            <span className="contact-slide__brand-u">U</span>
            <span>health</span>
            <span className="contact-slide__pulse" aria-hidden="true" />
          </div>
          <div className="contact-slide__signals" aria-label="Key outcomes">
            {proofSignals.map((signal) => {
              const Icon = signal.icon

              return (
                <span className="contact-slide__signal" key={signal.label}>
                  <Icon aria-hidden="true" />
                  {signal.label}
                </span>
              )
            })}
          </div>
        </Reveal>
      </div>

      <div className="contact-slide__middle">
        <div className="page-shell contact-slide__band">
          {sharon && <ContactPerson person={sharon} />}

          <Reveal className="contact-slide__center" delay={90}>
            <h2>
              <span>Get</span>
              In Touch
            </h2>
            <address className="contact-slide__details">
              <a href="https://www.occuhealth.ie">Website: www.occuhealth.ie</a>
              <a href="mailto:enquiries@occuhealth.ie">
                Email: enquiries@occuhealth.ie
              </a>
              <span>Location: Portlaoise, Co. Laois</span>
            </address>
          </Reveal>

          {cathy && <ContactPerson person={cathy} delay={150} />}
        </div>
      </div>

      <div className="contact-slide__wash contact-slide__wash--bottom" style={slideImage}>
        <Reveal className="contact-slide__close">
          <h3>Occuhealth Ireland</h3>
          <p>
            Ready to make Occuhealth your preferred Occupational Health & Safety
            partner? Speak to our team today, we'd love to understand your
            challenges and show you what fully integrated Occupational Health
            and EHS can deliver for your organisation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

type ContactPersonProps = {
  person: (typeof contactPeople)[number]
  delay?: number
}

function ContactPerson({ person, delay = 0 }: ContactPersonProps) {
  return (
    <Reveal className="contact-slide-person" delay={delay}>
      <div className="contact-slide-person__portrait">
        <img
          src={person.image}
          alt={`${person.name}, ${person.role}`}
          loading="lazy"
          style={{ objectPosition: person.imagePosition }}
        />
      </div>
      <h3>{person.name}</h3>
      <a href={person.phoneHref}>{person.phone}</a>
      <p>{person.role}</p>
    </Reveal>
  )
}
