import { useState } from "react";
import "../staff/StaffDashboard.css";

const ASSIGNMENTS = [
  {
    id: 1,
    title: "Build a Portfolio Website",
    course: "Web Development",
    due: "15 Jul 2026",
    status: "pending",
    grade: null,
  },
  {
    id: 2,
    title: "Figma Wireframe — App UI",
    course: "UI/UX Design",
    due: "18 Jul 2026",
    status: "pending",
    grade: null,
  },
  {
    id: 3,
    title: "JavaScript Functions Quiz",
    course: "Web Development",
    due: "10 Jul 2026",
    status: "submitted",
    grade: null,
  },
  {
    id: 4,
    title: "HTML & CSS Portfolio",
    course: "Web Development",
    due: "08 Jul 2026",
    status: "graded",
    grade: 88,
  },
  {
    id: 5,
    title: "JavaScript Basics Quiz",
    course: "Web Development",
    due: "05 Jul 2026",
    status: "graded",
    grade: 76,
  },
  {
    id: 6,
    title: "React Components Task",
    course: "Web Development",
    due: "01 Jul 2026",
    status: "graded",
    grade: 91,
  },
  {
    id: 7,
    title: "Colour Theory & Typography",
    course: "UI/UX Design",
    due: "28 Jun 2026",
    status: "graded",
    grade: 84,
  },
];

const STATUS_CONFIG = {
  pending: { label: "Pending", badge: "gold", icon: "fa-solid fa-clock" },
  submitted: {
    label: "Submitted",
    badge: "teal",
    icon: "fa-solid fa-paper-plane",
  },
  graded: { label: "Graded", badge: "green", icon: "fa-solid fa-circle-check" },
};

function StudentAssignments() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? ASSIGNMENTS
      : ASSIGNMENTS.filter((a) => a.status === filter);

  const counts = {
    pending: ASSIGNMENTS.filter((a) => a.status === "pending").length,
    submitted: ASSIGNMENTS.filter((a) => a.status === "submitted").length,
    graded: ASSIGNMENTS.filter((a) => a.status === "graded").length,
  };

  return (
    <div className="student-assignments">
      {/* Summary pills */}
      <div className="assign-summary">
        {[
          { key: "pending", label: "Pending", color: "gold" },
          { key: "submitted", label: "Submitted", color: "teal" },
          { key: "graded", label: "Graded", color: "green" },
        ].map((s) => (
          <button
            key={s.key}
            className={`assign-summary__pill assign-summary__pill--${s.color} ${filter === s.key ? "active" : ""}`}
            onClick={() => setFilter(filter === s.key ? "all" : s.key)}
          >
            <span className="assign-summary__count">{counts[s.key]}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div className="db-card">
        <div className="db-card__header">
          <h2>
            {filter === "all"
              ? "All Assignments"
              : `${STATUS_CONFIG[filter].label} Assignments`}
            <span className="db-card__count">{filtered.length}</span>
          </h2>
          {filter !== "all" && (
            <button className="db-card__link" onClick={() => setFilter("all")}>
              Show all
            </button>
          )}
        </div>

        <div className="assignment-list">
          {filtered.map((a) => {
            const cfg = STATUS_CONFIG[a.status];
            const isOverdue =
              a.status === "pending" && new Date(a.due) < new Date();
            return (
              <div key={a.id} className="assignment-item">
                <div className="assignment-item__icon" aria-hidden="true">
                  <i className={cfg.icon}></i>
                </div>

                <div className="assignment-item__info">
                  <span className="assignment-item__title">{a.title}</span>
                  <span className="assignment-item__meta">
                    <i className="fa-solid fa-book" aria-hidden="true"></i>{" "}
                    {a.course}
                    &nbsp;·&nbsp;
                    <i
                      className="fa-regular fa-calendar"
                      aria-hidden="true"
                    ></i>{" "}
                    Due {a.due}
                    {isOverdue && (
                      <span
                        style={{
                          color: "#dc3c3c",
                          fontWeight: 700,
                          marginLeft: 6,
                        }}
                      >
                        Overdue!
                      </span>
                    )}
                  </span>
                </div>

                <div className="assignment-item__right">
                  {a.grade !== null ? (
                    <span
                      className={`db-badge db-badge--${a.grade >= 80 ? "green" : a.grade >= 60 ? "teal" : "gold"}`}
                    >
                      {a.grade}/100
                    </span>
                  ) : (
                    <span className={`db-badge db-badge--${cfg.badge}`}>
                      {cfg.label}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudentAssignments;
