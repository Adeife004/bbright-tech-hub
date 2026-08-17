import { Link } from "react-router-dom";
import "./Testimonials.css";

const testimonials = [
  {
    initials: "GA",
    name: "Gabriel A.",
    role: "UI/UX Designer · UI/UX Design Track",
    quote:
      "Before B Bright Tech Hub, I thought UI/UX was just \u2018making apps pretty\u2019. But here, I learned so much more, from UI to wireframes to testing prototypes. I came to B Bright Tech Hub curious and I\u2019m leaving as a designer.",
    featured: false,
  },
  {
    initials: "EO",
    name: "Emmanuel Olatunyi",
    role: "Security Analyst",
    quote:
      "From zero to job-ready in months. The training was practical, up-to-date, and opened doors I never thought possible.",
    featured: true,
  },
  {
    initials: "SM",
    name: "Suleiman M.",
    role: "Digital Literacy Specialist · Digital Literacy Track",
    quote:
      "My experience at B Bright Tech Hub was splendid, a creative adventure, and the training was practical. I enjoyed my time at B Bright Tech Hub.",
    featured: false,
  },
];

function Testimonials() {
  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="testi__inner">
        <div
          className="testi__header"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span className="section-eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            Student Stories
            <span className="eyebrow-line" aria-hidden="true"></span>
          </span>
          <h2 id="testimonials-heading">
            Real People, <span className="text-teal">Real Results</span>
          </h2>
          <p>A few words from those who've been through it.</p>
        </div>

        <div className="testi__grid">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`testi-card ${t.featured ? "testi-card--featured" : ""}`}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 100}
            >
              <div className="testi-card__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <i
                    key={j}
                    className="fa-solid fa-star"
                    aria-hidden="true"
                  ></i>
                ))}
              </div>

              <blockquote className="testi-card__quote">"{t.quote}"</blockquote>

              <div className="testi-card__author">
                <div className="testi-card__avatar" aria-hidden="true">
                  {t.initials}
                </div>
                <div className="testi-card__meta">
                  <span className="testi-card__name">{t.name}</span>
                  <span className="testi-card__role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="testi__footer"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Link to="/testimonials" className="programmes__all-link">
            Read more stories{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
