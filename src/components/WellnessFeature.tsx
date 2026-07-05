import { wellnessFeatures } from '../data/siteContent'
import { Reveal } from './Reveal'

export function WellnessFeature() {
  return (
    <section className="section section--white wellness-section" id="wellness">
      <div className="page-shell wellness-layout">
        <Reveal className="wellness-intro">
          <p className="section-label">Workforce Wellness</p>
          <h2>
            Wellness Support.
            <span>Sized for You.</span>
          </h2>
          <p>
            Occupational health-led corporate wellness screening, clinically
            governed, GDPR-compliant and delivered at your workplace across
            Ireland.
          </p>
        </Reveal>

        <div className="wellness-grid">
          {wellnessFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Reveal
                className="wellness-card"
                delay={index * 60}
                key={feature.title}
              >
                <Icon aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
