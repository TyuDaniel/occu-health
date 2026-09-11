import './WhoWeAreImageTreatments.css'

const story = (
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

function Copy() {
  return (
    <div className="treatment-copy">
      <h1>One Partner.<br /><span>Complete Coverage.</span></h1>
      <div className="treatment-story">{story}</div>
    </div>
  )
}

function Names({ overlay = false }: { overlay?: boolean }) {
  return (
    <figcaption className={overlay ? 'treatment-names treatment-names--overlay' : 'treatment-names'}>
      <span>
        <strong>Cathy Mullen</strong>
        <small>Co-Founder · Director</small>
      </span>
      <span>
        <strong>Sharon Cleary</strong>
        <small>Co-Founder · Director</small>
      </span>
    </figcaption>
  )
}

function Label({ number, name, note }: { number: string; name: string; note: string }) {
  return (
    <div className="treatment-label">
      <strong>{number} · {name}</strong>
      <span>{note}</span>
    </div>
  )
}

export function WhoWeAreImageTreatments() {
  return (
    <main className="treatments-gallery">
      <header className="treatments-header">
        <img src="/brand/wordmark-blue.svg" alt="OccUhealth Ireland" />
        <div>
          <strong>Who we are · image treatments</strong>
          <span>Closer crop · softer integration · three directions</span>
        </div>
      </header>

      <section className="treatment treatment--fade" aria-label="Soft fade concept">
        <Copy />
        <figure className="treatment-visual treatment-visual--fade">
          <div className="treatment-image">
          <img src="/images/sharon-cathy-founders-centered.webp" alt="Cathy Mullen and Sharon Cleary at OccUhealth Ireland" />
          </div>
          <Names />
        </figure>
      </section>
      <Label
        number="01"
        name="Soft fade"
        note="The photograph dissolves into the page, removing the feeling of a separate box."
      />

      <section className="treatment treatment--aperture" aria-label="Brand aperture concept">
        <Copy />
        <figure className="treatment-visual treatment-visual--aperture">
          <img className="treatment-aperture__mark" src="/brand/symbol-blue.svg" alt="" />
          <div className="treatment-image">
          <img src="/images/sharon-cathy-founders-centered.webp" alt="Cathy Mullen and Sharon Cleary at OccUhealth Ireland" />
          </div>
          <Names />
        </figure>
      </section>
      <Label
        number="02"
        name="Brand aperture"
        note="The official double-O sits behind an offset photograph, making the image feel owned by the brand."
      />

      <section className="treatment treatment--edge" aria-label="Edge integrated concept">
        <Copy />
        <figure className="treatment-visual treatment-visual--edge">
          <div className="treatment-image">
          <img src="/images/sharon-cathy-founders-centered.webp" alt="Cathy Mullen and Sharon Cleary at OccUhealth Ireland" />
            <Names overlay />
          </div>
        </figure>
      </section>
      <Label
        number="03"
        name="Open edge"
        note="The photograph reaches the section edge and the founder labels become part of the image."
      />
    </main>
  )
}
