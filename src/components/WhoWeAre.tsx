import { Reveal } from './Reveal'

export function WhoWeAre() {
  return (
    <section className="section section--white" id="who-we-are">
      <div className="page-shell who-final">
        <Reveal className="who-final__copy">
          <h2>
            One partner.<br />
            <span>Complete coverage.</span>
          </h2>
          <div className="who-final__story">
            <p>
              OccUhealth Ireland provides integrated Occupational Health and
              Environmental Health &amp; Safety services to organisations across
              Ireland. We help employers understand the health needs of their
              people and the risks within their working environments, so they
              can take clear, practical action.
            </p>
            <p>
              By bringing clinical insight and workplace risk expertise together,
              we deliver practical solutions that protect people, strengthen
              compliance and improve organisational performance. Our support can
              include health assessments, absence and case management, workplace
              risk assessments, audits, training and wellbeing programmes,
              shaped around each organisation.
            </p>
          </div>
        </Reveal>

        <Reveal className="who-final__portrait" delay={120}>
          <figure>
            <div className="who-final__image">
              <img
                className="who-final__photo"
                src="/images/sharon-cathy-founders-centered.webp"
                alt="Cathy O’Reilly on the left and Sharon Cleary on the right, co-founders of OccUhealth Ireland."
                width="1254"
                height="1254"
                loading="lazy"
                decoding="async"
              />
              <img
                className="who-final__symbol"
                src="/brand/symbol-blue-slim-thin.svg"
                alt=""
                aria-hidden="true"
              />
            </div>
            <figcaption aria-label="OccUhealth co-founders">
              <span>
                <strong>Cathy O’Reilly</strong>
                <small>Co-Founder · Director</small>
              </span>
              <span>
                <strong>Sharon Cleary</strong>
                <small>Co-Founder · Director</small>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
