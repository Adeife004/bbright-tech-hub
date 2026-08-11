import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./Animation2D.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-film",
    color: "amber",
    title: "What You Will Learn",
    desc: "The core principles of animation — timing, spacing, squash & stretch, easing — and how to bring characters and scenes to life frame by frame.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "sky",
    title: "Tools You Will Use",
    desc: "Toon Boom Harmony or Adobe Animate for frame animation, After Effects for motion graphics, and Procreate or Photoshop for drawing.",
  },
  {
    icon: "fa-solid fa-users",
    color: "amber",
    title: "Who It Is For",
    desc: "Illustrators who want to animate their work, storytellers, motion graphics beginners, and anyone who grew up wanting to make their own cartoons.",
  },
  {
    icon: "fa-solid fa-briefcase",
    color: "sky",
    title: "Career Paths",
    desc: "2D Animator, Motion Graphics Designer, Storyboard Artist, Character Animator — roles across studios, agencies and independent content creation.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1–2",
    title: "Principles of Animation",
    desc: "Timing, spacing, squash & stretch and anticipation — the core principles that make motion feel believable, not robotic.",
  },
  {
    week: "Wk 3–4",
    title: "Frame-by-Frame Basics",
    desc: "Drawing keyframes and in-betweens through the classic exercises every animator starts with — the bouncing ball and the walk cycle.",
  },
  {
    week: "Wk 5–6",
    title: "Character Rigging & Puppet Animation",
    desc: "Building reusable character rigs in Toon Boom or Adobe Animate for faster, more consistent character animation.",
  },
  {
    week: "Wk 7–8",
    title: "Motion Graphics with After Effects",
    desc: "Animating text, shapes and logos for explainer videos, social content and titles — a different but related animation skill.",
  },
  {
    week: "Wk 9–10",
    title: "Capstone Animated Short",
    desc: "Write, storyboard and animate a short piece entirely your own. Present the finished film on demo day.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-list-ol",
    text: "Apply the principles of animation confidently",
  },
  {
    icon: "fa-solid fa-person-walking",
    text: "Animate a believable walk cycle from scratch",
  },
  {
    icon: "fa-solid fa-bone",
    text: "Build and animate a reusable character rig",
  },
  {
    icon: "fa-solid fa-layer-group",
    text: "Create motion graphics for video and social content",
  },
  {
    icon: "fa-solid fa-pen-nib",
    text: "Draw clean, consistent frame-by-frame animation",
  },
  {
    icon: "fa-solid fa-clapperboard",
    text: "Storyboard a short animated scene",
  },
  {
    icon: "fa-solid fa-briefcase",
    text: "Portfolio-ready — 1 finished animated short",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub 2D Animation certificate",
  },
];

const FAQS = [
  {
    q: "Do I need to be good at drawing?",
    a: "Some drawing ability helps, but we teach simplified character design and focus far more on movement and timing than fine art skill. Great animation comes from motion, not perfect linework.",
  },
  {
    q: "What software will I use?",
    a: "Toon Boom Harmony or Adobe Animate for frame-by-frame character animation, and After Effects for motion graphics — the same tools used in professional studios.",
  },
  {
    q: "Do I need a drawing tablet?",
    a: "It helps for hand-drawn frames, but isn't required in the early weeks — rigging and puppet animation can be done comfortably with a mouse. Loaner tablets are available in the lab.",
  },
  {
    q: "Is this the same as motion graphics?",
    a: "They overlap. Motion graphics — animating text, shapes and logos — is covered in weeks 7–8, but the core focus of this course is character and frame-by-frame animation.",
  },
  {
    q: "Will I actually finish a real animated piece?",
    a: "Yes. Your capstone project is a short animated film you write, storyboard and animate yourself, presented live to a panel and audience on demo day.",
  },
];

/* ── Hero visual: CSS animation studio — bouncing ball on a timeline ── */

function AnimationHero() {
  return (
    <section className="service-hero an-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="an-hero__orb an-hero__orb--1" aria-hidden="true"></div>
      <div className="an-hero__orb an-hero__orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow an-eyebrow">
          <i className="fa-solid fa-film" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title an-hero__title">
          2D
          <br />
          <span className="an-title-accent">Animation</span>
        </h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Twelve principles, one bouncing ball, and a lot of practice. Learn to
          bring characters and stories to life frame by frame — from keyframes
          to a finished animated short.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill an-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 10 Weeks
          </span>
          <span className="service-hero__meta-pill an-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Beginner
            Friendly
          </span>
          <span className="service-hero__meta-pill an-pill an-pill--creative">
            <i className="fa-solid fa-palette" aria-hidden="true"></i> Creative
            Track
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="an-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="an-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS animation studio: bouncing ball + timeline */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="an-studio">
          <div className="an-studio__bar">
            <span className="an-studio__dot an-studio__dot--red"></span>
            <span className="an-studio__dot an-studio__dot--yellow"></span>
            <span className="an-studio__dot an-studio__dot--green"></span>
            <span className="an-studio__title">
              <i className="fa-solid fa-film" aria-hidden="true"></i>
              bounce.anim
            </span>
          </div>

          <div className="an-studio__canvas">
            <div className="an-ball-trail an-ball-trail--1"></div>
            <div className="an-ball-trail an-ball-trail--2"></div>
            <div className="an-ball-trail an-ball-trail--3"></div>
            <div className="an-ball"></div>
            <div className="an-studio__ground"></div>
          </div>

          <div className="an-studio__timeline">
            <button className="an-timeline__play" aria-hidden="true">
              <i className="fa-solid fa-play"></i>
            </button>
            <div className="an-timeline__track">
              <span className="an-timeline__key" style={{ left: "6%" }}></span>
              <span className="an-timeline__key" style={{ left: "30%" }}></span>
              <span className="an-timeline__key" style={{ left: "54%" }}></span>
              <span className="an-timeline__key" style={{ left: "78%" }}></span>
              <div className="an-timeline__playhead"></div>
            </div>
            <span className="an-timeline__frame">Fr 12/24</span>
          </div>
        </div>

        {/* Floating tool badges */}
        <div className="an-badge an-badge--toonboom">
          <i className="fa-solid fa-clapperboard" aria-hidden="true"></i> Toon
          Boom
        </div>
        <div className="an-badge an-badge--ae">
          <i className="fa-solid fa-layer-group" aria-hidden="true"></i> After
          Effects
        </div>
        <div className="an-badge an-badge--keyframe">
          <i className="fa-solid fa-diamond" aria-hidden="true"></i> Keyframes
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

function AnimationTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs an-tabs" role="tablist">
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
                className={`services-overview-card__icon an-icon an-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="an-info-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          Every animator starts with the same bouncing ball — mastering that one
          exercise teaches you almost everything else you'll need.
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
              <div className="services-week__num an-week-num">{i + 1}</div>
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
            <div key={o.text} className="services-outcome-tag an-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="an-outcomes-footer">
          {[
            ["1", "Animated Short"],
            ["10", "Weeks"],
            ["12", "Principles Learned"],
          ].map(([num, label]) => (
            <div key={label} className="an-outcomes-footer__stat">
              <span className="an-outcomes-footer__num">{num}</span>
              <span className="an-outcomes-footer__label">{label}</span>
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

function Animation2D() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page an-page">
      <Navbar />
      <AnimationHero />
      <AnimationTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Animation2D;
