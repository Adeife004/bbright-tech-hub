import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServicePage.css";

function UiUxDesign() {
  const outcomes = [
    {
      tag: "Foundations",
      title: "Understand the fundamentals of UI and UX design",
      text: "Learn the basic principles of User Interface (UI) and User Experience (UX) design to create digital products that are visually appealing, easy to use, and user-friendly.",
      icon: (
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
      ),
    },
    {
      tag: "Layout",
      title: "Create user-friendly layouts and digital interfaces",
      text: "Develop the skills to design clear, organized, and intuitive layouts that enhance usability and provide a positive user experience across digital platforms.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="13.5" cy="6.5" r="2.5"></circle>
          <circle cx="19" cy="17" r="2.5"></circle>
          <circle cx="6" cy="12" r="2.5"></circle>
          <line x1="14.5" y1="8.5" x2="8" y2="11"></line>
          <line x1="15.5" y1="9" x2="18" y2="14.5"></line>
        </svg>
      ),
    },
    {
      tag: "Visual Design",
      title:
        "Apply design principles such as color, typography, spacing, and visual hierarchy",
      text: "Learn how to use color, typography, spacing, and visual hierarchy effectively to create attractive, balanced, and easy-to-navigate digital designs.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      ),
    },
    {
      tag: "Prototyping",
      title: "Design wireframes and interactive prototypes",
      text: "Learn how to create wireframes and interactive prototypes to visualize, test, and improve digital products before development.",
      icon: (
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
      ),
    },
    {
      tag: "Research",
      title: "Conduct basic user research and understand user needs",
      text: "Learn how to gather user feedback, identify user needs, and apply research insights to create more effective and user-centered designs.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      tag: "Portfolio",
      title: "Build professional design projects for a portfolio",
      text: "Create high-quality design projects that demonstrate your skills, creativity, and problem-solving abilities for academic, freelance, or career opportunities.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "Do I need any previous design experience?",
      a: "No. This course is beginner-friendly and suitable for anyone interested in design.",
    },
    {
      q: "Do I need a laptop?",
      a: "Yes. A laptop or computer is recommended to effectively use design tools and complete projects.",
    },
    {
      q: "What design tools will I learn?",
      a: "Learners will be introduced to industry-standard design and prototyping tools used by UI/UX designers.",
    },
    {
      q: "Will I work on real design projects?",
      a: "Yes. The course includes practical projects that help learners apply their skills and build a portfolio.",
    },
    {
      q: "Is UI/UX Design a good career choice?",
      a: "Yes. UI/UX designers are in demand across technology, business, education, and many other industries.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes. Learners who successfully complete the course requirements may receive a certificate.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="services-wrapper">
        {/* hero */}
        <section className="services-hero">
          <div className="services-hero__ruler" aria-hidden="true"></div>

          <div className="services-hero-inner">
            <div className="services-hero-text">
              <span className="services-eyebrow">
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
                Tech Skills Training
              </span>
              <h1 className="services-title">UI/UX Design</h1>
              <p className="services-subtitle">
                UI/UX Design teaches learners how to create digital products
                that are both visually appealing and easy to use by blending
                UI's eye for beautiful screens with UX's focus on smooth,
                frustration-free navigation.
              </p>
            </div>

            <div className="services-hero-card">
              <div className="services-hero-card__frame">
                <span className="services-hero-card__layer-label">
                  Frame — UI Preview
                </span>
                <div className="services-hero-card__shape">
                  <img
                    src="/web.png"
                    alt="Preview of a UI design project built during the course"
                  />
                </div>
                <span className="services-hero-card__dimension">340 × 340</span>
                <span
                  className="services-hero-card__corner services-hero-card__corner--tl"
                  aria-hidden="true"
                ></span>
                <span
                  className="services-hero-card__corner services-hero-card__corner--tr"
                  aria-hidden="true"
                ></span>
                <span
                  className="services-hero-card__corner services-hero-card__corner--bl"
                  aria-hidden="true"
                ></span>
                <span
                  className="services-hero-card__corner services-hero-card__corner--br"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
          </div>
        </section>

        {/* tabs + panel */}
        <div className="services-content">
          <input
            type="radio"
            name="services-tab-group"
            id="tab-overview"
            className="services-tab-input"
            defaultChecked
          />
          <input
            type="radio"
            name="services-tab-group"
            id="tab-outcomes"
            className="services-tab-input"
          />
          <input
            type="radio"
            name="services-tab-group"
            id="tab-faqs"
            className="services-tab-input"
          />

          <nav className="services-tabs">
            <label htmlFor="tab-overview" className="services-tab">
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
              <span>Overview</span>
            </label>
            <label htmlFor="tab-outcomes" className="services-tab">
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
              <span>Learning Outcomes</span>
            </label>
            <label htmlFor="tab-faqs" className="services-tab">
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
              <span>FAQs</span>
            </label>
          </nav>

          <div className="services-panel">
            {/* overview */}
            <section className="services-section services-overview-content">
              <div className="services-section-head">
                <span className="services-section-icon">
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
                <h2 className="services-section-title">Overview</h2>
              </div>
              <p className="services-section-text">
                In this course, you will learn the principles of User Interface
                (UI) Design and User Experience (UX) Design, including layout
                design, color selection, typography, wireframing, prototyping,
                and user-centered design. Through practical projects, learners
                will develop the skills needed to design websites and mobile
                applications that provide engaging and seamless user
                experiences.
              </p>
              <p className="services-section-text">
                By the end of this course, learners will know how to create
                digital products that are both visually appealing and easy to
                use, blending UI's eye for beautiful screens with UX's focus on
                smooth, simple navigation.
              </p>
            </section>

            {/* learning outcomes */}
            <section className="services-section services-outcomes-content">
              <div className="services-section-head">
                <span className="services-section-icon">
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
                <h2 className="services-section-title">Learning Outcomes</h2>
              </div>

              <div className="services-outcomes-grid">
                {outcomes.map((o) => (
                  <div className="services-outcome-card" key={o.tag}>
                    <span className="services-outcome-icon">{o.icon}</span>
                    <div>
                      <span className="services-outcome-tag">{o.tag}</span>
                      <p className="services-outcome-title">{o.title}</p>
                      <p className="services-outcome-text">{o.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* faqs */}
            <section className="services-section services-faqs-content">
              <div className="services-section-head">
                <span className="services-section-icon">
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
                <h2 className="services-section-title">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="services-faq-list">
                {faqs.map((item, i) => (
                  <details className="services-faq-item" key={i}>
                    <summary className="services-faq-question">
                      <span className="services-faq-question-left">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        {item.q}
                      </span>
                      <svg
                        className="services-faq-chevron"
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
                    <p className="services-faq-answer">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UiUxDesign;
