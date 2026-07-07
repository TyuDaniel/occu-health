import { Check, Minus } from 'lucide-react'
import { useState } from 'react'
import { packageRows, wellnessPackages } from '../data/siteContent'
import { Reveal } from './Reveal'

const packageIds = wellnessPackages.map((item) => item.id)

export function PackagesSection() {
  const [activePackage, setActivePackage] = useState<string | null>(null)

  return (
    <section className="packages-section" id="packages">
      <div className="page-shell">
        <Reveal className="packages-heading">
          <p className="section-label">Wellness Packages</p>
          <h2>
            <span>3</span> packages. <span>1</span> mission.
            <strong>A healthier workplace.</strong>
          </h2>
          <p>
            Choose the right level of occupational health-led screening for your
            workforce, from essential checks to a premium OH-led programme.
          </p>
        </Reveal>

        <Reveal className="packages-board" delay={90}>
          <div className="packages-board__header">
            <div className="packages-board__intro">
              <img
                className="package-ring"
                src="/logos/oo-master-white-transparent.webp"
                alt=""
                aria-hidden="true"
              />
              <h3>What's inside our Wellness Packages</h3>
            </div>
            {wellnessPackages.map((item) => (
              <article className={`package-tier package-tier--${item.tone}`} key={item.id}>
                <img
                  className="package-medal"
                  src="/logos/oo-master-white-transparent.webp"
                  alt=""
                  aria-hidden="true"
                />
                <div className="package-tier__body">
                  <h4>{item.name}</h4>
                  <p className="package-tier__duration">{item.duration}</p>
                  <p className="package-tier__title">{item.title}</p>
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
            <Reveal className="package-mobile-reveal" key={tier.id}>
              <article
                className={`package-mobile-card package-mobile-card--${tier.tone}${
                  activePackage === tier.id ? ' is-open' : ''
                }`}
              >
                <button
                  className="package-mobile-card__summary"
                  type="button"
                  aria-expanded={activePackage === tier.id}
                  aria-controls={`package-${tier.id}-inclusions`}
                  onClick={() =>
                    setActivePackage((current) => (current === tier.id ? null : tier.id))
                  }
                >
                  <span className="package-mobile-card__name">{tier.name}</span>
                  <span className="package-mobile-card__duration">{tier.duration}</span>
                  <strong>{tier.title}</strong>
                  <span className="package-mobile-card__toggle">
                    {activePackage === tier.id ? 'Hide inclusions' : 'View inclusions'}
                  </span>
                </button>
                <ul id={`package-${tier.id}-inclusions`}>
                  {packageRows
                    .filter((row) => row[tier.id])
                    .map((row) => (
                      <li key={row.label}>
                        <Check aria-hidden="true" />
                        {row.label}
                      </li>
                    ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
