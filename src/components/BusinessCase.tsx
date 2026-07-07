import { businessCase } from '../data/siteContent'
import { Reveal } from './Reveal'

export function BusinessCase() {
  return (
    <section className="business-case" aria-labelledby="business-case-title">
      <div className="page-shell business-case__inner">
        <Reveal>
          <h2 id="business-case-title">
            Did you
            <span>know?</span>
          </h2>
        </Reveal>

        <div className="proof-list">
          {businessCase.map((item, index) => (
            <Reveal className="proof-item" delay={index * 70} key={item.stat}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{item.stat}</strong>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
