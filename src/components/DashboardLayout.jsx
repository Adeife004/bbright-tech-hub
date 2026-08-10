import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./DashboardLayout.css";

const STAFF_NAV = [
  { id: "overview", icon: "fa-solid fa-gauge", label: "Overview" },
  { id: "report", icon: "fa-solid fa-file-pen", label: "Submit Report" },
  { id: "students", icon: "fa-solid fa-users", label: "Students" },
  { id: "announcements", icon: "fa-solid fa-bullhorn", label: "Announcements" },
];

const STUDENT_NAV = [
  { id: "overview", icon: "fa-solid fa-gauge", label: "Overview" },
  { id: "courses", icon: "fa-solid fa-book-open", label: "My Courses" },
  {
    id: "assignments",
    icon: "fa-solid fa-clipboard-list",
    label: "Assignments",
  },
  { id: "schedule", icon: "fa-solid fa-calendar-days", label: "Schedule" },
  {
    id: "certificates",
    icon: "fa-solid fa-certificate",
    label: "Certificates",
  },
];

function DashboardLayout({ activeSection, onNav, children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = user?.role === "staff" ? STAFF_NAV : STUDENT_NAV;

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  const PAGE_TITLE =
    [...STAFF_NAV, ...STUDENT_NAV].find((n) => n.id === activeSection)?.label ??
    "Dashboard";

  return (
    <div className="db-shell">
      {/* ── Sidebar ── */}
      <aside className={`db-sidebar ${sidebarOpen ? "db-sidebar--open" : ""}`}>
        <div className="db-sidebar__logo">
          <Link to="/" className="db-sidebar__logo-link" title="Back to site">
            <img src="/logo.png" alt="B Bright Tech Hub" />
          </Link>
          <button
            className="db-sidebar__close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        <div className="db-sidebar__user">
          <div className="db-sidebar__avatar">{user?.initials}</div>
          <div className="db-sidebar__user-info">
            <span className="db-sidebar__user-name">{user?.name}</span>
            <span
              className={`db-sidebar__role-badge db-sidebar__role-badge--${user?.role}`}
            >
              {user?.role === "staff" ? "Staff" : "Student"}
            </span>
          </div>
        </div>

        <nav className="db-sidebar__nav" aria-label="Dashboard navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`db-sidebar__nav-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => {
                onNav(item.id);
                setSidebarOpen(false);
              }}
            >
              <i className={item.icon} aria-hidden="true"></i>
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span
                  className="db-sidebar__nav-indicator"
                  aria-hidden="true"
                ></span>
              )}
            </button>
          ))}
        </nav>

        <div className="db-sidebar__footer">
          <Link to="/" className="db-sidebar__site-link">
            <i className="fa-solid fa-house" aria-hidden="true"></i>
            Back to site
          </Link>
          <button className="db-sidebar__logout" onClick={handleLogout}>
            <i
              className="fa-solid fa-arrow-right-from-bracket"
              aria-hidden="true"
            ></i>
            Sign out
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="db-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Main content ── */}
      <div className="db-main">
        <header className="db-topbar">
          <button
            className="db-topbar__hamburger"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </button>

          <div className="db-topbar__title">
            <h1>{PAGE_TITLE}</h1>
            <span className="db-topbar__greeting">
              Good day, {user?.name?.split(" ")[0]} 👋
            </span>
          </div>

          <div className="db-topbar__avatar" aria-hidden="true">
            {user?.initials}
          </div>
        </header>

        <main className="db-content">{children}</main>
      </div>
    </div>
  );
}

export { STAFF_NAV, STUDENT_NAV };
export default DashboardLayout;
