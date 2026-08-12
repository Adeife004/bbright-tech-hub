import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "./InSchoolPrograms.css";

/* ── Data ───────────────────────────────────────────────────── */

const TIMETABLE_PERIODS = [
  { period: "P1", subject: "Mathematics", active: false },
  { period: "P2", subject: "English Language", active: false },
  {
    period: "P3",
    subject: "Coding",
    active: true,
    tag: "B Bright",
    icon: "fa-solid fa-code",
  },
  {
    period: "P4",
    subject: "Robotics",
    active: true,
    tag: "B Bright",
    icon: "fa-solid fa-robot",
  },
  { period: "P5", subject: "Break", active: false },
];

const PROGRAMS = [
  {
    icon: "fa-solid fa-code",
    color: "coding",
    title: "Coding",
    grades: "Grades 6 – 12",
    desc: "From a first webpage to full working applications — HTML, CSS, JavaScript and the problem-solving habits that come with writing real code.",
  },
  {
    icon: "fa-solid fa-robot",
    color: "robotics",
    title: "Robotics",
    grades: "Grades 6 – 12",
    desc: "Circuits, sensors, motors and Arduino — students build and program real, physical robots they can hold, not just simulations.",
  },
  {
    icon: "fa-solid fa-laptop",
    color: "digital",
    title: "Digital Literacy",
    grades: "Grades 4 – 9",
    desc: "Computer basics, typing, spreadsheets and safe internet use — the foundation every student needs before anything else.",
  },
];

const WHY_PARTNER = [
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Curriculum-Aligned",
    desc: "Lessons built around your existing timetable and academic calendar — an addition that fits, not one that competes with core subjects.",
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "Certified Instructors",
    desc: "Every class is led by a trained B Bright instructor, not a substitute teacher learning the material alongside your students.",
  },
  {
    icon: "fa-solid fa-laptop",
    title: "Equipment Provided",
    desc: "Laptops, robotics kits and software provided for the full programme — no strain on your school's budget or IT infrastructure.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Progress Reporting",
    desc: "Termly reports for school leadership covering attendance, skills covered and individual student progress.",
  },
  {
    icon: "fa-solid fa-calendar-check",
    title: "Flexible Scheduling",
    desc: "Classes slot into existing free periods, computer studies time, or after-school clubs — whatever fits your timetable.",
  },
  {
    icon: "fa-solid fa-award",
    title: "Proven Curriculum",
    desc: "The same curriculum used in our own campus courses, adapted for classroom pacing, grade levels and school terms.",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We meet with your school leadership to understand your students, timetable and goals for the programme.",
  },
  {
    num: "02",
    title: "Choose Your Tracks",
    desc: "Select Coding, Robotics, Digital Literacy — or a mix — and we design a term-by-term plan around your grade levels.",
  },
  {
    num: "03",
    title: "Instructor Placement",
    desc: "Certified B Bright instructors are placed in your school, fully equipped and ready to teach from day one.",
  },
  {
    num: "04",
    title: "Ongoing Reporting",
    desc: "Termly progress reports keep your school informed on outcomes, attendance and skill growth all year round.",
  },
];

const GRADE_BANDS = [
  {
    icon: "fa-solid fa-shapes",
    band: "Primary (Grades 4 – 6)",
    title: "Digital Literacy & Intro to Coding",
    desc: "Typing, computer basics and block-based coding with Scratch — building comfort and curiosity early.",
  },
  {
    icon: "fa-solid fa-code",
    band: "Junior Secondary (JSS 1 – 3)",
    title: "Web Design & Robotics Foundations",
    desc: "HTML & CSS basics alongside hands-on robotics kits that introduce real-world problem solving.",
  },
  {
    icon: "fa-solid fa-laptop-code",
    band: "Senior Secondary (SSS 1 – 3)",
    title: "Web Development & Advanced Robotics",
    desc: "Full web development and more advanced robotics builds, with portfolio-building for university and career readiness.",
  },
];

