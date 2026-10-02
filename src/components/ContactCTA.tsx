import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Logo } from './Logo'
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
            <Logo variant="inverse" className="contact-banner__wordmark" />
            <p>
              Let&apos;s talk about how OccUhealth can support your people and
              your workplace.
            </p>
            <a className="contact-banner__email" href="mailto:enquiries@occuhealth.ie">
              <Mail aria-hidden="true" />
              <span>Start the conversation</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="contact-banner__details" delay={140}>
            <div className="contact-banner__utilities">
              <a className="contact-banner__utility contact-banner__utility--email" href="mailto:enquiries@occuhealth.ie">
                <Mail aria-hidden="true" />
                <span>
                  <small>Email</small>
                  enquiries@occuhealth.ie
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="contact-banner__utility contact-banner__utility--phone" href="tel:+353838851340">
                <Phone aria-hidden="true" />
                <span>
                  <small>Phone</small>
                  083 885 1340
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              {offices.map((office) => (
                <a
                  className="contact-banner__utility"
                  href={office.href}
                  key={office.city}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MapPin aria-hidden="true" />
                  <span>
                    <small>{office.city} office</small>
                    {office.address}
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  )
}
