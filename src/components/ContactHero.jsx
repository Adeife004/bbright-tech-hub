import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactHero.css";

const WORDS = ["GET IN TOUCH"];
const TYPE_SPEED = 120;
const DEL_SPEED = 70;
const PAUSE_TIME = 2000;

function ContactHero() {
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = WORDS[wordIdx];
    let timeout;

    if (!deleting) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), PAUSE_TIME);
        } else {
          setCharIdx((c) => c + 1);
        }
      }, TYPE_SPEED);
    } else {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % WORDS.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }, DEL_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section className="contact-hero">
      {/* Dark overlay layers */}
      <div
        className="contact-hero__orb contact-hero__orb--1"
        aria-hidden="true"
      ></div>
      <div
        className="contact-hero__orb contact-hero__orb--2"
        aria-hidden="true"
      ></div>
      <div className="contact-hero__grid" aria-hidden="true"></div>

      {/* Left: text */}
      <div className="contact-hero__text">
        <span className="contact-hero__eyebrow">
          <i className="fa-solid fa-headset" aria-hidden="true"></i>
          We'd love to hear from you
        </span>

        <h1 className="contact-hero__heading">
          <span className="contact-hero__typed">{display}</span>
          <span className="contact-hero__cursor" aria-hidden="true">
            |
          </span>
        </h1>

        <p className="contact-hero__sub">
          We're here to help you build, grow, and innovate. Reach out to B
          Bright Tech Hub and let's create something impactful together.
        </p>

        <div className="contact-hero__btns">
          <Link to="/apply" className="contact-btn-apply">
            <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
            Apply Now
          </Link>
          <a href="#contact-form" className="contact-btn-outline">
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
            Contact Us
          </a>
        </div>
      </div>

      {/* Right: floating image */}
      <div className="contact-hero__image" aria-hidden="true">
        <div className="contact-hero__image-glow"></div>
        <img
          src="/asset/telephone.png"
          alt=""
          className="contact-hero__phone"
        />
      </div>
    </section>
  );
}

export default ContactHero;
