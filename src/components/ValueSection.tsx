import { Check } from 'lucide-react'
import { keyOutcomes, valueColumns } from '../data/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ValueSection() {
  return (
    <section className="section value-section" id="value-we-bring" aria-label="The Value We Bring">
      <div className="page-shell value-shell">
        <Reveal>
          <SectionHeading title="We Bring" accent="The Value">
            Integrated Occupational Health and EHS support for your organisation.
          </SectionHeading>
        </Reveal>

        <div className="value-layout-grid">
          <div className="value-columns">
            <Reveal className="value-column value-column--organisation">
              <h3>{valueColumns[0].title}</h3>
              <ul>
                {valueColumns[0].items.map((item) => (
                  <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </Reveal>

            <div className="value-divider" aria-hidden="true">
              <img src="/brand/symbol-blue.svg" alt="" />
            </div>

            <Reveal className="value-column value-column--employees" delay={90}>
              <h3>{valueColumns[1].title}</h3>
              <ul>
                {valueColumns[1].items.map((item) => (
                  <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="value-flow">
            <svg className="value-flow__track value-flow__track--horizontal" viewBox="0 0 1200 126" preserveAspectRatio="none" aria-hidden="true">
              <path className="value-flow__connector" d="M 340 2 L 406 63 L 340 124" />
              <path className="value-flow__connector" d="M 740 2 L 806 63 L 740 124" />
              <path className="value-flow__outline" d="M 6 2 H 1132 L 1198 63 L 1132 124 H 6 Q 2 124 2 120 V 6 Q 2 2 6 2 Z" />
            </svg>
            <svg className="value-flow__track value-flow__track--vertical" viewBox="0 0 400 360" preserveAspectRatio="none" aria-hidden="true">
              <path className="value-flow__connector" d="M 2 103 L 200 137 L 398 103" />
              <path className="value-flow__connector" d="M 2 223 L 200 257 L 398 223" />
              <path className="value-flow__outline" d="M 6 2 H 394 Q 398 2 398 6 V 320 L 200 358 L 2 320 V 6 Q 2 2 6 2 Z" />
            </svg>
            <ol className="outcomes-grid" aria-label="The value we bring">
              {keyOutcomes.map((outcome) => (
                <li className="outcome" key={outcome.title}>
                  <h3>{outcome.title}</h3>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
