import { Link } from "react-router-dom";
import "./AboutHero.css";

/* PLACEHOLDER: replace with real figures. */
const STATS = [
  { num: "500+", label: "Students Trained" },
  { num: "10+", label: "Courses Offered" },
  { num: "5+", label: "Partner Schools" },
  { num: "3+", label: "Years Running" },
];

function AboutHero() {
  return (
    <section className="ab-hero">
      <div className="ab-hero__orb ab-hero__orb--1" aria-hidden="true"></div>
      <div className="ab-hero__orb ab-hero__orb--2" aria-hidden="true"></div>
      <div className="ab-hero__grid" aria-hidden="true"></div>

      <div className="ab-hero__inner">
        <div
          className="ab-hero__text"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span className="ab-eyebrow">
            <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
            About B Bright Tech Hub
          </span>

          <h1 className="ab-hero__title">
            Practical Tech Skills,
            <br />
            <span className="ab-title-accent">Taught With Purpose.</span>
          </h1>

          <p className="ab-hero__desc">
            B Bright Tech Hub exists to make technology education accessible,
            practical and genuinely useful, whether you're a complete beginner,
            a working professional, or a school looking to bring real tech
            skills into the classroom.
          </p>

          <div className="ab-hero__btns">
            <Link to="/programmes" className="ab-btn-primary">
              Explore Programmes{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/contact" className="ab-btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="ab-hero__stats" data-aos="fade-up" data-aos-delay="150">
          {STATS.map((stat) => (
            <div key={stat.label} className="ab-stat">
              <span className="ab-stat__num">{stat.num}</span>
              <span className="ab-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
