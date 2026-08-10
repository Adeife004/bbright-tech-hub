import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./UiUxDesign.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-pen-ruler",
    color: "purple",
    title: "What You Will Learn",
    desc: "The full design process — research, wireframing, prototyping and testing. You design with the user in mind at every step.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "pink",
    title: "Tools You Will Use",
    desc: "Figma (industry standard), FigJam for workshops, Maze for user testing, Notion for documentation and Loom for design walkthroughs.",
  },
  {
    icon: "fa-solid fa-users",
    color: "purple",
    title: "Who It Is For",
    desc: "Creatives switching to tech, developers who want to understand design, entrepreneurs building their own products, and anyone who loves beautiful, usable interfaces.",
  },
  {
    icon: "fa-solid fa-briefcase",
    color: "pink",
    title: "Career Paths",
    desc: "UI Designer, UX Designer, Product Designer, UX Researcher, Design Lead — all well-paid roles at tech companies, agencies and startups.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1–2",
    title: "Design Thinking & Research",
    desc: "User interviews, empathy maps, personas, problem statements and How Might We questions. Design starts with people, not pixels.",
  },
  {
    week: "Wk 3–4",
    title: "Information Architecture & Wireframing",
    desc: "User flows, site maps, low-fidelity wireframes and content hierarchy. Plan the product before you design it.",
  },
  {
    week: "Wk 5–6",
    title: "Visual Design Fundamentals",
    desc: "Typography, colour theory, spacing, grids and visual hierarchy. The principles behind every great-looking screen.",
  },
  {
    week: "Wk 7–8",
    title: "Figma — Components & Prototyping",
    desc: "Design systems, auto-layout, variants, components and interactive prototypes. Build like a professional design team.",
  },
  {
    week: "Wk 9–10",
    title: "Usability Testing & Iteration",
    desc: "Conduct moderated user tests with Maze, analyse results and iterate. Design that is tested is design that works.",
  },
  {
    week: "Wk 11–12",
    title: "Capstone — Full Product Design",
    desc: "Design a complete mobile or web app from research to high-fidelity prototype. Present to a real panel for feedback.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-mobile-screen",
    text: "Design a complete app — mobile and desktop",
  },
  {
    icon: "fa-solid fa-layer-group",
    text: "Build a reusable Figma component library",
  },
  { icon: "fa-solid fa-users", text: "Conduct real user research and testing" },
  {
    icon: "fa-solid fa-sitemap",
    text: "Create professional user flows and wireframes",
  },
  {
    icon: "fa-solid fa-palette",
    text: "Apply colour, typography and spacing confidently",
  },
  {
    icon: "fa-brands fa-figma",
    text: "Figma proficiency — the industry standard tool",
  },
  {
    icon: "fa-solid fa-briefcase",
    text: "Portfolio with 3 complete design case studies",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub UI/UX Design certificate",
  },
];

const FAQS = [
  {
    q: "Do I need to be able to draw or be artistic?",
    a: "Not at all. UI/UX design is mostly about logic, empathy and problem-solving. We teach all the visual principles from scratch — no art background needed.",
  },
  {
    q: "Do I need a powerful computer?",
    a: "Figma runs in the browser — any modern laptop with a stable internet connection works. A mouse makes detailed design work more comfortable.",
  },
  {
    q: "What is the difference between UI and UX?",
    a: "UX (User Experience) is about how a product works — the flow, the logic, the research. UI (User Interface) is how it looks — the colours, fonts and components. This course covers both.",
  },
  {
    q: "Will I work on real projects?",
    a: "Yes. Each major week block ends with a real design task. Your capstone in weeks 11–12 is a full product design presented to a panel — exactly what a job interview would expect.",
  },
  {
    q: "Can this course help me as a developer?",
    a: "Absolutely. Developers who understand design communicate better with designers, write better UI code and build products users actually enjoy. Many of our best design students are developers.",
  },
];

/* ── Hero visual: CSS Figma mockup ── */

const LAYERS = ["🎨 Header", "📦 Card", "🔘 Button", "📝 Input", "🖼 Image"];
const SWATCHES = ["#8b5cf6", "#ec4899", "#5ecec4", "#f0c068", "#1e1b4b"];

