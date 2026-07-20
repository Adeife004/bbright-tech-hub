import { Link } from 'react-router-dom'
import './CTABanner.css'

function CTABanner() {
  return (
    <section className="cta-banner" id="cta" aria-labelledby="cta-heading">
      <div className="cta-banner__orb cta-banner__orb--1" aria-hidden="true"></div>
      <div className="cta-banner__orb cta-banner__orb--2" aria-hidden="true"></div>

      <div className="cta-banner__inner" data-aos="fade-up" data-aos-duration="700">
        <span className="cta-banner__eyebrow">
          <i className="fa-solid fa-bolt" aria-hidden="true"></i> Limited spots per cohort
        </span>

        <h2 id="cta-heading">
          Your Tech Career <br />Starts <span className="cta-highlight">Today</span>
        </h2>

        <p>Stop waiting for the right moment. Apply in under 5 minutes — No prior experience needed.</p>

        <div className="cta-banner__btns">
          <Link to="/apply" className="btn-apply cta-btn-apply">
            Apply Now — It's Free <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/about" className="cta-banner__ghost">
            Learn about us <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
