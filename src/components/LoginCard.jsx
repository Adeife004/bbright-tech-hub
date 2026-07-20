import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginCard.css";

/* ── Password strength ────────────────────────────────────── */
const STRENGTH_LEVELS = [
  { min: 0, width: "0%", color: "transparent", label: "" },
  { min: 1, width: "25%", color: "#e03c3c", label: "Weak" },
  { min: 2, width: "50%", color: "#e0a83c", label: "Fair" },
  { min: 3, width: "75%", color: "#c9913a", label: "Good" },
  { min: 4, width: "100%", color: "#378f84", label: "Strong" },
];

function scorePassword(value) {
  let score = 0;
  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;
  return score;
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/* ── Field component ──────────────────────────────────────── */
function Field({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  value,
  onChange,
  error,
  icon,
  showToggle,
  showPassword,
  onTogglePassword,
}) {
  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      <div className="field__wrap">
        <i className={`${icon} field__icon`} aria-hidden="true"></i>
        <input
          id={id}
          type={showToggle ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="field__input"
        />
        {showToggle && (
          <button
            type="button"
            className="field__toggle"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={onTogglePassword}
          >
            <i
              className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              aria-hidden="true"
            ></i>
          </button>
        )}
      </div>
      {error && (
        <span className="field__error" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
}

/* ── Login form ───────────────────────────────────────────── */
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const e = {};
    if (!isValidEmail(email)) e.email = "Enter a valid email address";
    if (!password) e.password = "Password is required";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login successful! (demo — wire this up to your backend)");
    }, 1400);
  }

  return (
    <div className="flip-card__face flip-card__face--front">
      <div className="form-header">
        <h2>Welcome back</h2>
        <p>Sign in to your B Bright account</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <Field
          id="login-email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          icon="fa-regular fa-envelope"
        />

        <Field
          id="login-password"
          label="Password"
          placeholder="Your password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          icon="fa-solid fa-lock"
          showToggle
          showPassword={showPw}
          onTogglePassword={() => setShowPw((v) => !v)}
        />

        <div className="form-row">
          <label className="checkbox-label">
            <input type="checkbox" name="remember" /> Keep me signed in
          </label>
          <Link to="/forgot-password" className="form-link">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className={`btn-submit ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          <span className="btn-submit__text">Sign In</span>
          {loading && (
            <span className="btn-submit__loader" aria-hidden="true"></span>
          )}
          {!loading && (
            <i
              className="fa-solid fa-arrow-right btn-submit__arrow"
              aria-hidden="true"
            ></i>
          )}
        </button>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-btns">
          <button
            type="button"
            className="social-btn"
            aria-label="Sign in with Google"
          >
            <i className="fa-brands fa-google" aria-hidden="true"></i> Google
          </button>
          <button
            type="button"
            className="social-btn"
            aria-label="Sign in with GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
          </button>
        </div>
      </form>
    </div>
  );
}

/* ── Register form ────────────────────────────────────────── */
function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const strength =
    password.length > 0 ? Math.min(scorePassword(password), 4) : 0;
  const level = STRENGTH_LEVELS[strength];

  function validate() {
    const e = {};
    if (!firstName) e.firstName = "Required";
    if (!lastName) e.lastName = "Required";
    if (!isValidEmail(email)) e.email = "Enter a valid email address";
    if (password.length < 8) e.password = "Use at least 8 characters";
    if (!terms) e.terms = "You must accept the terms to continue";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Account created! (demo — wire this up to your backend)");
    }, 1400);
  }

  return (
    <div className="flip-card__face flip-card__face--back">
      <div className="form-header">
        <h2>Create account</h2>
        <p>Start your B Bright journey today</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="field-row">
          <Field
            id="reg-firstname"
            label="First name"
            placeholder="Ada"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={errors.firstName}
            icon="fa-regular fa-user"
          />
          <Field
            id="reg-lastname"
            label="Last name"
            placeholder="Lovelace"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={errors.lastName}
            icon="fa-regular fa-user"
          />
        </div>

        <Field
          id="reg-email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          icon="fa-regular fa-envelope"
        />

        <div className={`field ${errors.password ? "has-error" : ""}`}>
          <label htmlFor="reg-password" className="field__label">
            Password
          </label>
          <div className="field__wrap">
            <i className="fa-solid fa-lock field__icon" aria-hidden="true"></i>
            <input
              id="reg-password"
              type={showPw ? "text" : "password"}
              placeholder="Min. 8 characters"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="field__input"
            />
            <button
              type="button"
              className="field__toggle"
              aria-label={showPw ? "Hide password" : "Show password"}
              onClick={() => setShowPw((v) => !v)}
            >
              <i
                className={`fa-regular ${showPw ? "fa-eye-slash" : "fa-eye"}`}
                aria-hidden="true"
              ></i>
            </button>
          </div>
          {errors.password && (
            <span className="field__error" aria-live="polite">
              {errors.password}
            </span>
          )}

          {/* Password strength bar */}
          {password.length > 0 && (
            <div className="pw-strength">
              <div className="pw-strength__bar">
                <div
                  className="pw-strength__fill"
                  style={{ width: level.width, background: level.color }}
                ></div>
              </div>
              <span
                className="pw-strength__label"
                style={{ color: level.color }}
              >
                {level.label}
              </span>
            </div>
          )}
        </div>

        <div className={`field ${errors.terms ? "has-error" : ""}`}>
          <label className="checkbox-label checkbox-label--terms">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
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
            <span className="field__error" aria-live="polite">
              {errors.terms}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={`btn-submit ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          <span className="btn-submit__text">Create Account</span>
          {loading && (
            <span className="btn-submit__loader" aria-hidden="true"></span>
          )}
          {!loading && (
            <i
              className="fa-solid fa-arrow-right btn-submit__arrow"
              aria-hidden="true"
            ></i>
          )}
        </button>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-btns">
          <button
            type="button"
            className="social-btn"
            aria-label="Register with Google"
          >
            <i className="fa-brands fa-google" aria-hidden="true"></i> Google
          </button>
          <button
            type="button"
            className="social-btn"
            aria-label="Register with GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
          </button>
        </div>
      </form>
    </div>
  );
}

/* ── LoginCard (tab switcher + flip card wrapper) ─────────── */
function LoginCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-panel">
      {/* Tab switcher */}
      <div
        className={`card-tabs ${isFlipped ? "show-register" : ""}`}
        role="tablist"
        aria-label="Login or Register"
      >
        <button
          className={`card-tab ${!isFlipped ? "active" : ""}`}
          role="tab"
          aria-selected={!isFlipped}
          onClick={() => setIsFlipped(false)}
        >
          Sign In
        </button>
        <button
          className={`card-tab ${isFlipped ? "active" : ""}`}
          role="tab"
          aria-selected={isFlipped}
          onClick={() => setIsFlipped(true)}
        >
          Register
        </button>
        <div className="card-tab__indicator" aria-hidden="true"></div>
      </div>

      {/* Flip card */}
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card__inner">
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
