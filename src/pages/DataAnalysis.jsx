import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./DataAnalysis.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-chart-line",
    color: "indigo",
    title: "What You Will Learn",
    desc: "How to turn raw, messy data into clear insight — cleaning data, building visualisations, and telling a story with numbers people actually understand.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "emerald",
    title: "Tools You Will Use",
    desc: "Excel, Google Sheets, SQL, Power BI and Tableau, plus Python with Pandas for deeper analysis — the same stack used in real analyst roles.",
  },
  {
    icon: "fa-solid fa-users",
    color: "indigo",
    title: "Who It Is For",
    desc: "Anyone who already works with spreadsheets, aspiring analysts, small business owners who want to understand their own numbers, and career changers moving into data.",
  },
  {
    icon: "fa-solid fa-briefcase",
    color: "emerald",
    title: "Career Paths",
    desc: "Data Analyst, Business Intelligence Analyst, Reporting Analyst, Operations Analyst — roles in demand across every industry, not just tech.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1–2",
    title: "Excel & Spreadsheet Mastery",
    desc: "Formulas, pivot tables, lookups and cleaning messy data. The spreadsheet skills every analyst uses daily.",
  },
  {
    week: "Wk 3–4",
    title: "SQL Fundamentals",
    desc: "Querying real databases — joins, filters and aggregations. Getting exact answers out of thousands of rows in seconds.",
  },
  {
    week: "Wk 5–6",
    title: "Data Visualisation",
    desc: "Building interactive dashboards in Power BI and Tableau. Choosing the right chart and designing for the person who has to read it.",
  },
  {
    week: "Wk 7–8",
    title: "Intro to Python for Data",
    desc: "Pandas basics — cleaning, transforming and analysing datasets with code once spreadsheets aren't enough.",
  },
  {
    week: "Wk 9–10",
    title: "Capstone Analysis Project",
    desc: "Take a real, messy dataset end-to-end: clean it, analyse it, visualise it, and present your findings to a panel.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-broom",
    text: "Clean and organise messy real-world datasets",
  },
  {
    icon: "fa-solid fa-database",
    text: "Write SQL queries to pull answers from databases",
  },
  {
    icon: "fa-solid fa-chart-pie",
    text: "Build interactive dashboards in Power BI & Tableau",
  },
  {
    icon: "fa-solid fa-table-cells",
    text: "Use Excel pivot tables and formulas confidently",
  },
  { icon: "fa-brands fa-python", text: "Analyse data with Python and Pandas" },
  {
    icon: "fa-solid fa-lightbulb",
    text: "Tell a clear story with charts and numbers",
  },
  {
    icon: "fa-solid fa-briefcase",
    text: "Portfolio-ready — 2 real analysis projects",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub Data Analysis certificate",
  },
];

const FAQS = [
  {
    q: "Do I need to be good at maths?",
    a: "No advanced maths is required. Comfort with basic numbers helps, but this course is really about logic, tools and clear thinking — not statistics theory.",
  },
  {
    q: "Do I need to know Excel already?",
    a: "No — we start from the basics and build up to pivot tables, lookups and dashboards. If you already know Excel, you'll move faster through the early weeks.",
  },
  {
    q: "What's the difference between Data Analysis and Data Science?",
    a: "Data Analysis focuses on understanding what has already happened — dashboards, reports and clear answers to business questions. Data Science moves further into prediction and machine learning. This course is a strong foundation before going deeper into data science.",
  },
  {
    q: "Will I actually work with real data?",
    a: "Yes. From week 3 onward you're working with real, imperfect datasets — not clean textbook examples. Your capstone project is a full analysis of a real dataset you choose.",
  },
  {
    q: "Is coding required?",
    a: "You'll learn some SQL and Python, but both are taught from zero and kept practical. You don't need to be a programmer — you need to be curious about what the data is telling you.",
  },
];

/* ── Hero visual: CSS analytics dashboard ── */

const BAR_HEIGHTS = [38, 62, 48, 80, 56, 92, 70];

