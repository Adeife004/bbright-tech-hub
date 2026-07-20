import "./ApplyPathSelector.css";

function ApplyPathSelector({ onSelect }) {
  return (
    <div className="path-select">
      <button
        type="button"
        className="path-card path-card--learn"
        onClick={() => onSelect("learn")}
      >
        <span className="path-card__glow" aria-hidden="true"></span>
        <span className="path-card__icon">
          <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
        </span>
        <span className="path-card__title">I want to learn</span>
        <span className="path-card__desc">
          Join a programme. Web dev, AI, design, security — pick your path and
          start building.
        </span>
        <span className="path-card__cta">
          Apply as a student{" "}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </span>
      </button>

      <div className="path-divider" aria-hidden="true">
        <span>or</span>
      </div>

      <button
        type="button"
        className="path-card path-card--work"
        onClick={() => onSelect("work")}
      >
        <span className="path-card__glow" aria-hidden="true"></span>
        <span className="path-card__icon">
          <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
        </span>
        <span className="path-card__title">I want to work here</span>
        <span className="path-card__desc">
          Join our team. Instructors, mentors, ops, and more — help us build the
          next cohort.
        </span>
        <span className="path-card__cta">
          Apply for a role{" "}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}

export default ApplyPathSelector;
