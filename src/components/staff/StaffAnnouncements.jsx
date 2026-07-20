import { useState } from "react";
import { useAuth } from "../../context/useAuth.js";
import "./StaffDashboard.css";

const INITIAL_ANNOUNCEMENTS = [
  {
    id: 1,
    author: "Admin",
    role: "admin",
    title: "July of Tech Kickoff — All Staff Required",
    body: "Please ensure all students are briefed about the July of Tech schedule. Attendance registers must be submitted by Friday.",
    date: "10 Jul 2026",
    pinned: true,
  },
  {
    id: 2,
    author: "Adebowale Jasmine",
    role: "staff",
    title: "Web Dev Lab — Projector Replacement",
    body: "The projector in Lab 1 has been replaced. Please test before your next session and report any issues to ops.",
    date: "08 Jul 2026",
    pinned: false,
  },
  {
    id: 3,
    author: "Admin",
    role: "admin",
    title: "Payroll — July Submission Deadline",
    body: "All attendance and hours reports must be submitted by 25 July for payroll to be processed on time.",
    date: "05 Jul 2026",
    pinned: false,
  },
];

function StaffAnnouncements() {
  const { user } = useAuth();
  const [announcements, setAnnouncements] = useState(INITIAL_ANNOUNCEMENTS);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});

  function handlePost(ev) {
    ev.preventDefault();
    const e = {};
    if (!title.trim()) e.title = "Required";
    if (!body.trim()) e.body = "Required";
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    const newAnn = {
      id: Date.now(),
      author: user?.name || "Staff",
      role: "staff",
      title: title.trim(),
      body: body.trim(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      pinned: false,
    };

    setAnnouncements((prev) => [newAnn, ...prev]);
    setTitle("");
    setBody("");
    setErrors({});
    setShowForm(false);
  }

  return (
    <div className="staff-announcements">
      {/* Post new announcement */}
      <div className="db-card">
        <div className="db-card__header">
          <h2>Announcements</h2>
          <button
            className="db-btn db-btn--primary db-btn--sm"
            onClick={() => setShowForm((v) => !v)}
          >
            <i
              className={`fa-solid ${showForm ? "fa-xmark" : "fa-plus"}`}
              aria-hidden="true"
            ></i>
            {showForm ? "Cancel" : "New Announcement"}
          </button>
        </div>

        {showForm && (
          <form className="ann-form" onSubmit={handlePost} noValidate>
            <div className={`db-field ${errors.title ? "has-error" : ""}`}>
              <label className="db-field__label">Title</label>
              <div className="db-field__wrap">
                <i
                  className="fa-solid fa-heading db-field__icon"
                  aria-hidden="true"
                ></i>
                <input
                  type="text"
                  className="db-field__input"
                  placeholder="Announcement title…"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setErrors((er) => ({ ...er, title: undefined }));
                  }}
                />
              </div>
              {errors.title && (
                <span className="db-field__error">{errors.title}</span>
              )}
            </div>

            <div className={`db-field ${errors.body ? "has-error" : ""}`}>
              <label className="db-field__label">Message</label>
              <textarea
                className="db-field__input db-field__textarea"
                rows={4}
                placeholder="Write your announcement here…"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                  setErrors((er) => ({ ...er, body: undefined }));
                }}
              />
              {errors.body && (
                <span className="db-field__error">{errors.body}</span>
              )}
            </div>

            <div className="db-form-actions">
              <button type="submit" className="db-btn db-btn--primary">
                <i className="fa-solid fa-bullhorn" aria-hidden="true"></i> Post
                Announcement
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Announcement list */}
      <div className="ann-list">
        {announcements.map((ann) => (
          <div
            key={ann.id}
            className={`ann-card ${ann.pinned ? "ann-card--pinned" : ""}`}
          >
            <div className="ann-card__header">
              <div className="ann-card__meta">
                <div className="ann-card__avatar">
                  {ann.author
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <span className="ann-card__author">{ann.author}</span>
                  <span
                    className={`db-badge db-badge--${ann.role === "admin" ? "gold" : "teal"} db-badge--xs`}
                  >
                    {ann.role}
                  </span>
                </div>
              </div>
              <div className="ann-card__right">
                {ann.pinned && (
                  <span className="ann-card__pinned">
                    <i className="fa-solid fa-thumbtack" aria-hidden="true"></i>{" "}
                    Pinned
                  </span>
                )}
                <span className="ann-card__date">{ann.date}</span>
              </div>
            </div>
            <h3 className="ann-card__title">{ann.title}</h3>
            <p className="ann-card__body">{ann.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaffAnnouncements;
