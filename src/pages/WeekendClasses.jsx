import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProgrammePage.css";

const subjects = [
  { name: "Digital Literacy", to: "/digital-literacy" },
  { name: "Web Development", to: "/web-development" },
  { name: "UI/UX Design", to: "/ui-ux-design" },
  { name: "Data Analysis", to: "/data-analysis" },
  { name: "Vibe Coding", to: "/vibe-coding" },
  { name: "Robotics", to: "/robotics" },
  { name: "VR & AR", to: "/vr-ar" },
  { name: "Game Development", to: "/game-development" },
  { name: "3D Modelling", to: "/3d-modelling" },
  { name: "2D Animation", to: "/2d-animation" },
];

const faqs = [
  {
    q: "How long are weekend sessions?",
    a: "Weekend sessions typically run longer than weekday classes, giving students more focused, hands-on time to work through projects in a single sitting.",
  },
  {
    q: "Is this suitable for working professionals?",
    a: "Yes. Weekend Classes are a popular option for professionals and students with weekday commitments who still want structured, consistent learning.",
  },
  {
    q: "Do I need to attend every weekend?",
    a: "Regular attendance is recommended to get the most out of the programme, but our instructors can help you catch up if you miss an occasional session.",
  },
  {
    q: "How do I enroll?",
    a: "Use the Apply Now button below to start the enrollment process, or contact us directly if you have questions before applying.",
  },
];

function WeekendClasses() {
  return (
    <>
      <Navbar />

      <div className="programme-wrapper weekend-page">
        <section className="programme-hero">
          <div className="programme-hero-inner">
            <span className="programme-eyebrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Learning Programmes
            </span>
            <h1 className="programme-title">Weekend Classes</h1>
            <p className="programme-subtitle">
              Longer, focused sessions on Saturdays and Sundays — built for
              students and professionals whose weekdays are already spoken for.
            </p>
            <span className="programme-hero-badge">
              <span className="programme-mini-cal" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="active"></span>
                <span className="active"></span>
              </span>
              Saturdays &amp; Sundays
            </span>
          </div>
        </section>

        <div className="programme-facts">
          <div className="programme-fact">
            <span className="programme-fact__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <div>
              <p className="programme-fact__label">Days</p>
              <p className="programme-fact__value">Saturday &amp; Sunday</p>
            </div>
          </div>

          <div className="programme-fact">
            <span className="programme-fact__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </span>
            <div>
              <p className="programme-fact__label">Time</p>
              <p className="programme-fact__value">10:00 AM – 2:00 PM</p>
            </div>
          </div>

          <div className="programme-fact">
            <span className="programme-fact__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"></path>
              </svg>
            </span>
            <div>
              <p className="programme-fact__label">Term Length</p>
              <p className="programme-fact__value">14 weeks</p>
            </div>
          </div>
        </div>

        <div className="programme-content">
          <section className="programme-section">
            <div className="programme-section-head">
              <span className="programme-section-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <h2 className="programme-section-title">About This Programme</h2>
            </div>
            <p className="programme-section-text">
              Weekend Classes are designed around longer, uninterrupted session
              blocks — giving students and professionals room to go deeper into
              a topic without the time pressure of a weekday evening slot. It's
              a consistent, structured option for anyone whose week is already
              full.
            </p>
          </section>

          <section className="programme-section">
            <div className="programme-section-head">
              <span className="programme-section-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </span>
              <h2 className="programme-section-title">Subjects Available</h2>
            </div>
            <div className="programme-subjects">
              {subjects.map((s) => (
                <Link to={s.to} className="programme-subject-chip" key={s.name}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  {s.name}
                </Link>
              ))}
            </div>
          </section>

          <section className="programme-section">
            <div className="programme-section-head">
              <span className="programme-section-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <h2 className="programme-section-title">What's Included</h2>
            </div>
            <div className="programme-checklist">
              {[
                "Longer, focused session blocks",
                "Hands-on projects every weekend",
                "Certificate of completion",
                "Flexible for working professionals",
                "Access to course materials after class",
                "Experienced, qualified instructors",
              ].map((item) => (
                <div className="programme-check-item" key={item}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="programme-section">
            <div className="programme-section-head">
              <span className="programme-section-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </span>
              <h2 className="programme-section-title">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="programme-faq-list">
              {faqs.map((item, i) => (
                <details className="programme-faq-item" key={i}>
                  <summary className="programme-faq-question">
                    <span>{item.q}</span>
                    <svg
                      className="programme-faq-chevron"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </summary>
                  <p className="programme-faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="programme-cta">
            <h3>Ready to enroll?</h3>
            <p>Reserve a spot for the next weekend term today.</p>
            <Link to="/apply" className="btn-apply">
              Apply Now{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WeekendClasses;
