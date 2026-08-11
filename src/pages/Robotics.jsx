import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../styles/ServicePage.css";
import "./Robotics.css";

/* ── Data ───────────────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  {
    icon: "fa-solid fa-robot",
    color: "blue",
    title: "What You Will Learn",
    desc: "How to build and program real robots from scratch — circuits, microcontrollers, sensors and motors working together as one system.",
  },
  {
    icon: "fa-solid fa-toolbox",
    color: "orange",
    title: "Tools You Will Use",
    desc: "Arduino boards, breadboards, ultrasonic and infrared sensors, servo and DC motors, and the Arduino IDE for programming your builds.",
  },
  {
    icon: "fa-solid fa-users",
    color: "blue",
    title: "Who It Is For",
    desc: "Hands-on learners, students interested in engineering, hobbyists who want to build physical projects, and anyone who prefers building things they can touch.",
  },
  {
    icon: "fa-solid fa-microchip",
    color: "orange",
    title: "Career Paths",
    desc: "Robotics Engineer, Embedded Systems Developer, Mechatronics Technician, IoT Developer — hands-on engineering roles across manufacturing and tech.",
  },
];

const CURRICULUM = [
  {
    week: "Wk 1–2",
    title: "Electronics Fundamentals",
    desc: "Circuits, breadboards, resistors, LEDs and switches. Understanding voltage, current and Ohm's Law by building, not memorising.",
  },
  {
    week: "Wk 3–4",
    title: "Intro to Arduino & Microcontrollers",
    desc: "Setting up the Arduino IDE, writing your first sketches, and controlling digital and analog inputs and outputs.",
  },
  {
    week: "Wk 5–6",
    title: "Sensors — Reading the Real World",
    desc: "Ultrasonic, infrared, light and temperature sensors. Turning physical signals into data your code can act on.",
  },
  {
    week: "Wk 7–8",
    title: "Motors & Movement",
    desc: "DC motors, servos and motor drivers. Giving your robot the ability to move, turn and respond.",
  },
  {
    week: "Wk 9–10",
    title: "Capstone Robot Build",
    desc: "Combine sensors, motors and code into a working autonomous robot. Test, debug and present it live on demo day.",
  },
];

const OUTCOMES = [
  {
    icon: "fa-solid fa-bolt",
    text: "Build working circuits from scratch on a breadboard",
  },
  {
    icon: "fa-brands fa-cuttlefish",
    text: "Program microcontrollers with Arduino",
  },
  {
    icon: "fa-solid fa-satellite-dish",
    text: "Read real-world data using sensors",
  },
  { icon: "fa-solid fa-gear", text: "Control motors and servos precisely" },
  { icon: "fa-solid fa-robot", text: "Build a fully autonomous robot" },
  { icon: "fa-solid fa-bug", text: "Debug hardware and code together" },
  {
    icon: "fa-solid fa-briefcase",
    text: "Portfolio-ready — 1 complete robot project",
  },
  {
    icon: "fa-solid fa-certificate",
    text: "B Bright Tech Hub Robotics certificate",
  },
];

const FAQS = [
  {
    q: "Do I need to buy my own robotics kit?",
    a: "No — all Arduino boards, sensors, motors and components are provided in class for every session. Ask our team about take-home kit options if you'd like to keep practising at home.",
  },
  {
    q: "Do I need coding experience first?",
    a: "It helps but isn't required — we teach the programming side from scratch. If you've taken Digital Literacy or Vibe Coding first, the Arduino coding will feel very familiar.",
  },
  {
    q: "Is there an age requirement?",
    a: "This course is designed for ages 12 and up. Younger students with strong interest are welcome to speak with our team about the After School robotics track instead.",
  },
  {
    q: "Is Robotics the same as VR & AR?",
    a: "No — Robotics is about building physical hardware you can hold and move. VR & AR is about building immersive digital software experiences. They're a great combination if you're curious about both.",
  },
  {
    q: "Will I break anything if I get it wrong?",
    a: "Not with the components we use — everything is built for beginners to experiment safely. Getting a circuit wrong is part of learning, and our instructors are there to help you debug it.",
  },
];

/* ── Hero visual: CSS robot chassis with blinking eyes & sensor panel ── */

