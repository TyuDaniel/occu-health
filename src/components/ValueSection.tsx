import { Check } from 'lucide-react'
import { keyOutcomes, valueColumns } from '../data/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ValueSection() {
  return (
    <section className="section value-section">
      <div className="page-shell">
        <Reveal>
          <SectionHeading title="We Bring" accent="The Value" inverse>
            Integrated Occupational Health and EHS support for your organisation,
            your employees and your key outcomes.
          </SectionHeading>
        </Reveal>

        <div className="value-layout-grid">
          <div className="value-columns">
            <Reveal className="value-column value-column--organisation">
              <h3>{valueColumns[0].title}</h3>
              <ul>
                {valueColumns[0].items.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="value-divider" aria-hidden="true">
              <span>Aligned impact</span>
            </div>

            <Reveal className="value-column value-column--employees" delay={90}>
              <h3>{valueColumns[1].title}</h3>
              <ul>
                {valueColumns[1].items.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="outcomes-grid">
            {keyOutcomes.map((outcome, index) => (
              <Reveal className="outcome" delay={index * 75} key={outcome.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
