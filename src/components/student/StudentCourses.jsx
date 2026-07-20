import "../staff/StaffDashboard.css";

const COURSES = [
  {
    title: "Web Development",
    icon: "fa-solid fa-code",
    instructor: "Adebowale Jasmine",
    progress: 68,
    status: "active",
    nextLesson: "React Router & Navigation",
    totalLessons: 24,
    doneLessons: 16,
    startDate: "03 Jan 2026",
  },
  {
    title: "UI/UX Design",
    icon: "fa-solid fa-pen-ruler",
    instructor: "Olarenwaju Sofeeyah",
    progress: 45,
    status: "active",
    nextLesson: "Figma Prototyping",
    totalLessons: 18,
    doneLessons: 8,
    startDate: "10 Jan 2026",
  },
  {
    title: "Digital Literacy",
    icon: "fa-solid fa-computer",
    instructor: "Olarenwaju Sofeeyah",
    progress: 100,
    status: "completed",
    nextLesson: null,
    totalLessons: 10,
    doneLessons: 10,
    startDate: "03 Jan 2026",
  },
];

function ProgressBar({ value }) {
  const color = value === 100 ? "green" : value >= 50 ? "teal" : "gold";
  return (
    <div className="db-progress-bar">
      <div>
        <div
          className={`db-progress-bar__fill db-progress-bar__fill--${color}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span className="db-progress-bar__label">{value}%</span>
    </div>
  );
}

function StudentCourses() {
  return (
    <div className="student-courses">
      <div className="course-grid">
        {COURSES.map((course) => (
          <div key={course.title} className="course-card">
            <div className="course-card__top">
              <div className="course-card__icon" aria-hidden="true">
                <i className={course.icon}></i>
              </div>
              <span
                className={`db-badge db-badge--${course.status === "completed" ? "green" : "teal"}`}
              >
                {course.status}
              </span>
            </div>

            <div>
              <h3 className="course-card__title">{course.title}</h3>
              <p className="course-card__instructor">
                <i
                  className="fa-solid fa-chalkboard-user"
                  aria-hidden="true"
                ></i>{" "}
                {course.instructor}
              </p>
            </div>

            <div className="course-card__progress-wrap">
              <div className="course-card__progress-label">
                <span>Progress</span>
                <span>
                  {course.doneLessons}/{course.totalLessons} lessons
                </span>
              </div>
              <ProgressBar value={course.progress} />
            </div>

            {course.nextLesson ? (
              <div className="course-card__next">
                <i className="fa-solid fa-play" aria-hidden="true"></i>
                <span>Next: {course.nextLesson}</span>
              </div>
            ) : (
              <div className="course-card__done">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                Course completed!
              </div>
            )}

            <div className="course-card__footer">
              <span className="course-card__start">
                <i className="fa-regular fa-calendar" aria-hidden="true"></i>{" "}
                Started {course.startDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCourses;
