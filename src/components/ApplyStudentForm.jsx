import { useState } from "react";
import { Link } from "react-router-dom";
import { useMultiStep } from "../hooks/useMultiStep.js";
import ApplyProgress from "./ApplyProgress.jsx";
import "./ApplyForms.css";

const STEPS = [
  { label: "About", icon: "fa-solid fa-user" },
  { label: "Programme", icon: "fa-solid fa-graduation-cap" },
  { label: "Review", icon: "fa-solid fa-paper-plane" },
];

const PROGRAMMES = [
  {
    value: "digital-literacy",
    label: "Digital Literacy",
    icon: "fa-solid fa-computer",
  },
  { value: "web-development", label: "Web Dev", icon: "fa-solid fa-code" },
  {
    value: "ui-ux-design",
    label: "UI/UX Design",
    icon: "fa-solid fa-pen-ruler",
  },
  {
    value: "data-analysis",
    label: "Data Analysis",
    icon: "fa-solid fa-chart-line",
  },
  {
    value: "vibe-coding",
    label: "Vibe Coding",
    icon: "fa-solid fa-wand-magic-sparkles",
  },
  { value: "robotics", label: "Robotics", icon: "fa-solid fa-robot" },
  { value: "game-development", label: "Game Dev", icon: "fa-solid fa-gamepad" },
  {
    value: "not-sure",
    label: "Not Sure Yet",
    icon: "fa-solid fa-circle-question",
  },
];

const TRACKS = [
  { value: "july-of-tech", label: "July of Tech" },
  { value: "summer-classes", label: "Summer Classes" },
  { value: "after-school", label: "After School" },
  { value: "weekend", label: "Weekend Classes" },
];

const SELF_AGES = [
  { value: "under-16", label: "Under 16" },
  { value: "16-18", label: "16 – 18" },
  { value: "19-24", label: "19 – 24" },
  { value: "25-34", label: "25 – 34" },
  { value: "35+", label: "35+" },
];

const CHILD_AGES = [
  { value: "5-7", label: "5 – 7 years" },
  { value: "8-10", label: "8 – 10 years" },
  { value: "11-13", label: "11 – 13 years" },
  { value: "14-16", label: "14 – 16 years" },
  { value: "17-18", label: "17 – 18 years" },
];

const HEARD_FROM = [
  { value: "social-media", label: "Social Media" },
  { value: "friend", label: "Friend / Family" },
  { value: "google", label: "Google Search" },
  { value: "school", label: "School / Teacher" },
  { value: "event", label: "Event / Workshop" },
  { value: "other", label: "Other" },
];

const RELATIONSHIPS = [
  { value: "parent", label: "Parent" },
  { value: "guardian", label: "Legal Guardian" },
  { value: "sibling", label: "Older Sibling" },
  { value: "other", label: "Other" },
];

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validateStep(step, data, isChild) {
  const e = {};
  if (step === 1) {
    if (isChild) {
      if (!data.parentFirstName.trim()) e.parentFirstName = "Required";
      if (!data.parentLastName.trim()) e.parentLastName = "Required";
      if (!isValidEmail(data.parentEmail))
        e.parentEmail = "Enter a valid email";
      if (!data.parentPhone.trim()) e.parentPhone = "Required";
      if (!data.relationship) e.relationship = "Required";
      if (!data.childFirstName.trim()) e.childFirstName = "Required";
      if (!data.childLastName.trim()) e.childLastName = "Required";
      if (!data.childAge) e.childAge = "Required";
    } else {
      if (!data.firstName.trim()) e.firstName = "Required";
      if (!data.lastName.trim()) e.lastName = "Required";
      if (!isValidEmail(data.email)) e.email = "Enter a valid email";
      if (!data.phone.trim()) e.phone = "Required";
      if (!data.age) e.age = "Please select your age range";
    }
  }
  if (step === 2) {
    if (!data.programme) e.programme = "Please select a programme";
    if (!data.track) e.track = "Please select a track";
  }
  if (step === 3) {
    if (!data.terms) e.terms = "You must accept the terms to continue";
  }
  return e;
}

