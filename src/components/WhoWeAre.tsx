import { Reveal } from './Reveal'

export function WhoWeAre() {
  return (
    <section className="section section--white" id="who-we-are">
      <div className="page-shell who-grid">
        <Reveal className="who-type">
          <p className="section-label">Who Are We?</p>
          <h2>
            One partner.
            <span>Complete coverage.</span>
          </h2>
        </Reveal>

        <Reveal className="who-copy" delay={90}>
          <p>
            Occuhealth Ireland provides a comprehensive range of Occupational
            Health and Environmental Health & Safety services to SMEs, national
            and global organisations across Ireland, delivering clear,
            practical and solutions-driven outcomes that support both compliance
            and business performance.
          </p>
          <p>
            What sets us apart is our ability to integrate Occupational Health
            with Environmental Health & Safety. We provide a multi-faceted
            solution tailored to your business, delivering both operational
            efficiencies and cost synergies.
          </p>
          <p>
            By understanding both the clinical and workplace risk perspectives
            simultaneously, we deliver aligned, holistic solutions that support
            employee wellbeing, strengthen safety frameworks and enhance
            organisational performance.
          </p>
          <div className="clinical-statement">
            Clear, practical and solutions-driven outcomes.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
