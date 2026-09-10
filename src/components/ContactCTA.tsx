import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { contactPeople } from '../data/siteContent'
import { Reveal } from './Reveal'

const offices = [
  {
    city: 'Portlaoise',
    address: 'Vision 85, Clonminam Business Park, Knockmay, Portlaoise, Co. Laois, R32 F5T6',
    href: 'https://www.google.com/maps/search/?api=1&query=OccUhealth%2C%20Vision%2085%2C%20Clonminam%20Business%20Park%2C%20Knockmay%2C%20Portlaoise%2C%20Co.%20Laois%2C%20R32%20F5T6',
  },
  {
    city: 'Galway',
    address: 'Platform 94, Mervue Business Park, Galway, H91 D932',
    href: 'https://www.google.com/maps/search/?api=1&query=Platform%2094%2C%20Mervue%20Business%20Park%2C%20Galway%2C%20H91%20D932',
  },
]

export function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="page-shell">
        <div className="contact-banner">
          <Reveal className="contact-banner__intro">
            <h2>Get in touch</h2>
            <p>
              Let&apos;s talk about how OccUhealth can support your people and
              your workplace.
            </p>
            <a className="contact-banner__email" href="mailto:enquiries@occuhealth.ie">
              <Mail aria-hidden="true" />
              <span>
                <small>Email our team</small>
                enquiries@occuhealth.ie
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="contact-banner__details" delay={140}>
            <div className="contact-banner__group contact-banner__team">
              <h3>Speak with our team</h3>
              <div className="contact-banner__contact-list">
                {contactPeople.map((person) => (
                  <a href={person.phoneHref} key={person.name}>
                    <Phone aria-hidden="true" />
                    <span>
                      <small>{person.name}</small>
                      {person.phone}
                    </span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-banner__group contact-banner__locations">
              <h3>Find us</h3>
              <div className="contact-banner__offices">
                {offices.map((office) => (
                  <address key={office.city}>
                    <MapPin aria-hidden="true" />
                    <span>
                      <strong>{office.city}</strong>
                      <span>{office.address}</span>
                      <a href={office.href} rel="noreferrer" target="_blank">
                        View on map <ArrowUpRight aria-hidden="true" />
                      </a>
                    </span>
                  </address>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
