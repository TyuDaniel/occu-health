import { Check, Minus } from 'lucide-react'
import { packageRows, wellnessPackages } from '../data/siteContent'
import { Reveal } from './Reveal'

const packageIds = wellnessPackages.map((item) => item.id)

export function PackagesSection() {
  return (
    <section className="packages-section" id="packages">
      <div className="page-shell">
        <Reveal className="packages-heading">
          <h2>
            <span>3</span> packages. <span>1</span> mission.
            <strong>A healthier workplace.</strong>
          </h2>
          <p>
            A clear Bronze, Silver and Gold structure for onsite workforce
            wellness screening, scaled around depth of assessment and clinical
            input.
          </p>
        </Reveal>

        <Reveal className="packages-board" delay={90}>
          <div className="packages-board__header">
            <div className="packages-board__intro">
              <span className="package-ring" aria-hidden="true" />
              <h3>What is inside our Wellness Packages</h3>
            </div>
            {wellnessPackages.map((item) => (
              <article className={`package-tier package-tier--${item.tone}`} key={item.id}>
                <span className="package-medal" aria-hidden="true" />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.duration}</p>
                  <strong>{item.title}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="package-rows" role="table" aria-label="Wellness package comparison">
            {packageRows.map((row) => (
              <div className="package-row" role="row" key={`${row.group ?? ''}-${row.label}`}>
                {row.group ? (
                  <div className="package-group" role="rowheader">
                    {row.group}
                  </div>
                ) : null}
                <div className="package-feature" role="cell">
                  {row.label}
                </div>
                {packageIds.map((id) => {
                  const included = row[id]

                  return (
                    <div
                      className={`package-cell${included ? ' is-included' : ''}`}
                      role="cell"
                      aria-label={`${wellnessPackages.find((item) => item.id === id)?.name}: ${
                        included ? 'included' : 'not included'
                      }`}
                      key={id}
                    >
                      {included ? <Check aria-hidden="true" /> : <Minus aria-hidden="true" />}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="package-mobile" aria-label="Wellness packages by tier">
          {wellnessPackages.map((tier) => (
            <Reveal className={`package-mobile-card package-mobile-card--${tier.tone}`} key={tier.id}>
              <h3>{tier.name}</h3>
              <p>{tier.duration}</p>
              <strong>{tier.title}</strong>
              <ul>
                {packageRows
                  .filter((row) => row[tier.id])
                  .map((row) => (
                    <li key={row.label}>
                      <Check aria-hidden="true" />
                      {row.label}
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
