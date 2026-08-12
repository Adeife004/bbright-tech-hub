import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "./AfterSchool.css";

/* ── Data ───────────────────────────────────────────────────── */

const SUBJECTS = [
  {
    icon: "fa-solid fa-computer",
    title: "Intro to Coding",
    age: "10 – 18",
    desc: "Scratch, Python basics and logic building. Perfect starting point for any young learner.",
  },
  {
    icon: "fa-solid fa-code",
    title: "Web Design",
    age: "13 – 18",
    desc: "HTML, CSS and basic JavaScript. Students leave with their own live website.",
  },
  {
    icon: "fa-solid fa-robot",
    title: "Robotics",
    age: "10 – 16",
    desc: "Build and program robots using Arduino kits. Hands-on every session.",
  },
  {
    icon: "fa-solid fa-gamepad",
    title: "Game Development",
    age: "10 – 18",
    desc: "Design and build 2D games using Scratch or Unity. A favourite every term.",
  },
  {
    icon: "fa-solid fa-chart-bar",
    title: "Excel & Data",
    age: "14 – 18",
    desc: "Excel formulas, charts, data analysis and practical spreadsheet skills.",
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "Digital Design",
    age: "12 – 18",
    desc: "Canva, Figma basics, typography and visual design principles.",
  },
];

const TIMETABLE = [
  { day: "Monday", subjects: ["Intro to Coding", "Robotics"] },
  { day: "Tuesday", subjects: ["Web Design", "Digital Design"] },
  { day: "Wednesday", subjects: ["Game Development", "Intro to Coding"] },
  { day: "Thursday", subjects: ["Excel & Data", "Robotics"] },
  { day: "Friday", subjects: ["Web Design", "Game Development"] },
];

const FOR_WHOM = [
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Secondary Students",
    desc: "JSS1 to SS3 students looking to learn tech skills alongside their academics.",
  },
  {
    icon: "fa-solid fa-child",
    title: "Primary Leavers",
    desc: "Students in Primary 5 – 6 who are ready to start exploring coding and digital tools.",
  },
  {
    icon: "fa-solid fa-user-graduate",
    title: "University Students",
    desc: "Undergrads who want practical digital skills not covered in their university timetable.",
  },
  {
    icon: "fa-solid fa-user-shield",
    title: "Parent-Registered",
    desc: 'Parents can register children directly — see the "For Parents" section below.',
  },
];

const PARENT_STEPS = [
  {
    num: "01",
    title: "Fill in the Apply form",
    desc: "On the Apply page, choose \"I'm registering my child\". Enter your details as the parent/guardian and your child's details in the next section.",
  },
  {
    num: "02",
    title: "Choose a subject",
    desc: "Select the subject or subjects you'd like your child to attend. You can pick multiple if the schedule allows.",
  },
  {
    num: "03",
    title: "Receive confirmation",
    desc: "We'll send a welcome email within 48 hours with the class schedule, location and everything your child needs for day one.",
  },
];

