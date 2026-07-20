import { Link } from 'react-router-dom'
import './Testimonials.css'

const testimonials = [
  {
    initials: 'AO',
    name: 'Amara Osei',
    role: 'Frontend Developer · Web Dev Track',
    quote: "B Bright didn\u2019t just teach me to code \u2014 it completely changed how I think about problems. I landed my first dev role two months after graduating.",
    featured: false,
  },
  {
    initials: 'TN',
    name: 'Tunde Nwosu',
    role: 'Data Analyst · July of Tech Alumni',
    quote: 'July of Tech was the most intense and rewarding month of my life. The connections I made there led directly to my current job.',
    featured: true,
  },
  {
    initials: 'FK',
    name: 'Fatima Kamara',
    role: 'Freelance Designer · After School Track',
    quote: "The after-school programme fit perfectly around my university timetable. By semester\u2019s end I already had a freelance client.",
    featured: false,
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testi__inner">
        <div className="testi__header" data-aos="fade-up" data-aos-duration="700">
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
              className={`testi-card ${t.featured ? 'testi-card--featured' : ''}`}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 100}
            >
              <div className="testi-card__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <i key={j} className="fa-solid fa-star" aria-hidden="true"></i>
                ))}
              </div>

              <blockquote className="testi-card__quote">"{t.quote}"</blockquote>

              <div className="testi-card__author">
                <div className="testi-card__avatar" aria-hidden="true">{t.initials}</div>
                <div className="testi-card__meta">
                  <span className="testi-card__name">{t.name}</span>
                  <span className="testi-card__role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testi__footer" data-aos="fade-up" data-aos-duration="600">
          <Link to="/testimonials" className="programmes__all-link">
            Read more stories <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
