import { Reveal } from './Reveal'

export function WhoWeAre() {
  return (
    <section className="section section--white" id="who-we-are">
      <div className="page-shell who-grid">
        <Reveal className="who-type">
          <p aria-hidden="true">
            WHO
            <span>
              ARE <em>WE?</em>
            </span>
          </p>
          <h2>
            One partner.
            <span>Complete coverage.</span>
          </h2>
        </Reveal>

        <Reveal className="who-copy" delay={90}>
          <p>
            Occuhealth Ireland provides a comprehensive range of Occupational
            Health and Environmental Health & Safety services to SMEs, national
            and global organisations across Ireland.
          </p>
          <p>
            We combine clinical Occupational Health expertise with workplace
            risk intelligence, helping employers make decisions that are
            practical, compliant and centred on their people.
          </p>
          <p>
            That joined-up view means hazards, health trends, absence patterns
            and safety obligations can be understood together rather than in
            isolated silos.
          </p>
          <div className="clinical-statement">
            Clinical insight meets workplace risk intelligence.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
