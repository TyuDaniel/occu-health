import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Business Health. Made Personal.</p>
        </div>

        <nav aria-label="Footer navigation">
          <h2>Navigation</h2>
          <a href="#who-we-are">Who We Are</a>
          <a href="#services">Services</a>
          <a href="#why-occuhealth">Why Occuhealth</a>
          <a href="#wellness">Wellness</a>
          <a href="#contact">Contact</a>
        </nav>

        <div>
          <h2>Services</h2>
          <p>Occupational Health</p>
          <p>Environmental Health & Safety</p>
          <p>Workforce Wellbeing</p>
          <p>Absence & Case Management</p>
        </div>

        <address>
          <h2>Contact</h2>
          <a href="https://www.occuhealth.ie">www.occuhealth.ie</a>
          <a href="mailto:enquiries@occuhealth.ie">enquiries@occuhealth.ie</a>
          <a href="tel:+353838851340">083 885 1340</a>
          <a href="tel:+353863095495">086 309 5495</a>
          <span>Portlaoise, Co. Laois</span>
        </address>
      </div>

      <div className="page-shell footer-bottom">
        <p>© {year} Occuhealth Ireland</p>
        <div>
          <a href="#top">Privacy Policy</a>
          <a href="#top">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
