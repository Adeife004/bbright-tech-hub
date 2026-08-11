import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./DigitalLiteracy.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-laptop",
    color: "gold",
    title: "What You Will Learn",
    desc: "Everything from switching on a computer to sending a professional email — file management, typing, spreadsheets, documents and safe internet use.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "teal",
    title: "Tools You Will Use",
    desc: "Windows & Mac basics, Google Workspace (Docs, Sheets, Gmail), Microsoft Office, Zoom and everyday browsers — the tools every workplace expects you to know.",
  },
  {
    icon: "fa-solid fa-users",
    color: "gold",
    title: "Who It Is For",
    desc: "Complete beginners, career changers, job seekers who need computer skills for work, parents, and students preparing for exams that require digital skills.",
  },
  {
    icon: "fa-solid fa-briefcase",
    color: "teal",
    title: "What It Prepares You For",
    desc: "Confident, independent computer use at work or home — and a strong foundation before moving on to Web Development, Data Analysis or UI/UX Design.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1",
    title: "Getting Started",
    desc: "Turning on a computer safely, using a mouse and keyboard, navigating Windows/Mac, and understanding the desktop, icons and windows.",
  },
  {
    week: "Wk 2",
    title: "Files, Folders & Storage",
    desc: "Creating and organising folders, saving and renaming files, using USB drives and getting comfortable with cloud storage like Google Drive.",
  },
  {
    week: "Wk 3",
    title: "Typing & Word Processing",
    desc: "Building typing speed and accuracy, then writing, formatting and printing documents in Microsoft Word and Google Docs.",
  },
  {
    week: "Wk 4",
    title: "Spreadsheets Made Simple",
    desc: "Entering data, using basic formulas, and building simple budgets or lists in Excel and Google Sheets — no maths background needed.",
  },
  {
    week: "Wk 5",
    title: "Email & Communication",
    desc: "Setting up Gmail, writing and replying to emails, attaching files, and scheduling meetings with Google Calendar and Zoom.",
  },
  {
    week: "Wk 6",
    title: "Searching the Internet",
    desc: "Using a browser confidently, searching effectively, and telling reliable information apart from misinformation.",
  },
  {
    week: "Wk 7",
    title: "Staying Safe Online",
    desc: "Creating strong passwords, spotting phishing emails and scams, and understanding privacy settings on common apps and websites.",
  },
  {
    week: "Wk 8",
    title: "Bringing It Together",
    desc: "A final project: write a document, build a simple spreadsheet, and complete an online form or job application from start to finish.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-laptop",
    text: "Operate a computer confidently and independently",
  },
  { icon: "fa-solid fa-keyboard", text: "Type faster and more accurately" },
  {
    icon: "fa-solid fa-file-word",
    text: "Create and format documents in Word & Docs",
  },
  {
    icon: "fa-solid fa-file-excel",
    text: "Build simple spreadsheets and budgets",
  },
  {
    icon: "fa-solid fa-envelope",
    text: "Send professional emails with attachments",
  },
  {
    icon: "fa-solid fa-shield-halved",
    text: "Spot scams and browse the internet safely",
  },
  {
    icon: "fa-solid fa-cloud",
    text: "Store and organise files using cloud storage",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub Digital Literacy certificate",
  },
];

const FAQS = [
  {
    q: "Do I need any computer experience to start?",
    a: "None at all. This course is built for people who have never used a computer before, right through to those who want to sharpen basic skills.",
  },
  {
    q: "Is there an age limit?",
    a: "No. We welcome teenagers, adults and older learners alike — classes move at a pace that works for beginners of any age.",
  },
  {
    q: "Do I need to bring my own laptop?",
    a: "No — computers are provided in our lab for every session. If you have your own laptop and would like to bring it, that works too.",
  },
  {
    q: "Will this help me get a job?",
    a: "Yes. Basic computer literacy is required for the vast majority of office and customer-facing roles today. Many students finish this course and immediately apply for administrative or entry-level roles.",
  },
  {
    q: "Should I take this before other courses like Web Development?",
    a: "If you are completely new to computers, yes — we recommend Digital Literacy first. It gives you the confidence and basic skills that make every other course easier to follow.",
  },
];

