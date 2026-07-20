import { useState } from "react";
import { Link } from "react-router-dom";
import { useMultiStep } from "../hooks/useMultiStep.js";
import ApplyProgress from "./ApplyProgress.jsx";
import "./ApplyForms.css";

const STEPS = [
  { label: "Personal", icon: "fa-solid fa-user" },
  { label: "Experience", icon: "fa-solid fa-briefcase" },
  { label: "Documents", icon: "fa-solid fa-file-arrow-up" },
  { label: "Review", icon: "fa-solid fa-paper-plane" },
];

const ROLES = [
  {
    value: "instructor",
    label: "Instructor",
    icon: "fa-solid fa-chalkboard-user",
  },
  { value: "mentor", label: "Mentor", icon: "fa-solid fa-people-arrows" },
  { value: "curriculum", label: "Curriculum", icon: "fa-solid fa-book" },
  { value: "operations", label: "Operations", icon: "fa-solid fa-gears" },
  { value: "marketing", label: "Marketing", icon: "fa-solid fa-bullhorn" },
  { value: "other", label: "Other", icon: "fa-solid fa-ellipsis" },
];

const EXPERIENCE = [
  { value: "less-than-1", label: "Less than 1 year" },
  { value: "1-2", label: "1 – 2 years" },
  { value: "3-5", label: "3 – 5 years" },
  { value: "5-10", label: "5 – 10 years" },
  { value: "10+", label: "10+ years" },
];

const AVAILABILITY = [
  { value: "immediately", label: "Immediately" },
  { value: "2-weeks", label: "Within 2 weeks" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "flexible", label: "Flexible" },
];

const EMPLOYMENT_TYPE = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "volunteer", label: "Volunteer" },
];

const MAX_FILE_MB = 5;
const ACCEPTED = ".pdf,.doc,.docx";

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isValidUrl(v) {
  try {
    new URL(v);
    return true;
  } catch {
    return false;
  }
}

function validateStep(step, data) {
  const e = {};
  if (step === 1) {
    if (!data.firstName.trim()) e.firstName = "Required";
    if (!data.lastName.trim()) e.lastName = "Required";
    if (!isValidEmail(data.email)) e.email = "Enter a valid email";
    if (!data.phone.trim()) e.phone = "Required";
    if (data.portfolio && !isValidUrl(data.portfolio))
      e.portfolio = "Enter a valid URL (include https://)";
  }
  if (step === 2) {
    if (!data.role) e.role = "Please select a role";
    if (!data.experience) e.experience = "Please select your experience level";
    if (!data.availability) e.availability = "Please select your availability";
    if (!data.employmentType)
      e.employmentType = "Please select an employment type";
  }
  if (step === 3) {
    if (!data.cvFile) e.cvFile = "Please upload your CV or resume";
  }
  if (step === 4) {
    if (!data.terms) e.terms = "You must accept the terms to continue";
  }
  return e;
}

