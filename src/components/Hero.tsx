import { ArrowRight } from 'lucide-react'
import { images, trustItems } from '../data/siteContent'

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <img
        className="hero-section__image"
        src={images.hero}
        alt="A medical professional speaking with a patient in an office consultation room."
        fetchPriority="high"
      />
      <div className="hero-section__overlay" aria-hidden="true" />
      <img
        className="brand-o brand-o--hero"
        src="/logos/oo-master-transparent.webp"
        alt=""
        aria-hidden="true"
      />

      <div className="hero-section__content page-shell">
        <div className="hero-copy-stack">
          <p className="hero-eyebrow">
            Occupational Health, Environmental Health & Safety Specialists
          </p>
          <h1 id="hero-title">
            Healthy People.
            <span>Safe Workplaces.</span>
            Better Futures.
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
      </div>
    </section>
  )
}
