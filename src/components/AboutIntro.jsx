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
    </section>
  );
}

export default AboutIntro;
