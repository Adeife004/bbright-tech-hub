import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServicePage.css";
import "./Modelling3D.css";

function Modelling3D() {
  const outcomes = [
    {
      tag: "Fundamentals",
      title: "Understand core 3D modelling concepts and workflows",
      text: "Learn how vertices, edges, and faces combine to build 3D geometry.",
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
      tag: "Sculpting",
      title: "Sculpt and shape detailed 3D forms and characters",
      text: "Use sculpting tools to create organic shapes, characters, and props.",
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
      tag: "Texturing",
      title: "Apply textures and materials to 3D models",
      text: "Learn how surface detail, color, and material properties bring models to life.",
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
      tag: "Lighting",
      title: "Set up lighting and camera angles for presentation",
      text: "Light and frame 3D scenes to showcase models clearly and attractively.",
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
      tag: "Rendering",
      title: "Render finished models into polished final images",
      text: "Produce high-quality rendered output ready for portfolios or production use.",
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
      tag: "Optimization",
      title: "Optimize models for use in games and real-time applications",
      text: "Reduce polygon counts and prepare models for use in interactive projects.",
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
      q: "Do I need a powerful computer for 3D modelling?",
      a: "A reasonably modern computer is recommended for the best experience, but course exercises are structured so learners with average hardware can still follow along and complete projects.",
    },
    {
      q: "Do I need prior design experience?",
      a: "No. The course starts from the fundamentals and builds up gradually, so it is suitable for beginners with an interest in 3D and visual design.",
    },
    {
      q: "Will I create a full 3D model from scratch?",
      a: "Yes. The course includes practical projects where you build, texture, light, and render your own 3D models from start to finish.",
    },
    {
      q: "What career paths can this course support?",
      a: "Skills gained can support roles in game development, animation, product design, architectural visualization, and visual effects.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="services-wrapper model-page">
        {/* hero */}
        <section className="services-hero">
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
                Creative Media
              </span>
              <h1 className="services-title">3D Modelling</h1>
              <p className="services-subtitle">
                3D Modelling teaches learners to design, sculpt, and render
                three-dimensional objects and characters, building the technical
                and creative skills used in games, animation, product design,
                and visual effects.
              </p>
            </div>

            <div className="services-hero-card">
              <div className="model-viewport">
                <span className="model-viewport__badge">3D Preview</span>
                <span
                  className="model-viewport__ring"
                  aria-hidden="true"
                ></span>

                <div className="model-viewport__stage">
                  <img
                    src="/web.png"
                    alt="Preview of a 3D model built during the course"
                  />

                  <div className="model-viewport__gizmo" aria-hidden="true">
                    <span className="axis-x"></span>
                    <span className="axis-y"></span>
                    <span className="axis-z"></span>
                  </div>

                  <span className="model-viewport__stats">12,480 tris</span>
                </div>
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
                This 3D Modelling programme introduces learners to the full
                pipeline behind creating three-dimensional objects and
                characters, from basic shapes to finished, rendered scenes.
                Students learn how to build geometry, sculpt detail, apply
                textures and materials, and light their models for presentation.
              </p>
              <p className="services-section-text">
                Through hands-on projects, learners progress from simple objects
                to more complex models, finishing with polished, rendered work
                suitable for a portfolio, and the foundational skills used
                across games, animation, product design, and visual effects.
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

export default Modelling3D;
