import { useState, useMemo } from 'react'
import './StaffDashboard.css'

const MOCK_STUDENTS = [
  { id: 1,  name: 'Amara Osei',       programme: 'Web Development',   enrolled: '03 Jan 2026', progress: 82, status: 'active' },
  { id: 2,  name: 'Tunde Nwosu',      programme: 'Data Analysis',     enrolled: '03 Jan 2026', progress: 67, status: 'active' },
  { id: 3,  name: 'Fatima Kamara',    programme: 'UI/UX Design',      enrolled: '10 Jan 2026', progress: 91, status: 'active' },
  { id: 4,  name: 'Chidi Okafor',     programme: 'Web Development',   enrolled: '10 Jan 2026', progress: 45, status: 'active' },
  { id: 5,  name: 'Ngozi Adeyemi',    programme: 'Digital Literacy',  enrolled: '17 Jan 2026', progress: 100, status: 'completed' },
  { id: 6,  name: 'Emeka Eze',        programme: 'Robotics',          enrolled: '17 Jan 2026', progress: 38, status: 'active' },
  { id: 7,  name: 'Sade Martins',     programme: 'Vibe Coding',       enrolled: '24 Jan 2026', progress: 55, status: 'active' },
  { id: 8,  name: 'Yemi Adegoke',     programme: 'Game Development',  enrolled: '24 Jan 2026', progress: 20, status: 'inactive' },
  { id: 9,  name: 'Aisha Bello',      programme: 'Data Analysis',     enrolled: '07 Feb 2026', progress: 73, status: 'active' },
  { id: 10, name: 'Kola Ogundimu',    programme: 'Web Development',   enrolled: '07 Feb 2026', progress: 61, status: 'active' },
]

function ProgressBar({ value }) {
  const color = value >= 80 ? 'green' : value >= 50 ? 'teal' : 'gold'
  return (
    <div className="db-progress-bar" title={`${value}%`}>
      <div className={`db-progress-bar__fill db-progress-bar__fill--${color}`} style={{ width: `${value}%` }}></div>
      <span className="db-progress-bar__label">{value}%</span>
    </div>
  )
}

function StaffStudents() {
  const [search,    setSearch]    = useState('')
  const [filterProg, setFilterProg] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const programmes = [...new Set(MOCK_STUDENTS.map((s) => s.programme))].sort()

  const filtered = useMemo(() => {
    return MOCK_STUDENTS.filter((s) => {
      const matchSearch  = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.programme.toLowerCase().includes(search.toLowerCase())
      const matchProg    = filterProg === 'all'    || s.programme === filterProg
      const matchStatus  = filterStatus === 'all'  || s.status === filterStatus
      return matchSearch && matchProg && matchStatus
    })
  }, [search, filterProg, filterStatus])

  return (
    <div className="staff-students">
      <div className="db-card">
        <div className="db-card__header">
          <h2>Student Roster <span className="db-card__count">{filtered.length}</span></h2>
        </div>

        {/* Filters */}
        <div className="db-filters">
          <div className="db-field__wrap db-search-wrap">
            <i className="fa-solid fa-magnifying-glass db-field__icon" aria-hidden="true"></i>
            <input
              type="text"
              className="db-field__input"
              placeholder="Search by name or programme…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="db-field__wrap db-field__wrap--select">
            <select className="db-field__input" value={filterProg} onChange={(e) => setFilterProg(e.target.value)}>
              <option value="all">All programmes</option>
              {programmes.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <i className="fa-solid fa-chevron-down db-field__chevron" aria-hidden="true"></i>
          </div>

          <div className="db-field__wrap db-field__wrap--select">
            <select className="db-field__input" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="inactive">Inactive</option>
            </select>
            <i className="fa-solid fa-chevron-down db-field__chevron" aria-hidden="true"></i>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="db-empty">
            <i className="fa-solid fa-users-slash" aria-hidden="true"></i>
            <p>No students match your filters.</p>
            <button className="db-btn db-btn--ghost" onClick={() => { setSearch(''); setFilterProg('all'); setFilterStatus('all') }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="db-table-wrap">
            <table className="db-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Programme</th>
                  <th>Enrolled</th>
                  <th>Progress</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={s.id}>
                    <td className="db-table__num">{i + 1}</td>
                    <td>
                      <div className="db-table__user">
                        <div className="db-table__avatar">
                          {s.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                        </div>
                        {s.name}
                      </div>
                    </td>
                    <td>{s.programme}</td>
                    <td>{s.enrolled}</td>
                    <td><ProgressBar value={s.progress} /></td>
                    <td>
                      <span className={`db-badge db-badge--${s.status === 'active' ? 'teal' : s.status === 'completed' ? 'green' : 'muted'}`}>
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default StaffStudents
