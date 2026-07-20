import "./AboutWhyUs.css";

const reasons = [
  {
    title: "Industry-Relevant Skills",
    desc: "Learn technologies and digital skills that are in demand today.",
  },
  {
    title: "Experienced Instructors",
    desc: "Receive guidance and mentorship from passionate professionals.",
  },
  {
    title: "Hands-On Learning",
    desc: "Build real projects and gain practical experience.",
  },
  {
    title: "Future-Ready Education",
    desc: "Develop skills needed to thrive in the digital economy.",
  },
];

function AboutWhyUs() {
  return (
    <section className="about-why">
      <div className="about-why__header">
        <h2>Why Choose B Bright Tech?</h2>
        <p>
          Empowering learners with practical technology skills, innovative
          teaching methods, and industry-relevant knowledge.
        </p>
      </div>

      <div className="about-why__grid">
        {reasons.map((reason) => (
          <div className="about-why__card" key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutWhyUs;
