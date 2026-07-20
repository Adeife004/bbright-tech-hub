import "../staff/StaffDashboard.css";

const CERTIFICATES = [
  {
    id: 1,
    title: "Digital Literacy",
    issuer: "B Bright Tech Hub",
    issued: "28 Mar 2026",
    status: "earned",
    credentialId: "BBTH-DL-2026-001",
  },
];

const IN_PROGRESS = [
  {
    title: "Web Development",
    progress: 68,
    remaining: "~5 weeks to completion",
  },
  { title: "UI/UX Design", progress: 45, remaining: "~8 weeks to completion" },
];

function StudentCertificates() {
  return (
    <div className="student-certificates">
      {/* Earned */}
      <div className="db-card">
        <div className="db-card__header">
          <h2>
            Earned Certificates
            <span className="db-card__count">{CERTIFICATES.length}</span>
          </h2>
        </div>

        {CERTIFICATES.length === 0 ? (
          <div className="db-empty">
            <i className="fa-solid fa-certificate" aria-hidden="true"></i>
            <p>No certificates yet — keep going!</p>
          </div>
        ) : (
          <div className="cert-list">
            {CERTIFICATES.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className="cert-card__ribbon" aria-hidden="true">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div className="cert-card__body">
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <p className="cert-card__issuer">
                    <i
                      className="fa-solid fa-building-columns"
                      aria-hidden="true"
                    ></i>{" "}
                    {cert.issuer}
                  </p>
                  <div className="cert-card__meta-row">
                    <span className="cert-card__meta">
                      <i
                        className="fa-regular fa-calendar-check"
                        aria-hidden="true"
                      ></i>{" "}
                      Issued {cert.issued}
                    </span>
                    <span className="cert-card__meta">
                      <i
                        className="fa-solid fa-id-badge"
                        aria-hidden="true"
                      ></i>{" "}
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
                <div className="cert-card__actions">
                  <span className="db-badge db-badge--green">
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                    ></i>{" "}
                    Verified
                  </span>
                  <button className="db-btn db-btn--ghost db-btn--sm">
                    <i className="fa-solid fa-download" aria-hidden="true"></i>{" "}
                    Download
                  </button>
                  <button className="db-btn db-btn--ghost db-btn--sm">
                    <i
                      className="fa-brands fa-linkedin-in"
                      aria-hidden="true"
                    ></i>{" "}
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* In progress */}
      <div className="db-card">
        <div className="db-card__header">
          <h2>Certificates In Progress</h2>
        </div>
        <div className="cert-progress-list">
          {IN_PROGRESS.map((item) => (
            <div key={item.title} className="cert-progress-item">
              <div className="cert-progress-item__header">
                <span className="cert-progress-item__title">
                  <i
                    className="fa-solid fa-hourglass-half"
                    aria-hidden="true"
                  ></i>
                  {item.title}
                </span>
                <span className="db-badge db-badge--muted">In Progress</span>
              </div>
              <div className="cert-progress-item__bar">
                <div className="db-progress-bar">
                  <div>
                    <div
                      className="db-progress-bar__fill db-progress-bar__fill--teal"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="db-progress-bar__label">
                    {item.progress}%
                  </span>
                </div>
              </div>
              <p className="cert-progress-item__remaining">
                <i
                  className="fa-solid fa-flag-checkered"
                  aria-hidden="true"
                ></i>{" "}
                {item.remaining}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentCertificates;
