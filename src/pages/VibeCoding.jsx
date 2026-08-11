import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./VibeCoding.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    color: "coral",
    title: "What You Will Learn",
    desc: "How to build real, working products by pairing with AI — effective prompting, rapid prototyping, and shipping apps fast without writing every line by hand.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "violet",
    title: "Tools You Will Use",
    desc: "Claude Code, Cursor, GitHub Copilot, v0 and Replit — the modern AI-assisted stack that lets you go from idea to live product in days.",
  },
  {
    icon: "fa-solid fa-users",
    color: "coral",
    title: "Who It Is For",
    desc: "Non-coders who want to build their own products, founders validating an idea, hobbyists, and developers who want to move a lot faster.",
  },
  {
    icon: "fa-solid fa-rocket",
    color: "violet",
    title: "Where It Takes You",
    desc: "Indie Hacker, AI-Assisted Developer, Startup Founder, Rapid Prototyper — build your own idea instead of waiting for permission to start.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1",
    title: "The Vibe Coding Mindset",
    desc: "Thinking in outcomes, not syntax. Choosing the right AI tool for the job, and how prompting is really just clear communication.",
  },
  {
    week: "Wk 2",
    title: "Your First AI-Built App",
    desc: "Scaffold a real app end-to-end with Claude Code or Cursor. Learn to read AI output and steer it, rather than accept it blindly.",
  },
  {
    week: "Wk 3",
    title: "Prompting Like a Pro",
    desc: "Writing prompts that get it right the first time, giving useful context, and debugging when the AI gets it wrong.",
  },
  {
    week: "Wk 4",
    title: "Styling & UX with AI",
    desc: "Turning a rough idea into a polished, professional interface fast — using AI-generated components and a real design system.",
  },
  {
    week: "Wk 5",
    title: "Connecting the Backend",
    desc: "Databases, APIs and authentication — scaffolded with AI assistance while you learn exactly what's happening under the hood.",
  },
  {
    week: "Wk 6",
    title: "Ship It — Capstone & Demo Day",
    desc: "Deploy your project to a live URL. Present your AI-built product to a real panel on demo day.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-rocket",
    text: "Build and ship a full working app with AI",
  },
  {
    icon: "fa-solid fa-comments",
    text: "Prompt AI coding tools like a professional",
  },
  {
    icon: "fa-solid fa-bug",
    text: "Debug and fix AI-generated code confidently",
  },
  { icon: "fa-solid fa-bolt", text: "Prototype ideas in hours, not weeks" },
  {
    icon: "fa-solid fa-terminal",
    text: "Comfortable with Claude Code & Cursor workflows",
  },
  { icon: "fa-solid fa-globe", text: "Deploy a live product with a real URL" },
  {
    icon: "fa-solid fa-briefcase",
    text: "Portfolio-ready — 2 AI-built projects",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub Vibe Coding certificate",
  },
];

const FAQS = [
  {
    q: "Do I need to already know how to code?",
    a: "No — that's the point. You'll still learn to read and understand code along the way, but you won't need prior programming experience to start building.",
  },
  {
    q: 'Is this actually "real" coding, or just typing prompts?',
    a: "Both. You'll write real prompts, but you'll also learn to read the code that comes back, catch mistakes, and make deliberate changes yourself. It is coding — just with an AI pair programmer.",
  },
  {
    q: "What AI tools will I be using?",
    a: "Mainly Claude Code and Cursor, with exposure to GitHub Copilot and v0 as well. These are the same tools professional developers use today.",
  },
  {
    q: "Can I build my own startup idea in this course?",
    a: "Yes — many students use their capstone project to build the first version of a real idea they've been sitting on. It's one of the most common reasons people join.",
  },
  {
    q: "How is this different from the Web Development course?",
    a: "Web Development teaches you to write code by hand from first principles. Vibe Coding teaches you to build fast with AI as your partner. They complement each other — many students take Digital Literacy or Web Development first, though it isn't required.",
  },
];

/* ── Hero visual: CSS AI prompt → generated code console ── */

const PROMPT_TEXT = "Build me a login page with a gradient background";

