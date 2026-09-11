import { wellnessCapabilities } from '../data/siteContent'
import { Reveal } from './Reveal'

const capabilitySummaries: Record<string, string> = {
  'Core health checks': 'Blood pressure, pulse, oxygen, BMI, smoking & alcohol',
  'Clinical screening': 'Cholesterol, glucose, phlebotomy, SCORE2 & 12-lead ECG',
  'Hearing & respiratory health': 'Audiometry & spirometry',
  'Musculoskeletal support': 'MSK, ergonomics, OH consultation & work ability',
  'Mental wellbeing & fatigue': 'PHQ-4, burnout, sleep & fatigue',
  'Insight & action planning': 'Personal summaries & plans, anonymised trends, management & ESG',
}

export function TailoredProgrammesSection() {
  return (
    <section className="tailored-section" id="packages" aria-labelledby="tailored-title">
      <div className="page-shell tailored-orbit">
        <div className="tailored-orbit__photo">
          <img
            className="tailored-orbit__workplace"
            src="/images/built-around-your-organisation.png"
            alt="A construction worker in protective equipment operating an elevated work platform at an industrial building site."
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 900px) 100vw, 44vw"
          />
          <div className="tailored-orbit__wash" aria-hidden="true" />

          <Reveal className="tailored-orbit__heading">
            <h2 id="tailored-title">
              Built around{' '}
              <span>your organisation.</span>
            </h2>
            <p>
              We bring the right clinical services together around your workforce,
              working environment and priorities.
            </p>
          </Reveal>
        </div>

        <div className="tailored-orbit__content">
          <Reveal className="tailored-orbit__intro">
            <h3>Occupational health that fits your business.</h3>
            <p>
              We tailor the right mix of screening, surveillance and clinical support
              around your people, workplace risks and priorities.
            </p>
          </Reveal>

          <div className="tailored-orbit__capabilities">
            {wellnessCapabilities.map((capability, index) => {
              const Icon = capability.icon

              return (
                <Reveal
                  className="tailored-orbit__capability"
                  delay={Math.min(index * 45, 180)}
                  key={capability.title}
                >
                  <span className="tailored-orbit__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capabilitySummaries[capability.title] ?? capability.examples}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="tailored-orbit__footer" delay={100}>
            <div>
              <strong>One coordinated programme.</strong>
              <span>Clinically led, delivered with minimal disruption.</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