function UIUXHero() {
  return (
    <section className="service-hero uiux-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="uiux-orb uiux-orb--1" aria-hidden="true"></div>
      <div className="uiux-orb uiux-orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow uiux-eyebrow">
          <i className="fa-solid fa-pen-ruler" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title uiux-hero__title">
          UI/UX
          <br />
          <span className="uiux-title-accent">Design</span>
        </h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Learn to design beautiful, intuitive digital products from scratch.
          Research, wireframes, Figma, prototyping and user testing — the
          complete product design process in 12 weeks.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill uiux-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 12 Weeks
          </span>
          <span className="service-hero__meta-pill uiux-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Beginner
          </span>
          <span className="service-hero__meta-pill uiux-pill uiux-pill--accent">
            <i className="fa-brands fa-figma" aria-hidden="true"></i> Figma
            Included
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="uiux-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="uiux-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS Figma-like design tool visual */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="figma-window">
          {/* Title bar */}
          <div className="figma-window__bar">
            <div className="figma-window__dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="figma-window__title">
              <i className="fa-brands fa-figma" aria-hidden="true"></i>
              App Design — Final.fig
            </span>
          </div>

          <div className="figma-window__body">
            {/* Left layers panel */}
            <div className="figma-layers">
              <div className="figma-layers__title">Layers</div>
              {LAYERS.map((layer, i) => (
                <div
                  key={layer}
                  className={`figma-layers__item ${i === 1 ? "figma-layers__item--selected" : ""}`}
                >
                  {layer}
                </div>
              ))}
            </div>

            {/* Canvas */}
            <div className="figma-canvas">
              <div className="figma-card">
                <div className="figma-card__img" aria-hidden="true">
                  <i className="fa-solid fa-image"></i>
                </div>
                <div className="figma-card__body">
                  <div className="figma-card__title-bar"></div>
                  <div className="figma-card__subtitle-bar"></div>
                  <div className="figma-card__btn">Enrol Now</div>
                </div>
              </div>
              <div className="figma-canvas__label">Canvas — 375 × 812</div>
            </div>

            {/* Right properties panel */}
            <div className="figma-props">
              <div className="figma-props__title">Design</div>
              <div className="figma-props__row">
                <span>W</span>
                <span className="figma-props__val">320</span>
              </div>
              <div className="figma-props__row">
                <span>H</span>
                <span className="figma-props__val">180</span>
              </div>
              <div className="figma-props__section">Fill</div>
              <div className="figma-props__swatches">
                {SWATCHES.map((s) => (
                  <span
                    key={s}
                    className="figma-props__swatch"
                    style={{ background: s }}
                  ></span>
                ))}
              </div>
              <div className="figma-props__section">Corner</div>
              <div className="figma-props__row">
                <span>R</span>
                <span className="figma-props__val">12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="uiux-badge uiux-badge--figma">
          <i className="fa-brands fa-figma"></i> Figma
        </div>
        <div className="uiux-badge uiux-badge--ux">
          <i className="fa-solid fa-magnifying-glass"></i> UX Research
        </div>
        <div className="uiux-badge uiux-badge--proto">
          <i className="fa-solid fa-play"></i> Prototype
        </div>
      </div>
    </section>
  );
}

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

const TABS = [
  { id: "overview", icon: "fa-solid fa-circle-info", label: "Overview" },
  { id: "curriculum", icon: "fa-solid fa-list-check", label: "Curriculum" },
  { id: "outcomes", icon: "fa-solid fa-trophy", label: "Outcomes" },
  { id: "faqs", icon: "fa-solid fa-circle-question", label: "FAQs" },
];

function UIUXTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs uiux-tabs" role="tablist">
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
                className={`services-overview-card__icon uiux-icon uiux-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="uiux-info-banner">
          <i className="fa-brands fa-figma" aria-hidden="true"></i>
          Figma is free and browser-based — you can start designing today
          without installing anything.
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
              <div className="services-week__num uiux-week-num">{i + 1}</div>
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
            <div key={o.text} className="services-outcome-tag uiux-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="uiux-outcomes-footer">
          {[
            ["3", "Case Studies"],
            ["12", "Weeks"],
            ["1", "Full App Design"],
          ].map(([num, label]) => (
            <div key={label} className="uiux-outcomes-footer__stat">
              <span className="uiux-outcomes-footer__num">{num}</span>
              <span className="uiux-outcomes-footer__label">{label}</span>
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

function UiUxDesign() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page uiux-page">
      <Navbar />
      <UIUXHero />
      <UIUXTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default UiUxDesign;