const FAQS = [
  {
    q: "Can we run Coding and Robotics at the same time?",
    a: "Yes — most partner schools run two or more tracks in parallel, often across different grade levels or as alternating terms. We'll help you plan a schedule that makes sense for your school.",
  },
  {
    q: "Does this replace our Computer Studies curriculum?",
    a: "It can either complement your existing curriculum as enrichment, or fully deliver it — we can align directly with WAEC/NECO computer studies requirements where relevant. We'll map this out together during curriculum planning.",
  },
  {
    q: "What does the school need to provide?",
    a: "A classroom or lab space, and reliable power where possible. We bring laptops, robotics kits, software and instructors — there's no equipment budget required from your school.",
  },
  {
    q: "What's the minimum class size?",
    a: "We typically work with classes of 15–20 students, though this is flexible depending on your school's size. Reach out and we'll design something that fits.",
  },
  {
    q: "How is this priced?",
    a: "Pricing depends on which tracks you choose, class size, sessions per week, and the number of grade levels covered. Contact us for a custom proposal for your school.",
  },
  {
    q: "How long is a typical partnership?",
    a: "Most schools start with a one-term pilot on one track before expanding to additional tracks or a full academic year — a low-risk way to see the impact firsthand.",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function InSchoolHero() {
  return (
    <section className="isc-hero">
      <div className="isc-hero__orb isc-hero__orb--1" aria-hidden="true"></div>
      <div className="isc-hero__orb isc-hero__orb--2" aria-hidden="true"></div>
      <div className="isc-hero__grid" aria-hidden="true"></div>

      <div className="isc-hero__inner">
        <div
          className="isc-hero__text"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <span className="isc-eyebrow">
            <i className="fa-solid fa-school" aria-hidden="true"></i>
            For Schools · During School Hours
          </span>

          <h1 className="isc-hero__title">
            STEM, Already
            <br />
            <span className="isc-title-accent">On the Timetable.</span>
          </h1>

          <p className="isc-hero__desc">
            B Bright partners directly with schools to deliver certified coding,
            robotics and digital literacy classes during the school day — fully
            staffed, fully equipped, curriculum-aligned.
          </p>

          <div className="isc-hero__chips">
            <span className="isc-chip">
              <i className="fa-solid fa-users" aria-hidden="true"></i> Grades 4
              – 12
            </span>
            <span className="isc-chip">
              <i className="fa-solid fa-layer-group" aria-hidden="true"></i> 3
              Tracks Available
            </span>
            <span className="isc-chip isc-chip--accent">
              <i className="fa-solid fa-circle" aria-hidden="true"></i> Now
              Onboarding Schools
            </span>
          </div>

          <div className="isc-hero__btns">
            <Link to="/contact" className="isc-btn-primary">
              Partner With Us{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/programmes" className="isc-btn-outline">
              Explore Our Courses
            </Link>
          </div>
        </div>

        {/* Timetable visual */}
        <div
          className="isc-hero__visual"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <div className="isc-timetable-wrap">
            <div className="isc-timetable-glow" aria-hidden="true"></div>

            <div className="isc-timetable">
              <div className="isc-timetable__bar">
                <span className="isc-timetable__dot isc-timetable__dot--red"></span>
                <span className="isc-timetable__dot isc-timetable__dot--yellow"></span>
                <span className="isc-timetable__dot isc-timetable__dot--green"></span>
                <span className="isc-timetable__title">
                  <i
                    className="fa-solid fa-calendar-day"
                    aria-hidden="true"
                  ></i>
                  Monday — Period Schedule
                </span>
              </div>

              <div className="isc-timetable__list">
                {TIMETABLE_PERIODS.map((p) => (
                  <div
                    key={p.period}
                    className={`isc-timetable__row ${p.active ? "isc-timetable__row--active" : ""}`}
                  >
                    <span className="isc-timetable__period">{p.period}</span>
                    <span className="isc-timetable__subject">{p.subject}</span>
                    {p.active && (
                      <span className="isc-timetable__tag">
                        <i className={p.icon} aria-hidden="true"></i>
                        {p.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="isc-timetable__badge">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              Now Timetabled
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InSchoolProgramsOffered() {
  return (
    <section className="isc-programs" id="programs">
      <div className="isc-section-header" data-aos="fade-up">
        <span className="isc-eyebrow isc-eyebrow--gold">Programs We Offer</span>
        <h2>Three Tracks, Mix and Match</h2>
        <p>
          Run one track school-wide or several across different grade levels —
          the programme is built around your school, not a fixed package.
        </p>
      </div>

      <div className="isc-programs__grid">
        {PROGRAMS.map((program, i) => (
          <div
            key={program.title}
            className={`isc-program-card isc-program-card--${program.color}`}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="isc-program-card__icon">
              <i className={program.icon} aria-hidden="true"></i>
            </div>
            <div className="isc-program-card__top">
              <h3>{program.title}</h3>
              <span className="isc-program-card__grades">{program.grades}</span>
            </div>
            <p>{program.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InSchoolWhyPartner() {
  return (
    <section className="isc-why" id="why-partner">
      <div className="isc-section-header" data-aos="fade-up">
        <span className="isc-eyebrow isc-eyebrow--light">
          Why Partner With Us
        </span>
        <h2>Built for School Timetables, Not Around Them</h2>
        <p>
          Everything schools need to offer real STEM education, without adding
          pressure to staff, budget or facilities.
        </p>
      </div>

      <div className="isc-why__grid">
        {WHY_PARTNER.map((item, i) => (
          <div
            key={item.title}
            className="isc-why-card"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="isc-why-card__icon">
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

function InSchoolHowItWorks() {
  return (
    <section className="isc-how">
      <div className="isc-section-header" data-aos="fade-up">
        <span className="isc-eyebrow isc-eyebrow--light">How It Works</span>
        <h2>From First Conversation to First Class</h2>
        <p>
          A straightforward process designed to move at the pace of a school
          term, not a startup sprint.
        </p>
      </div>

      <div className="isc-how__grid" data-aos="fade-up" data-aos-delay="100">
        {HOW_IT_WORKS.map((step) => (
          <div key={step.num} className="isc-how-step">
            <div className="isc-how-step__num">{step.num}</div>
            <div className="isc-how-step__body">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InSchoolGradeBands() {
  return (
    <section className="isc-grades" id="curriculum">
      <div className="isc-section-header" data-aos="fade-up">
        <span className="isc-eyebrow isc-eyebrow--gold">
          Curriculum by Grade
        </span>
        <h2>How Tracks Map to Grade Levels</h2>
        <p>
          Age-appropriate combinations that grow with your students, from first
          exposure to portfolio-ready skills.
        </p>
      </div>

      <div className="isc-grades__grid">
        {GRADE_BANDS.map((band, i) => (
          <div
            key={band.band}
            className="isc-grade-card"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="isc-grade-card__icon">
              <i className={band.icon} aria-hidden="true"></i>
            </div>
            <span className="isc-grade-card__band">{band.band}</span>
            <h3>{band.title}</h3>
            <p>{band.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InSchoolFAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="isc-faqs">
      <div className="isc-section-header" data-aos="fade-up">
        <span className="isc-eyebrow isc-eyebrow--gold">FAQs for Schools</span>
        <h2>Common Questions From School Leadership</h2>
      </div>

      <div className="isc-faqs__list">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`isc-faq ${open === i ? "open" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            <button
              className="isc-faq__q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="isc-faq__icon" aria-hidden="true">
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
            <div className="isc-faq__a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InSchoolCTA() {
  return (
    <section className="isc-cta" data-aos="fade-up">
      <div className="isc-cta__inner">
        <div className="isc-cta__text">
          <h2>Bring STEM Into Your School Day</h2>
          <p>
            Tell us about your school and we'll put together a proposal built
            around your timetable and the tracks you want.
          </p>
        </div>
        <div className="isc-cta__btns">
          <Link to="/contact" className="isc-btn-primary">
            Partner With Us{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/contact" className="isc-btn-ghost">
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

function InSchoolPrograms() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <InSchoolHero />
      <InSchoolProgramsOffered />
      <InSchoolWhyPartner />
      <InSchoolHowItWorks />
      <InSchoolGradeBands />
      <InSchoolFAQs />
      <InSchoolCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default InSchoolPrograms;
