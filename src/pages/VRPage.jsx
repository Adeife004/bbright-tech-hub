import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./VRPage.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-vr-cardboard",
    color: "purple",
    title: "What is VR & AR?",
    desc: "Virtual Reality immerses you in a fully digital world. Augmented Reality layers digital content on top of the real world. Together they are reshaping gaming, education, healthcare and design.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "teal",
    title: "Tools You Will Use",
    desc: "Unity 3D, Spark AR, WebXR, A-Frame, Blender for 3D assets, and Meta SDK. You leave with a working toolkit used by professionals today.",
  },
  {
    icon: "fa-solid fa-users",
    color: "gold",
    title: "Who Is This For?",
    desc: "Beginners curious about immersive tech, game developers expanding their skills, designers wanting to build spatial experiences, and anyone excited about the metaverse.",
  },
  {
    icon: "fa-solid fa-rocket",
    color: "purple",
    title: "Career Paths",
    desc: "XR Developer, Immersive Experience Designer, AR Filter Creator, VR Game Developer, Spatial Computing Engineer — all high-demand roles with growing salaries.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1–2",
    title: "Introduction to Extended Reality",
    desc: "History and types of XR (VR, AR, MR). How headsets work. Setting up Unity and your development environment. Your first VR scene.",
  },
  {
    week: "Wk 3–4",
    title: "VR Development with Unity",
    desc: "Building interactive VR environments. Physics, lighting and spatial audio. Controller input, locomotion and user comfort principles.",
  },
  {
    week: "Wk 5–6",
    title: "AR Development — Spark AR & WebXR",
    desc: "Creating AR face filters and world-effect lenses. Publishing to Instagram and Facebook. Building browser-based AR with WebXR and A-Frame.",
  },
  {
    week: "Wk 7–8",
    title: "3D Asset Creation for XR",
    desc: "Modelling optimised 3D objects in Blender for real-time use. Texturing, shading and LOD (level of detail) best practices for performance.",
  },
  {
    week: "Wk 9–10",
    title: "Capstone XR Project",
    desc: "Build and present a complete VR experience or AR application of your choice. Peer review, instructor feedback and portfolio documentation.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-cube",
    text: "Build a fully interactive VR scene in Unity",
  },
  {
    icon: "fa-solid fa-filter",
    text: "Create and publish a real AR filter on Instagram",
  },
  {
    icon: "fa-brands fa-chrome",
    text: "Build a browser-based AR experience with WebXR",
  },
  {
    icon: "fa-solid fa-object-group",
    text: "Model and texture 3D assets optimised for XR",
  },
  {
    icon: "fa-solid fa-briefcase",
    text: "Portfolio with 2 complete XR projects",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub VR & AR certificate",
  },
  {
    icon: "fa-solid fa-users",
    text: "Pitch your XR experience to a live audience",
  },
  {
    icon: "fa-solid fa-headset",
    text: "Hands-on time with real VR headsets in class",
  },
];

