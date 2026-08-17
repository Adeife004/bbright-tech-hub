import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "./TeacherTraining.css";

/* ── Data ───────────────────────────────────────────────────── */

const WHY_TRAIN = [
  {
    icon: "fa-solid fa-people-group",
    title: "Build Long-Term Capacity",
    desc: "Reduce dependence on external instructors — your own staff can deliver tech education for years to come.",
  },
  {
    icon: "fa-solid fa-certificate",
    title: "Certified & Accredited",
    desc: "Teachers complete a structured certification, not a one-off workshop, ending in an official B Bright Educator Certificate.",
  },
  {
    icon: "fa-solid fa-hands-holding-circle",
    title: "Hands-On Practicum",
    desc: "Real classroom teaching practice alongside a B Bright mentor, before your teachers ever teach solo.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Ongoing Support",
    desc: "Access to lesson plans, curriculum updates and a teacher support line long after training ends.",
  },
  {
    icon: "fa-solid fa-sack-dollar",
    title: "Lower Long-Term Cost",
    desc: "Training your own staff is significantly more cost-effective over multiple years than an ongoing instructor placement.",
  },
  {
    icon: "fa-solid fa-chalkboard-user",
    title: "Any Subject Area",
    desc: "Training available across Coding, Robotics and Digital Literacy — match tracks to your school's needs.",
  },
];

const TRAINING_PATH = [
  {
    num: "01",
    title: "Foundations Workshop",
    desc: "A 2-day intensive covering core concepts, teaching methodology and classroom tools for your chosen track.",
  },
  {
    num: "02",
    title: "Guided Practicum",
    desc: "Teachers co-teach real classes alongside a B Bright mentor, building confidence with real students in the room.",
  },
  {
    num: "03",
    title: "Certification Assessment",
    desc: "A practical teaching assessment and short exam to confirm readiness to teach the subject independently.",
  },
  {
    num: "04",
    title: "Certified & Supported",
    desc: "Teachers receive their certificate and ongoing access to updated lesson plans and a support line.",
  },
];

const TRACKS = [
  {
    icon: "fa-solid fa-code",
    color: "coding",
    title: "Coding Educator Track",
    desc: "Teach HTML, CSS, JavaScript and the problem-solving fundamentals behind writing real code.",
  },
  {
    icon: "fa-solid fa-robot",
    color: "robotics",
    title: "Robotics Educator Track",
    desc: "Teach circuits, Arduino and hands-on robot-building safely and confidently, even without an engineering background.",
  },
  {
    icon: "fa-solid fa-laptop",
    color: "digital",
    title: "Digital Literacy Educator Track",
    desc: "Teach computer basics, typing, spreadsheets and safe internet use to any age group.",
  },
];

