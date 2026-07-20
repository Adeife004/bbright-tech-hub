import "./ProgrammesFilter.css";

const categories = [
  { value: "all", label: "All" },
  { value: "tech-skills", label: "Tech Skills Training" },
  { value: "emerging-tech", label: "Emerging Technologies" },
  { value: "creative-media", label: "Creative Media" },
  { value: "school-solutions", label: "School Solutions" },
  { value: "learning-programs", label: "Learning Programs" },
];

function ProgrammesFilter({
  activeCategory,
  onCategoryChange,
  activeLevel,
  onLevelChange,
  resultCount,
}) {
  return (
    <section className="filter-bar">
      <div className="filter-bar__inner">
        <div
          className="filter-group"
          role="group"
          aria-label="Filter by category"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-chip ${activeCategory === cat.value ? "active" : ""}`}
              onClick={() => onCategoryChange(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="filter-group" role="group" aria-label="Filter by level">
          <select
            className="filter-select"
            value={activeLevel}
            onChange={(e) => onLevelChange(e.target.value)}
            aria-label="Filter by level"
          >
            <option value="all">All levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      {resultCount !== null && (
        <p className="filter-results" aria-live="polite">
          {resultCount === 0
            ? "No programmes match your filters"
            : `Showing ${resultCount} programme${resultCount !== 1 ? "s" : ""}`}
        </p>
      )}
    </section>
  );
}

export default ProgrammesFilter;
