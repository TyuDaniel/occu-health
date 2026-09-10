import './WhoWeAreRefinedConcepts.css'

const description = (
  <>
    <p>
      OccUhealth Ireland provides integrated Occupational Health and
      Environmental Health &amp; Safety services to organisations across Ireland.
    </p>
    <p>
      We combine clinical insight with workplace risk expertise to deliver
      practical solutions that protect people, strengthen compliance and improve
      organisational performance.
    </p>
  </>
)

function Portrait({ treatment }: { treatment: 'caption' | 'labels' | 'overlay' }) {
  return (
    <div className={`refined-portrait refined-portrait--${treatment}`}>
      <div className="refined-portrait__image">
        <img
          src="/images/sharon-cathy-founders-centered.webp"
          alt="Cathy O’Reilly on the left and Sharon Cleary on the right, co-founders of OccUhealth Ireland"
        />
        {treatment === 'overlay' && (
          <div className="refined-portrait__overlay-names">
            <Founder name="Cathy O’Reilly" />
            <Founder name="Sharon Cleary" />
          </div>
        )}
      </div>
      {treatment !== 'overlay' && (
        <div className="refined-portrait__names">
          <Founder name="Cathy O’Reilly" />
          <Founder name="Sharon Cleary" />
        </div>
      )}
    </div>
  )
}

function Founder({ name }: { name: string }) {
  return (
    <div className="refined-founder">
      <strong>{name}</strong>
      <span>Co-Founder · Director</span>
    </div>
  )
}

export function WhoWeAreRefinedConcepts() {
  return (
    <main className="refined-gallery">
      <header className="refined-gallery__header">
        <img src="/brand/wordmark-blue.svg" alt="OccUhealth Ireland" />
        <div>
          <strong>Who we are · refined directions</strong>
          <span>Rectangular image · founders clearly identified · image on the right</span>
        </div>
      </header>

      <section className="refined-concept refined-concept--one" aria-labelledby="refined-one-title">
        <div className="refined-one__copy">
          <h1 id="refined-one-title">One partner.<br /><span>Complete coverage.</span></h1>
          <div className="refined-description">{description}</div>
        </div>
        <Portrait treatment="caption" />
      </section>
      <ConceptLabel
        number="01"
        title="The quiet frame"
        description="Clean and assured. The photograph and names do the emotional work."
      />

      <section className="refined-concept refined-concept--two" aria-labelledby="refined-two-title">
        <div className="refined-two__copy">
          <h2 id="refined-two-title">The expertise to see<br /><span>the whole picture.</span></h2>
          <div className="refined-description">{description}</div>
          <div className="refined-two__promise">
            <span>Occupational Health</span>
            <span>Environmental Health &amp; Safety</span>
            <strong>One partner. Complete coverage.</strong>
          </div>
        </div>
        <Portrait treatment="labels" />
      </section>
      <ConceptLabel
        number="02"
        title="The connected disciplines"
        description="More strategic. It makes the combined service model immediately clear."
      />

      <section className="refined-concept refined-concept--three" aria-labelledby="refined-three-title">
        <div className="refined-three__copy">
          <div>
            <h2 id="refined-three-title">Healthier people.<br />Safer workplaces.</h2>
            <div className="refined-description refined-description--inverse">{description}</div>
          </div>
          <p>One partner.<br /><span>Complete coverage.</span></p>
        </div>
        <Portrait treatment="overlay" />
      </section>
      <ConceptLabel
        number="03"
        title="The decisive partnership"
        description="The strongest contrast. Blue supports the message on the left; the image stays natural on the right."
      />
    </main>
  )
}

function ConceptLabel({
  number,
  title,
  description: detail,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="refined-label">
      <strong>{number} · {title}</strong>
      <span>{detail}</span>
    </div>
  )
}
