import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServicePage.css";
import "./DataAnalysis.css";

function DataAnalysis() {
  const sparklineHeights = [8, 14, 10, 20, 16, 24, 18];

  const outcomes = [
    {
      tag: "Data Prep",
      title: "Clean, transform, and prepare data for analysis",
      text: "Learn how to organize and structure data for accurate analysis.",
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
      tag: "Analysis",
      title:
        "Analyze complex datasets to identify trends, patterns, and opportunities",
      text: "Develop the ability to extract meaningful insights from data.",
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
      tag: "Visualization",
      title: "Create professional charts, dashboards, and data visualizations",
      text: "Present data clearly using effective visual reporting tools.",
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
      tag: "Statistics",
      title: "Apply statistical concepts to support data-driven decisions",
      text: "Use analytical techniques to make informed business and research decisions.",
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
      tag: "Reporting",
      title:
        "Generate reports and present insights effectively to stakeholders",
      text: "Communicate findings in a clear and professional manner.",
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
      tag: "Tools",
      title: "Use industry-standard data analysis tools and techniques",
      text: "Gain hands-on experience with modern data analysis tools and workflows.",
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
      q: "Is this course suitable for beginners?",
      a: "A basic understanding of computers and spreadsheets is helpful, but the course provides guidance to help learners build their analytical skills.",
    },
    {
      q: "Do I need a laptop?",
      a: "Yes. A laptop or computer is required for working with data analysis tools and completing practical projects.",
    },
    {
      q: "Will I work with real datasets?",
      a: "Yes. The course includes practical exercises and projects using real-world data to simulate professional analysis tasks.",
    },
    {
      q: "What career opportunities can this course support?",
      a: "The skills gained can support roles in data analysis, business intelligence, operations, research, marketing analytics, and other data-driven fields.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="services-wrapper data-page">
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
                Tech Skills Training
              </span>
              <h1 className="services-title">Data Analysis</h1>
              <p className="services-subtitle">
                This advanced Data Analysis course is designed for learners who
                want to move beyond basic spreadsheets and develop professional
                data skills. Students will learn how to collect, clean,
                transform, analyze, and visualize large datasets to uncover
                meaningful insights and support data-driven decision-making.
              </p>
            </div>

            <div className="services-hero-card">
              <div className="data-dashboard">
                <div className="data-dashboard__grid" aria-hidden="true"></div>
                <span className="data-dashboard__badge-top">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                  </svg>
                  Insights Dashboard
                </span>
                <div className="data-dashboard__shape">
                  <img
                    src="/web.png"
                    alt="Preview of a data analysis dashboard built during the course"
                  />
                </div>
                <span className="data-dashboard__badge-stat">▲ 24%</span>
                <div className="data-dashboard__sparkline" aria-hidden="true">
                  {sparklineHeights.map((h, i) => (
                    <span key={i} style={{ height: `${h}px` }}></span>
                  ))}
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
                This advanced Data Analysis course is designed for learners who
                want to move beyond basic spreadsheets and develop professional
                data skills. Students will learn how to collect, clean,
                transform, analyze, and visualize large datasets to uncover
                meaningful insights and support data-driven decision-making.
              </p>
              <p className="services-section-text">
                The course combines analytical thinking with hands-on practice
                using industry-relevant tools and techniques. Learners will work
                with real-world datasets, create interactive dashboards,
                generate reports, and develop the skills needed to solve
                business and organizational challenges through data.
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

export default DataAnalysis;