const FAQS = [
  {
    q: "Do I need to own a VR headset?",
    a: "No — all VR headsets are provided in the classroom. You only need a laptop. For home practice, most exercises also run in the Unity editor without a headset.",
  },
  {
    q: "Do I need programming experience?",
    a: "Basic coding familiarity helps but is not required. We cover the essentials of C# scripting in Unity from the ground up. If you have taken Web Development or Vibe Coding first, you will adapt quickly.",
  },
  {
    q: "Is this available online or hybrid?",
    a: "The course runs in-person at B Bright Tech Hub for the hands-on headset sessions. Theory and AR labs are available hybrid for those who cannot attend every day.",
  },
  {
    q: "What devices can run AR experiences?",
    a: "AR filters built with Spark AR run on any modern Android or iPhone. WebXR experiences run in Chrome or Firefox on most devices — no special hardware needed.",
  },
  {
    q: "Will my projects be in my portfolio?",
    a: "Yes. Every project from week 4 onwards is documented and added to your portfolio. Your capstone is presented live and recorded — giving you professional demo footage.",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function VRHero() {
  return (
    <section className="service-hero vr-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="vr-hero__orb vr-hero__orb--1" aria-hidden="true"></div>
      <div className="vr-hero__orb vr-hero__orb--2" aria-hidden="true"></div>

      {/* Left text */}
      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow vr-eyebrow">
          <i className="fa-solid fa-vr-cardboard" aria-hidden="true"></i>
          Emerging Technologies
        </span>

        <h1 className="service-hero__title vr-hero__title">
          Virtual &amp; <br />
          <span className="vr-title-accent">Augmented</span> Reality
        </h1>

        <p className="service-hero__desc vr-hero__desc">
          Step inside the future. Build immersive VR worlds and AR experiences
          that blend the digital and physical — using the same tools the
          industry uses today.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill vr-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 10 Weeks
          </span>
          <span className="service-hero__meta-pill vr-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i>{" "}
            Intermediate
          </span>
          <span className="service-hero__meta-pill vr-pill vr-pill--new">
            <i className="fa-solid fa-bolt" aria-hidden="true"></i> New
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="vr-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="vr-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* Right visual — VR headset mockup */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="vr-headset-wrap">
          <div className="vr-headset-glow" aria-hidden="true"></div>

          <div className="vr-headset" aria-label="VR headset illustration">
            {/* Visor */}
            <div className="vr-headset__body">
              <div className="vr-headset__visor">
                <div className="vr-headset__lens vr-headset__lens--left">
                  <div className="vr-headset__lens-inner"></div>
                </div>
                <div className="vr-headset__bridge"></div>
                <div className="vr-headset__lens vr-headset__lens--right">
                  <div className="vr-headset__lens-inner"></div>
                </div>
              </div>
              <div className="vr-headset__band"></div>
            </div>

            {/* Floating particles around headset */}
            <div
              className="vr-particle vr-particle--1"
              aria-hidden="true"
            ></div>
            <div
              className="vr-particle vr-particle--2"
              aria-hidden="true"
            ></div>
            <div
              className="vr-particle vr-particle--3"
              aria-hidden="true"
            ></div>
            <div
              className="vr-particle vr-particle--4"
              aria-hidden="true"
            ></div>
          </div>

          {/* Floating info badges */}
          <div className="vr-badge-float vr-badge-float--unity">
            <i className="fa-solid fa-cube" aria-hidden="true"></i> Unity 3D
          </div>
          <div className="vr-badge-float vr-badge-float--spark">
            <i className="fa-solid fa-filter" aria-hidden="true"></i> Spark AR
          </div>
          <div className="vr-badge-float vr-badge-float--webxr">
            <i className="fa-brands fa-chrome" aria-hidden="true"></i> WebXR
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
        <span className="services-faq__icon" aria-hidden="true">
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

function VRTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section vr-page">
      {/* Tab buttons */}
      <div className="services-tabs vr-tabs" role="tablist">
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

      {/* ── Overview ── */}
      <div
        role="tabpanel"
        className={`services-panel ${active === "overview" ? "active" : ""}`}
      >
        <div className="services-overview-grid">
          {OVERVIEW_CARDS.map((card) => (
            <div key={card.title} className="services-overview-card">
              <div
                className={`services-overview-card__icon vr-icon vr-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="vr-overview-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          <span>
            No VR headset? No problem — all hardware is provided in class. You
            just need a laptop and a curious mind.
          </span>
        </div>
      </div>

      {/* ── Curriculum ── */}
      <div
        role="tabpanel"
        className={`services-panel ${active === "curriculum" ? "active" : ""}`}
      >
        <div className="services-curriculum">
          {CURRICULUM.map((week, i) => (
            <div key={week.week} className="services-week">
              <div className="services-week__num vr-week-num">{i + 1}</div>
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

      {/* ── Outcomes ── */}
      <div
        role="tabpanel"
        className={`services-panel ${active === "outcomes" ? "active" : ""}`}
      >
        <div className="services-outcomes-grid">
          {OUTCOMES.map((o) => (
            <div key={o.text} className="services-outcome-tag vr-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>

        <div className="vr-outcomes-footer">
          <div className="vr-outcomes-footer__stat">
            <span className="vr-outcomes-footer__num">2</span>
            <span className="vr-outcomes-footer__label">
              Portfolio Projects
            </span>
          </div>
          <div className="vr-outcomes-footer__divider" aria-hidden="true"></div>
          <div className="vr-outcomes-footer__stat">
            <span className="vr-outcomes-footer__num">10</span>
            <span className="vr-outcomes-footer__label">Weeks</span>
          </div>
          <div className="vr-outcomes-footer__divider" aria-hidden="true"></div>
          <div className="vr-outcomes-footer__stat">
            <span className="vr-outcomes-footer__num">3</span>
            <span className="vr-outcomes-footer__label">Tools Mastered</span>
          </div>
        </div>
      </div>

      {/* ── FAQs ── */}
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

/* ── Page ───────────────────────────────────────────────────── */

function VRPage() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <div className="service-page vr-page-root">
      <Navbar />
      <VRHero />
      <VRTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default VRPage;
