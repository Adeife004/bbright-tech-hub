import { useState } from "react";
import "./ContactForm.css";

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

const INITIAL = { name: "", email: "", phone: "", message: "" };

function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function set(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name";
    if (!isValidEmail(form.email)) e.email = "Enter a valid email address";
    if (!form.message.trim()) e.message = "Please write a message";
    return e;
  }

  function blurValidate(field) {
    const e = validate();
    if (e[field]) setErrors((prev) => ({ ...prev, [field]: e[field] }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setLoading(true);
    // Replace with your real backend / EmailJS call
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  }

  function handleReset() {
    setForm(INITIAL);
    setErrors({});
    setSent(false);
  }

  if (sent) {
    return (
      <div className="contact-form-card contact-form-success" id="contact-form">
        <div className="contact-form-success__icon">
          <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
        </div>
        <h3>Message Sent!</h3>
        <p>
          Thanks for reaching out. We'll get back to you within 24 hours on the
          next working day.
        </p>
        <button className="contact-form-success__btn" onClick={handleReset}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-card" id="contact-form">
      <div className="contact-form-card__header">
        <h2>
          Let's <span>Talk</span>
        </h2>
        <p>Fill out the form and we'll get back to you promptly.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className={`cf-field ${errors.name ? "has-error" : ""}`}>
          <label htmlFor="cf-name" className="cf-field__label">
            Full Name
          </label>
          <div className="cf-field__wrap">
            <i
              className="fa-regular fa-user cf-field__icon"
              aria-hidden="true"
            ></i>
            <input
              id="cf-name"
              type="text"
              className="cf-field__input"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              onBlur={() => blurValidate("name")}
            />
          </div>
          {errors.name && (
            <span className="cf-field__error">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className={`cf-field ${errors.email ? "has-error" : ""}`}>
          <label htmlFor="cf-email" className="cf-field__label">
            Email Address
          </label>
          <div className="cf-field__wrap">
            <i
              className="fa-regular fa-envelope cf-field__icon"
              aria-hidden="true"
            ></i>
            <input
              id="cf-email"
              type="email"
              className="cf-field__input"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              onBlur={() => blurValidate("email")}
            />
          </div>
          {errors.email && (
            <span className="cf-field__error">{errors.email}</span>
          )}
        </div>

        {/* Phone (optional) */}
        <div className="cf-field">
          <label htmlFor="cf-phone" className="cf-field__label">
            Phone Number <span className="cf-field__optional">(optional)</span>
          </label>
          <div className="cf-field__wrap">
            <i
              className="fa-solid fa-phone cf-field__icon"
              aria-hidden="true"
            ></i>
            <input
              id="cf-phone"
              type="tel"
              className="cf-field__input"
              placeholder="+234 800 000 0000"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          </div>
        </div>

        {/* Message */}
        <div className={`cf-field ${errors.message ? "has-error" : ""}`}>
          <label htmlFor="cf-message" className="cf-field__label">
            Your Message
          </label>
          <div className="cf-field__wrap cf-field__wrap--textarea">
            <i
              className="fa-regular fa-message cf-field__icon"
              aria-hidden="true"
            ></i>
            <textarea
              id="cf-message"
              className="cf-field__input"
              placeholder="Write your message here..."
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              onBlur={() => blurValidate("message")}
            />
          </div>
          <div className="cf-field__footer-row">
            {errors.message ? (
              <span className="cf-field__error">{errors.message}</span>
            ) : (
              <span></span>
            )}
            <span className="cf-field__char">{form.message.length}/1000</span>
          </div>
        </div>

        <button
          type="submit"
          className={`cf-submit ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="cf-submit__loader" aria-hidden="true"></span>
              Sending…
            </>
          ) : (
            <>
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
