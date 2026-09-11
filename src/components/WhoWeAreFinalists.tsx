import './WhoWeAreFinalists.css'

const about = (
  <>
    <p>
      OccUhealth Ireland provides integrated Occupational Health and
      Environmental Health &amp; Safety services to organisations across Ireland.
    </p>
    <p>
      By bringing clinical insight and workplace risk expertise together, we
      deliver practical solutions that protect people, strengthen compliance and
      improve organisational performance.
    </p>
  </>
)

function FoundersPhoto({ styleName }: { styleName: string }) {
  return (
    <figure className={`finalist-photo ${styleName}`}>
      <div className="finalist-photo__image">
        <img
          src="/images/sharon-cathy-founders-centered.webp"
          alt="Cathy Mullen on the left and Sharon Cleary on the right, co-founders of OccUhealth Ireland"
        />
      </div>
      <figcaption>
        <Founder name="Cathy Mullen" />
        <Founder name="Sharon Cleary" />
      </figcaption>
    </figure>
  )
}

function Founder({ name }: { name: string }) {
  return (
    <span className="finalist-founder">
      <strong>{name}</strong>
      <small>Co-Founder · Director</small>
    </span>
  )
}

function GalleryLabel({ number, title, note }: { number: string; title: string; note: string }) {
  return (
    <div className="finalist-label">
      <strong>{number} · {title}</strong>
      <span>{note}</span>
    </div>
  )
}

export function WhoWeAreFinalists() {
  return (
    <main className="finalists-gallery">
      <header className="finalists-header">
        <img src="/brand/wordmark-blue.svg" alt="OccUhealth Ireland" />
        <div>
          <strong>Who we are · quiet frame studies</strong>
          <span>Sentence case · no underline · photograph on the right</span>
        </div>
      </header>

      <section className="finalist finalist--one" aria-labelledby="finalist-one-title">
        <div className="finalist-one__copy">
          <h1 id="finalist-one-title">One Partner.<br /><span>Complete Coverage.</span></h1>
          <div className="finalist-body">{about}</div>
        </div>
        <FoundersPhoto styleName="finalist-photo--classic" />
      </section>
      <GalleryLabel
        number="01"
        title="Balanced frame"
        note="The cleanest evolution of your chosen option. Calm, credible and direct."
      />

      <section className="finalist finalist--two" aria-labelledby="finalist-two-title">
        <div className="finalist-two__copy">
          <h2 id="finalist-two-title">One Partner.<br /><span>Complete Coverage.</span></h2>
          <div className="finalist-body">{about}</div>
          <div className="finalist-two__disciplines" aria-label="OccUhealth areas of expertise">
            <span>Occupational Health</span>
            <span>Environmental Health &amp; Safety</span>
          </div>
        </div>
        <FoundersPhoto styleName="finalist-photo--pinned" />
      </section>
      <GalleryLabel
        number="02"
        title="Founder markers"
        note="The names visually connect to each person, without covering the photograph."
      />

      <section className="finalist finalist--three" aria-labelledby="finalist-three-title">
        <div className="finalist-three__copy">
          <div className="finalist-body">{about}</div>
          <h2 id="finalist-three-title">One Partner.<br /><span>Complete Coverage.</span></h2>
        </div>
        <FoundersPhoto styleName="finalist-photo--signature" />
      </section>
      <GalleryLabel
        number="03"
        title="Promise baseline"
        note="The story leads first, then the brand promise lands as the final thought."
      />
    </main>
  )
}
