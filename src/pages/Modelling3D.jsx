import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./Modelling3D.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-cube",
    color: "orange",
    title: "What You Will Learn",
    desc: "3D modelling fundamentals — building objects, sculpting organic shapes, UV unwrapping, texturing and rendering polished final scenes.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "slate",
    title: "Tools You Will Use",
    desc: "Blender — the free, industry-standard 3D suite — plus texturing fundamentals and rendering with Blender's Cycles and Eevee engines.",
  },
  {
    icon: "fa-solid fa-users",
    color: "orange",
    title: "Who It Is For",
    desc: "Aspiring 3D artists, game developers who want to build their own assets, product designers, and anyone drawn to building things in three dimensions.",
  },
  {
    icon: "fa-solid fa-briefcase",
    color: "slate",
    title: "Career Paths",
    desc: "3D Artist, Game Asset Creator, Product Visualiser, Motion Graphics Artist, Architectural Visualiser — creative roles across games, advertising and design.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1–2",
    title: "Blender Fundamentals",
    desc: "Navigating 3D space and the viewport. Core modelling tools — extrude, bevel, loop cuts — and building your first simple objects.",
  },
  {
    week: "Wk 3–4",
    title: "Modelling Real Objects",
    desc: "Building props and hard-surface models from reference images. Clean topology and modelling with real-world proportions.",
  },
  {
    week: "Wk 5–6",
    title: "Sculpting & Organic Shapes",
    desc: "Digital sculpting tools for characters and organic forms — moving beyond boxes and cylinders into natural shapes.",
  },
  {
    week: "Wk 7–8",
    title: "UV Unwrapping & Texturing",
    desc: "Preparing models for texture and painting realistic materials using Blender's shader nodes and texture painting tools.",
  },
  {
    week: "Wk 9–10",
    title: "Lighting, Rendering & Capstone",
    desc: "Setting up lighting and cameras, rendering a polished final piece, and presenting your capstone scene on demo day.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-cube",
    text: "Model 3D objects from scratch in Blender",
  },
  {
    icon: "fa-solid fa-hand-sparkles",
    text: "Sculpt organic shapes and characters",
  },
  {
    icon: "fa-solid fa-vector-square",
    text: "UV unwrap models cleanly for texturing",
  },
  {
    icon: "fa-solid fa-palette",
    text: "Paint realistic materials and textures",
  },
  {
    icon: "fa-solid fa-lightbulb",
    text: "Light and render polished final scenes",
  },
  {
    icon: "fa-solid fa-gamepad",
    text: "Export game-ready assets for real engines",
  },
  {
    icon: "fa-solid fa-briefcase",
    text: "Portfolio-ready — 3 finished 3D pieces",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub 3D Modelling certificate",
  },
];

const FAQS = [
  {
    q: "Do I need a powerful computer?",
    a: "A computer with a dedicated graphics card makes rendering faster, but it isn't required to start — lab computers are available for every session if you don't have one.",
  },
  {
    q: "Do I need to be good at drawing?",
    a: "No. 3D modelling relies more on spatial thinking and patience with tools than freehand drawing skill. Many strong 3D artists can't draw well at all.",
  },
  {
    q: "What software will I use?",
    a: "Blender — completely free and now an industry standard used by studios worldwide. The skills transfer easily to tools like Maya or 3ds Max if you ever need them.",
  },
  {
    q: "Will this help with Game Development?",
    a: "Yes — it pairs naturally. Many students take both so they can build their own custom characters, props and environments instead of relying on free asset packs.",
  },
  {
    q: "Is this only useful for games and animation?",
    a: "Not at all. 3D modelling is used in product visualisation, architecture, advertising and VR/AR content creation — it's a genuinely cross-industry skill.",
  },
];

/* ── Hero visual: real CSS 3D viewport with a rotating cube ── */

