import { Link } from "react-router-dom";
import "./ApplySuccess.css";

function ApplySuccess({ title, text }) {
  return (
    <div className="success-card">
      <div className="success-card__icon">
        <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to="/" className="btn-apply-cta">
        Back to Home{" "}
        <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default ApplySuccess;