const FAQS = [
  {
    q: "Who can join the training?",
    a: "Any teacher, regardless of prior tech background — training starts from the fundamentals of the chosen track and builds up from there.",
  },
  {
    q: "How long does certification take?",
    a: "Typically 3–4 weeks including the foundations workshop, practicum and assessment, run part-time alongside normal teaching duties.",
  },
  {
    q: "Do teachers need a tech background?",
    a: "No prior tech experience is required for the Digital Literacy or Coding tracks. Robotics benefits from comfort with hands-on tools, but it's still beginner-friendly.",
  },
  {
    q: "Is this only for our In-School Programs partner schools?",
    a: "No — Teacher Training is available to any school, whether or not you use our In-School Programs. Many schools use it to eventually run the programme entirely in-house.",
  },
  {
    q: "What happens after certification?",
    a: "Certified teachers receive lesson plans, curriculum updates and ongoing access to a B Bright support line for questions as they come up in the classroom.",
  },
  {
    q: "Can individual teachers apply, not just schools?",
    a: "Training currently runs through schools registering a cohort of teachers. If you're an individual teacher interested, contact us and we'll help you find a route in.",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function TeacherTrainingHero() {
  return (
    <section className="tt-hero">
      <div className="tt-hero__orb tt-hero__orb--1" aria-hidden="true"></div>
      <div className="tt-hero__orb tt-hero__orb--2" aria-hidden="true"></div>
      <div className="tt-hero__grid" aria-hidden="true"></div>

      <div className="tt-hero__inner">
        <div
          className="tt-hero__text"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <span className="tt-eyebrow">
            <i className="fa-solid fa-chalkboard-user" aria-hidden="true"></i>
            For Schools & Educators · Professional Development
          </span>

          <h1 className="tt-hero__title">
            Train the Teachers
            <br />
            <span className="tt-title-accent">Who'll Teach It Next.</span>
          </h1>

          <p className="tt-hero__desc">
            Don't just bring in instructors — build the expertise inside your
            own staff room. We certify your teachers to deliver coding,
            robotics or digital literacy on their own, sustainably.
          </p>

          <div className="tt-hero__chips">
            <span className="tt-chip">
              <i className="fa-regular fa-clock" aria-hidden="true"></i>{" "}
              3 – 4 Week Programme
            </span>
            <span className="tt-chip">
              <i className="fa-solid fa-certificate" aria-hidden="true"></i>{" "}
              Certified Outcome
            </span>
            <span className="tt-chip tt-chip--accent">
              <i className="fa-solid fa-circle" aria-hidden="true"></i> Now
              Enrolling Cohorts
            </span>
          </div>

          <div className="tt-hero__btns">
            <Link to="/contact" className="tt-btn-primary">
              Book a Consultation{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/in-school-programs" className="tt-btn-outline">
              Explore In-School Programs
            </Link>
          </div>
        </div>

        {/* Certification badge visual */}
        <div
          className="tt-hero__visual"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <div className="tt-badge-wrap">
            <div className="tt-badge-glow" aria-hidden="true"></div>

            <div className="tt-badge">
              <div className="tt-badge__ring">
                <div className="tt-badge__inner">
                  <i
                    className="fa-solid fa-graduation-cap"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <span className="tt-badge__ribbon tt-badge__ribbon--left"></span>
              <span className="tt-badge__ribbon tt-badge__ribbon--right"></span>
            </div>

            <span className="tt-badge__label">Certified Educator</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeacherTrainingWhy() {
  return (
    <section className="tt-why" id="why-train">
      <div className="tt-section-header" data-aos="fade-up">
        <span className="tt-eyebrow tt-eyebrow--teal">Why Train Your Teachers</span>
        <h2>Build Expertise That Stays After We Leave</h2>
        <p>
          Instructor placements are a great start — certified in-house
          teachers are what makes it last.
        </p>
      </div>

      <div className="tt-why__grid">
        {WHY_TRAIN.map((item, i) => (
          <div
            key={item.title}
            className="tt-why-card"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="tt-why-card__icon">
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

function TeacherTrainingPath() {
  return (
    <section className="tt-path">
      <div className="tt-section-header" data-aos="fade-up">
        <span className="tt-eyebrow tt-eyebrow--light">The Certification Path</span>
        <h2>From First Workshop to Certified Educator</h2>
        <p>
          A structured path designed to fit around a normal teaching
          schedule, not disrupt it.
        </p>
      </div>

      <div className="tt-path__grid" data-aos="fade-up" data-aos-delay="100">
        {TRAINING_PATH.map((step) => (
          <div key={step.num} className="tt-path-step">
            <div className="tt-path-step__num">{step.num}</div>
            <div className="tt-path-step__body">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeacherTrainingTracks() {
  return (
    <section className="tt-tracks" id="tracks">
      <div className="tt-section-header" data-aos="fade-up">
        <span className="tt-eyebrow tt-eyebrow--teal">Training Tracks</span>
        <h2>Certify Teachers in One Track, or All Three</h2>
        <p>
          Each track is a complete, standalone certification — schools often
          train different staff across different tracks.
        </p>
      </div>

      <div className="tt-tracks__grid">
        {TRACKS.map((track, i) => (
          <div
            key={track.title}
            className={`tt-track-card tt-track-card--${track.color}`}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="tt-track-card__icon">
              <i className={track.icon} aria-hidden="true"></i>
            </div>
            <h3>{track.title}</h3>
            <p>{track.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeacherTrainingFAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="tt-faqs">
      <div className="tt-section-header" data-aos="fade-up">
        <span className="tt-eyebrow tt-eyebrow--teal">FAQs</span>
        <h2>Common Questions From School Leadership</h2>
      </div>

      <div className="tt-faqs__list">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`tt-faq ${open === i ? "open" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            <button
              className="tt-faq__q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="tt-faq__icon" aria-hidden="true">
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
            <div className="tt-faq__a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeacherTrainingCTA() {
  return (
    <section className="tt-cta" data-aos="fade-up">
      <div className="tt-cta__inner">
        <div className="tt-cta__text">
          <h2>Ready to build in-house expertise?</h2>
          <p>
            Tell us about your school and the track you're interested in —
            we'll walk you through the next cohort.
          </p>
        </div>
        <div className="tt-cta__btns">
          <Link to="/contact" className="tt-btn-primary">
            Book a Consultation{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/contact" className="tt-btn-ghost">
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

function TeacherTraining() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <TeacherTrainingHero />
      <TeacherTrainingWhy />
      <TeacherTrainingPath />
      <TeacherTrainingTracks />
      <TeacherTrainingFAQs />
      <TeacherTrainingCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TeacherTraining;
