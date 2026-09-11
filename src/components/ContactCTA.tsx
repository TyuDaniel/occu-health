import {
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import { contactPeople } from '../data/siteContent'
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

const contactOutcomes = [
  { label: 'Reduced absenteeism', Icon: ClipboardCheck },
  { label: 'Lower regulatory risk', Icon: ShieldCheck },
  { label: 'Increased productivity', Icon: TrendingUp },
  { label: 'Compliance focused', Icon: BadgeCheck },
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
            <ul className="contact-banner__assurances" aria-label="Why contact OccUhealth">
              {contactOutcomes.map(({ label, Icon }) => (
                <li key={label}>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
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

            <div className="contact-banner__team-intro">
              <h3>Speak directly with our occupational specialists</h3>
              <p>Practical guidance from the people behind your Occupational Health, EHS and workforce wellbeing support.</p>
            </div>

            <div className="contact-banner__contact-list">
              {contactPeople.map((person) => (
                <article className="contact-banner__person" key={person.name}>
                  <div>
                    <small>{person.role}</small>
                    <h3>{person.name}</h3>
                  </div>
                  <a href={person.phoneHref}>
                    <Phone aria-hidden="true" />
                    <span>
                      <small>Phone</small>
                      {person.phone}
                    </span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
