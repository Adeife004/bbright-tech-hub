import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./GameDevelopment.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-gamepad",
    color: "magenta",
    title: "What You Will Learn",
    desc: "Game design fundamentals, 2D game development, physics, animation and level design — building playable games with Unity from day one.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "cyan",
    title: "Tools You Will Use",
    desc: "Unity, C#, Aseprite for pixel art, GitHub for version control, and free sound and asset libraries used by real indie developers.",
  },
  {
    icon: "fa-solid fa-users",
    color: "magenta",
    title: "Who It Is For",
    desc: 'Gamers who want to build their own games, creative students, hobbyist programmers, and anyone who\'s ever thought "I could make a better level than this."',
  },
  {
    icon: "fa-solid fa-trophy",
    color: "cyan",
    title: "Career Paths",
    desc: "Game Developer, Gameplay Programmer, Level Designer, Technical Game Designer, or Indie Studio Founder shipping your own titles.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1–2",
    title: "Game Design Fundamentals",
    desc: "Game loops, core mechanics and player experience. Paper-prototyping ideas before writing a single line of code.",
  },
  {
    week: "Wk 3–4",
    title: "Intro to Unity & C#",
    desc: "The Unity editor, GameObjects and components, and scripting your first player interactions in C#.",
  },
  {
    week: "Wk 5–6",
    title: "2D Game Development",
    desc: "Sprites, animation, tilemaps and physics — building a complete 2D platformer level from the ground up.",
  },
  {
    week: "Wk 7–8",
    title: "Game Systems",
    desc: "Health, scoring, inventory and HUD design. Saving progress and building real win and lose conditions.",
  },
  {
    week: "Wk 9–10",
    title: "Sound, Polish & Playtesting",
    desc: 'Adding music, sound effects and game "juice" — then iterating based on real feedback from real players.',
  },
  {
    week: "Wk 11–12",
    title: "Capstone Game & Demo Day",
    desc: "Design, build and ship your own complete playable game. Present it live to a panel — and to real players.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-gamepad",
    text: "Build and ship a complete playable game",
  },
  {
    icon: "fa-brands fa-unity",
    text: "Program gameplay mechanics in C# with Unity",
  },
  {
    icon: "fa-solid fa-layer-group",
    text: "Design 2D levels with tilemaps and physics",
  },
  {
    icon: "fa-solid fa-heart",
    text: "Build a functioning HUD — score, health, inventory",
  },
  {
    icon: "fa-solid fa-music",
    text: "Add sound, music and satisfying game feel",
  },
  {
    icon: "fa-solid fa-users",
    text: "Playtest and iterate from real player feedback",
  },
  { icon: "fa-solid fa-briefcase", text: "Portfolio-ready — 2 finished games" },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub Game Development certificate",
  },
];

const FAQS = [
  {
    q: "Do I need to know how to draw?",
    a: "No — we cover the basics of pixel art, and there are excellent free asset libraries you can use. Most of the course focuses on programming, design and systems, not fine art.",
  },
  {
    q: "What game engine will we use?",
    a: "Unity — one of the most widely used engines in both indie and professional game development, so the skills you build transfer directly to studio jobs or your own projects.",
  },
  {
    q: "Do I need coding experience first?",
    a: "Basic familiarity helps but isn't required — we teach C# from scratch. If you've taken Web Development or Vibe Coding first, picking up C# will feel very natural.",
  },
  {
    q: "Will I get to make my own game idea?",
    a: "Yes. Your capstone project in weeks 11–12 is a complete game built from your own concept, not a template — that's what goes in your portfolio.",
  },
  {
    q: "Can I actually publish my game afterwards?",
    a: "Yes. During the capstone we cover publishing to platforms like itch.io, so you leave with a game other people can actually play, not just a project file.",
  },
];

/* ── Hero visual: CSS arcade screen with a live mini game scene ── */

function GDHero() {
  return (
    <section className="service-hero gd-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="gd-hero__orb gd-hero__orb--1" aria-hidden="true"></div>
      <div className="gd-hero__orb gd-hero__orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow gd-eyebrow">
          <i className="fa-solid fa-gamepad" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title gd-hero__title">
          Game
          <br />
          <span className="gd-title-accent">Development</span>
        </h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Stop playing other people's games — start building your own. Design,
          code and ship complete playable games with Unity and C# over 12 weeks.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill gd-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 12 Weeks
          </span>
          <span className="service-hero__meta-pill gd-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Beginner –
            Intermediate
          </span>
          <span className="service-hero__meta-pill gd-pill gd-pill--fav">
            <i className="fa-solid fa-star" aria-hidden="true"></i> Student
            Favourite
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="gd-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="gd-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS arcade screen with mini game scene */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="gd-arcade">
          <div className="gd-arcade__bar">
            <span className="gd-arcade__dot gd-arcade__dot--red"></span>
            <span className="gd-arcade__dot gd-arcade__dot--yellow"></span>
            <span className="gd-arcade__dot gd-arcade__dot--green"></span>
            <span className="gd-arcade__title">
              <i className="fa-solid fa-gamepad" aria-hidden="true"></i>
              MyGame.unity
            </span>
          </div>

          <div className="gd-arcade__hud">
            <span className="gd-arcade__score">SCORE 01200</span>
            <span className="gd-arcade__hearts">
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-regular fa-heart"></i>
            </span>
            <span className="gd-arcade__level">LEVEL 1</span>
          </div>

          <div className="gd-arcade__scene">
            <div className="gd-cloud gd-cloud--1"></div>
            <div className="gd-cloud gd-cloud--2"></div>

            <div className="gd-platform"></div>
            <div className="gd-coin gd-coin--1"></div>
            <div className="gd-coin gd-coin--2"></div>

            <div className="gd-player">
              <span className="gd-player__eye"></span>
            </div>

            <div className="gd-flag">
              <span className="gd-flag__pole"></span>
              <span className="gd-flag__cloth"></span>
            </div>

            <div className="gd-ground"></div>
          </div>
        </div>

        {/* Floating tool badges */}
        <div className="gd-badge gd-badge--unity">
          <i className="fa-brands fa-unity" aria-hidden="true"></i> Unity
        </div>
        <div className="gd-badge gd-badge--pixel">
          <i className="fa-solid fa-border-all" aria-hidden="true"></i> Pixel
          Art
        </div>
        <div className="gd-badge gd-badge--jam">
          <i className="fa-solid fa-flag-checkered" aria-hidden="true"></i> Game
          Jams
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

function GDTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs gd-tabs" role="tablist">
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
                className={`services-overview-card__icon gd-icon gd-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="gd-info-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          Every student ships at least 2 finished, playable games by the end of
          this course — not just prototypes.
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
              <div className="services-week__num gd-week-num">{i + 1}</div>
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
            <div key={o.text} className="services-outcome-tag gd-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="gd-outcomes-footer">
          {[
            ["2", "Finished Games"],
            ["12", "Weeks"],
            ["1", "Game Engine"],
          ].map(([num, label]) => (
            <div key={label} className="gd-outcomes-footer__stat">
              <span className="gd-outcomes-footer__num">{num}</span>
              <span className="gd-outcomes-footer__label">{label}</span>
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

function GameDevelopment() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page gd-page">
      <Navbar />
      <GDHero />
      <GDTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default GameDevelopment;
