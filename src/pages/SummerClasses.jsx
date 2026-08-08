import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "./SummerClasses.css";

/* ── Data ───────────────────────────────────────────────────── */

const TRACKS = [
  {
    icon: "fa-solid fa-code",
    title: "Web Development",
    level: "Beginner",
    weeks: 8,
    desc: "HTML, CSS, JavaScript and React. Build 3 real projects by the end of the summer.",
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "UI/UX Design",
    level: "Beginner",
    weeks: 6,
    desc: "Figma, user research, wireframing and your first complete app design.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Data Analysis",
    level: "Beginner",
    weeks: 6,
    desc: "Excel, SQL and Power BI — turn raw data into clear business insights.",
  },
  {
    icon: "fa-solid fa-computer",
    title: "Digital Literacy",
    level: "All levels",
    weeks: 4,
    desc: "Computer basics, internet safety and productivity tools for the digital world.",
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Vibe Coding",
    level: "Beginner",
    weeks: 4,
    desc: "Build real apps using AI coding assistants. No deep code knowledge required.",
  },
  {
    icon: "fa-solid fa-robot",
    title: "Robotics",
    level: "Intermediate",
    weeks: 8,
    desc: "Arduino, sensors, automation — build and program your own working robot.",
  },
];

const SCHEDULE_OPTIONS = [
  {
    type: "Full-Time",
    icon: "fa-solid fa-sun",
    days: "Monday – Friday",
    time: "9:00 AM – 3:00 PM",
    duration: "4 – 8 weeks",
    best: "Students on holiday break",
    color: "gold",
  },
  {
    type: "Part-Time",
    icon: "fa-solid fa-clock",
    days: "Mon, Wed & Fri",
    time: "10:00 AM – 1:00 PM",
    duration: "6 – 10 weeks",
    best: "Balancing other commitments",
    color: "teal",
  },
];

const PERKS = [
  { icon: "fa-solid fa-graduation-cap", text: "Certificate on completion" },
  { icon: "fa-solid fa-laptop", text: "Access to all lab equipment" },
  { icon: "fa-solid fa-people-group", text: "Small class sizes (max 15)" },
  { icon: "fa-solid fa-briefcase", text: "Portfolio project every track" },
  {
    icon: "fa-solid fa-chalkboard-user",
    text: "Expert instructors, real feedback",
  },
  { icon: "fa-solid fa-mug-hot", text: "Refreshments during sessions" },
];

