import "./AboutFoundation.css";

const VALUES = [
  {
    icon: "fa-solid fa-door-open",
    title: "Accessibility",
    desc: "We keep our courses practical and affordable, so that cost or background never decides who gets to learn.",
  },
  {
    icon: "fa-solid fa-hammer",
    title: "Practical Learning",
    desc: "Every course is built around real projects. Students leave with something they built, not just notes.",
  },
  {
    icon: "fa-solid fa-heart",
    title: "Patient Teaching",
    desc: "We teach at a pace that respects beginners. No one is made to feel behind for starting from zero.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Community",
    desc: "Learning is better together. Our classrooms are built on encouragement, not competition.",
  },
  {
    icon: "fa-solid fa-arrow-trend-up",
    title: "Continuous Growth",
    desc: "Technology changes fast. Our curriculum is reviewed and updated regularly to keep pace with it.",
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Integrity",
    desc: "We are honest about what a course can and cannot do for you, and we never oversell an outcome.",
  },
];

function AboutFoundation() {
  return (
    <section className="ab-foundation">
      {/* Mission & Vision */}
      <div className="ab-mv__grid">
        <div className="ab-mv-card" data-aos="fade-up">
          <div className="ab-mv-card__icon">
            <i className="fa-solid fa-bullseye" aria-hidden="true"></i>
          </div>
          <h3>Our Mission</h3>
          <p>
            To make quality tech education accessible to anyone ready to learn,
            regardless of background or prior experience.
          </p>
        </div>

        <div className="ab-mv-card" data-aos="fade-up" data-aos-delay="100">
          <div className="ab-mv-card__icon ab-mv-card__icon--gold">
            <i className="fa-solid fa-eye" aria-hidden="true"></i>
          </div>
          <h3>Our Vision</h3>
          <p>
            A generation of confident, skilled creators who use technology to
            build real solutions, not just consume it.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="ab-section-header" data-aos="fade-up">
        <span className="ab-eyebrow ab-eyebrow--teal">What We Stand For</span>
        <h2>Our Core Values</h2>
        <p>
          The principles that shape every course, every classroom, and every
          decision we make.
        </p>
      </div>

      <div className="ab-values__grid">
        {VALUES.map((value, i) => (
          <div
            key={value.title}
            className="ab-value-card"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="ab-value-card__icon">
              <i className={value.icon} aria-hidden="true"></i>
            </div>
            <h3>{value.title}</h3>
            <p>{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutFoundation;
