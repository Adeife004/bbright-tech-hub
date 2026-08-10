import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./WebDevelopment.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-code",
    color: "teal",
    title: "What You Will Learn",
    desc: "From your first HTML tag to deploying a full-stack web app — HTML, CSS, JavaScript, React and Node.js taught in logical, progressive steps.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "gold",
    title: "Tools You Will Use",
    desc: "VS Code, Git & GitHub, Chrome DevTools, React, Node.js, Express, MongoDB and Vercel. Every tool used by real developers today.",
  },
  {
    icon: "fa-solid fa-users",
    color: "teal",
    title: "Who It Is For",
    desc: "Complete beginners who want to break into tech, students who want to build their own products, and career switchers targeting developer roles.",
  },
  {
    icon: "fa-solid fa-briefcase",
    color: "gold",
    title: "Career Paths",
    desc: "Frontend Developer, Full-Stack Developer, UI Engineer, Freelance Web Developer, Technical Co-founder — all high-demand, well-paying roles.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1–2",
    title: "HTML Fundamentals",
    desc: "Structure, semantics, forms, tables and accessibility. Build your first 3 static web pages.",
  },
  {
    week: "Wk 3–4",
    title: "CSS & Responsive Design",
    desc: "Flexbox, Grid, animations, media queries and mobile-first design. Your pages look great on any screen.",
  },
  {
    week: "Wk 5–6",
    title: "JavaScript Basics",
    desc: "Variables, functions, loops, arrays, objects and DOM manipulation. Make your pages interactive.",
  },
  {
    week: "Wk 7–8",
    title: "JavaScript Advanced",
    desc: "Async JS, Promises, Fetch API, localStorage and working with real external APIs.",
  },
  {
    week: "Wk 9–10",
    title: "React Fundamentals",
    desc: "Components, JSX, props, state, useEffect and React Router. Build your first single-page app.",
  },
  {
    week: "Wk 11–12",
    title: "React Advanced + State",
    desc: "Context API, custom hooks, form handling, error boundaries and performance optimisation.",
  },
  {
    week: "Wk 13–14",
    title: "Node.js & Backend Basics",
    desc: "Express servers, REST APIs, MongoDB, authentication with JWT and connecting frontend to backend.",
  },
  {
    week: "Wk 15–16",
    title: "Capstone Project + Deployment",
    desc: "Build and deploy a complete full-stack application. Code review, peer feedback and portfolio documentation.",
  },
];

const OUTCOMES = [
  { icon: "fa-solid fa-globe", text: "Build and deploy 5 real web projects" },
  {
    icon: "fa-brands fa-react",
    text: "Proficient in React — most in-demand frontend skill",
  },
  {
    icon: "fa-solid fa-server",
    text: "Build REST APIs with Node.js & Express",
  },
  {
    icon: "fa-brands fa-git-alt",
    text: "Git & GitHub workflow — industry standard",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    text: "Fully responsive, mobile-first designs",
  },
  { icon: "fa-solid fa-database", text: "Connect apps to MongoDB databases" },
  {
    icon: "fa-solid fa-briefcase",
    text: "Portfolio-ready — 5 deployed projects",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub Web Development certificate",
  },
];

const FAQS = [
  {
    q: "Do I need my own laptop?",
    a: "Yes — you need a laptop with at least 8GB RAM and a modern browser. If you do not have one, speak to us before enrolling; we have a limited number of lab seats available.",
  },
  {
    q: "Do I need any prior experience?",
    a: "None at all. The course starts from absolute zero — your first HTML tag. By week 16 you will be building full-stack applications.",
  },
  {
    q: "What programming language do we learn?",
    a: "JavaScript — the only language that runs in the browser, on servers (Node.js), and in mobile apps (React Native). It is the most versatile language for web development.",
  },
  {
    q: "Will my projects be live on the internet?",
    a: "Yes. Every major project is deployed to a real domain using Vercel or Netlify. You leave with links you can share with anyone.",
  },
  {
    q: "Is it full-time or part-time?",
    a: "We offer both. The 16-week course runs as a part-time evening programme (Mon/Wed/Fri) or an 8-week full-time intensive (weekdays 9am–3pm).",
  },
];

/* ── Hero visual: CSS browser + code window ── */