function ApplyStudentForm({ onBack, onSuccess }) {
  const stepper = useMultiStep(3);
  const [isChild, setIsChild] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    // self fields
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    // child fields
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    relationship: "",
    childFirstName: "",
    childLastName: "",
    childAge: "",
    // shared
    programme: "",
    track: "",
    heardFrom: "",
    terms: false,
  });

  function set(field, value) {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function blurValidate(field) {
    const e = validateStep(stepper.currentStep, data, isChild);
    if (e[field]) setErrors((prev) => ({ ...prev, [field]: e[field] }));
  }

  function handleNext() {
    const e = validateStep(stepper.currentStep, data, isChild);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    stepper.goNext();
  }

  function handleBack() {
    setErrors({});
    stepper.goBack();
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validateStep(3, data, isChild);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(
        "Application Sent!",
        isChild
          ? "Thanks for registering your child at B Bright Tech Hub. We'll be in touch within 48 hours to confirm enrolment details."
          : "Thanks for applying to B Bright Tech Hub. We'll follow up within 48 hours to schedule your intro call.",
      );
    }, 1400);
  }

  const selfAgeLabel = SELF_AGES.find((a) => a.value === data.age)?.label;
  const childAgeLabel = CHILD_AGES.find(
    (a) => a.value === data.childAge,
  )?.label;
  const progLabel = PROGRAMMES.find((p) => p.value === data.programme)?.label;
  const trackLabel = TRACKS.find((t) => t.value === data.track)?.label;

  return (
    <section className="path-panel">
      <button type="button" className="panel-back" onClick={onBack}>
        <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> Choose a
        different path
      </button>

      <ApplyProgress steps={STEPS} currentStep={stepper.currentStep} />

      <form className="apply-card" onSubmit={handleSubmit} noValidate>
        {/* ── Step 1 ── */}
        {stepper.currentStep === 1 && (
          <div className={`step-panel step-panel--${stepper.direction}`}>
            <h2 className="step__title">Tell us about you</h2>
            <p className="step__sub">Who are we setting this up for?</p>

            {/* Self / Child toggle */}
            <div className="registrant-toggle">
              <button
                type="button"
                className={`registrant-toggle__btn ${!isChild ? "active" : ""}`}
                onClick={() => {
                  setIsChild(false);
                  setErrors({});
                }}
              >
                <i className="fa-solid fa-user" aria-hidden="true"></i>
                I'm applying for myself
              </button>
              <button
                type="button"
                className={`registrant-toggle__btn ${isChild ? "active" : ""}`}
                onClick={() => {
                  setIsChild(true);
                  setErrors({});
                }}
              >
                <i className="fa-solid fa-child" aria-hidden="true"></i>
                I'm registering my child
              </button>
            </div>

            {/* ── SELF fields ── */}
            {!isChild && (
              <>
                <div className="field-row">
                  <div
                    className={`field ${errors.firstName ? "has-error" : ""}`}
                  >
                    <label htmlFor="s-firstname" className="field__label">
                      First name
                    </label>
                    <div className="field__wrap">
                      <i
                        className="fa-regular fa-user field__icon"
                        aria-hidden="true"
                      ></i>
                      <input
                        id="s-firstname"
                        type="text"
                        className="field__input"
                        placeholder="Ada"
                        value={data.firstName}
                        onChange={(e) => set("firstName", e.target.value)}
                        onBlur={() => blurValidate("firstName")}
                      />
                    </div>
                    {errors.firstName && (
                      <span className="field__error">{errors.firstName}</span>
                    )}
                  </div>
                  <div
                    className={`field ${errors.lastName ? "has-error" : ""}`}
                  >
                    <label htmlFor="s-lastname" className="field__label">
                      Last name
                    </label>
                    <div className="field__wrap">
                      <i
                        className="fa-regular fa-user field__icon"
                        aria-hidden="true"
                      ></i>
                      <input
                        id="s-lastname"
                        type="text"
                        className="field__input"
                        placeholder="Lovelace"
                        value={data.lastName}
                        onChange={(e) => set("lastName", e.target.value)}
                        onBlur={() => blurValidate("lastName")}
                      />
                    </div>
                    {errors.lastName && (
                      <span className="field__error">{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className={`field ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="s-email" className="field__label">
                    Email address
                  </label>
                  <div className="field__wrap">
                    <i
                      className="fa-regular fa-envelope field__icon"
                      aria-hidden="true"
                    ></i>
                    <input
                      id="s-email"
                      type="email"
                      className="field__input"
                      placeholder="you@example.com"
                      value={data.email}
                      onChange={(e) => set("email", e.target.value)}
                      onBlur={() => blurValidate("email")}
                    />
                  </div>
                  {errors.email && (
                    <span className="field__error">{errors.email}</span>
                  )}
                </div>

                <div className="field-row">
                  <div className={`field ${errors.phone ? "has-error" : ""}`}>
                    <label htmlFor="s-phone" className="field__label">
                      Phone number
                    </label>
                    <div className="field__wrap">
                      <i
                        className="fa-solid fa-phone field__icon"
                        aria-hidden="true"
                      ></i>
                      <input
                        id="s-phone"
                        type="tel"
                        className="field__input"
                        placeholder="+234 800 000 0000"
                        value={data.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        onBlur={() => blurValidate("phone")}
                      />
                    </div>
                    {errors.phone && (
                      <span className="field__error">{errors.phone}</span>
                    )}
                  </div>
                  <div className={`field ${errors.age ? "has-error" : ""}`}>
                    <label htmlFor="s-age" className="field__label">
                      Age range
                    </label>
                    <div className="field__wrap field__wrap--select">
                      <i
                        className="fa-regular fa-calendar field__icon"
                        aria-hidden="true"
                      ></i>
                      <select
                        id="s-age"
                        className="field__input"
                        value={data.age}
                        onChange={(e) => set("age", e.target.value)}
                      >
                        <option value="">Select range</option>
                        {SELF_AGES.map((a) => (
                          <option key={a.value} value={a.value}>
                            {a.label}
                          </option>
                        ))}
                      </select>
                      <i
                        className="fa-solid fa-chevron-down field__chevron"
                        aria-hidden="true"
                      ></i>
                    </div>
                    {errors.age && (
                      <span className="field__error">{errors.age}</span>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* ── CHILD fields ── */}
            {isChild && (
              <>
                <div className="form-section-label">
                  <i className="fa-solid fa-user-shield" aria-hidden="true"></i>
                  Parent / Guardian Details
                </div>

                <div className="field-row">
                  <div
                    className={`field ${errors.parentFirstName ? "has-error" : ""}`}
                  >
                    <label htmlFor="p-firstname" className="field__label">
                      Your first name
                    </label>
                    <div className="field__wrap">
                      <i
                        className="fa-regular fa-user field__icon"
                        aria-hidden="true"
                      ></i>
                      <input
                        id="p-firstname"
                        type="text"
                        className="field__input"
                        placeholder="Ngozi"
                        value={data.parentFirstName}
                        onChange={(e) => set("parentFirstName", e.target.value)}
                        onBlur={() => blurValidate("parentFirstName")}
                      />
                    </div>
                    {errors.parentFirstName && (
                      <span className="field__error">
                        {errors.parentFirstName}
                      </span>
                    )}
                  </div>
                  <div
                    className={`field ${errors.parentLastName ? "has-error" : ""}`}
                  >
                    <label htmlFor="p-lastname" className="field__label">
                      Your last name
                    </label>
                    <div className="field__wrap">
                      <i
                        className="fa-regular fa-user field__icon"
                        aria-hidden="true"
                      ></i>
                      <input
                        id="p-lastname"
                        type="text"
                        className="field__input"
                        placeholder="Eze"
                        value={data.parentLastName}
                        onChange={(e) => set("parentLastName", e.target.value)}
                        onBlur={() => blurValidate("parentLastName")}
                      />
                    </div>
                    {errors.parentLastName && (
                      <span className="field__error">
                        {errors.parentLastName}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`field ${errors.parentEmail ? "has-error" : ""}`}
                >
                  <label htmlFor="p-email" className="field__label">
                    Your email address
                  </label>
                  <div className="field__wrap">
                    <i
                      className="fa-regular fa-envelope field__icon"
                      aria-hidden="true"
                    ></i>
                    <input
                      id="p-email"
                      type="email"
                      className="field__input"
                      placeholder="parent@example.com"
                      value={data.parentEmail}
                      onChange={(e) => set("parentEmail", e.target.value)}
                      onBlur={() => blurValidate("parentEmail")}
                    />
                  </div>
                  {errors.parentEmail && (
                    <span className="field__error">{errors.parentEmail}</span>
                  )}
                </div>

                <div className="field-row">
                  <div
                    className={`field ${errors.parentPhone ? "has-error" : ""}`}
                  >
                    <label htmlFor="p-phone" className="field__label">
                      Your phone number
                    </label>
                    <div className="field__wrap">
                      <i
                        className="fa-solid fa-phone field__icon"
                        aria-hidden="true"
                      ></i>
                      <input
                        id="p-phone"
                        type="tel"
                        className="field__input"
                        placeholder="+234 800 000 0000"
                        value={data.parentPhone}
                        onChange={(e) => set("parentPhone", e.target.value)}
                        onBlur={() => blurValidate("parentPhone")}
                      />
                    </div>
                    {errors.parentPhone && (
                      <span className="field__error">{errors.parentPhone}</span>
                    )}
                  </div>
                  <div
                    className={`field ${errors.relationship ? "has-error" : ""}`}
                  >
                    <label htmlFor="p-rel" className="field__label">
                      Relationship to child
                    </label>
                    <div className="field__wrap field__wrap--select">
                      <i
                        className="fa-solid fa-people-roof field__icon"
                        aria-hidden="true"
                      ></i>
                      <select
                        id="p-rel"
                        className="field__input"
                        value={data.relationship}
                        onChange={(e) => set("relationship", e.target.value)}
                      >
                        <option value="">Select</option>
                        {RELATIONSHIPS.map((r) => (
                          <option key={r.value} value={r.value}>
                            {r.label}
                          </option>
                        ))}
                      </select>
                      <i
                        className="fa-solid fa-chevron-down field__chevron"
                        aria-hidden="true"
                      ></i>
                    </div>
                    {errors.relationship && (
                      <span className="field__error">
                        {errors.relationship}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className="form-section-label"
                  style={{ marginTop: "0.5rem" }}
                >
                  <i className="fa-solid fa-child" aria-hidden="true"></i>
                  Child's Details
                </div>

                <div className="field-row">
                  <div
                    className={`field ${errors.childFirstName ? "has-error" : ""}`}
                  >
                    <label htmlFor="c-firstname" className="field__label">
                      Child's first name
                    </label>
                    <div className="field__wrap">
                      <i
                        className="fa-regular fa-user field__icon"
                        aria-hidden="true"
                      ></i>
                      <input
                        id="c-firstname"
                        type="text"
                        className="field__input"
                        placeholder="Emeka"
                        value={data.childFirstName}
                        onChange={(e) => set("childFirstName", e.target.value)}
                        onBlur={() => blurValidate("childFirstName")}
                      />
                    </div>
                    {errors.childFirstName && (
                      <span className="field__error">
                        {errors.childFirstName}
                      </span>
                    )}
                  </div>
                  <div
                    className={`field ${errors.childLastName ? "has-error" : ""}`}
                  >
                    <label htmlFor="c-lastname" className="field__label">
                      Child's last name
                    </label>
                    <div className="field__wrap">
                      <i
                        className="fa-regular fa-user field__icon"
                        aria-hidden="true"
                      ></i>
                      <input
                        id="c-lastname"
                        type="text"
                        className="field__input"
                        placeholder="Eze"
                        value={data.childLastName}
                        onChange={(e) => set("childLastName", e.target.value)}
                        onBlur={() => blurValidate("childLastName")}
                      />
                    </div>
                    {errors.childLastName && (
                      <span className="field__error">
                        {errors.childLastName}
                      </span>
                    )}
                  </div>
                </div>

                <div className={`field ${errors.childAge ? "has-error" : ""}`}>
                  <label htmlFor="c-age" className="field__label">
                    Child's age
                  </label>
                  <div className="field__wrap field__wrap--select">
                    <i
                      className="fa-regular fa-calendar field__icon"
                      aria-hidden="true"
                    ></i>
                    <select
                      id="c-age"
                      className="field__input"
                      value={data.childAge}
                      onChange={(e) => set("childAge", e.target.value)}
                    >
                      <option value="">Select age range</option>
                      {CHILD_AGES.map((a) => (
                        <option key={a.value} value={a.value}>
                          {a.label}
                        </option>
                      ))}
                    </select>
                    <i
                      className="fa-solid fa-chevron-down field__chevron"
                      aria-hidden="true"
                    ></i>
                  </div>
                  {errors.childAge && (
                    <span className="field__error">{errors.childAge}</span>
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {/* ── Step 2: Programme ── */}
        {stepper.currentStep === 2 && (
          <div className={`step-panel step-panel--${stepper.direction}`}>
            <h2 className="step__title">Choose a programme</h2>
            <p className="step__sub">
              {isChild
                ? "What would you like your child to learn?"
                : "Pick the track that excites you most."}
            </p>

            <div
              className="option-grid"
              role="radiogroup"
              aria-label="Programme"
            >
              {PROGRAMMES.map((p) => (
                <label
                  key={p.value}
                  className={`option-card ${data.programme === p.value ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="programme"
                    value={p.value}
                    checked={data.programme === p.value}
                    onChange={() => set("programme", p.value)}
                  />
                  <span className="option-card__icon">
                    <i className={p.icon} aria-hidden="true"></i>
                  </span>
                  <span className="option-card__title">{p.label}</span>
                  <span className="option-card__check">
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                    ></i>
                  </span>
                </label>
              ))}
            </div>
            {errors.programme && (
              <span className="field__error">{errors.programme}</span>
            )}

            <div className="field-row" style={{ marginTop: "1.2rem" }}>
              <div className={`field ${errors.track ? "has-error" : ""}`}>
                <label htmlFor="s-track" className="field__label">
                  Preferred track
                </label>
                <div className="field__wrap field__wrap--select">
                  <i
                    className="fa-regular fa-calendar-check field__icon"
                    aria-hidden="true"
                  ></i>
                  <select
                    id="s-track"
                    className="field__input"
                    value={data.track}
                    onChange={(e) => set("track", e.target.value)}
                  >
                    <option value="">Select a track</option>
                    {TRACKS.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <i
                    className="fa-solid fa-chevron-down field__chevron"
                    aria-hidden="true"
                  ></i>
                </div>
                {errors.track && (
                  <span className="field__error">{errors.track}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="s-heard" className="field__label">
                  How did you hear about us?{" "}
                  <span className="field__optional">(optional)</span>
                </label>
                <div className="field__wrap field__wrap--select">
                  <i
                    className="fa-solid fa-bullhorn field__icon"
                    aria-hidden="true"
                  ></i>
                  <select
                    id="s-heard"
                    className="field__input"
                    value={data.heardFrom}
                    onChange={(e) => set("heardFrom", e.target.value)}
                  >
                    <option value="">Select</option>
                    {HEARD_FROM.map((h) => (
                      <option key={h.value} value={h.value}>
                        {h.label}
                      </option>
                    ))}
                  </select>
                  <i
                    className="fa-solid fa-chevron-down field__chevron"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 3: Review ── */}
        {stepper.currentStep === 3 && (
          <div className={`step-panel step-panel--${stepper.direction}`}>
            <h2 className="step__title">Review &amp; submit</h2>
            <p className="step__sub">Double-check everything before sending.</p>

            {isChild ? (
              <>
                <div className="review-section-label">Parent / Guardian</div>
                <div className="review-list">
                  {[
                    {
                      label: "Name",
                      value: `${data.parentFirstName} ${data.parentLastName}`,
                    },
                    { label: "Email", value: data.parentEmail },
                    { label: "Phone", value: data.parentPhone },
                    {
                      label: "Relationship",
                      value:
                        RELATIONSHIPS.find((r) => r.value === data.relationship)
                          ?.label || "—",
                    },
                  ].map((r) => (
                    <div key={r.label} className="review-item">
                      <span className="review-item__label">{r.label}</span>
                      <span className="review-item__value">{r.value}</span>
                    </div>
                  ))}
                </div>
                <div className="review-section-label">Child</div>
                <div className="review-list">
                  {[
                    {
                      label: "Name",
                      value: `${data.childFirstName} ${data.childLastName}`,
                    },
                    { label: "Age", value: childAgeLabel || "—" },
                    { label: "Programme", value: progLabel || "—" },
                    { label: "Track", value: trackLabel || "—" },
                  ].map((r) => (
                    <div key={r.label} className="review-item">
                      <span className="review-item__label">{r.label}</span>
                      <span className="review-item__value">{r.value}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="review-list">
                {[
                  {
                    label: "Name",
                    value: `${data.firstName} ${data.lastName}`,
                  },
                  { label: "Email", value: data.email },
                  { label: "Phone", value: data.phone },
                  { label: "Age range", value: selfAgeLabel || "—" },
                  { label: "Programme", value: progLabel || "—" },
                  { label: "Track", value: trackLabel || "—" },
                ].map((r) => (
                  <div key={r.label} className="review-item">
                    <span className="review-item__label">{r.label}</span>
                    <span className="review-item__value">{r.value}</span>
                  </div>
                ))}
              </div>
            )}

            <label className="checkbox-label" style={{ marginTop: "0.5rem" }}>
              <input
                type="checkbox"
                checked={data.terms}
                onChange={(e) => set("terms", e.target.checked)}
              />
              I agree to the{" "}
              <Link to="/terms" className="form-link" target="_blank">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="form-link" target="_blank">
                Privacy Policy
              </Link>
            </label>
            {errors.terms && (
              <span className="field__error">{errors.terms}</span>
            )}
          </div>
        )}

        <div className="step-nav">
          <button
            type="button"
            className="btn-step-back"
            onClick={handleBack}
            disabled={stepper.isFirst}
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> Back
          </button>
          {!stepper.isLast && (
            <button
              type="button"
              className="btn-step-next"
              onClick={handleNext}
            >
              Continue{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>
          )}
          {stepper.isLast && (
            <button
              type="submit"
              className={`btn-step-submit ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              <span className="btn-step-submit__text">Submit Application</span>
              {loading && (
                <span
                  className="btn-step-submit__loader"
                  aria-hidden="true"
                ></span>
              )}
              {!loading && (
                <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              )}
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default ApplyStudentForm;
