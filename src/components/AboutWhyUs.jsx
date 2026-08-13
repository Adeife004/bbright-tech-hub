import "./AboutWhyUs.css";

const REASONS = [
  {
    icon: "fa-solid fa-hammer",
    title: "Hands-On Projects",
    desc: "Every course ends with something real you built, not just certificates and notes.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Small Class Sizes",
    desc: "Instructors who actually know your name and where you are stuck.",
  },
  {
    icon: "fa-solid fa-user-check",
    title: "Certified Instructors",
    desc: "Every class led by someone trained and experienced in what they teach.",
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Portfolio Ready Outcomes",
    desc: "You leave with proof of what you can do, not just a claim that you can do it.",
  },
  {
    icon: "fa-solid fa-calendar-days",
    title: "Flexible Learning Paths",
    desc: "Weekday, weekend, holiday and in-school options built around real schedules.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Support After Graduation",
    desc: "Access to community, resources and guidance long after your course ends.",
  },
];

function AboutWhyUs() {
  return (
    <section className="ab-whyus">
      <div className="ab-section-header" data-aos="fade-up">
        <span className="ab-eyebrow ab-eyebrow--teal">Why Choose Us</span>
        <h2>What Makes B Bright Different</h2>
        <p>
          Plenty of places teach tech skills. Here's what we do differently
          along the way.
        </p>
      </div>

      <div className="ab-whyus__grid">
        {REASONS.map((reason, i) => (
          <div
            key={reason.title}
            className="ab-reason-card"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="ab-reason-card__icon">
              <i className={reason.icon} aria-hidden="true"></i>
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutWhyUs;
