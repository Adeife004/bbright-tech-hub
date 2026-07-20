import "../staff/StaffDashboard.css";

const SCHEDULE = [
  {
    day: "Monday",
    date: "13 Jul",
    classes: [
      {
        time: "2:00 PM – 4:00 PM",
        course: "Web Development",
        topic: "React Router & Navigation",
        room: "Lab 1",
        isToday: true,
      },
    ],
  },
  {
    day: "Tuesday",
    date: "14 Jul",
    classes: [
      {
        time: "10:00 AM – 12:00 PM",
        course: "UI/UX Design",
        topic: "Figma Prototyping",
        room: "Design Studio",
        isToday: false,
      },
    ],
  },
  { day: "Wednesday", date: "15 Jul", classes: [] },
  {
    day: "Thursday",
    date: "16 Jul",
    classes: [
      {
        time: "2:00 PM – 4:00 PM",
        course: "Web Development",
        topic: "State Management",
        room: "Lab 1",
        isToday: false,
      },
    ],
  },
  {
    day: "Friday",
    date: "17 Jul",
    classes: [
      {
        time: "10:00 AM – 11:00 AM",
        course: "Web Development",
        topic: "Code Review & Q&A",
        room: "Lab 1",
        isToday: false,
      },
      {
        time: "11:30 AM – 1:00 PM",
        course: "UI/UX Design",
        topic: "Peer Design Critique",
        room: "Design Studio",
        isToday: false,
      },
    ],
  },
  {
    day: "Saturday",
    date: "18 Jul",
    classes: [
      {
        time: "9:00 AM – 12:00 PM",
        course: "Web Development",
        topic: "Weekend Workshop — Full App Build",
        room: "Lab 1",
        isToday: false,
      },
    ],
  },
];

const COURSE_COLORS = {
  "Web Development": "teal",
  "UI/UX Design": "gold",
  "Digital Literacy": "green",
  Robotics: "teal",
};

function StudentSchedule() {
  return (
    <div className="student-schedule">
      {/* Weekly summary */}
      <div className="db-stats-grid" style={{ marginBottom: "1.5rem" }}>
        <div className="db-stat-card db-stat-card--teal">
          <div className="db-stat-card__icon">
            <i className="fa-solid fa-calendar-week" aria-hidden="true"></i>
          </div>
          <div className="db-stat-card__body">
            <span className="db-stat-card__value">6</span>
            <span className="db-stat-card__label">Classes This Week</span>
          </div>
        </div>
        <div className="db-stat-card db-stat-card--gold">
          <div className="db-stat-card__icon">
            <i className="fa-regular fa-clock" aria-hidden="true"></i>
          </div>
          <div className="db-stat-card__body">
            <span className="db-stat-card__value">12h</span>
            <span className="db-stat-card__label">Total Hours</span>
          </div>
        </div>
        <div className="db-stat-card db-stat-card--green">
          <div className="db-stat-card__icon">
            <i className="fa-solid fa-book-open" aria-hidden="true"></i>
          </div>
          <div className="db-stat-card__body">
            <span className="db-stat-card__value">2</span>
            <span className="db-stat-card__label">Courses Running</span>
          </div>
        </div>
      </div>

      {/* Day-by-day */}
      <div className="schedule-list">
        {SCHEDULE.map((day) => (
          <div key={day.day} className="schedule-day">
            <div className="schedule-day__label">
              <span className="schedule-day__name">{day.day}</span>
              <span className="schedule-day__date">{day.date}</span>
            </div>

            {day.classes.length === 0 ? (
              <div className="schedule-day__empty">
                <i
                  className="fa-regular fa-face-smile-relaxed"
                  aria-hidden="true"
                ></i>
                No classes — rest day!
              </div>
            ) : (
              <div className="schedule-day__classes">
                {day.classes.map((cls, i) => (
                  <div
                    key={i}
                    className={`schedule-item ${cls.isToday ? "schedule-item--today" : ""}`}
                  >
                    <div
                      className={`schedule-item__time schedule-item__time--${COURSE_COLORS[cls.course] || "teal"}`}
                    >
                      {cls.time}
                    </div>
                    <div className="schedule-item__info">
                      <span className="schedule-item__class">{cls.course}</span>
                      <span className="schedule-item__meta">
                        <i
                          className="fa-solid fa-circle-dot"
                          aria-hidden="true"
                        ></i>{" "}
                        {cls.topic}
                        &nbsp;·&nbsp;
                        <i
                          className="fa-solid fa-location-dot"
                          aria-hidden="true"
                        ></i>{" "}
                        {cls.room}
                      </span>
                    </div>
                    {cls.isToday && (
                      <span className="db-badge db-badge--teal schedule-item__today-badge">
                        Today
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentSchedule;
