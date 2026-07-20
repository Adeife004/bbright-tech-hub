import { Link } from "react-router-dom";
import "./TestimonialsCTA.css";

function TestimonialsCTA() {
  return (
    <section className="testi-cta">
      <div className="testi-cta__content">
        <div className="testi-cta__left">
          <div className="testi-cta__icon" aria-hidden="true">
            <i className="fas fa-users"></i>
          </div>
          <div>
            <h2>
              Join Thousands of <span>Successful Learners</span>
            </h2>
            <p>
              Start your journey today and become the next B Bright Tech success
              story.
            </p>
          </div>
        </div>

        <Link to="/apply" className="testi-cta__btn">
          Apply Now{" "}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </section>
  );
}

export default TestimonialsCTA;
