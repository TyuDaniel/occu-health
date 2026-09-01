import { Building2, Check, UsersRound } from 'lucide-react'
import { keyOutcomes, valueColumns } from '../data/siteContent'
import { Reveal } from './Reveal'

function ValueAudience({ index }: { index: 0 | 1 }) {
  const audience = valueColumns[index]
  const Icon = index === 0 ? Building2 : UsersRound
  const modifier = index === 0 ? 'organisation' : 'employees'

  return (
    <Reveal className={`value-audience value-audience--${modifier}`} delay={index * 80}>
      <div className="value-audience__heading">
        <span className="value-audience__icon" aria-hidden="true">
          <Icon />
        </span>
        <h3>{audience.title}</h3>
      </div>

      <ul>
        {audience.items.map((item) => (
          <li key={item}>
            <span className="value-check" aria-hidden="true">
              <Check />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export function ValueSection() {
  return (
    <section className="section value-section" id="value-we-bring" aria-labelledby="value-title">
      <div className="page-shell value-shell">
        <Reveal className="value-masthead">
          <img
            className="value-masthead__photo"
            src="/images/value-workplace-partnership.webp"
            alt="An occupational health clinician speaking with an employee during an onsite workplace review."
            width="1918"
            height="820"
            loading="lazy"
            decoding="async"
          />
          <div className="value-masthead__wash" aria-hidden="true" />

          <div className="value-masthead__copy">
            <p className="value-kicker">One partner for the whole picture</p>
            <h2 id="value-title">
              <span>The Value</span> We Bring.
            </h2>
            <p>
              Integrated Occupational Health and EHS support for your organisation,
              your employees and the outcomes they share.
            </p>
          </div>
        </Reveal>

        <div className="value-audiences">
          <ValueAudience index={0} />
          <ValueAudience index={1} />
        </div>

        <div className="value-outcomes" aria-label="Supporting outcomes">
          {keyOutcomes.map((outcome, index) => (
            <Reveal className="value-outcome" delay={index * 60} key={outcome.title}>
              <span className="value-outcome__marker" aria-hidden="true" />
              <div>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
