import { Link } from 'react-router-dom'
import './HowItWorks.css'

const steps = [
  {
    num: '01',
    icon: 'fa-solid fa-file-pen',
    title: 'Apply Online',
    desc: 'Fill out a short form telling us about yourself and which track interests you. Get ready for interview.',
    gold: false,
  },
  {
    num: '02',
    icon: 'fa-solid fa-comments',
    title: 'Quick Intro Call',
    desc: 'A 20-minute chat with an advisor. We learn your goals, you ask your questions, and we match you to the right cohort.',
    gold: false,
  },
  {
    num: '03',
    icon: 'fa-solid fa-laptop-code',
    title: 'Learn & Build',
    desc: 'Live sessions, hands-on projects, peer collaboration and mentorship every step of the way. You build a portfolio as you go.',
    gold: false,
  },
  {
    num: '04',
    icon: 'fa-solid fa-briefcase',
    title: 'Get Hired',
    desc: 'Resume reviews, mock interviews, and direct introductions to our hiring partners. 80% of graduates land a role within 3 months.',
    gold: true,
  },
]

function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works" aria-labelledby="hiw-heading">
      <div className="hiw__bg-grid" aria-hidden="true"></div>

      <div className="hiw__inner">
        <div className="hiw__header" data-aos="fade-up" data-aos-duration="700">
          <span className="section-eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            The Process
            <span className="eyebrow-line" aria-hidden="true"></span>
          </span>
          <h2 id="hiw-heading">
            From Zero to <span className="text-teal">Job-Ready</span> in 4 Steps
          </h2>
          <p>No prior experience needed. We take you through a structured journey — from day one to your first offer.</p>
        </div>

        <div className="hiw__steps">
          <div className="hiw__connector" aria-hidden="true"></div>

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="hiw__step"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 120}
            >
              <div className={`hiw__step-icon-wrap ${step.gold ? 'hiw__step-icon-wrap--gold' : ''}`} aria-hidden="true">
                <span className="hiw__step-num">{step.num}</span>
                <i className={`${step.icon} hiw__step-icon`}></i>
              </div>
              <div className="hiw__step-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hiw__cta-strip" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          <div className="hiw__cta-text">
            <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
            <span>Next cohort starts <strong>August 5</strong> — only 12 spots left.</span>
          </div>
          <Link to="/apply" className="btn-apply">
            Secure Your Spot <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