function DAHero() {
  return (
    <section className="service-hero da-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="da-hero__orb da-hero__orb--1" aria-hidden="true"></div>
      <div className="da-hero__orb da-hero__orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow da-eyebrow">
          <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title da-hero__title">
          Data
          <br />
          <span className="da-title-accent">Analysis</span>
        </h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Every business drowns in data and starves for insight. Learn to clean
          it, query it, visualise it and explain exactly what it means — with
          Excel, SQL, dashboards and Python.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill da-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 10 Weeks
          </span>
          <span className="service-hero__meta-pill da-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Beginner
            Friendly
          </span>
          <span className="service-hero__meta-pill da-pill da-pill--demand">
            <i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>{" "}
            High Demand
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="da-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="da-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS analytics dashboard visual */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="da-dashboard">
          <div className="da-dashboard__bar">
            <span className="da-dashboard__dot da-dashboard__dot--red"></span>
            <span className="da-dashboard__dot da-dashboard__dot--yellow"></span>
            <span className="da-dashboard__dot da-dashboard__dot--green"></span>
            <span className="da-dashboard__title">
              <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
              insights-dashboard
            </span>
          </div>

          <div className="da-dashboard__kpis">
            <div className="da-kpi">
              <span className="da-kpi__label">Revenue</span>
              <span className="da-kpi__value">$42.8K</span>
              <span className="da-kpi__trend da-kpi__trend--up">
                <i className="fa-solid fa-arrow-up"></i> 12%
              </span>
            </div>
            <div className="da-kpi">
              <span className="da-kpi__label">Users</span>
              <span className="da-kpi__value">8,412</span>
              <span className="da-kpi__trend da-kpi__trend--up">
                <i className="fa-solid fa-arrow-up"></i> 6%
              </span>
            </div>
            <div className="da-kpi">
              <span className="da-kpi__label">Conversion</span>
              <span className="da-kpi__value">3.2%</span>
              <span className="da-kpi__trend da-kpi__trend--down">
                <i className="fa-solid fa-arrow-down"></i> 2%
              </span>
            </div>
          </div>

          <div className="da-dashboard__charts">
            <div className="da-bar-chart">
              {BAR_HEIGHTS.map((h, i) => (
                <span
                  key={i}
                  className="da-bar-chart__bar"
                  style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
                ></span>
              ))}
            </div>

            <div className="da-donut">
              <div className="da-donut__ring">
                <span className="da-donut__center">68%</span>
              </div>
              <div className="da-donut__legend">
                <span>
                  <i className="da-dot da-dot--a"></i>Direct
                </span>
                <span>
                  <i className="da-dot da-dot--b"></i>Referral
                </span>
                <span>
                  <i className="da-dot da-dot--c"></i>Social
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating tool badges */}
        <div className="da-badge da-badge--sql">
          <i className="fa-solid fa-database" aria-hidden="true"></i> SQL
        </div>
        <div className="da-badge da-badge--excel">
          <i className="fa-solid fa-table-cells" aria-hidden="true"></i> Excel
        </div>
        <div className="da-badge da-badge--python">
          <i className="fa-brands fa-python" aria-hidden="true"></i> Python
        </div>
      </div>
    </section>
  );
}

/* ── FAQ item ── */
function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`services-faq ${open ? "open" : ""}`}>
      <button className="services-faq__q" onClick={() => setOpen((v) => !v)}>
        {faq.q}
        <span className="services-faq__icon">
          <i className="fa-solid fa-plus"></i>
        </span>
      </button>
      <div className="services-faq__a">{faq.a}</div>
    </div>
  );
}

/* ── Tabs ── */
const TABS = [
  { id: "overview", icon: "fa-solid fa-circle-info", label: "Overview" },
  { id: "curriculum", icon: "fa-solid fa-list-check", label: "Curriculum" },
  { id: "outcomes", icon: "fa-solid fa-trophy", label: "Outcomes" },
  { id: "faqs", icon: "fa-solid fa-circle-question", label: "FAQs" },
];

function DATabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs da-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={`services-tab ${active === tab.id ? "active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            <i className={tab.icon} aria-hidden="true"></i>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      <div
        role="tabpanel"
        className={`services-panel ${active === "overview" ? "active" : ""}`}
      >
        <div className="services-overview-grid">
          {OVERVIEW_CARDS.map((card) => (
            <div key={card.title} className="services-overview-card">
              <div
                className={`services-overview-card__icon da-icon da-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="da-info-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          Data Analyst roles are among the fastest-growing entry points into
          tech — and this course needs no prior data background.
        </div>
      </div>

      {/* Curriculum */}
      <div
        role="tabpanel"
        className={`services-panel ${active === "curriculum" ? "active" : ""}`}
      >
        <div className="services-curriculum">
          {CURRICULUM.map((week, i) => (
            <div key={week.week} className="services-week">
              <div className="services-week__num da-week-num">{i + 1}</div>
              <div className="services-week__body">
                <h4>
                  {week.week} — {week.title}
                </h4>
                <p>{week.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      <div
        role="tabpanel"
        className={`services-panel ${active === "outcomes" ? "active" : ""}`}
      >
        <div className="services-outcomes-grid">
          {OUTCOMES.map((o) => (
            <div key={o.text} className="services-outcome-tag da-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="da-outcomes-footer">
          {[
            ["2", "Real Analysis Projects"],
            ["10", "Weeks"],
            ["4", "Tools Mastered"],
          ].map(([num, label]) => (
            <div key={label} className="da-outcomes-footer__stat">
              <span className="da-outcomes-footer__num">{num}</span>
              <span className="da-outcomes-footer__label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div
        role="tabpanel"
        className={`services-panel ${active === "faqs" ? "active" : ""}`}
      >
        <div className="services-faqs">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DataAnalysis() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page da-page">
      <Navbar />
      <DAHero />
      <DATabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default DataAnalysis;
