import "./AboutIntro.css";

function AboutIntro() {
  return (
    <section className="ab-intro">
      <div className="ab-intro__inner">
        <div className="ab-intro__visual" data-aos="fade-right">
          <div className="ab-intro__card">
            <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
            <p>
              We wanted to build something different: hands on courses taught by
              instructors who care, at a pace that respects beginners, with
              outcomes students can actually point to.
            </p>
          </div>
        </div>

        <div
          className="ab-intro__text"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <span className="ab-eyebrow ab-eyebrow--teal">Our Story</span>
          <h2>Why We Started</h2>
          <p>
            B Bright Tech Hub began with a simple observation. Too many people
            wanted to learn tech skills, but the paths available were either too
            expensive, too theoretical, or too disconnected from what students
            would actually use in the real world.
          </p>
          <p>
            So we built our own path. One that starts from zero when it needs
            to, moves at a pace people can keep up with, and ends with a
            project, a certificate, and confidence that holds up outside the
            classroom.
          </p>
        </div>
      </div>

      {/* Small illustrated journey path — a lightweight visual
          timeline rather than another block of text. */}
      <div className="ab-journey" data-aos="fade-up" data-aos-delay="200">
        <span className="ab-journey__line" aria-hidden="true"></span>

        {[
          { icon: "fa-solid fa-lightbulb", label: "The Idea" },
          { icon: "fa-solid fa-users", label: "First Cohort" },
          { icon: "fa-solid fa-flag-checkered", label: "Today" },
        ].map((stop, i) => (
          <div
            key={stop.label}
            className="ab-journey__stop"
            data-aos="zoom-in"
            data-aos-delay={250 + i * 120}
          >
            <span className="ab-journey__dot">
              <i className={stop.icon} aria-hidden="true"></i>
            </span>
            <span className="ab-journey__label">{stop.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutIntro;
