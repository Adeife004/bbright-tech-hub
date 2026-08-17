import "./AboutTeam.css";

/* PLACEHOLDER: swap names, roles and bios for your real team. */
const TEAM = [
  { role: "Founder & CEO", bio: "Add a short bio here." },
  { role: "Head of Curriculum", bio: "Add a short bio here." },
  { role: "Lead Instructor", bio: "Add a short bio here." },
  { role: "Operations Lead", bio: "Add a short bio here." },
];

function AboutTeam() {
  return (
    <section className="ab-team">
      <div className="ab-section-header" data-aos="fade-up">
        <span className="ab-eyebrow ab-eyebrow--light">Meet the Team</span>
        <h2>The People Behind B Bright</h2>
        <p>
          A small team that genuinely cares about whether students actually
          learn, not just whether they show up.
        </p>
      </div>

      <div className="ab-team__grid">
        {TEAM.map((member, i) => (
          <div
            key={member.role}
            className="ab-team-card"
            data-aos="fade-up"
            data-aos-delay={i * 70}
          >
            <div className="ab-team-card__avatar">
              <i className="fa-solid fa-plus" aria-hidden="true"></i>
            </div>
            <span className="ab-team-card__placeholder">Your Name Here</span>
            <span className="ab-team-card__role">{member.role}</span>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;
