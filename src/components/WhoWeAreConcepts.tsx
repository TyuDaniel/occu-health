import './WhoWeAreConcepts.css'

const story = (
  <>
    <p>
      OccUhealth Ireland brings Occupational Health and Environmental Health &amp;
      Safety together for organisations across Ireland.
    </p>
    <p>
      By understanding clinical health and workplace risk at the same time, we
      deliver practical, joined-up solutions that protect people, strengthen
      compliance and support better business performance.
    </p>
  </>
)

function FounderNames({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`concept-founders${inverse ? ' concept-founders--inverse' : ''}`}>
      <div>
        <strong>Cathy O’Reilly</strong>
        <span>Co-Founder · Director</span>
      </div>
      <div>
        <strong>Sharon Cleary</strong>
        <span>Co-Founder · Director</span>
      </div>
    </div>
  )
}

export function WhoWeAreConcepts() {
  return (
    <main className="concept-gallery">
      <header className="concept-gallery__header">
        <img src="/brand/wordmark-blue.svg" alt="OccUhealth Ireland" />
        <div>
          <strong>Who we are · three directions</strong>
          <span>Desktop concepts — responsive behaviour included</span>
        </div>
      </header>

      <section className="concept concept--one" aria-labelledby="concept-one-title">
        <div className="concept-number" aria-hidden="true">01</div>
        <div className="concept-one__intro">
          <h1 id="concept-one-title">One partner.<br /><span>Complete coverage.</span></h1>
          <div className="concept-story">{story}</div>
          <p className="concept-note">Two disciplines. One clear view of your workplace.</p>
        </div>
        <div className="concept-one__people">
          <div className="concept-one__portrait">
            <img
              src="/images/sharon-cathy-founders-centered.webp"
              alt="Cathy O’Reilly and Sharon Cleary, co-founders of OccUhealth Ireland"
            />
          </div>
          <FounderNames />
        </div>
      </section>

      <div className="concept-caption">
        <strong>Direction 01 · The partnership portrait</strong>
        <span>Warm, direct and founder-led. The people are the proof.</span>
      </div>

      <section className="concept concept--two" aria-labelledby="concept-two-title">
        <div className="concept-two__photo">
          <img
            src="/images/sharon-cathy-founders-centered.webp"
            alt="Cathy O’Reilly and Sharon Cleary standing together at OccUhealth Ireland"
          />
          <FounderNames inverse />
        </div>
        <div className="concept-two__content">
          <img className="concept-two__mark" src="/brand/symbol-inverse.svg" alt="" />
          <div>
            <h2 id="concept-two-title">Your whole workplace.<br /><span>One trusted partner.</span></h2>
            <div className="concept-story concept-story--inverse">{story}</div>
          </div>
          <p className="concept-two__promise">One partner. Complete coverage.</p>
        </div>
      </section>

      <div className="concept-caption">
        <strong>Direction 02 · The confident split</strong>
        <span>Bold and business-focused. Equal weight for people and proposition.</span>
      </div>

      <section className="concept concept--three" aria-labelledby="concept-three-title">
        <div className="concept-three__heading">
          <h2 id="concept-three-title">Health at work is never just one thing.</h2>
          <p>That’s why we bring two expert perspectives together.</p>
        </div>
        <div className="concept-three__body">
          <div className="concept-three__founder concept-three__founder--cathy">
            <span>Clinical health</span>
            <strong>Cathy O’Reilly</strong>
            <small>Co-Founder · Director</small>
          </div>
          <div className="concept-three__portrait">
            <img
              src="/images/sharon-cathy-founders-centered.webp"
              alt="Cathy O’Reilly and Sharon Cleary, combining clinical health and workplace safety expertise"
            />
          </div>
          <div className="concept-three__founder concept-three__founder--sharon">
            <span>Workplace risk</span>
            <strong>Sharon Cleary</strong>
            <small>Co-Founder · Director</small>
          </div>
        </div>
        <div className="concept-three__footer">
          <div className="concept-story">{story}</div>
          <p>One partner.<br /><span>Complete coverage.</span></p>
        </div>
      </section>

      <div className="concept-caption concept-caption--last">
        <strong>Direction 03 · The joined-up perspective</strong>
        <span>More distinctive and strategic. The founders embody the integrated offer.</span>
      </div>
    </main>
  )
}
