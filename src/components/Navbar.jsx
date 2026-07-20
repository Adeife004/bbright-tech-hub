import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrollState, setScrollState] = useState("at-top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const lastScrollY = useRef(0);
  const peekTimer = useRef(null);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  // ── Scroll-hide behaviour ──────────────────────────────────────
  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      const goingDown = y > lastScrollY.current;
      lastScrollY.current = y;

      clearTimeout(peekTimer.current);

      if (y < 10) {
        setScrollState("at-top");
      } else if (goingDown && y > 80) {
        setScrollState("hidden");
        peekTimer.current = setTimeout(() => setScrollState("peek"), 600);
      } else {
        setScrollState("visible");
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(peekTimer.current);
    };
  }, []);

  // ── Fix 1: close all dropdowns when clicking outside the navbar ─
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
        setPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Lock body scroll while mobile menu is open ──────────────────
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // ── Reset menu scroll position every time it opens ───────────────
  useEffect(() => {
    if (menuOpen && linksRef.current) {
      linksRef.current.scrollTop = 0;
    }
  }, [menuOpen]);

  const effectiveScrollState = menuOpen ? "visible" : scrollState;

  const headerClass = [
    "site-header",
    effectiveScrollState === "at-top" ? "at-top" : "",
    effectiveScrollState === "scrolled" ||
    effectiveScrollState === "visible" ||
    effectiveScrollState === "peek"
      ? "scrolled"
      : "",
    effectiveScrollState === "hidden" ? "nav-hidden" : "",
    effectiveScrollState === "peek" ? "nav-peek" : "",
    effectiveScrollState === "visible" ? "nav-visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      {/* Fix 2: ref attached here so click-outside knows navbar boundaries */}
      <nav ref={navRef} className="navbar" aria-label="Main Navigation">
        <div className="navbar__logo">
          <Link to="/" aria-label="B Bright Tech Hub Home">
            <img src="/logo.png" alt="B Bright Tech Hub Logo" />
          </Link>
        </div>

        <ul
          ref={linksRef}
          className={`navbar__links ${menuOpen ? "open" : ""}`}
          id="nav-menu"
        >
          <li>
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar__link">
              Contact
            </Link>
          </li>

          <li
            className={`navbar__dropdown navbar__dropdown--mega ${servicesOpen ? "open" : ""}`}
          >
            <button
              className="navbar__link navbar__dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              // Fix 3: close Pages first, then toggle Services
              onClick={() => {
                setPagesOpen(false);
                setServicesOpen((v) => !v);
              }}
            >
              Services
              <svg
                className="navbar__chevron"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div className="mega-menu" role="menu">
              <div className="mega-menu__grid">
                <div className="mega-menu__col">
                  <h3 className="mega-menu__col-title">
                    <i
                      className="fa-solid fa-laptop-code"
                      aria-hidden="true"
                    ></i>{" "}
                    Tech Skills Training
                  </h3>
                  <ul>
                    <li>
                      <a href="/digital-literacy" role="menuitem">
                        Digital Literacy
                      </a>
                    </li>
                    <li>
                      <Link to="/web-development" role="menuitem">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/ui-ux-design" role="menuitem">
                        UI/UX Design
                      </Link>
                    </li>
                    <li>
                      <a href="/data-analysis" role="menuitem">
                        Data Analysis
                      </a>
                    </li>
                    <li>
                      <a href="/vibe-coding" role="menuitem">
                        Vibe Coding <span className="mega-menu__tag">New</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mega-menu__col">
                  <h3 className="mega-menu__col-title">
                    <i className="fa-solid fa-robot" aria-hidden="true"></i>{" "}
                    Emerging Technologies
                  </h3>
                  <ul>
                    <li>
                      <a href="/robotics" role="menuitem">
                        Robotics
                      </a>
                    </li>
                    <li>
                      <a href="/vr-ar" role="menuitem">
                        VR &amp; AR
                      </a>
                    </li>
                    <li>
                      <a href="/game-development" role="menuitem">
                        Game Development
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mega-menu__col">
                  <h3 className="mega-menu__col-title">
                    <i className="fa-solid fa-cube" aria-hidden="true"></i>{" "}
                    Creative Media
                  </h3>
                  <ul>
                    <li>
                      <a href="/3d-modelling" role="menuitem">
                        3D Modelling
                      </a>
                    </li>
                    <li>
                      <a href="/2d-animation" role="menuitem">
                        2D Animation
                      </a>
                    </li>
                  </ul>
                  <h3 className="mega-menu__col-title mega-menu__col-title--spaced">
                    <i
                      className="fa-solid fa-calendar-week"
                      aria-hidden="true"
                    ></i>{" "}
                    Learning Programs
                  </h3>
                  <ul>
                    <li>
                      <Link to="/after-school" role="menuitem">
                        After-School Classes
                      </Link>
                    </li>
                    <li>
                      <a href="/weekend-classes" role="menuitem">
                        Weekend Classes
                      </a>
                    </li>
                    <li>
                      <a href="/holiday-classes" role="menuitem">
                        Holiday Classes
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mega-menu__col">
                  <h3 className="mega-menu__col-title">
                    <i className="fa-solid fa-school" aria-hidden="true"></i>{" "}
                    School Solutions
                  </h3>
                  <ul>
                    <li>
                      <a href="/in-school-coding" role="menuitem">
                        In-School Coding Programs
                      </a>
                    </li>
                    <li>
                      <a href="/in-school-robotics" role="menuitem">
                        In-School Robotics Programs
                      </a>
                    </li>
                    <li>
                      <a href="/teacher-training" role="menuitem">
                        Teacher Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="/educational-consultation"
                        role="menuitem"
                      >
                        Educational Consultation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mega-menu__footer">
                <div className="mega-menu__footer-text">
                  <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                  Not sure where to start? We'll help you find the right fit.
                </div>
                <Link to="/contact" className="mega-menu__footer-link">
                  Talk to us{" "}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </li>

          <li className={`navbar__dropdown ${pagesOpen ? "open" : ""}`}>
            <button
              className="navbar__link navbar__dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={pagesOpen}
              // Fix 3: close Services first, then toggle Pages
              onClick={() => {
                setServicesOpen(false);
                setPagesOpen((v) => !v);
              }}
            >
              Pages
              <svg
                className="navbar__chevron"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <ul className="navbar__dropdown-menu" role="menu">
              <li role="none">
                <Link
                  to="/testimonials"
                  className="navbar__dropdown-item"
                  role="menuitem"
                >
                  <i className="fa-regular fa-star" aria-hidden="true"></i>{" "}
                  Testimonials
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/programmes"
                  className="navbar__dropdown-item"
                  role="menuitem"
                >
                  <i
                    className="fa-solid fa-graduation-cap"
                    aria-hidden="true"
                  ></i>{" "}
                  Programmes
                </Link>
              </li>
            </ul>
          </li>

          <li className="mobile-cta-row">
            <Link to="/login" className="btn-login">
              <i className="fa-regular fa-user" aria-hidden="true"></i> Login
            </Link>
            <Link to="/apply" className="btn-apply">
              Apply Now{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>

        <div className="navbar__actions">
          <Link to="/login" className="btn-login">
            <i className="fa-regular fa-user" aria-hidden="true"></i> Login
          </Link>
          <Link to="/apply" className="btn-apply">
            Apply Now{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="ham-icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
