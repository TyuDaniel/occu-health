import { ArrowRight } from 'lucide-react'
import { images, trustItems } from '../data/siteContent'

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-section__layout">
        <div className="hero-section__panel">
          <div className="hero-section__content">
            <div className="hero-copy-stack">
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
        </div>

        <div className="hero-section__media">
          <img
            className="hero-section__image"
            src={images.hero}
            alt="A workplace safety specialist carrying out an inspection in an industrial facility."
            width="1918"
            height="820"
            sizes="(max-width: 980px) 100vw, 54vw"
            fetchPriority="high"
          />
          <img
            className="brand-o brand-o--hero"
            src="/brand/symbol-inverse.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
