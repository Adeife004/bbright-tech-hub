import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "./EducationalConsultation.css";

/* ── Data ───────────────────────────────────────────────────── */

const REPORT_ITEMS = [
  "Curriculum Mapped",
  "Infrastructure Reviewed",
  "Budget Phased",
  "Staffing Plan Ready",
];

const WHY_CONSULT = [
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    title: "Needs Assessment",
    desc: "We evaluate your current infrastructure, staff readiness and student needs before recommending anything.",
  },
  {
    icon: "fa-solid fa-map",
    title: "Custom Roadmap",
    desc: "A phased plan tailored to your school's budget, timeline and goals — not a generic package.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Curriculum Design",
    desc: "Help mapping tech education into your existing curriculum, aligned with national or exam board standards.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Infrastructure Guidance",
    desc: "Practical advice on labs, devices, software licensing and what to actually invest in first.",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    title: "Budget-Conscious Planning",
    desc: "Recommendations built around what your school can realistically afford, phased over time.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Honest, No-Pressure Advice",
    desc: "Straightforward recommendations on what will genuinely help your students first — not a sales pitch dressed up as a consultation.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "A conversation about your school's current setup, goals and constraints — no cost, no obligation.",
  },
  {
    num: "02",
    title: "Assessment",
    desc: "We review your facilities, staff capacity and existing curriculum, in person or virtually.",
  },
  {
    num: "03",
    title: "Strategy Report",
    desc: "A written roadmap covering curriculum, infrastructure and rollout timeline, phased to your budget.",
  },
  {
    num: "04",
    title: "Implementation Support",
    desc: "Optional ongoing guidance as you execute the plan — including introductions to In-School Programs or Teacher Training where relevant.",
  },
];

const WHAT_WE_COVER = [
  {
    icon: "fa-solid fa-book-open",
    title: "Curriculum Strategy",
    desc: "How and where to introduce coding, robotics or digital literacy across your grade levels.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Infrastructure & Procurement",
    desc: "Lab setup, device recommendations and software licensing that actually fit your budget.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Staffing & Delivery Model",
    desc: "Whether to train existing staff, bring in instructors, or run a mix of both.",
  },
];

