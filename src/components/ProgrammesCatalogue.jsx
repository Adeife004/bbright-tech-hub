import { Link } from "react-router-dom";
import "./ProgrammesCatalogue.css";

const BADGE_CONFIG = {
  popular: { label: "Most Popular", className: "cat-card__badge--popular" },
  new: { label: "New", className: "cat-card__badge--new" },
  flagship: { label: "Flagship", className: "cat-card__badge--popular" },
};

const LEVEL_CLASS = {
  beginner: "level-tag--beginner",
  intermediate: "level-tag--intermediate",
  advanced: "level-tag--advanced",
};

function ProgrammeCard({ prog }) {
  const badge = prog.badge ? BADGE_CONFIG[prog.badge] : null;

  return (
    <article
      className={`cat-card ${prog.featured ? "cat-card--featured" : ""}`}
    >
      <div className="cat-card__top">
        <span className="cat-card__icon" aria-hidden="true">
          <i className={prog.icon}></i>
        </span>
        {badge && (
          <span className={`cat-card__badge ${badge.className}`}>
            {badge.label}
          </span>
        )}
      </div>

      <h3>{prog.title}</h3>
      <p>{prog.desc}</p>

      <div className="cat-card__meta">
        <span>
          <i className="fa-regular fa-clock" aria-hidden="true"></i>{" "}
          {prog.duration}
        </span>
        <span className={`level-tag ${LEVEL_CLASS[prog.level]}`}>
          {prog.level.charAt(0).toUpperCase() + prog.level.slice(1)}
        </span>
      </div>

      <Link to={prog.href} className="cat-card__link">
        View Details{" "}
        <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </Link>
    </article>
  );
}

function ProgrammesCatalogue({ programmes, onClearFilters }) {
  return (
    <section className="catalogue">
      {programmes.length > 0 ? (
        <div className="catalogue__grid">
          {programmes.map((prog) => (
            <ProgrammeCard key={prog.id} prog={prog} />
          ))}
        </div>
      ) : (
        <div className="catalogue__empty">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <h3>No programmes found</h3>
          <p>Try a different search term or clear your filters.</p>
          <button className="btn-clear-filters" onClick={onClearFilters}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}

export default ProgrammesCatalogue;
