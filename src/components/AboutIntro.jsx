import "./AboutIntro.css";

function AboutIntro() {
  return (
    <div className="about-intro">
      <div className="about-intro__text">
        <h1>About B Bright Tech</h1>
        <p>
          Bright Tech is an educational technology company dedicated to
          preparing learners for the digital future. We believe that introducing
          computer science, coding, and computational thinking at an early age
          helps develop critical skills such as problem-solving, logical
          reasoning, creativity, and innovation. Through engaging, hands-on
          learning experiences, we empower students with the knowledge and
          confidence to thrive in a technology-driven world. At Bright Tech, we
          are committed to building the next generation of creators, innovators,
          and future tech leaders.
        </p>
      </div>

      <div className="about-intro__image">
        <img
          src="/asset/about-image.png"
          alt="Students learning at B Bright Tech Hub"
        />
      </div>
    </div>
  );
}

export default AboutIntro;
