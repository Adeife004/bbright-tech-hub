import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useParticleCanvas } from "../hooks/useParticleCanvas.js";
import "./Hero.css";

const TAGLINES = [
  "Web Development",
  "AI & Data Science",
  "Cybersecurity",
  "Mobile Development",
  "Cloud & DevOps",
];

function useTypewriter(
  words,
  { typeSpeed = 70, deleteSpeed = 40, pause = 1400 } = {},
) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const currentWord = words[wordIndex];

      if (!deleting) {
        charIndex++;
        setText(currentWord.slice(0, charIndex));
        if (charIndex === currentWord.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex--;
        setText(currentWord.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    }

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
  }, [words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function Hero() {
  const canvasRef = useRef(null);
  const typed = useTypewriter(TAGLINES);
  useParticleCanvas(canvasRef);

  return (
    <main className="hero">
      <canvas id="hero-canvas" ref={canvasRef}></canvas>

      <div className="orb orb--1" aria-hidden="true"></div>
      <div className="orb orb--2" aria-hidden="true"></div>
      <div className="orb orb--3" aria-hidden="true"></div>

      <div className="hero__content">
        <span className="hero__badge">
          <i className="fa-solid fa-bolt" aria-hidden="true"></i> New cohort
          enrolling now
        </span>

        <h1 className="hero__heading">
          <span className="hero__heading-static">Welcome to </span>
          <br />
          <span className="hero__heading-brand">
            B Bright Tech<span className="brand-dot">.</span>
          </span>
        </h1>

        <div className="hero__typewriter-wrap">
          <span className="hero__typewriter-prefix">We specialize in</span>
          <span className="hero__typewriter" aria-live="polite">
            {typed}
          </span>
          <span className="hero__cursor" aria-hidden="true">
            |
          </span>
        </div>

        <p className="hero__sub">
          Join thousands of students transforming their careers through
          cutting-edge tech education. Your future starts now.
        </p>

        <div className="hero__btns">
          <Link to="/apply" className="btn-primary">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <a href="#overview" className="btn-outline">
            <span className="btn-outline__icon">
              <i className="fa-solid fa-play" aria-hidden="true"></i>
            </span>
            Watch Overview
          </a>
        </div>

        <div className="hero__stats">
          <div className="stat">
            <span className="stat__num">1,400+</span>
            <span className="stat__label">Graduates</span>
          </div>
          <div className="stat__divider" aria-hidden="true"></div>
          <div className="stat">
            <span className="stat__num">70%</span>
            <span className="stat__label">Job placement</span>
          </div>
          <div className="stat__divider" aria-hidden="true"></div>
          <div className="stat">
            <span className="stat__num">20+</span>
            <span className="stat__label">Programmes</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
