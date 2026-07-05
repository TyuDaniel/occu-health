import { businessCase } from '../data/siteContent'
import { Reveal } from './Reveal'

export function BusinessCase() {
  return (
    <section className="business-case" aria-labelledby="business-case-title">
      <div className="page-shell business-case__inner">
        <Reveal>
          <h2 id="business-case-title">
            A stronger case for
            <span>prevention.</span>
          </h2>
        </Reveal>

        <div className="proof-list">
          {businessCase.map((item, index) => (
            <Reveal className="proof-item" delay={index * 70} key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
