import { Mail, MapPin, Phone } from 'lucide-react'

const serviceLinks = [
  ['Occupational Health', '#occupational-health'],
  ['Environmental Health & Safety', '#environmental-health-safety'],
  ['Strategic Advisory & Training', '#strategic-advisory-training'],
  ['Workforce Wellbeing', '#workforce-wellbeing'],
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <nav aria-label="Footer navigation">
          <h2>Explore</h2>
          <a href="#who-we-are">Who We Are</a>
          <a href="#services">Services</a>
          <a href="#workforce-wellbeing">Workforce Wellbeing</a>
          <a href="#contact">Contact</a>
        </nav>

        <nav aria-label="Service navigation">
          <h2>Services</h2>
          {serviceLinks.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <address className="footer-contact">
          <h2>Contact</h2>
          <a href="tel:+353838851340"><Phone aria-hidden="true" />083 885 1340</a>
          <a href="tel:+353863095495"><Phone aria-hidden="true" />086 309 5495</a>
          <a href="mailto:enquiries@occuhealth.ie"><Mail aria-hidden="true" />enquiries@occuhealth.ie</a>
        </address>

        <address className="footer-offices">
          <h2>Our offices</h2>
          <p><MapPin aria-hidden="true" /><span>Vision 85<br />Portlaoise</span></p>
          <p><MapPin aria-hidden="true" /><span>Platform 94, Mervue Business Park<br />Galway, H91 D932</span></p>
        </address>
      </div>

      <div className="page-shell footer-bottom">
        <p>© {year} OccUhealth Ireland</p>
        <p>Supporting organisations across Ireland.</p>
      </div>
    </footer>
  )
}