const FAQS = [
  {
    q: "What time do After School classes run?",
    a: "Classes run Monday to Friday from 3:00 PM to 6:00 PM. Students can attend any or all of the days — each session is 1.5 to 2 hours.",
  },
  {
    q: "Is there supervision before the session starts?",
    a: "Yes. Our staff are on-site from 2:45 PM. Students arriving straight from school can wait safely in the common area.",
  },
  {
    q: "Can my child attend if they have no experience?",
    a: "Absolutely — all After School subjects start from zero. Intro to Coding and Game Development are especially popular with complete beginners.",
  },
  {
    q: "How many students are in each class?",
    a: "We keep classes to a maximum of 12 students to ensure every child gets individual attention from the instructor.",
  },
  {
    q: "Can a child attend multiple subjects per week?",
    a: "Yes — many students attend 2 or 3 sessions per week in different subjects. The timetable is designed to avoid clashes.",
  },
  {
    q: "Is there a parent progress report?",
    a: "Yes. We send a brief written progress update at the end of each month covering attendance, topics covered and any instructor notes.",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function AfterSchoolHero() {
  return (
    <section className="as-hero">
      <div className="as-hero__orb as-hero__orb--1" aria-hidden="true"></div>
      <div className="as-hero__orb as-hero__orb--2" aria-hidden="true"></div>
      <div className="as-hero__grid" aria-hidden="true"></div>

      <div className="as-hero__inner">
        <div
          className="as-hero__text"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <span className="as-eyebrow">
            <i className="fa-solid fa-book-open" aria-hidden="true"></i>
            Weekday Learning · Term-Time
          </span>

          <h1 className="as-hero__title">
            School Ends at 2.
            <br />
            <span className="as-title-accent">Learning</span> Doesn't.
          </h1>

          <p className="as-hero__desc">
            Mon – Fri, 3:00 PM – 6:00 PM. B Bright After School gives students
            aged 10–18 a structured, fun place to learn tech skills right after
            the school day ends.
          </p>

          <div className="as-hero__chips">
            <span className="as-chip">
              <i className="fa-regular fa-clock" aria-hidden="true"></i> 3PM –
              6PM Daily
            </span>
            <span className="as-chip">
              <i className="fa-solid fa-users" aria-hidden="true"></i> Ages 10 –
              18
            </span>
            <span className="as-chip as-chip--green">
              <i className="fa-solid fa-circle" aria-hidden="true"></i>{" "}
              Enrolment Open
            </span>
          </div>

          <div className="as-hero__btns">
            <Link to="/apply" className="as-btn-primary">
              Enrol Now{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link
              to="/apply"
              state={{ isChild: true }}
              className="as-btn-parent"
            >
              <i className="fa-solid fa-user-shield" aria-hidden="true"></i>
              Register My Child
            </Link>
          </div>
        </div>

        {/* Clock visual */}
        <div
          className="as-hero__visual"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <div className="as-clock-wrap">
            <div className="as-clock-glow" aria-hidden="true"></div>
            <div className="as-clock" aria-label="Clock showing 3PM">
              <div className="as-clock__face">
                <div className="as-clock__center" aria-hidden="true"></div>
                <div
                  className="as-clock__hand as-clock__hand--hour"
                  aria-hidden="true"
                ></div>
                <div
                  className="as-clock__hand as-clock__hand--min"
                  aria-hidden="true"
                ></div>
                {[3, 6, 9, 12].map((n) => (
                  <span key={n} className={`as-clock__num as-clock__num--${n}`}>
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="as-clock__badge">
              <i className="fa-solid fa-book-open" aria-hidden="true"></i>
              Learning starts
            </div>

            {SUBJECTS.slice(0, 3).map((s, i) => (
              <div
                key={s.title}
                className={`as-subject-float as-subject-float--${i + 1}`}
              >
                <i className={s.icon} aria-hidden="true"></i>
                <span>{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AfterSchoolSubjects() {
  return (
    <section className="as-subjects" id="subjects">
      <div className="as-section-header" data-aos="fade-up">
        <span className="as-eyebrow as-eyebrow--teal">What We Teach</span>
        <h2>Choose Your Subject</h2>
        <p>
          Six subjects across coding, design, robotics and data — with more
          added each term.
        </p>
      </div>

      <div className="as-subjects__grid">
        {SUBJECTS.map((subj, i) => (
          <div
            key={subj.title}
            className="as-subject-card"
            data-aos="fade-up"
            data-aos-delay={i * 70}
          >
            <div className="as-subject-card__icon">
              <i className={subj.icon} aria-hidden="true"></i>
            </div>
            <div className="as-subject-card__body">
              <div className="as-subject-card__top">
                <h3>{subj.title}</h3>
                <span className="as-age-badge">
                  <i className="fa-solid fa-child" aria-hidden="true"></i> Age{" "}
                  {subj.age}
                </span>
              </div>
              <p>{subj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AfterSchoolTimetable() {
  return (
    <section className="as-timetable">
      <div className="as-section-header" data-aos="fade-up">
        <span className="as-eyebrow as-eyebrow--light">Weekly Schedule</span>
        <h2>What Runs When</h2>
        <p>
          Two subjects run per day — students can mix and match across the week.
        </p>
      </div>

      <div
        className="as-timetable__grid"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="as-timetable__header-row">
          <span>Day</span>
          <span>3:00 PM – 4:30 PM</span>
        </div>
        {TIMETABLE.map((row, i) => (
          <div
            key={row.day}
            className={`as-timetable__row ${i % 2 === 0 ? "as-timetable__row--alt" : ""}`}
          >
            <span className="as-timetable__day">{row.day}</span>
            {row.subjects.map((s) => (
              <div key={s} className="as-timetable__cell">
                <i
                  className={
                    SUBJECTS.find((sub) => sub.title === s)?.icon ??
                    "fa-solid fa-book"
                  }
                  aria-hidden="true"
                ></i>
                {s}
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="as-timetable__note">
        <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
        Schedule may vary each term. Confirmed schedule sent on enrolment.
      </p>
    </section>
  );
}

function AfterSchoolForWhom() {
  return (
    <section className="as-for-whom" id="who">
      <div className="as-section-header" data-aos="fade-up">
        <span className="as-eyebrow as-eyebrow--teal">Who Is It For?</span>
        <h2>Made for Every Young Learner</h2>
        <p>
          From primary school finishers to university students — if you're
          curious, you belong here.
        </p>
      </div>

      <div className="as-for-whom__grid">
        {FOR_WHOM.map((item, i) => (
          <div
            key={item.title}
            className="as-whom-card"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="as-whom-card__icon">
              <i className={item.icon} aria-hidden="true"></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AfterSchoolParents() {
  return (
    <section className="as-parents" id="parents">
      <div className="as-parents__inner">
        <div className="as-parents__text" data-aos="fade-right">
          <span className="as-eyebrow as-eyebrow--light">For Parents</span>
          <h2>Register Your Child in 3 Easy Steps</h2>
          <p>
            No need to bring your child to a physical office. The entire
            registration is online and takes under 5 minutes.
          </p>
          <Link
            to="/apply"
            className="as-btn-primary"
            style={{ width: "fit-content", marginTop: "1.5rem" }}
          >
            <i className="fa-solid fa-user-shield" aria-hidden="true"></i>
            Start Registration
          </Link>
        </div>

        <div
          className="as-parents__steps"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          {PARENT_STEPS.map((step) => (
            <div key={step.num} className="as-parent-step">
              <div className="as-parent-step__num">{step.num}</div>
              <div className="as-parent-step__body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AfterSchoolFAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="as-faqs">
      <div className="as-section-header" data-aos="fade-up">
        <span className="as-eyebrow as-eyebrow--teal">FAQs</span>
        <h2>Common Questions</h2>
      </div>

      <div className="as-faqs__list">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`as-faq ${open === i ? "open" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            <button
              className="as-faq__q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="as-faq__icon" aria-hidden="true">
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
            <div className="as-faq__a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AfterSchoolCTA() {
  return (
    <section className="as-cta" data-aos="fade-up">
      <div className="as-cta__inner">
        <div className="as-cta__text">
          <h2>Ready to start after school?</h2>
          <p>
            Enrol yourself or register your child — it only takes a few minutes.
          </p>
        </div>
        <div className="as-cta__btns">
          <Link to="/apply" className="as-btn-primary">
            Enrol Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/apply" className="as-btn-parent">
            <i className="fa-solid fa-user-shield" aria-hidden="true"></i>
            Register My Child
          </Link>
          <Link to="/contact" className="as-btn-ghost">
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

function AfterSchool() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <AfterSchoolHero />
      <AfterSchoolSubjects />
      <AfterSchoolTimetable />
      <AfterSchoolForWhom />
      <AfterSchoolParents />
      <AfterSchoolFAQs />
      <AfterSchoolCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default AfterSchool;
