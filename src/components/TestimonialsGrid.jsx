import "./TestimonialsGrid.css";

const testimonials = [
  {
    id: 1,
    name: "Gabriel A.",
    role: "UI/UX Designer",
    stars: 4,
    text: "Before B-Bright Tech Hub, I thought UI/UX was just 'making apps pretty'. But here, I learned so much more, from UI to wireframes to testing prototypes. I came to B Bright Tech Hub curious and I'm leaving as a designer.",
  },
  {
    id: 2,
    name: "Suleiman M.",
    role: "Digital Literacy Specialist",
    stars: 5,
    text: "My experience at B Bright Tech Hub was splendid, a creative adventure, and the training was practical. I enjoyed my time at B Bright Tech Hub.",
  },
  {
    id: 3,
    name: "Emmanuel Olatunyi",
    role: "Security Analyst",
    stars: 5,
    text: "From zero to job-ready in months. The training was practical, up-to-date, and opened doors I never thought possible.",
  },
  {
    id: 4,
    name: "Tiamiyu Semilore",
    role: "Web Development Track · July of Tech 2026",
    stars: 5,
    text: "July of Tech 2026 was the perfect introduction to coding for me. I went from knowing nothing about web development to building my first webpage in just a few weeks.",
  },
  {
    id: 5,
    name: "Aina Ifelayo",
    role: "Web Development Track · July of Tech 2026",
    stars: 5,
    text: "I joined July of Tech 2026 as a complete beginner and left with real HTML and CSS skills. The teaching style made everything easy to follow.",
  },
  {
    id: 6,
    name: "Fagboun Daniel",
    role: "Web Development Track · July of Tech 2026",
    stars: 5,
    text: "The web development track at July of Tech 2026 gave me a solid foundation. I finally understand how websites actually work, not just how they look.",
  },
  {
    id: 7,
    name: "Olatunji Enoch",
    role: "Web Development Track · July of Tech 2026",
    stars: 5,
    text: "July of Tech 2026 made web development feel achievable. I started with zero experience and now I can build a simple website from scratch.",
  },
  {
    id: 8,
    name: "Aribo Oluwanifemi",
    role: "UI/UX Design Track · July of Tech 2026",
    stars: 5,
    text: "The UI/UX track at July of Tech 2026 opened my eyes to how much thought goes into good design. I learned the basics of Figma and user research in a way that actually made sense.",
  },
  {
    id: 9,
    name: "Oseni Kwathar",
    role: "UI/UX Design Track · July of Tech 2026",
    stars: 5,
    text: "I came into July of Tech 2026 not knowing what UI/UX even meant. By the end, I had designed my first app prototype and genuinely understood the process.",
  },
];

/* ── Initials avatar — no photo needed ─────────────────────────
   Picks a consistent colour per person from a small brand-aligned
   palette, based on their name, so the same person always gets the
   same colour without needing to store anything extra. */
const AVATAR_COLORS = [
  { bg: "#e6f4f2", fg: "#1a5c54" }, // teal tint
  { bg: "#fdf3e3", fg: "#c9913a" }, // gold tint
  { bg: "#eef2ff", fg: "#4338ca" }, // indigo tint
  { bg: "#fce7f3", fg: "#be185d" }, // rose tint
  { bg: "#e0f2fe", fg: "#0369a1" }, // sky tint
];

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? "";
  return (first + second).toUpperCase();
}

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function InitialsAvatar({ name }) {
  const { bg, fg } = getAvatarColor(name);
  return (
    <div
      className="testi-card__avatar testi-card__avatar--initials"
      style={{ background: bg, color: fg }}
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}

function StarRating({ count }) {
  if (count == null) {
    return <span className="testi-card__rating-pending">Rating pending</span>;
  }
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
        <InitialsAvatar name={testimonial.name} />
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
