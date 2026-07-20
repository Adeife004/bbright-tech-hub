import "../staff/StaffDashboard.css";

const STATS = [
  {
    icon: "fa-solid fa-book-open",
    label: "Course Progress",
    value: "68%",
    trend: "+5% this week",
    color: "teal",
  },
  {
    icon: "fa-solid fa-clipboard-check",
    label: "Assignments Done",
    value: "7/10",
    trend: "3 pending",
    color: "gold",
  },
  {
    icon: "fa-solid fa-calendar-check",
    label: "Classes Attended",
    value: "14",
    trend: "2 missed",
    color: "teal",
  },
  {
    icon: "fa-solid fa-star",
    label: "Avg Assignment Score",
    value: "82%",
    trend: "Good standing",
    color: "green",
  },
];

const NEXT_CLASSES = [
  {
    day: "Today",
    time: "2:00 PM",
    class: "Web Development",
    topic: "React Router & Navigation",
    room: "Lab 1",
  },
  {
    day: "Tomorrow",
    time: "10:00 AM",
    class: "UI/UX Design",
    topic: "Figma Prototyping",
    room: "Design Studio",
  },
  {
    day: "Thursday",
    time: "2:00 PM",
    class: "Web Development",
    topic: "State Management with Redux",
    room: "Lab 1",
  },
];

const RECENT_GRADES = [
  { assignment: "HTML & CSS Portfolio", score: 88, max: 100, date: "08 Jul" },
  { assignment: "JavaScript Basics Quiz", score: 76, max: 100, date: "05 Jul" },
  { assignment: "React Components Task", score: 91, max: 100, date: "01 Jul" },
];

function StudentOverview() {
  return (
    <div className="student-overview">
      {/* Stats */}
      <div className="db-stats-grid">
        {STATS.map((s) => (
          <div
            key={s.label}
            className={`db-stat-card db-stat-card--${s.color}`}
          >
            <div className="db-stat-card__icon">
              <i className={s.icon} aria-hidden="true"></i>
            </div>
            <div className="db-stat-card__body">
              <span className="db-stat-card__value">{s.value}</span>
              <span className="db-stat-card__label">{s.label}</span>
              <span className="db-stat-card__trend">{s.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Two columns: upcoming classes + recent grades */}
      <div className="db-two-col">
        {/* Upcoming classes */}
        <div className="db-card">
          <div className="db-card__header">
            <h2>Upcoming Classes</h2>
          </div>
          <div className="db-upcoming-list">
            {NEXT_CLASSES.map((c, i) => (
              <div key={i} className="db-upcoming-item">
                <div className="db-upcoming-item__icon" aria-hidden="true">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <div className="db-upcoming-item__info">
                  <span className="db-upcoming-item__class">
                    {c.class}
                    <span
                      style={{
                        fontWeight: 400,
                        color: "var(--clr-slate)",
                        marginLeft: 6,
                        fontSize: "0.78rem",
                      }}
                    >
                      — {c.topic}
                    </span>
                  </span>
                  <span className="db-upcoming-item__meta">
                    <i className="fa-regular fa-clock" aria-hidden="true"></i>{" "}
                    {c.day} {c.time} &nbsp;·&nbsp;
                    <i
                      className="fa-solid fa-location-dot"
                      aria-hidden="true"
                    ></i>{" "}
                    {c.room}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent grades */}
        <div className="db-card">
          <div className="db-card__header">
            <h2>Recent Grades</h2>
          </div>
          <table className="db-table">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_GRADES.map((g, i) => (
                <tr key={i}>
                  <td>{g.assignment}</td>
                  <td>
                    <span
                      className={`db-badge db-badge--${g.score >= 80 ? "green" : g.score >= 60 ? "teal" : "gold"}`}
                    >
                      {g.score}/{g.max}
                    </span>
                  </td>
                  <td>{g.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentOverview;
