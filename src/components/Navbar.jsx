import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrollState, setScrollState] = useState("at-top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  // Fix: track mobile vs desktop so the menu panel can be portalled
  // straight to <body> on mobile only. On desktop it stays exactly
  // where it was, as a normal in-flow grid item inside <nav>.
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 900 : false
  );

  const lastScrollY = useRef(0);
  const peekTimer = useRef(null);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  // ── Track viewport size for the portal decision ──────────────────
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Scroll-hide behaviour (mobile only — desktop stays visible) ──
  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      const goingDown = y > lastScrollY.current;
      lastScrollY.current = y;

      clearTimeout(peekTimer.current);

      if (y < 10) {
        setScrollState("at-top");
        return;
      }

      const mobile = window.innerWidth <= 900;

      if (!mobile) {
        setScrollState("visible");
        return;
      }

      if (goingDown && y > 80) {
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

  // ── Close all dropdowns when clicking outside the navbar ─────────
  // Note: with the portal, the mobile panel is no longer a DOM
  // descendant of navRef on mobile, so we also check linksRef.
  useEffect(() => {
    function handleClickOutside(e) {
      const insideNav = navRef.current && navRef.current.contains(e.target);
      const insideLinks =
        linksRef.current && linksRef.current.contains(e.target);
      if (!insideNav && !insideLinks) {
        setServicesOpen(false);
        setPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Lock body scroll while mobile menu is open (iOS-safe) ────────
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = String(scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const storedY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, storedY);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  // ── Reset menu scroll position every time it, or a submenu, opens ─
  useEffect(() => {
    if (menuOpen && linksRef.current) {
      linksRef.current.scrollTop = 0;
    }
  }, [menuOpen]);

  useEffect(() => {
    if (servicesOpen && linksRef.current) {
      linksRef.current.scrollTop = 0;
    }
  }, [servicesOpen]);

  useEffect(() => {
    if (pagesOpen && linksRef.current) {
      linksRef.current.scrollTop = 0;
    }
  }, [pagesOpen]);

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

  /* ── The nav links content — same markup rendered either inline
     (desktop, normal grid child) or via portal (mobile). ────────── */
  const navLinks = (
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
          onClick={() => {
            setPagesOpen(false);
            const opening = !servicesOpen;
            setServicesOpen(opening);
            if (opening && linksRef.current) {
              linksRef.current.scrollTop = 0;
            }
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
                <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>{" "}
                Tech Skills Training
              </h3>
              <ul>
                <li>
                  <Link to="/digital-literacy" role="menuitem">
                    Digital Literacy
                  </Link>
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
                  <Link to="/data-analysis" role="menuitem">
                    Data Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/vibe-coding" role="menuitem">
                    Vibe Coding <span className="mega-menu__tag">New</span>
                  </Link>
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
                <i className="fa-solid fa-calendar-week" aria-hidden="true"></i>{" "}
                Learning Programs
              </h3>
              <ul>
                <li>
                  <Link to="/after-school" role="menuitem">
                    After-School Classes
                  </Link>
                </li>
                <li>
                  <Link to="/weekend-classes" role="menuitem">
                    Weekend Classes
                  </Link>
                </li>
                <li>
                  <Link to="/holiday-classes" role="menuitem">
                    Holiday Classes
                  </Link>
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
                  <Link to="/in-school-programs" role="menuitem">
                    In-School Programs
                  </Link>
                </li>
                <li>
                  <Link to="/teacher-training" role="menuitem">
                    Teacher Training
                  </Link>
                </li>
                <li>
                  <Link to="/educational-consultation" role="menuitem">
                    Educational Consultation
                  </Link>
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
          onClick={() => {
            setServicesOpen(false);
            const opening = !pagesOpen;
            setPagesOpen(opening);
            if (opening && linksRef.current) {
              linksRef.current.scrollTop = 0;
            }
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
              <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>{" "}
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
          Apply Now <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </li>
    </ul>
  );

  return (
    <header className={headerClass}>
      <nav ref={navRef} className="navbar" aria-label="Main Navigation">
        <span className="navbar__blob" aria-hidden="true"></span>
        <div className="navbar__logo">
          <Link to="/" aria-label="B Bright Tech Hub Home">
            <img src="./logo.png" alt="B Bright Tech Hub Logo" />
          </Link>
        </div>

        {/* Desktop: rendered normally as a grid child of <nav>. */}
        {!isMobile && navLinks}

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

      {/* Mobile: portalled straight to <body>, completely outside
          <header>, so it can never be affected by the header's own
          transform/translate animation states. */}
      {isMobile && createPortal(navLinks, document.body)}
    </header>
  );
}

export default Navbar;