const FAQS = [
  {
    q: "When do Summer Classes run?",
    a: "Summer Classes run from August 5 to September 30, 2026. You can enrol in one or more tracks depending on your availability.",
  },
  {
    q: "Can I enrol in more than one track?",
    a: "Yes — as long as the schedules do not clash, you can combine tracks. Many students pair Digital Literacy with Web Development for a solid foundation.",
  },
  {
    q: "What age is this suitable for?",
    a: "Summer Classes are open to students aged 14 and above. We also run a separate Young Coders programme for ages 8–13 — ask us for details.",
  },
  {
    q: "What do I need to bring?",
    a: "Just yourself and any personal stationery. All computers, tools, and software are provided in the lab. We recommend bringing a notebook for sketching ideas.",
  },
  {
    q: "Is there a discount for siblings or groups?",
    a: "Yes — families enrolling two or more children receive a 10% sibling discount. Group bookings of 5+ students from the same school also qualify for a group rate.",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function SummerHero() {
  return (
    <section className="summer-hero">
      <div className="summer-hero__wave" aria-hidden="true"></div>
      <div
        className="summer-hero__orb summer-hero__orb--1"
        aria-hidden="true"
      ></div>
      <div
        className="summer-hero__orb summer-hero__orb--2"
        aria-hidden="true"
      ></div>

      <div className="summer-hero__inner">
        <div
          className="summer-hero__left"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <span className="summer-eyebrow">
            <i className="fa-solid fa-umbrella-beach" aria-hidden="true"></i>
            Aug 5 – Sept 30, 2026
          </span>

          <h1 className="summer-hero__title">
            Make Your <br />
            <span className="summer-title-accent">Summer</span>
            <br />
            Count.
          </h1>

          <p className="summer-hero__desc">
            While everyone else is watching the clock, you'll be building skills
            that last a lifetime. Full-time and part-time options — choose what
            fits your holiday schedule.
          </p>

          <div className="summer-hero__meta">
            <div className="summer-meta-pill">
              <i className="fa-solid fa-calendar-week" aria-hidden="true"></i>4
              – 8 weeks
            </div>
            <div className="summer-meta-pill">
              <i className="fa-solid fa-book-open" aria-hidden="true"></i>6
              tracks available
            </div>
            <div className="summer-meta-pill summer-meta-pill--highlight">
              <i className="fa-solid fa-bolt" aria-hidden="true"></i>
              Enrolment open
            </div>
          </div>

          <div className="summer-hero__btns">
            <Link to="/apply" className="summer-btn-primary">
              Enrol Now{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <a href="#tracks" className="summer-btn-outline">
              View Tracks
            </a>
          </div>
        </div>

        <div
          className="summer-hero__right"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <div className="summer-visual">
            <div className="summer-visual__card summer-visual__card--main">
              <div className="summer-visual__icon">
                <i className="fa-solid fa-sun" aria-hidden="true"></i>
              </div>
              <h3>Summer 2026</h3>
              <p>6 programmes · 2 formats</p>
              <div className="summer-visual__tracks">
                {["Web Dev", "UI/UX", "Data", "Robotics", "AI", "Literacy"].map(
                  (t) => (
                    <span key={t} className="summer-visual__track-pill">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="summer-visual__card summer-visual__card--stat summer-visual__card--tl">
              <span className="summer-visual__stat-num">15</span>
              <span className="summer-visual__stat-label">Max class size</span>
            </div>

            <div className="summer-visual__card summer-visual__card--stat summer-visual__card--br">
              <span className="summer-visual__stat-num">100%</span>
              <span className="summer-visual__stat-label">
                Hands-on learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummerTracks() {
  return (
    <section className="summer-tracks" id="tracks">
      <div className="summer-section-header" data-aos="fade-up">
        <span className="summer-eyebrow summer-eyebrow--teal">
          Available Tracks
        </span>
        <h2>Pick Your Path</h2>
        <p>
          Every track ends with a real project and a certificate. Start anywhere
          — all levels welcome.
        </p>
      </div>

      <div className="summer-tracks__grid">
        {TRACKS.map((track, i) => (
          <div
            key={track.title}
            className="summer-track-card"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="summer-track-card__top">
              <div className="summer-track-card__icon">
                <i className={track.icon} aria-hidden="true"></i>
              </div>
              <div className="summer-track-card__badges">
                <span className="summer-badge summer-badge--level">
                  {track.level}
                </span>
                <span className="summer-badge summer-badge--weeks">
                  <i className="fa-regular fa-clock" aria-hidden="true"></i>{" "}
                  {track.weeks}wk
                </span>
              </div>
            </div>
            <h3 className="summer-track-card__title">{track.title}</h3>
            <p className="summer-track-card__desc">{track.desc}</p>
            <Link to="/apply" className="summer-track-card__link">
              Enrol in this track{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function SummerSchedule() {
  return (
    <section className="summer-schedule">
      <div className="summer-section-header" data-aos="fade-up">
        <span className="summer-eyebrow summer-eyebrow--teal">
          Flexible Formats
        </span>
        <h2>Choose How You Learn</h2>
        <p>
          Full-time or part-time — we built both options around your holiday
          schedule.
        </p>
      </div>

      <div className="summer-schedule__grid">
        {SCHEDULE_OPTIONS.map((opt, i) => (
          <div
            key={opt.type}
            className={`summer-sched-card summer-sched-card--${opt.color}`}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            <div className="summer-sched-card__icon">
              <i className={opt.icon} aria-hidden="true"></i>
            </div>
            <h3 className="summer-sched-card__type">{opt.type}</h3>
            <div className="summer-sched-card__details">
              <div className="summer-sched-card__row">
                <i className="fa-regular fa-calendar" aria-hidden="true"></i>
                <span>{opt.days}</span>
              </div>
              <div className="summer-sched-card__row">
                <i className="fa-regular fa-clock" aria-hidden="true"></i>
                <span>{opt.time}</span>
              </div>
              <div className="summer-sched-card__row">
                <i
                  className="fa-solid fa-hourglass-half"
                  aria-hidden="true"
                ></i>
                <span>{opt.duration}</span>
              </div>
            </div>
            <div className="summer-sched-card__best">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              Best for: <strong>{opt.best}</strong>
            </div>
            <Link to="/apply" className="summer-sched-card__btn">
              Choose {opt.type}{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function SummerPerks() {
  return (
    <section className="summer-perks">
      <div className="summer-section-header" data-aos="fade-up">
        <span className="summer-eyebrow summer-eyebrow--light">
          What's included
        </span>
        <h2>Everything You Need to Succeed</h2>
        <p>
          Every Summer Classes enrolment comes with the full B Bright
          experience.
        </p>
      </div>

      <div className="summer-perks__grid">
        {PERKS.map((perk, i) => (
          <div
            key={perk.text}
            className="summer-perk"
            data-aos="fade-up"
            data-aos-delay={i * 70}
          >
            <i className={perk.icon} aria-hidden="true"></i>
            <span>{perk.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SummerFAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="summer-faqs">
      <div className="summer-section-header" data-aos="fade-up">
        <span className="summer-eyebrow summer-eyebrow--teal">FAQs</span>
        <h2>Questions Answered</h2>
      </div>

      <div className="summer-faqs__list">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`summer-faq ${open === i ? "open" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <button
              className="summer-faq__q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="summer-faq__icon" aria-hidden="true">
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
            <div className="summer-faq__a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SummerCTA() {
  return (
    <section className="summer-cta" data-aos="fade-up">
      <div className="summer-cta__inner">
        <h2>Spots Fill Fast Every Summer</h2>
        <p>
          With a maximum of 15 students per class, we sell out early. Secure
          your place today.
        </p>
        <div className="summer-cta__btns">
          <Link to="/apply" className="summer-btn-primary">
            Enrol Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link
            to="/contact"
            className="summer-btn-outline summer-btn-outline--light"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

function SummerClasses() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <SummerHero />
      <SummerTracks />
      <SummerSchedule />
      <SummerPerks />
      <SummerFAQs />
      <SummerCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SummerClasses;
