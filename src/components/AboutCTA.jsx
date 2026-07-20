import { Link } from "react-router-dom";
import "./AboutCTA.css";

function AboutCTA() {
  return (
    <div className="about-cta">
      <div className="about-cta__content">
        <h2>Ready to Start Your Tech Journey?</h2>
        <p>
          Empower yourself or your child with practical digital skills, hands-on
          learning, and expert guidance at B Bright Tech. Let's build the future
          together.
        </p>
        <div className="about-cta__buttons">
          <Link
            to="/programmes"
            className="about-cta__btn about-cta__btn--primary"
          >
            Explore Courses
          </Link>
          <Link
            to="/contact"
            className="about-cta__btn about-cta__btn--secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutCTA;
