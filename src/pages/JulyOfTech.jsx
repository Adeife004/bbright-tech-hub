import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "./JulyOfTech.css";

/* ── Countdown hook ─────────────────────────────────────────── */
function useJulyCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    mins: "--",
    secs: "--",
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const year = now.getFullYear();
      const start = new Date(year, 6, 1, 0, 0, 0);
      const end = new Date(year, 6, 31, 23, 59, 59);

      if (now >= start && now <= end) {
        setIsLive(true);
        setTimeLeft({ days: "00", hours: "00", mins: "00", secs: "00" });
        return;
      }

      setIsLive(false);
      const target = now > end ? new Date(year + 1, 6, 1) : start;
      const diff = target - now;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        mins: String(m).padStart(2, "0"),
        secs: String(s).padStart(2, "0"),
      });
    }
    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, []);

  return { timeLeft, isLive };
}

/* ── Data ───────────────────────────────────────────────────── */

const HIGHLIGHTS = [
  {
    icon: "fa-solid fa-chalkboard-user",
    num: "20+",
    label: "Workshops",
    desc: "Hands-on sessions across web, AI, design, robotics, and more — led by industry practitioners.",
  },
  {
    icon: "fa-solid fa-trophy",
    num: "48h",
    label: "Hackathon",
    desc: "A full 48-hour build sprint in Week 2. Form a team, pick a problem, ship something real.",
  },
  {
    icon: "fa-solid fa-microphone-lines",
    num: "10+",
    label: "Guest Speakers",
    desc: "CTOs, founders and engineers from top Nigerian and international tech companies.",
  },
  {
    icon: "fa-solid fa-people-group",
    num: "200+",
    label: "Participants",
    desc: "Students, graduates and tech enthusiasts from Lagos and beyond come together for the whole month.",
  },
  {
    icon: "fa-solid fa-display",
    num: "1",
    label: "Demo Day",
    desc: "End the month with a live showcase. Present your project to judges, peers and potential employers.",
  },
  {
    icon: "fa-solid fa-gift",
    num: "₦500k",
    label: "in Prizes",
    desc: "Prizes for hackathon winners, best project, most creative solution and people's choice.",
  },
];

const SCHEDULE = [
  {
    week: "Week 1",
    dates: "1 – 7 July",
    title: "Kick-off & Workshops",
    color: "teal",
    events: [
      "Grand Opening Ceremony & Networking",
      "Web Development Intensive (3 days)",
      "AI & Data Science Workshop",
      "UI/UX Design Sprint",
      "Open Lab — build and explore freely",
    ],
  },
  {
    week: "Week 2",
    dates: "8 – 14 July",
    title: "48-Hour Hackathon",
    color: "gold",
    events: [
      "Team formation & problem briefing",
      "48 hours of non-stop building",
      "Mentor check-ins every 6 hours",
      "Prototype presentations on Day 3",
      "Judges Q&A and feedback session",
    ],
  },
  {
    week: "Week 3",
    dates: "15 – 21 July",
    title: "Masterclasses & Speakers",
    color: "purple",
    events: [
      "Morning masterclasses: Robotics, VR/AR, 3D",
      "Afternoon speaker series — 2 talks daily",
      "Career panel: Getting hired in tech",
      "Freelancing & building your own product",
      "Portfolio review sessions",
    ],
  },
  {
    week: "Week 4",
    dates: "22 – 31 July",
    title: "Project Sprint & Demo Day",
    color: "teal",
    events: [
      "Final project kick-off — individual or team",
      "Daily stand-ups and mentor office hours",
      "Project presentations (Day 8)",
      "Judges deliberation",
      "Closing ceremony, awards & networking",
    ],
  },
];