const CODE_LINES = [
  {
    tokens: [
      { t: "tag", v: "<" },
      { t: "tag", v: "form" },
      { t: "attr", v: " onSubmit" },
      { t: "eq", v: "=" },
      { t: "fn", v: "{handleLogin}" },
      { t: "tag", v: ">" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "tag", v: "<" },
      { t: "tag", v: "input" },
      { t: "attr", v: " type" },
      { t: "eq", v: "=" },
      { t: "str", v: '"email"' },
      { t: "tag", v: " />" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "tag", v: "<" },
      { t: "tag", v: "input" },
      { t: "attr", v: " type" },
      { t: "eq", v: "=" },
      { t: "str", v: '"password"' },
      { t: "tag", v: " />" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "tag", v: "<" },
      { t: "tag", v: "button" },
      { t: "tag", v: ">" },
      { t: "txt", v: "Sign In" },
      { t: "tag", v: "</" },
      { t: "tag", v: "button" },
      { t: "tag", v: ">" },
    ],
  },
  {
    tokens: [
      { t: "tag", v: "</" },
      { t: "tag", v: "form" },
      { t: "tag", v: ">" },
    ],
  },
];

const TOKEN_COLOR = {
  tag: "#ff8fa3",
  attr: "#c792ea",
  eq: "#fff",
  str: "#f0c068",
  txt: "#c3e88d",
  fn: "#82aaff",
};

function VCHero() {
  return (
    <section className="service-hero vc-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="vc-hero__orb vc-hero__orb--1" aria-hidden="true"></div>
      <div className="vc-hero__orb vc-hero__orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow vc-eyebrow">
          <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title vc-hero__title">
          Vibe
          <br />
          <span className="vc-title-accent">Coding</span>
        </h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Build real products by talking to AI. Learn to prompt, steer and ship
          with Claude Code and Cursor — no years of syntax memorisation
          required.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill vc-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 6 Weeks
          </span>
          <span className="service-hero__meta-pill vc-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Beginner
            Friendly
          </span>
          <span className="service-hero__meta-pill vc-pill vc-pill--hot">
            <i className="fa-solid fa-fire" aria-hidden="true"></i> Trending
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="vc-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="vc-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS AI console: prompt → generated code */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="vc-console">
          <div className="vc-console__bar">
            <span className="vc-console__dot vc-console__dot--red"></span>
            <span className="vc-console__dot vc-console__dot--yellow"></span>
            <span className="vc-console__dot vc-console__dot--green"></span>
            <span className="vc-console__title">
              <i
                className="fa-solid fa-wand-magic-sparkles"
                aria-hidden="true"
              ></i>
              vibe-session.ai
            </span>
          </div>

          <div className="vc-console__body">
            {/* Prompt / chat side */}
            <div className="vc-chat">
              <div className="vc-chat__bubble vc-chat__bubble--user">
                {PROMPT_TEXT}
              </div>
              <div className="vc-chat__bubble vc-chat__bubble--ai">
                <span className="vc-typing-dot"></span>
                <span className="vc-typing-dot"></span>
                <span className="vc-typing-dot"></span>
              </div>
              <div className="vc-vibe-meter">
                <div className="vc-vibe-meter__label">
                  <span>Vibe</span>
                  <span>98%</span>
                </div>
                <div className="vc-vibe-meter__track">
                  <div className="vc-vibe-meter__fill"></div>
                </div>
              </div>
            </div>

            {/* Generated code side */}
            <div className="vc-code">
              {CODE_LINES.map((line, i) => (
                <div key={i} className="vc-code__line">
                  <span
                    className="vc-code__content"
                    style={{ paddingLeft: (line.indent || 0) * 14 }}
                  >
                    {line.tokens.map((tok, j) => (
                      <span key={j} style={{ color: TOKEN_COLOR[tok.t] }}>
                        {tok.v}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
              <div className="vc-code__cursor" aria-hidden="true"></div>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="vc-badge vc-badge--flow">
          <i className="fa-solid fa-headphones" aria-hidden="true"></i> Flow
          State
        </div>
        <div className="vc-badge vc-badge--ai">
          <i className="fa-solid fa-robot" aria-hidden="true"></i> AI-Assisted
        </div>
        <div className="vc-badge vc-badge--ship">
          <i className="fa-solid fa-paper-plane" aria-hidden="true"></i> Ship
          Fast
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

function VCTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs vc-tabs" role="tablist">
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
                className={`services-overview-card__icon vc-icon vc-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="vc-info-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          You don't need to be a programmer to start — you need to be able to
          describe what you want clearly. We'll teach you the rest.
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
              <div className="services-week__num vc-week-num">{i + 1}</div>
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
            <div key={o.text} className="services-outcome-tag vc-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="vc-outcomes-footer">
          {[
            ["2", "AI-Built Projects"],
            ["6", "Weeks"],
            ["1", "Live Product"],
          ].map(([num, label]) => (
            <div key={label} className="vc-outcomes-footer__stat">
              <span className="vc-outcomes-footer__num">{num}</span>
              <span className="vc-outcomes-footer__label">{label}</span>
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

function VibeCoding() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page vc-page">
      <Navbar />
      <VCHero />
      <VCTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default VibeCoding;