const FAQS = [
  {
    q: "Is this only for schools that have already committed to a tech programme?",
    a: "No — quite the opposite. This is designed for schools that are still deciding. Many schools start with a consultation before choosing In-School Programs, Teacher Training, or nothing at all yet.",
  },
  {
    q: "How long does a consultation engagement take?",
    a: "Typically 2–3 weeks from the discovery call to a final strategy report, depending on your school's size and how much assessment is needed.",
  },
  {
    q: "Is there a cost for the initial discovery call?",
    a: "No — the first conversation is free and comes with no obligation to proceed further.",
  },
  {
    q: "Do you only recommend your own programmes?",
    a: "No. Sometimes the honest recommendation is that a school just needs staff training, other times a phased in-school programme, and occasionally neither yet. We advise based on what we actually find.",
  },
  {
    q: "What size of school do you work with?",
    a: "Any size, from small private schools to large institutions — the plan we build scales to match.",
  },
  {
    q: "Can this lead directly into In-School Programs or Teacher Training?",
    a: "Yes, many schools proceed straight into one or both afterward, but there's no obligation to — some schools just use the report to plan internally.",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function ConsultationHero() {
  return (
    <section className="ec-hero">
      <div className="ec-hero__orb ec-hero__orb--1" aria-hidden="true"></div>
      <div className="ec-hero__orb ec-hero__orb--2" aria-hidden="true"></div>
      <div className="ec-hero__grid" aria-hidden="true"></div>

      <div className="ec-hero__inner">
        <div
          className="ec-hero__text"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <span className="ec-eyebrow">
            <i className="fa-solid fa-compass" aria-hidden="true"></i>
            For Schools & Institutions · Strategic Advisory
          </span>

          <h1 className="ec-hero__title">
            Not Sure Where to
            <br />
            <span className="ec-title-accent">Start? Let's Plan It.</span>
          </h1>

          <p className="ec-hero__desc">
            Before you commit to a programme, get a clear-eyed assessment of
            what your school actually needs — curriculum, infrastructure,
            staffing and budget, mapped into one honest roadmap.
          </p>

          <div className="ec-hero__chips">
            <span className="ec-chip">
              <i className="fa-regular fa-clock" aria-hidden="true"></i> 2 – 3
              Week Engagement
            </span>
            <span className="ec-chip">
              <i className="fa-solid fa-file-lines" aria-hidden="true"></i>{" "}
              Written Roadmap
            </span>
            <span className="ec-chip ec-chip--accent">
              <i className="fa-solid fa-circle" aria-hidden="true"></i> Free
              Discovery Call
            </span>
          </div>

          <div className="ec-hero__btns">
            <Link to="/contact" className="ec-btn-primary">
              Book a Discovery Call{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/in-school-programs" className="ec-btn-outline">
              Explore In-School Programs
            </Link>
          </div>
        </div>

        {/* Strategy report visual */}
        <div
          className="ec-hero__visual"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <div className="ec-report-wrap">
            <div className="ec-report-glow" aria-hidden="true"></div>

            <div className="ec-report">
              <span className="ec-report__clip" aria-hidden="true"></span>

              <div className="ec-report__header">
                <span className="ec-report__eyebrow">B Bright Tech Hub</span>
                <h3>School Readiness Report</h3>
              </div>

              <div className="ec-report__list">
                {REPORT_ITEMS.map((item, i) => (
                  <div
                    key={item}
                    className="ec-report__row"
                    style={{ animationDelay: `${i * 0.35 + 0.3}s` }}
                  >
                    <span className="ec-report__check">
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                    </span>
                    <span className="ec-report__text">{item}</span>
                  </div>
                ))}
              </div>

              <div className="ec-report__footer">
                <i
                  className="fa-solid fa-file-signature"
                  aria-hidden="true"
                ></i>
                Prepared for your school
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultationWhy() {
  return (
    <section className="ec-why" id="why-consult">
      <div className="ec-section-header" data-aos="fade-up">
        <span className="ec-eyebrow ec-eyebrow--blue">Why Work With Us</span>
        <h2>Advice Built Around Your School, Not a Package</h2>
        <p>
          Every school's starting point is different — the plan should be too.
        </p>
      </div>

      <div className="ec-why__grid">
        {WHY_CONSULT.map((item, i) => (
          <div
            key={item.title}
            className="ec-why-card"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="ec-why-card__icon">
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

function ConsultationSteps() {
  return (
    <section className="ec-steps">
      <div className="ec-section-header" data-aos="fade-up">
        <span className="ec-eyebrow ec-eyebrow--light">How It Works</span>
        <h2>From First Call to Written Roadmap</h2>
        <p>
          A focused engagement that respects your school's time and doesn't drag
          on for months.
        </p>
      </div>

      <div className="ec-steps__grid" data-aos="fade-up" data-aos-delay="100">
        {ENGAGEMENT_STEPS.map((step) => (
          <div key={step.num} className="ec-step">
            <div className="ec-step__num">{step.num}</div>
            <div className="ec-step__body">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConsultationCoverage() {
  return (
    <section className="ec-coverage" id="coverage">
      <div className="ec-section-header" data-aos="fade-up">
        <span className="ec-eyebrow ec-eyebrow--blue">What We Cover</span>
        <h2>Three Pillars of Every Roadmap</h2>
        <p>
          Curriculum, infrastructure and staffing are always assessed together —
          they only work as a plan when they're aligned.
        </p>
      </div>

      <div className="ec-coverage__grid">
        {WHAT_WE_COVER.map((item, i) => (
          <div
            key={item.title}
            className="ec-coverage-card"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="ec-coverage-card__icon">
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

function ConsultationFAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="ec-faqs">
      <div className="ec-section-header" data-aos="fade-up">
        <span className="ec-eyebrow ec-eyebrow--blue">FAQs</span>
        <h2>Common Questions From School Leadership</h2>
      </div>

      <div className="ec-faqs__list">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`ec-faq ${open === i ? "open" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            <button
              className="ec-faq__q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span className="ec-faq__icon" aria-hidden="true">
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
            <div className="ec-faq__a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConsultationCTA() {
  return (
    <section className="ec-cta" data-aos="fade-up">
      <div className="ec-cta__inner">
        <div className="ec-cta__text">
          <h2>Not sure where to start? Let's talk.</h2>
          <p>
            A free discovery call is the easiest way to find out what your
            school actually needs.
          </p>
        </div>
        <div className="ec-cta__btns">
          <Link to="/contact" className="ec-btn-primary">
            Book a Discovery Call{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/teacher-training" className="ec-btn-ghost">
            See Teacher Training
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

function EducationalConsultation() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <ConsultationHero />
      <ConsultationWhy />
      <ConsultationSteps />
      <ConsultationCoverage />
      <ConsultationFAQs />
      <ConsultationCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default EducationalConsultation;
