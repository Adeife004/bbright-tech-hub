import { Link } from "react-router-dom";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Gabriel A.",
    role: "UI/UX Designer · UI/UX Design Track",
    stars: 4,
    quote:
      "Before B Bright Tech Hub, I thought UI/UX was just \u2018making apps pretty\u2019. But here, I learned so much more, from UI to wireframes to testing prototypes. I came to B Bright Tech Hub curious and I\u2019m leaving as a designer.",
    featured: false,
  },
  {
    name: "Emmanuel Olatunyi",
    role: "Security Analyst",
    stars: 5,
    quote:
      "From zero to job-ready in months. The training was practical, up-to-date, and opened doors I never thought possible.",
    featured: true,
  },
  {
    name: "Suleiman M.",
    role: "Digital Literacy Specialist · Digital Literacy Track",
    stars: 5,
    quote:
      "My experience at B Bright Tech Hub was splendid, a creative adventure, and the training was practical. I enjoyed my time at B Bright Tech Hub.",
    featured: false,
  },
];

/* ── Initials avatar — same pattern used on the full Testimonials
   page, kept local here to avoid cross-page component coupling. ── */
const AVATAR_COLORS = [
  { bg: "#e6f4f2", fg: "#1a5c54" },
  { bg: "#fdf3e3", fg: "#c9913a" },
  { bg: "#eef2ff", fg: "#4338ca" },
];

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function StarRating({ count }) {
  return (
    <div className="testi-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fa-solid fa-star ${i < count ? "star--filled" : "star--empty"}`}
          aria-hidden="true"
        ></i>
      ))}
    </div>
  );
}

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
          {testimonials.map((t, i) => {
            const { bg, fg } = getAvatarColor(t.name);
            return (
              <article
                key={t.name}
                className={`testi-card ${t.featured ? "testi-card--featured" : ""}`}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={i * 100}
              >
                <div className="testi-card__quote-icon" aria-hidden="true">
                  <i className="fa-solid fa-quote-left"></i>
                </div>

                <blockquote className="testi-card__quote">{t.quote}</blockquote>

                <div className="testi-card__author">
                  <div
                    className="testi-card__avatar"
                    style={{ background: bg, color: fg }}
                    aria-hidden="true"
                  >
                    {getInitials(t.name)}
                  </div>
                  <div className="testi-card__meta">
                    <span className="testi-card__name">{t.name}</span>
                    <span className="testi-card__role">{t.role}</span>
                    <StarRating count={t.stars} />
                  </div>
                </div>
              </article>
            );
          })}
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