const CODE_LINES = [
  {
    indent: 0,
    tokens: [
      { t: "tag", v: "<" },
      { t: "tag", v: "div" },
      { t: "attr", v: " className" },
      { t: "eq", v: "=" },
      { t: "str", v: '"hero"' },
      { t: "tag", v: ">" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "tag", v: "<" },
      { t: "tag", v: "h1" },
      { t: "tag", v: ">" },
      { t: "txt", v: "Hello, World" },
      { t: "tag", v: "</" },
      { t: "tag", v: "h1" },
      { t: "tag", v: ">" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "tag", v: "<" },
      { t: "tag", v: "p" },
      { t: "tag", v: ">" },
      { t: "txt", v: "Built with React" },
      { t: "tag", v: "</" },
      { t: "tag", v: "p" },
      { t: "tag", v: ">" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "tag", v: "<" },
      { t: "tag", v: "button" },
      { t: "tag", v: ">" },
      { t: "txt", v: "Get Started" },
      { t: "tag", v: "</" },
      { t: "tag", v: "button" },
      { t: "tag", v: ">" },
    ],
  },
  {
    indent: 0,
    tokens: [
      { t: "tag", v: "</" },
      { t: "tag", v: "div" },
      { t: "tag", v: ">" },
    ],
  },
];

const TOKEN_COLOR = {
  tag: "#5ecec4",
  attr: "#c792ea",
  eq: "#fff",
  str: "#f0c068",
  txt: "#c3e88d",
  fn: "#82aaff",
};

function WDHero() {
  return (
    <section className="service-hero wd-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="wd-hero__orb wd-hero__orb--1" aria-hidden="true"></div>
      <div className="wd-hero__orb wd-hero__orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow wd-eyebrow">
          <i className="fa-solid fa-code" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title wd-hero__title">
          Web
          <br />
          <span className="wd-title-accent">Development</span>
        </h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Go from complete beginner to full-stack developer in 16 weeks. HTML,
          CSS, JavaScript, React and Node.js — everything you need to build and
          ship real web applications.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill wd-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 16 Weeks
          </span>
          <span className="service-hero__meta-pill wd-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Beginner –
            Intermediate
          </span>
          <span className="service-hero__meta-pill wd-pill wd-pill--hot">
            <i className="fa-solid fa-fire" aria-hidden="true"></i> Most Popular
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="wd-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="wd-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS browser + code editor visual */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="wd-browser">
          {/* Browser chrome */}
          <div className="wd-browser__bar">
            <span className="wd-browser__dot wd-browser__dot--red"></span>
            <span className="wd-browser__dot wd-browser__dot--yellow"></span>
            <span className="wd-browser__dot wd-browser__dot--green"></span>
            <span className="wd-browser__url">
              <i className="fa-solid fa-lock" aria-hidden="true"></i>
              myproject.vercel.app
            </span>
          </div>

          {/* Code area */}
          <div className="wd-browser__body">
            <div className="wd-code">
              {CODE_LINES.map((line, i) => (
                <div key={i} className="wd-code__line">
                  <span className="wd-code__ln">{i + 1}</span>
                  <span
                    className="wd-code__content"
                    style={{ paddingLeft: line.indent * 16 }}
                  >
                    {line.tokens.map((tok, j) => (
                      <span key={j} style={{ color: TOKEN_COLOR[tok.t] }}>
                        {tok.v}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
              <div className="wd-code__cursor" aria-hidden="true"></div>
            </div>

            {/* Preview pane */}
            <div className="wd-preview">
              <div className="wd-preview__h1">Hello, World</div>
              <div className="wd-preview__p">Built with React</div>
              <button className="wd-preview__btn">Get Started</button>
            </div>
          </div>

          {/* Floating tech tags */}
          <div className="wd-tag wd-tag--html">HTML</div>
          <div className="wd-tag wd-tag--css">CSS</div>
          <div className="wd-tag wd-tag--js">JS</div>
          <div className="wd-tag wd-tag--react">
            <i className="fa-brands fa-react"></i> React
          </div>
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

function WDTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs wd-tabs" role="tablist">
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
                className={`services-overview-card__icon wd-icon wd-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="wd-info-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          JavaScript is the most in-demand programming language globally for 11
          years running — and it is the only language this course needs.
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
              <div className="services-week__num wd-week-num">{i + 1}</div>
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
            <div key={o.text} className="services-outcome-tag wd-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="wd-outcomes-footer">
          {[
            ["5", "Deployed Projects"],
            ["16", "Weeks"],
            ["4", "Technologies"],
          ].map(([num, label]) => (
            <div key={label} className="wd-outcomes-footer__stat">
              <span className="wd-outcomes-footer__num">{num}</span>
              <span className="wd-outcomes-footer__label">{label}</span>
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

function WebDevelopment() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page wd-page">
      <Navbar />
      <WDHero />
      <WDTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default WebDevelopment;