function RoboticsHero() {
  return (
    <section className="service-hero rb-hero">
      <div className="service-hero__grid-overlay" aria-hidden="true"></div>
      <div className="rb-hero__orb rb-hero__orb--1" aria-hidden="true"></div>
      <div className="rb-hero__orb rb-hero__orb--2" aria-hidden="true"></div>

      <div
        className="service-hero__text"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <span className="service-hero__eyebrow rb-eyebrow">
          <i className="fa-solid fa-robot" aria-hidden="true"></i>
          Tech Skills Training
        </span>

        <h1 className="service-hero__title rb-hero__title">Robotics</h1>

        <p
          className="service-hero__desc"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Wires, sensors, motors and code — brought together into something that
          actually moves. Build real robots from the breadboard up over 10
          hands-on weeks.
        </p>

        <div className="service-hero__meta">
          <span className="service-hero__meta-pill rb-pill">
            <i className="fa-regular fa-clock" aria-hidden="true"></i> 10 Weeks
          </span>
          <span className="service-hero__meta-pill rb-pill">
            <i className="fa-solid fa-signal" aria-hidden="true"></i> Beginner –
            Intermediate
          </span>
          <span className="service-hero__meta-pill rb-pill rb-pill--hands">
            <i className="fa-solid fa-hand-sparkles" aria-hidden="true"></i>{" "}
            Hands-On
          </span>
        </div>

        <div className="service-hero__btns">
          <Link to="/apply" className="rb-btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/programmes" className="rb-btn-outline">
            All Programmes
          </Link>
        </div>
      </div>

      {/* CSS robot chassis visual */}
      <div
        className="service-hero__visual"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <div className="rb-bot-wrap">
          <div className="rb-bot-glow" aria-hidden="true"></div>

          <div className="rb-bot">
            <div className="rb-bot__antenna">
              <span className="rb-bot__antenna-ball"></span>
            </div>

            <div className="rb-bot__head">
              <div className="rb-bot__eye rb-bot__eye--left"></div>
              <div className="rb-bot__eye rb-bot__eye--right"></div>
            </div>

            <div className="rb-bot__body">
              <div className="rb-bot__panel">
                <span className="rb-bot__bar"></span>
                <span className="rb-bot__bar"></span>
                <span className="rb-bot__bar"></span>
                <span className="rb-bot__bar"></span>
                <span className="rb-bot__bar"></span>
              </div>
              <div className="rb-bot__lights">
                <span className="rb-bot__light"></span>
                <span className="rb-bot__light"></span>
                <span className="rb-bot__light"></span>
              </div>
            </div>

            <div className="rb-bot__arm rb-bot__arm--left"></div>
            <div className="rb-bot__arm rb-bot__arm--right"></div>
            <div className="rb-bot__wheel rb-bot__wheel--left"></div>
            <div className="rb-bot__wheel rb-bot__wheel--right"></div>
          </div>
        </div>

        {/* Floating tool badges */}
        <div className="rb-badge rb-badge--arduino">
          <i className="fa-solid fa-microchip" aria-hidden="true"></i> Arduino
        </div>
        <div className="rb-badge rb-badge--sensor">
          <i className="fa-solid fa-satellite-dish" aria-hidden="true"></i>{" "}
          Sensors
        </div>
        <div className="rb-badge rb-badge--motor">
          <i className="fa-solid fa-gear" aria-hidden="true"></i> Motors
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

function RoboticsTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="services-tabs-section">
      <div className="services-tabs rb-tabs" role="tablist">
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
                className={`services-overview-card__icon rb-icon rb-icon--${card.color}`}
              >
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="rb-info-banner">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          No prior electronics knowledge needed — every circuit starts with a
          single LED, and builds from there.
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
              <div className="services-week__num rb-week-num">{i + 1}</div>
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
            <div key={o.text} className="services-outcome-tag rb-outcome">
              <i className={o.icon} aria-hidden="true"></i>
              {o.text}
            </div>
          ))}
        </div>
        <div className="rb-outcomes-footer">
          {[
            ["1", "Robot Built"],
            ["10", "Weeks"],
            ["5+", "Components Mastered"],
          ].map(([num, label]) => (
            <div key={label} className="rb-outcomes-footer__stat">
              <span className="rb-outcomes-footer__num">{num}</span>
              <span className="rb-outcomes-footer__label">{label}</span>
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

function Robotics() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);
  return (
    <div className="service-page rb-page">
      <Navbar />
      <RoboticsHero />
      <RoboticsTabs />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Robotics;