const FAQS = [
  {
    q: "Who can attend July of Tech?",
    a: "Anyone! Students, recent graduates, working professionals, and curious beginners are all welcome. There is no age limit and no prior experience required for most tracks.",
  },
  {
    q: "Is it free to attend?",
    a: "Registration is free for B Bright enrolled students. Non-students pay a nominal participation fee for the full month. Individual workshop day passes are also available.",
  },
  {
    q: "Do I need to attend every day?",
    a: "No — you can attend any day or session you like. The hackathon and Demo Day require commitment for those specific dates, but everything else is drop-in.",
  },
  {
    q: "Can I join the hackathon solo?",
    a: "Yes. Solo entries are accepted, but we recommend teams of 2–4 for the best experience. We will help with team formation at the kick-off.",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function JulyHero() {
  const { timeLeft, isLive } = useJulyCountdown();

  return (
    <section className="july-hero">
      <div className="july-hero__stars" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="july-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></span>
        ))}
      </div>

      <div
        className="july-hero__orb july-hero__orb--1"
        aria-hidden="true"
      ></div>
      <div
        className="july-hero__orb july-hero__orb--2"
        aria-hidden="true"
      ></div>

      <div className="july-hero__inner">
        <div className="july-hero__eyebrow">
          <i className="fa-solid fa-sun" aria-hidden="true"></i>
          Annual Flagship Event · Every July
        </div>

        <h1 className="july-hero__title">
          <span className="july-hero__title-top">July of</span>
          <span className="july-hero__title-main">Tech</span>
          <span className="july-hero__title-year">2026</span>
        </h1>

        <p className="july-hero__desc">
          A full month of workshops, hackathons, speaker talks and live project
          demos. The biggest thing B Bright Tech Hub does all year — and it's
          back.
        </p>

        {isLive ? (
          <div className="july-live-banner" aria-live="polite">
            <span className="july-live-dot" aria-hidden="true"></span>
            July of Tech is happening RIGHT NOW — come join us!
          </div>
        ) : (
          <div
            className="july-countdown"
            aria-label="Countdown to July of Tech"
          >
            <p className="july-countdown__label">Starts in</p>
            <div className="july-countdown__units">
              {[
                { num: timeLeft.days, label: "Days" },
                { num: timeLeft.hours, label: "Hours" },
                { num: timeLeft.mins, label: "Mins" },
                { num: timeLeft.secs, label: "Secs" },
              ].map((u, i) => (
                <Fragment key={u.label}>
                  {i > 0 && (
                    <span className="july-countdown__sep" aria-hidden="true">
                      :
                    </span>
                  )}
                  <div className="july-countdown__unit">
                    <span className="july-countdown__num">{u.num}</span>
                    <span className="july-countdown__label-unit">
                      {u.label}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        )}

        <div className="july-hero__btns">
          <Link to="/apply" className="july-btn-primary">
            Register Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <a href="#schedule" className="july-btn-outline">
            View Schedule{" "}
            <i className="fa-solid fa-calendar" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function JulyHighlights() {
  return (
    <section className="july-highlights">
      <div className="july-section-header" data-aos="fade-up">
        <span className="july-eyebrow">What to expect</span>
        <h2>One Month. Unlimited Learning.</h2>
        <p>
          From first-timers to advanced builders — July of Tech has something
          for everyone.
        </p>
      </div>

      <div className="july-highlights__grid">
        {HIGHLIGHTS.map((h, i) => (
          <div
            key={h.label}
            className="july-highlight-card"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="july-highlight-card__icon">
              <i className={h.icon} aria-hidden="true"></i>
            </div>
            <div className="july-highlight-card__num">{h.num}</div>
            <div className="july-highlight-card__label">{h.label}</div>
            <p className="july-highlight-card__desc">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function JulySchedule() {
  return (
    <section className="july-schedule" id="schedule">
      <div
        className="july-section-header july-section-header--dark"
        data-aos="fade-up"
      >
        <span className="july-eyebrow july-eyebrow--light">The Schedule</span>
        <h2>Four Weeks. Four Chapters.</h2>
        <p>
          Every week of July has a different focus — so there is always
          something new to dive into.
        </p>
      </div>

      <div className="july-schedule__grid">
        {SCHEDULE.map((week, i) => (
          <div
            key={week.week}
            className={`july-week-card july-week-card--${week.color}`}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="july-week-card__header">
              <div>
                <span className="july-week-card__week">{week.week}</span>
                <span className="july-week-card__dates">{week.dates}</span>
              </div>
              <h3 className="july-week-card__title">{week.title}</h3>
            </div>
            <ul className="july-week-card__events">
              {week.events.map((ev) => (
                <li key={ev}>
                  <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                  {ev}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function JulyFAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="july-faqs">
      <div className="july-section-header" data-aos="fade-up">
        <span className="july-eyebrow">Got questions?</span>
        <h2>Frequently Asked</h2>
      </div>

      <div className="july-faqs__list">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`july-faq ${open === i ? "open" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <button
              className="july-faq__q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="july-faq__icon" aria-hidden="true">
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
            <div className="july-faq__a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function JulyCTA() {
  return (
    <section className="july-cta" data-aos="fade-up">
      <div className="july-cta__inner">
        <div className="july-cta__orb" aria-hidden="true"></div>
        <h2>Don't Miss July of Tech 2026</h2>
        <p>
          Registration is open now. Spots are limited — secure yours before
          they're gone.
        </p>
        <Link to="/apply" className="july-btn-primary july-btn-primary--lg">
          Register for Free{" "}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

function JulyOfTech() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <JulyHero />
      <JulyHighlights />
      <JulySchedule />
      <JulyFAQs />
      <JulyCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default JulyOfTech;
