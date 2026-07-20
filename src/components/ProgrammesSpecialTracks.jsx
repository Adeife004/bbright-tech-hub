import { Link } from "react-router-dom";
import "./ProgrammesSpecialTracks.css";

const tracks = [
  { to: "/july-of-tech", icon: "fa-solid fa-sun", label: "July of Tech" },
  {
    to: "/summer-classes",
    icon: "fa-solid fa-umbrella-beach",
    label: "Summer Classes",
  },
  { to: "/after-school", icon: "fa-solid fa-book-open", label: "After School" },
];

function ProgrammesSpecialTracks() {
  return (
    <section className="special-tracks">
      <div className="special-tracks__inner">
        <div className="special-tracks__text">
          <span className="section-eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            Special Formats
            <span className="eyebrow-line" aria-hidden="true"></span>
          </span>
          <h2>
            Not Just <span className="text-teal">What</span> — But{" "}
            <span className="text-teal">When</span>
          </h2>
          <p>
            Every programme above can be taken through one of our three special
            tracks, built around real schedules.
          </p>
        </div>

        <div className="special-tracks__links">
          {tracks.map((track) => (
            <Link key={track.to} to={track.to} className="special-track-pill">
              <i className={track.icon} aria-hidden="true"></i>
              {track.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgrammesSpecialTracks;
