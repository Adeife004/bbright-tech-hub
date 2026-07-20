import "./AboutTeam.css";

const team = [
  {
    name: "Olarenwaju Sofeeyah",
    role: "Digital Literacy Instructor",
    image: "/asset/sofeeyah.jpeg",
  },
  {
    name: "Adebowale Jasmine",
    role: "Web Development Instructor",
    image: "/asset/m jasmine.jpeg",
  },
  {
    name: "Oyinloye Oyinbusolami",
    role: "Robotics Instructor",
    image: "/asset/m oyin.png",
  },
  {
    name: "Udoh Emmanuel",
    role: "Coding Instructor",
    image: "/asset/emmanuel.jpeg",
  },
];

function AboutTeam() {
  return (
    <section className="about-team">
      <div className="about-team__header">
        <h1>The Team Powering Innovation</h1>
        <p>
          Passionate educators and technology professionals committed to shaping
          future innovators.
        </p>
      </div>

      <div className="about-team__grid">
        {team.map((member) => (
          <div className="about-team__card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <div className="about-team__info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;
