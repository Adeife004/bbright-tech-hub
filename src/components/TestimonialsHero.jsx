import { useRef } from "react";
import { useParticleCanvas } from "../hooks/useParticleCanvas.js";
import "./TestimonialsHero.css";

function TestimonialsHero() {
  const canvasRef = useRef(null);
  useParticleCanvas(canvasRef);

  return (
    <section className="testi-hero">
      <canvas
        ref={canvasRef}
        className="testi-hero__canvas"
        aria-hidden="true"
      ></canvas>

      <div className="orb orb--1" aria-hidden="true"></div>
      <div className="orb orb--2" aria-hidden="true"></div>
      <div className="orb orb--3" aria-hidden="true"></div>

      <div className="testi-hero__content">
        <span className="section-eyebrow">
          <span className="eyebrow-line" aria-hidden="true"></span>
          Testimonials
          <span className="eyebrow-line" aria-hidden="true"></span>
        </span>

        <h1 className="testi-hero__heading">
          <span className="testi-hero__static">Trusted by </span>
          <span className="testi-hero__brand">
            Learners<span className="brand-dot">.</span>
          </span>
        </h1>

        <h1 className="testi-hero__heading">
          <span className="testi-hero__static">Proven by </span>
          <span className="testi-hero__brand">
            Results<span className="brand-dot">.</span>
          </span>
        </h1>

        <p className="testi-hero__sub">
          See how B Bright Tech Hub is helping learners build real skills, land
          opportunities, and shape better futures through tech education.
        </p>
      </div>
    </section>
  );
}

export default TestimonialsHero;
