import { Link } from "react-router-dom";
import "./AboutCTA.css";

function AboutCTA() {
  return (
    <section className="ab-cta">
      <div className="ab-cta__orb ab-cta__orb--1" aria-hidden="true"></div>
      <div className="ab-cta__orb ab-cta__orb--2" aria-hidden="true"></div>
      <div className="ab-cta__grid" aria-hidden="true"></div>

      <div className="ab-cta__inner" data-aos="fade-up" data-aos-duration="700">
        <span className="ab-cta__eyebrow">
          <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
          Ready When You Are
        </span>

        <h2>
          See What B Bright Can Do{" "}
          <span className="ab-cta__accent">For You.</span>
        </h2>

        <p>
          Whether you're starting from zero or bringing a school on board,
          there's a path built for exactly where you're standing right now.
        </p>

        <div className="ab-cta__btns">
          <Link to="/apply" className="ab-btn-primary">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="ab-cta__btn-outline">
            Explore Programmes
          </Link>
          <Link to="/contact" className="ab-cta__btn-ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
