import './StaffDashboard.css'

const STATS = [
  { icon: 'fa-solid fa-users',       label: 'Total Students',      value: '48',  trend: '+4 this month',  color: 'teal' },
  { icon: 'fa-solid fa-file-lines',  label: 'Reports Submitted',   value: '12',  trend: 'This month',     color: 'gold' },
  { icon: 'fa-solid fa-calendar-check', label: 'Classes This Week', value: '6',  trend: '2 remaining',    color: 'teal' },
  { icon: 'fa-solid fa-percent',     label: 'Avg Attendance',      value: '87%', trend: '+3% vs last month', color: 'green' },
]

const RECENT_REPORTS = [
  { date: '10 Jul 2026', class: 'Web Development',  topic: 'React Hooks',       attendance: 14, status: 'submitted' },
  { date: '08 Jul 2026', class: 'Digital Literacy', topic: 'Internet Safety',   attendance: 11, status: 'submitted' },
  { date: '05 Jul 2026', class: 'Web Development',  topic: 'React Components',  attendance: 13, status: 'submitted' },
  { date: '03 Jul 2026', class: 'Robotics',          topic: 'Sensor Programming',attendance: 9, status: 'submitted' },
]

const UPCOMING = [
  { time: 'Today 2:00 PM',   class: 'Web Development',  room: 'Lab 1' },
  { time: 'Tomorrow 10:00 AM', class: 'Digital Literacy', room: 'Lab 2' },
  { time: 'Thu 2:00 PM',     class: 'Robotics',          room: 'Workshop' },
]

function StaffOverview({ onNav }) {
  return (
    <div className="staff-overview">

      {/* Stats grid */}
      <div className="db-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className={`db-stat-card db-stat-card--${s.color}`}>
            <div className="db-stat-card__icon">
              <i className={s.icon} aria-hidden="true"></i>
            </div>
            <div className="db-stat-card__body">
              <span className="db-stat-card__value">{s.value}</span>
              <span className="db-stat-card__label">{s.label}</span>
              <span className="db-stat-card__trend">{s.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Two-column: recent reports + upcoming */}
      <div className="db-two-col">

        {/* Recent reports */}
        <div className="db-card">
          <div className="db-card__header">
            <h2>Recent Reports</h2>
            <button className="db-card__link" onClick={() => onNav('report')}>
              + New Report
            </button>
          </div>
          <table className="db-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Class</th>
                <th>Topic</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_REPORTS.map((r, i) => (
                <tr key={i}>
                  <td>{r.date}</td>
                  <td>{r.class}</td>
                  <td>{r.topic}</td>
                  <td>{r.attendance}</td>
                  <td>
                    <span className="db-badge db-badge--green">
                      <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming classes */}
        <div className="db-card">
          <div className="db-card__header">
            <h2>Upcoming Classes</h2>
          </div>
          <div className="db-upcoming-list">
            {UPCOMING.map((u, i) => (
              <div key={i} className="db-upcoming-item">
                <div className="db-upcoming-item__icon" aria-hidden="true">
                  <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <div className="db-upcoming-item__info">
                  <span className="db-upcoming-item__class">{u.class}</span>
                  <span className="db-upcoming-item__meta">
                    <i className="fa-regular fa-clock" aria-hidden="true"></i> {u.time} &nbsp;·&nbsp;
                    <i className="fa-solid fa-location-dot" aria-hidden="true"></i> {u.room}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default StaffOverview
