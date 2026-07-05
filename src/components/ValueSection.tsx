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
            A single partner view across workforce health, safety obligations
            and practical business outcomes.
          </SectionHeading>
        </Reveal>

        <div className="value-columns">
          {valueColumns.map((column, index) => (
            <Reveal className="value-column" delay={index * 90} key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
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
    </section>
  )
}