/* ── Hero visual: CSS all-in-one desktop mockup ── */

const DESKTOP_ICONS = [
  { icon: "fa-solid fa-envelope", label: "Mail" },
  { icon: "fa-solid fa-file-word", label: "Docs" },
  { icon: "fa-solid fa-file-excel", label: "Sheets" },
  { icon: "fa-solid fa-globe", label: "Browser" },
  { icon: "fa-solid fa-shield-halved", label: "Safety" },
  { icon: "fa-solid fa-folder", label: "Files" },
];

function DLHero() {
  return (
    <section className="service-hero dl-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="dl-hero__orb dl-hero__orb--1" aria-hidden="true"></div>
      <div className="dl-hero__orb dl-hero__orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow dl-eyebrow">
          <i className="fa-solid fa-laptop" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title dl-hero__title">
          Digital
          <br />
          <span className="dl-title-accent">Literacy</span>
        </h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Start from zero and leave confident. Computer basics, typing,
          documents, spreadsheets, email and online safety — the foundation
          every other tech skill is built on.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill dl-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 8 Weeks
          </span>
          <span className="service-hero__meta-pill dl-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Complete
            Beginner
          </span>
          <span className="service-hero__meta-pill dl-pill dl-pill--start">
            <i className="fa-solid fa-seedling" aria-hidden="true"></i> Start
            Here
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="dl-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="dl-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS all-in-one desktop mockup */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="dl-monitor-wrap">
          <div className="dl-monitor-glow" aria-hidden="true"></div>

          <div className="dl-monitor">
            <div className="dl-monitor__screen">
              <div className="dl-monitor__topbar">
                <span className="dl-monitor__dot dl-monitor__dot--red"></span>
                <span className="dl-monitor__dot dl-monitor__dot--yellow"></span>
                <span className="dl-monitor__dot dl-monitor__dot--green"></span>
                <span className="dl-monitor__topbar-title">My Computer</span>
              </div>

              <div className="dl-monitor__desktop">
                {DESKTOP_ICONS.map((item) => (
                  <div key={item.label} className="dl-desktop-icon">
                    <span className="dl-desktop-icon__glyph">
                      <i className={item.icon} aria-hidden="true"></i>
                    </span>
                    <span className="dl-desktop-icon__label">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="dl-monitor__cursor" aria-hidden="true">
                <i className="fa-solid fa-arrow-pointer"></i>
              </div>

              <div className="dl-monitor__taskbar">
                <span className="dl-monitor__start">
                  <i className="fa-solid fa-grip" aria-hidden="true"></i>
                </span>
                <span className="dl-monitor__taskbar-time">9:41 AM</span>
              </div>
            </div>

            <div className="dl-monitor__stand" aria-hidden="true"></div>
            <div className="dl-monitor__base" aria-hidden="true"></div>
          </div>

          {/* Floating info badges */}
          <div className="dl-badge dl-badge--typing">
            <i className="fa-solid fa-keyboard" aria-hidden="true"></i> Typing
            Basics
          </div>
          <div className="dl-badge dl-badge--safety">
            <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>{" "}
            Stay Safe Online
          </div>
          <div className="dl-badge dl-badge--email">
            <i className="fa-solid fa-envelope" aria-hidden="true"></i> Email
            101
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

function DLTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs dl-tabs" role="tablist">
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
                className={`services-overview-card__icon dl-icon dl-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="dl-info-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          No experience needed — over 70% of our Digital Literacy students had
          never used a computer for work before their first class.
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
              <div className="services-week__num dl-week-num">{i + 1}</div>
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
            <div key={o.text} className="services-outcome-tag dl-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="dl-outcomes-footer">
          {[
            ["8", "Weeks"],
            ["0", "Experience Required"],
            ["1", "Certificate"],
          ].map(([num, label]) => (
            <div key={label} className="dl-outcomes-footer__stat">
              <span className="dl-outcomes-footer__num">{num}</span>
              <span className="dl-outcomes-footer__label">{label}</span>
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

function DigitalLiteracy() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page dl-page">
      <Navbar />
      <DLHero />
      <DLTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default DigitalLiteracy;
