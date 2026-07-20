import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Programmes.css";

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

function Programmes() {
  const { timeLeft, isLive } = useJulyCountdown();

  return (
    <section
      className="programmes"
      id="programmes"
      aria-labelledby="programmes-heading"
    >
      <div className="programmes__inner">
        <div
          className="programmes__header"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span className="section-eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            Our Programmes
            <span className="eyebrow-line" aria-hidden="true"></span>
          </span>
          <h2 id="programmes-heading">
            Every Path, <span className="text-teal">One Place</span>
          </h2>
          <p>
            From intensive bootcamps to holiday specials — there's a format
            built around your schedule.
          </p>
        </div>

        <div className="prog__grid">
          {/* July of Tech — spotlight card */}
          <article
            className="prog-card prog-card--spotlight"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="0"
          >
            <div className="prog-card__top">
              <div className="prog-card__label">
                <i className="fa-solid fa-sun" aria-hidden="true"></i> Flagship
                Event
              </div>
              {isLive ? (
                <span className="prog-card__badge prog-card__badge--live">
                  🔴 Live Now
                </span>
              ) : (
                <span className="prog-card__badge prog-card__badge--upcoming">
                  Upcoming
                </span>
              )}
            </div>

            <h3 className="prog-card__title">July of Tech</h3>
            <p className="prog-card__desc">
              Every July, B Bright transforms into a month-long celebration of
              technology. Workshops, hackathons, guest speakers from top tech
              firms, and intensive project sprints — all under one roof. It's
              the biggest thing we do all year.
            </p>

            {isLive ? (
              <div className="july-live-banner" aria-live="polite">
                <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                July of Tech is happening RIGHT NOW — join us!
              </div>
            ) : (
              <div className="countdown" aria-label="Countdown to July of Tech">
                {[
                  { num: timeLeft.days, label: "Days" },
                  { num: timeLeft.hours, label: "Hours" },
                  { num: timeLeft.mins, label: "Mins" },
                  { num: timeLeft.secs, label: "Secs" },
                ].map((unit, i) => (
                  <Fragment key={unit.label}>
                    {i > 0 && (
                      <div className="countdown__sep" aria-hidden="true">
                        :
                      </div>
                    )}
                    <div className="countdown__unit">
                      <span className="countdown__num">{unit.num}</span>
                      <span className="countdown__label">{unit.label}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            )}

            <Link
              to="/july-of-tech"
              className="prog-card__cta prog-card__cta--solid"
            >
              Learn More{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </article>

          {/* Right column */}
          <div className="prog__side">
            {/* Summer Classes */}
            <article
              className="prog-card"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
            >
              <div className="prog-card__icon-wrap" aria-hidden="true">
                <i className="fa-solid fa-umbrella-beach"></i>
              </div>
              <div className="prog-card__top">
                <div className="prog-card__label prog-card__label--teal">
                  <i className="fa-regular fa-calendar" aria-hidden="true"></i>{" "}
                  Aug – Sept
                </div>
              </div>
              <h3 className="prog-card__title">Summer Classes</h3>
              <p className="prog-card__desc">
                Full-time and part-time tracks running through the summer break.
                Designed for students who want to get ahead while school is out
                — move fast, build real things.
              </p>
              <ul className="prog-card__pills" aria-label="Available tracks">
                <li>Web Dev</li>
                <li>Data Science</li>
                <li>UI/UX Design</li>
                <li>+ more</li>
              </ul>
              <Link to="/summer-classes" className="prog-card__cta">
                Read More{" "}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>

            {/* After School */}
            <article
              className="prog-card"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
            >
              <div
                className="prog-card__icon-wrap prog-card__icon-wrap--gold"
                aria-hidden="true"
              >
                <i className="fa-solid fa-book-open"></i>
              </div>
              <div className="prog-card__top">
                <div className="prog-card__label prog-card__label--gold">
                  <i className="fa-regular fa-clock" aria-hidden="true"></i>{" "}
                  Weekdays 3pm – 5pm
                </div>
              </div>
              <h3 className="prog-card__title">After School</h3>
              <p className="prog-card__desc">
                Structured evening sessions for secondary and tertiary students.
                Learn coding, design and digital skills right after school
                without disrupting your academics.
              </p>
              <ul
                className="prog-card__pills prog-card__pills--gold"
                aria-label="Available tracks"
              >
                <li>Intro to Coding</li>
                <li>Graphics</li>
                <li>Excel & Data</li>
                <li>+ more</li>
              </ul>
              <Link
                to="/after-school"
                className="prog-card__cta prog-card__cta--gold"
              >
                Read More{" "}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
          </div>
        </div>

        <div
          className="programmes__footer"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <span>Looking for our full bootcamp catalogue?</span>
          <Link to="/programmes" className="programmes__all-link">
            View All Programmes{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Programmes;
