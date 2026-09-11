import { ArrowRight } from 'lucide-react'
import { images } from '../data/siteContent'

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-section__media">
        <img
          className="hero-section__image"
          src={images.hero}
          alt="A workplace safety specialist carrying out an inspection in an industrial facility."
          width="1918"
          height="820"
          sizes="100vw"
          fetchPriority="high"
        />
      </div>

      <div className="hero-section__content">
        <div className="hero-section__lockup">
          <img
            className="hero-wordmark"
            src="/brand/wordmark-inverse.svg"
            alt="OccUhealth"
            width="1000"
            height="300"
          />

          <h1 id="hero-title">
            Healthy People. <span>Safe Workplaces.</span> Better Futures.
          </h1>
        </div>
      </div>

      <div className="hero-rail">
        <p className="hero-copy">
          One trusted partner for healthier people and safer workplaces across Ireland.
        </p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="hero-services-link" href="#services">
            Explore our services <ArrowRight aria-hidden="true" />
          </a>
          <a className="button hero-contact-button" href="#contact">
            Speak to Our Team <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