function ModellingHero() {
  return (
    <section className="service-hero mdl-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="mdl-hero__orb mdl-hero__orb--1" aria-hidden="true"></div>
      <div className="mdl-hero__orb mdl-hero__orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow mdl-eyebrow">
          <i className="fa-solid fa-cube" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title mdl-hero__title">
          3D
          <br />
          <span className="mdl-title-accent">Modelling</span>
        </h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Go from flat sketches to fully rendered 3D scenes. Model, sculpt,
          texture and light your own objects and characters in Blender — start
          to finish, 10 weeks.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill mdl-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 10 Weeks
          </span>
          <span className="service-hero__meta-pill mdl-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Beginner
            Friendly
          </span>
          <span className="service-hero__meta-pill mdl-pill mdl-pill--free">
            <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Free
            Software
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="mdl-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="mdl-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS 3D viewport with real rotating cube */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="mdl-viewport">
          <div className="mdl-viewport__bar">
            <span className="mdl-viewport__dot mdl-viewport__dot--red"></span>
            <span className="mdl-viewport__dot mdl-viewport__dot--yellow"></span>
            <span className="mdl-viewport__dot mdl-viewport__dot--green"></span>
            <span className="mdl-viewport__title">
              <i className="fa-solid fa-cube" aria-hidden="true"></i>
              scene.blend
            </span>
          </div>

          <div className="mdl-viewport__stage">
            <div className="mdl-toolbar">
              <span className="mdl-toolbar__icon mdl-toolbar__icon--active">
                <i className="fa-solid fa-arrows-up-down-left-right"></i>
              </span>
              <span className="mdl-toolbar__icon">
                <i className="fa-solid fa-arrows-rotate"></i>
              </span>
              <span className="mdl-toolbar__icon">
                <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
              </span>
              <span className="mdl-toolbar__icon">
                <i className="fa-solid fa-draw-polygon"></i>
              </span>
            </div>

            <div className="mdl-grid-floor" aria-hidden="true"></div>

            <div className="mdl-cube-scene">
              <div className="mdl-cube">
                <div className="mdl-cube__face mdl-cube__face--front"></div>
                <div className="mdl-cube__face mdl-cube__face--back"></div>
                <div className="mdl-cube__face mdl-cube__face--right"></div>
                <div className="mdl-cube__face mdl-cube__face--left"></div>
                <div className="mdl-cube__face mdl-cube__face--top"></div>
                <div className="mdl-cube__face mdl-cube__face--bottom"></div>
              </div>
            </div>

            <div className="mdl-axis-gizmo" aria-hidden="true">
              <span className="mdl-axis-gizmo__dot mdl-axis-gizmo__dot--x">
                X
              </span>
              <span className="mdl-axis-gizmo__dot mdl-axis-gizmo__dot--y">
                Y
              </span>
              <span className="mdl-axis-gizmo__dot mdl-axis-gizmo__dot--z">
                Z
              </span>
            </div>
          </div>
        </div>

        {/* Floating tool badges */}
        <div className="mdl-badge mdl-badge--blender">
          <i className="fa-solid fa-cube" aria-hidden="true"></i> Blender
        </div>
        <div className="mdl-badge mdl-badge--sculpt">
          <i className="fa-solid fa-hand-sparkles" aria-hidden="true"></i>{" "}
          Sculpting
        </div>
        <div className="mdl-badge mdl-badge--render">
          <i className="fa-solid fa-lightbulb" aria-hidden="true"></i> Render
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

function ModellingTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs mdl-tabs" role="tablist">
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
                className={`services-overview-card__icon mdl-icon mdl-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="mdl-info-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          Blender is completely free and open-source — you can keep creating at
          home with the exact same software used in class.
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
              <div className="services-week__num mdl-week-num">{i + 1}</div>
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
            <div key={o.text} className="services-outcome-tag mdl-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="mdl-outcomes-footer">
          {[
            ["3", "Finished 3D Pieces"],
            ["10", "Weeks"],
            ["1", "Free Software Suite"],
          ].map(([num, label]) => (
            <div key={label} className="mdl-outcomes-footer__stat">
              <span className="mdl-outcomes-footer__num">{num}</span>
              <span className="mdl-outcomes-footer__label">{label}</span>
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

function Modelling3D() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page mdl-page">
      <Navbar />
      <ModellingHero />
      <ModellingTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Modelling3D;
