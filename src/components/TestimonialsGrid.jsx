import "./TestimonialsGrid.css";

const testimonials = [
  {
    id: 1,
    name: "Gabriel A.",
    role: "UI/UX Designer",
    stars: 4,
    avatar: "/asset/contactbg.png",
    text: "Befor B-Bright Tech Hub, I thought UI/UX was just 'making apps pretty'.But here, I learnt more about it, from UI to wireframes to testing prototypes. I came to B Bright Tech curious and left i'm leaving as a designer.",
  },
  {
    id: 2,
    name: "Suleiman M.",
    role: "Digital Literacy Specialist",
    stars: 5,
    avatar: "/asset/contactbg.png",
    text: "My experience at B Bright Tech Hub was splendid and was and was a creative adventure and the training was practical. I enjoyed my stay at B brigh tech hub.",
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
