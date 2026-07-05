import { differentiators, images, proofSignals } from '../data/siteContent'
import { Reveal } from './Reveal'

export function WhyOccuhealth() {
  return (
    <section className="section why-section" id="why-occuhealth">
      <div className="page-shell why-layout">
        <Reveal className="why-media">
          <div className="why-ring" aria-hidden="true" />
          <img
            src={images.workplace}
            alt="A professional working in a modern technical workplace environment."
            loading="lazy"
          />
        </Reveal>

        <Reveal className="why-content" delay={80}>
          <h2>
            One Partner.
            <span>Complete Coverage.</span>
          </h2>
          <p>
            Occupational Health and Environmental Health & Safety, aligned
            around your people and your organisation.
          </p>

          <div className="differentiators">
            {differentiators.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>

      <div className="page-shell proof-strip" aria-label="Capability signals">
        {proofSignals.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.label}>
              <Icon aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
