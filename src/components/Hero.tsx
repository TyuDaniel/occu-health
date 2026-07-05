import { ArrowRight } from 'lucide-react'
import { images, trustItems } from '../data/siteContent'

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <img
        className="hero-section__image"
        src={images.hero}
        alt="A workplace meeting with hands, notebooks and a laptop on a conference table."
        fetchPriority="high"
      />
      <div className="hero-section__overlay" aria-hidden="true" />
      <div className="hero-ring hero-ring--blue" aria-hidden="true" />
      <div className="hero-ring hero-ring--lime" aria-hidden="true" />

      <div className="hero-section__content page-shell">
        <p className="hero-eyebrow">
          Occupational Health / EHS / Workforce Wellbeing
        </p>
        <h1 id="hero-title">
          Business Health.
          <span>Made Personal.</span>
        </h1>
        <p className="hero-copy">
          Integrated Occupational Health, Environmental Health & Safety and
          workforce wellbeing solutions for organisations across Ireland.
        </p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button--lime" href="#contact">
            Speak to Our Team Today <ArrowRight aria-hidden="true" />
          </a>
          <a className="button button--outline" href="#services">
            Explore Our Services <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <ul className="trust-strip" aria-label="Core capabilities">
          {trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
