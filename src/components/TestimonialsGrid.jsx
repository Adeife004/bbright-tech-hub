import "./TestimonialsGrid.css";

const testimonials = [
  {
    id: 1,
    name: "Jasmine A.",
    role: "Frontend Developer",
    stars: 5,
    avatar: "/asset/contactbg.png",
    text: "B Bright Tech Hub gave me the skills and confidence I needed to land my first job as a frontend developer. The projects were real, the mentorship was better.",
  },
  {
    id: 2,
    name: "Rahma O.",
    role: "Data Analyst",
    stars: 4,
    avatar: "/asset/contactbg.png",
    text: "The AI & Data Science programme transformed the way I think about data. The hands-on approach, capstone projects, and community support made all the difference.",
  },
  {
    id: 3,
    name: "Emmanuel U.",
    role: "Security Analyst",
    stars: 5,
    avatar: "/asset/contactbg.png",
    text: "From zero to job-ready in months. The Cybersecurity training was practical, up-to-date, and opened doors I never thought possible.",
  },
];

function StarRating({ count }) {
  return (
    <div className="testi-card__rating" aria-label={`${count} out of 5 stars`}>
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

function TestimonialCard({ testimonial, delay }) {
  return (
    <div
      className="testi-card"
      style={{ animationDelay: `${delay}ms` }}
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={delay}
    >
      <div className="testi-card__quote-icon" aria-hidden="true">
        <i className="fas fa-quote-left"></i>
      </div>

      <p className="testi-card__text">{testimonial.text}</p>

      <div className="testi-card__user">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="testi-card__avatar"
        />
        <div className="testi-card__info">
          <h4 className="testi-card__name">{testimonial.name}</h4>
          <span className="testi-card__role">{testimonial.role}</span>
          <StarRating count={testimonial.stars} />
        </div>
      </div>
    </div>
  );
}

function TestimonialsGrid() {
  return (
    <section className="testi-grid-section">
      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.id} testimonial={t} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsGrid;