/* ── Drag-and-drop file upload component ── */
function FileUpload({
  id,
  label,
  required,
  accept,
  file,
  onChange,
  error,
  hint,
}) {
  const [dragOver, setDragOver] = useState(false);

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) validateAndSet(dropped);
  }

  function validateAndSet(f) {
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      alert(`File too large. Max size is ${MAX_FILE_MB}MB.`);
      return;
    }
    onChange(f);
  }

  function handleInput(e) {
    const f = e.target.files[0];
    if (f) validateAndSet(f);
  }

  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label className="field__label">
        {label}
        {required && <span className="field__required"> *</span>}
      </label>
      <div
        className={`file-upload ${dragOver ? "file-upload--dragover" : ""} ${file ? "file-upload--filled" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="file-upload__selected">
            <i
              className="fa-solid fa-file-circle-check file-upload__file-icon"
              aria-hidden="true"
            ></i>
            <div className="file-upload__file-info">
              <span className="file-upload__filename">{file.name}</span>
              <span className="file-upload__filesize">
                {(file.size / 1024).toFixed(0)} KB
              </span>
            </div>
            <button
              type="button"
              className="file-upload__remove"
              onClick={() => onChange(null)}
              aria-label="Remove file"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          </div>
        ) : (
          <label className="file-upload__prompt" htmlFor={id}>
            <i
              className="fa-solid fa-cloud-arrow-up file-upload__cloud"
              aria-hidden="true"
            ></i>
            <span className="file-upload__main-text">
              Drag &amp; drop your file here
            </span>
            <span className="file-upload__sub-text">or click to browse</span>
            <span className="file-upload__hint">{hint}</span>
            <input
              id={id}
              type="file"
              accept={accept}
              className="file-upload__input"
              onChange={handleInput}
            />
          </label>
        )}
      </div>
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}

function ApplyWorkForm({ onBack, onSuccess }) {
  const stepper = useMultiStep(4);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    role: "",
    experience: "",
    availability: "",
    employmentType: "",
    specialization: "",
    why: "",
    cvFile: null,
    coverLetterFile: null,
    terms: false,
  });

  function set(field, value) {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function blurValidate(field) {
    const e = validateStep(stepper.currentStep, data);
    if (e[field]) setErrors((prev) => ({ ...prev, [field]: e[field] }));
  }

  function handleNext() {
    const e = validateStep(stepper.currentStep, data);
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
    const e = validateStep(4, data);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(
        "Application Received!",
        "Thanks for your interest in joining B Bright Tech Hub. Our team will review your application and CV, then reach out within 5 business days.",
      );
    }, 1400);
  }

  const roleLabel = ROLES.find((r) => r.value === data.role)?.label;
  const expLabel = EXPERIENCE.find((e) => e.value === data.experience)?.label;
  const availLabel = AVAILABILITY.find(
    (a) => a.value === data.availability,
  )?.label;
  const etLabel = EMPLOYMENT_TYPE.find(
    (t) => t.value === data.employmentType,
  )?.label;

  return (
    <section className="path-panel">
      <button type="button" className="panel-back" onClick={onBack}>
        <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> Choose a
        different path
      </button>

      <ApplyProgress steps={STEPS} currentStep={stepper.currentStep} />

      <form className="apply-card" onSubmit={handleSubmit} noValidate>
        {/* ── Step 1: Personal Info ── */}
        {stepper.currentStep === 1 && (
          <div className={`step-panel step-panel--${stepper.direction}`}>
            <h2 className="step__title">Personal information</h2>
            <p className="step__sub">How can we reach you?</p>

            <div className="field-row">
              <div className={`field ${errors.firstName ? "has-error" : ""}`}>
                <label htmlFor="w-firstname" className="field__label">
                  First name
                </label>
                <div className="field__wrap">
                  <i
                    className="fa-regular fa-user field__icon"
                    aria-hidden="true"
                  ></i>
                  <input
                    id="w-firstname"
                    type="text"
                    className="field__input"
                    placeholder="Chidi"
                    value={data.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    onBlur={() => blurValidate("firstName")}
                  />
                </div>
                {errors.firstName && (
                  <span className="field__error">{errors.firstName}</span>
                )}
              </div>
              <div className={`field ${errors.lastName ? "has-error" : ""}`}>
                <label htmlFor="w-lastname" className="field__label">
                  Last name
                </label>
                <div className="field__wrap">
                  <i
                    className="fa-regular fa-user field__icon"
                    aria-hidden="true"
                  ></i>
                  <input
                    id="w-lastname"
                    type="text"
                    className="field__input"
                    placeholder="Okafor"
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
              <label htmlFor="w-email" className="field__label">
                Email address
              </label>
              <div className="field__wrap">
                <i
                  className="fa-regular fa-envelope field__icon"
                  aria-hidden="true"
                ></i>
                <input
                  id="w-email"
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

            <div className={`field ${errors.phone ? "has-error" : ""}`}>
              <label htmlFor="w-phone" className="field__label">
                Phone number
              </label>
              <div className="field__wrap">
                <i
                  className="fa-solid fa-phone field__icon"
                  aria-hidden="true"
                ></i>
                <input
                  id="w-phone"
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

            <div className="field-row">
              <div className="field">
                <label htmlFor="w-linkedin" className="field__label">
                  LinkedIn <span className="field__optional">(optional)</span>
                </label>
                <div className="field__wrap">
                  <i
                    className="fa-brands fa-linkedin field__icon"
                    aria-hidden="true"
                  ></i>
                  <input
                    id="w-linkedin"
                    type="url"
                    className="field__input"
                    placeholder="https://linkedin.com/in/..."
                    value={data.linkedin}
                    onChange={(e) => set("linkedin", e.target.value)}
                  />
                </div>
              </div>
              <div className={`field ${errors.portfolio ? "has-error" : ""}`}>
                <label htmlFor="w-portfolio" className="field__label">
                  Portfolio <span className="field__optional">(optional)</span>
                </label>
                <div className="field__wrap">
                  <i
                    className="fa-solid fa-globe field__icon"
                    aria-hidden="true"
                  ></i>
                  <input
                    id="w-portfolio"
                    type="url"
                    className="field__input"
                    placeholder="https://yourportfolio.com"
                    value={data.portfolio}
                    onChange={(e) => set("portfolio", e.target.value)}
                    onBlur={() => blurValidate("portfolio")}
                  />
                </div>
                {errors.portfolio && (
                  <span className="field__error">{errors.portfolio}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Step 2: Role & Experience ── */}
        {stepper.currentStep === 2 && (
          <div className={`step-panel step-panel--${stepper.direction}`}>
            <h2 className="step__title">Role &amp; experience</h2>
            <p className="step__sub">
              Tell us about your background and the role you're interested in.
            </p>

            <div className="option-grid" role="radiogroup" aria-label="Role">
              {ROLES.map((r) => (
                <label
                  key={r.value}
                  className={`option-card ${data.role === r.value ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={r.value}
                    checked={data.role === r.value}
                    onChange={() => set("role", r.value)}
                  />
                  <span className="option-card__icon">
                    <i className={r.icon} aria-hidden="true"></i>
                  </span>
                  <span className="option-card__title">{r.label}</span>
                  <span className="option-card__check">
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                    ></i>
                  </span>
                </label>
              ))}
            </div>
            {errors.role && <span className="field__error">{errors.role}</span>}

            <div className="field-row" style={{ marginTop: "1.2rem" }}>
              <div className={`field ${errors.experience ? "has-error" : ""}`}>
                <label htmlFor="w-exp" className="field__label">
                  Years of experience
                </label>
                <div className="field__wrap field__wrap--select">
                  <i
                    className="fa-solid fa-chart-line field__icon"
                    aria-hidden="true"
                  ></i>
                  <select
                    id="w-exp"
                    className="field__input"
                    value={data.experience}
                    onChange={(e) => set("experience", e.target.value)}
                  >
                    <option value="">Select range</option>
                    {EXPERIENCE.map((e) => (
                      <option key={e.value} value={e.value}>
                        {e.label}
                      </option>
                    ))}
                  </select>
                  <i
                    className="fa-solid fa-chevron-down field__chevron"
                    aria-hidden="true"
                  ></i>
                </div>
                {errors.experience && (
                  <span className="field__error">{errors.experience}</span>
                )}
              </div>
              <div
                className={`field ${errors.employmentType ? "has-error" : ""}`}
              >
                <label htmlFor="w-etype" className="field__label">
                  Employment type
                </label>
                <div className="field__wrap field__wrap--select">
                  <i
                    className="fa-solid fa-clock field__icon"
                    aria-hidden="true"
                  ></i>
                  <select
                    id="w-etype"
                    className="field__input"
                    value={data.employmentType}
                    onChange={(e) => set("employmentType", e.target.value)}
                  >
                    <option value="">Select type</option>
                    {EMPLOYMENT_TYPE.map((t) => (
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
                {errors.employmentType && (
                  <span className="field__error">{errors.employmentType}</span>
                )}
              </div>
            </div>

            <div className="field-row">
              <div
                className={`field ${errors.availability ? "has-error" : ""}`}
              >
                <label htmlFor="w-avail" className="field__label">
                  When can you start?
                </label>
                <div className="field__wrap field__wrap--select">
                  <i
                    className="fa-regular fa-calendar-check field__icon"
                    aria-hidden="true"
                  ></i>
                  <select
                    id="w-avail"
                    className="field__input"
                    value={data.availability}
                    onChange={(e) => set("availability", e.target.value)}
                  >
                    <option value="">Select availability</option>
                    {AVAILABILITY.map((a) => (
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
                {errors.availability && (
                  <span className="field__error">{errors.availability}</span>
                )}
              </div>
              <div className="field">
                <label htmlFor="w-spec" className="field__label">
                  Specialization{" "}
                  <span className="field__optional">(optional)</span>
                </label>
                <div className="field__wrap">
                  <i
                    className="fa-solid fa-star field__icon"
                    aria-hidden="true"
                  ></i>
                  <input
                    id="w-spec"
                    type="text"
                    className="field__input"
                    placeholder="e.g. React, Python, IoT..."
                    value={data.specialization}
                    onChange={(e) => set("specialization", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="w-why" className="field__label">
                Why B Bright?{" "}
                <span className="field__optional">(optional)</span>
              </label>
              <div className="field__wrap field__wrap--textarea">
                <textarea
                  id="w-why"
                  className="field__input"
                  rows="3"
                  placeholder="Tell us about your experience and why you'd be a great fit for this role."
                  maxLength={500}
                  value={data.why}
                  onChange={(e) => set("why", e.target.value)}
                />
              </div>
              <span className="field__char-count">{data.why.length}/500</span>
            </div>
          </div>
        )}

        {/* ── Step 3: Documents ── */}
        {stepper.currentStep === 3 && (
          <div className={`step-panel step-panel--${stepper.direction}`}>
            <h2 className="step__title">Upload your documents</h2>
            <p className="step__sub">
              Your CV helps us understand your background. A cover letter is a
              nice bonus.
            </p>

            <FileUpload
              id="cv-upload"
              label="CV / Resume"
              required
              accept={ACCEPTED}
              hint="PDF or Word · Max 5MB"
              file={data.cvFile}
              onChange={(f) => set("cvFile", f)}
              error={errors.cvFile}
            />

            <div className="doc-divider">
              <span>optional</span>
            </div>

            <FileUpload
              id="cl-upload"
              label="Cover Letter"
              accept={ACCEPTED}
              hint="PDF or Word · Max 5MB"
              file={data.coverLetterFile}
              onChange={(f) => set("coverLetterFile", f)}
            />

            <div className="doc-tip">
              <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              <span>
                No cover letter file? You can write a short note in the "Why B
                Bright?" box on the previous step instead.
              </span>
            </div>
          </div>
        )}

        {/* ── Step 4: Review ── */}
        {stepper.currentStep === 4 && (
          <div className={`step-panel step-panel--${stepper.direction}`}>
            <h2 className="step__title">Review &amp; submit</h2>
            <p className="step__sub">Double-check everything before sending.</p>

            <div className="review-section-label">Personal</div>
            <div className="review-list">
              {[
                { label: "Name", value: `${data.firstName} ${data.lastName}` },
                { label: "Email", value: data.email },
                { label: "Phone", value: data.phone },
                ...(data.linkedin
                  ? [{ label: "LinkedIn", value: data.linkedin }]
                  : []),
                ...(data.portfolio
                  ? [{ label: "Portfolio", value: data.portfolio }]
                  : []),
              ].map((r) => (
                <div key={r.label} className="review-item">
                  <span className="review-item__label">{r.label}</span>
                  <span className="review-item__value">{r.value}</span>
                </div>
              ))}
            </div>

            <div className="review-section-label">Role &amp; experience</div>
            <div className="review-list">
              {[
                { label: "Role", value: roleLabel || "—" },
                { label: "Experience", value: expLabel || "—" },
                { label: "Employment type", value: etLabel || "—" },
                { label: "Availability", value: availLabel || "—" },
                ...(data.specialization
                  ? [{ label: "Specialization", value: data.specialization }]
                  : []),
              ].map((r) => (
                <div key={r.label} className="review-item">
                  <span className="review-item__label">{r.label}</span>
                  <span className="review-item__value">{r.value}</span>
                </div>
              ))}
            </div>

            <div className="review-section-label">Documents</div>
            <div className="review-list">
              <div className="review-item">
                <span className="review-item__label">CV / Resume</span>
                <span className="review-item__value review-item__value--file">
                  <i className="fa-solid fa-file-pdf" aria-hidden="true"></i>
                  {data.cvFile?.name}
                </span>
              </div>
              {data.coverLetterFile && (
                <div className="review-item">
                  <span className="review-item__label">Cover Letter</span>
                  <span className="review-item__value review-item__value--file">
                    <i
                      className="fa-solid fa-file-lines"
                      aria-hidden="true"
                    ></i>
                    {data.coverLetterFile.name}
                  </span>
                </div>
              )}
            </div>

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

export default ApplyWorkForm;
