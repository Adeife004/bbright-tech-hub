import "./ProgrammesHero.css";

function ProgrammesHero({ search, onSearchChange }) {
  return (
    <section className="prog-hero">
      <div className="prog-hero__bg-grid" aria-hidden="true"></div>
      <div
        className="prog-hero__orb prog-hero__orb--a"
        aria-hidden="true"
      ></div>
      <div
        className="prog-hero__orb prog-hero__orb--b"
        aria-hidden="true"
      ></div>

      <div className="prog-hero__inner">
        <span className="prog-hero__eyebrow">
          <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i> 17+
          Programmes
        </span>

        <h1>
          Find Your <span className="prog-text-accent">Path</span> in Tech
        </h1>

        <p>
          From your first line of code to your first job offer — every programme
          is built with employers, mapped to real outcomes.
        </p>

        <div className="prog-search">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search programmes... e.g. 'Python' or 'design'"
            aria-label="Search programmes"
          />
          {search && (
            <button
              className="prog-search__clear"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProgrammesHero;
