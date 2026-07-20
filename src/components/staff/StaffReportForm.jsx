import { useState } from 'react'
import { useAuth } from '../../context/useAuth.js'
import './StaffDashboard.css'

const CLASSES   = ['Web Development', 'Digital Literacy', 'UI/UX Design', 'Data Analysis', 'Robotics', 'Game Development', 'Vibe Coding']
const DURATIONS = ['30 minutes', '1 hour', '1.5 hours', '2 hours', '2.5 hours', '3 hours']
const RATINGS   = [
  { value: '5', label: '5 — Excellent' },
  { value: '4', label: '4 — Good' },
  { value: '3', label: '3 — Average' },
  { value: '2', label: '2 — Below Average' },
  { value: '1', label: '1 — Poor' },
]

const EMPTY = {
  date: new Date().toISOString().split('T')[0],
  className: '', topic: '', duration: '',
  studentsPresent: '', studentsAbsent: '',
  observations: '', challenges: '', nextPlan: '',
  rating: '',
}


function validate(data) {
  const e = {}
  if (!data.date)             e.date           = 'Required'
  if (!data.className)        e.className      = 'Required'
  if (!data.topic.trim())     e.topic          = 'Required'
  if (!data.duration)         e.duration       = 'Required'
  if (!data.studentsPresent)  e.studentsPresent= 'Required'
  if (!data.observations.trim()) e.observations= 'Required'
  if (!data.rating)           e.rating         = 'Required'
  return e
}

function StaffReportForm() {
  const { user }          = useAuth()
  const [data, setData]   = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function set(field, value) {
    setData((d) => ({ ...d, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate(data)
    if (Object.keys(e).length) { setErrors(e); return }
    setLoading(true)
    // Replace with real API call
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  if (submitted) {
    return (
      <div className="db-card db-submit-success">
        <i className="fa-solid fa-circle-check db-submit-success__icon" aria-hidden="true"></i>
        <h2>Report Submitted!</h2>
        <p>Your session report has been recorded. Thank you, {user?.name?.split(' ')[0]}.</p>
        <button className="db-btn db-btn--primary" onClick={() => { setData(EMPTY); setSubmitted(false) }}>
          Submit Another
        </button>
      </div>
    )
  }

  return (
    <div className="staff-report">
      <div className="db-card">
        <div className="db-card__header">
          <h2>Submit Session Report</h2>
          <p className="db-card__sub">Fill in the details for your most recent class session.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>

          {/* Row: date + class */}
          <div className="db-form-row">
            <div className={`db-field ${errors.date ? 'has-error' : ''}`}>
              <label className="db-field__label">Session Date</label>
              <div className="db-field__wrap">
                <i className="fa-regular fa-calendar db-field__icon" aria-hidden="true"></i>
                <input type="date" className="db-field__input"
                  value={data.date} onChange={(e) => set('date', e.target.value)} />
              </div>
              {errors.date && <span className="db-field__error">{errors.date}</span>}
            </div>

            <div className={`db-field ${errors.className ? 'has-error' : ''}`}>
              <label className="db-field__label">Class / Programme</label>
              <div className="db-field__wrap db-field__wrap--select">
                <i className="fa-solid fa-chalkboard-user db-field__icon" aria-hidden="true"></i>
                <select className="db-field__input" value={data.className} onChange={(e) => set('className', e.target.value)}>
                  <option value="">Select class</option>
                  {CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <i className="fa-solid fa-chevron-down db-field__chevron" aria-hidden="true"></i>
              </div>
              {errors.className && <span className="db-field__error">{errors.className}</span>}
            </div>
          </div>

          {/* Topic + Duration */}
          <div className="db-form-row">
            <div className={`db-field ${errors.topic ? 'has-error' : ''}`}>
              <label className="db-field__label">Topic Covered</label>
              <div className="db-field__wrap">
                <i className="fa-solid fa-book db-field__icon" aria-hidden="true"></i>
                <input type="text" className="db-field__input" placeholder="e.g. React Hooks & State Management"
                  value={data.topic} onChange={(e) => set('topic', e.target.value)} />
              </div>
              {errors.topic && <span className="db-field__error">{errors.topic}</span>}
            </div>

            <div className={`db-field ${errors.duration ? 'has-error' : ''}`}>
              <label className="db-field__label">Session Duration</label>
              <div className="db-field__wrap db-field__wrap--select">
                <i className="fa-regular fa-clock db-field__icon" aria-hidden="true"></i>
                <select className="db-field__input" value={data.duration} onChange={(e) => set('duration', e.target.value)}>
                  <option value="">Select duration</option>
                  {DURATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
                <i className="fa-solid fa-chevron-down db-field__chevron" aria-hidden="true"></i>
              </div>
              {errors.duration && <span className="db-field__error">{errors.duration}</span>}
            </div>
          </div>

          {/* Attendance */}
          <div className="db-form-row">
            <div className={`db-field ${errors.studentsPresent ? 'has-error' : ''}`}>
              <label className="db-field__label">Students Present</label>
              <div className="db-field__wrap">
                <i className="fa-solid fa-user-check db-field__icon" aria-hidden="true"></i>
                <input type="number" min="0" className="db-field__input" placeholder="0"
                  value={data.studentsPresent} onChange={(e) => set('studentsPresent', e.target.value)} />
              </div>
              {errors.studentsPresent && <span className="db-field__error">{errors.studentsPresent}</span>}
            </div>

            <div className="db-field">
              <label className="db-field__label">Students Absent <span className="db-field__optional">(optional)</span></label>
              <div className="db-field__wrap">
                <i className="fa-solid fa-user-xmark db-field__icon" aria-hidden="true"></i>
                <input type="number" min="0" className="db-field__input" placeholder="0"
                  value={data.studentsAbsent} onChange={(e) => set('studentsAbsent', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Key observations */}
          <div className={`db-field ${errors.observations ? 'has-error' : ''}`}>
            <label className="db-field__label">Key Observations</label>
            <textarea className="db-field__input db-field__textarea" rows={4}
              placeholder="How did the session go? What did students understand well?"
              value={data.observations} onChange={(e) => set('observations', e.target.value)} />
            {errors.observations && <span className="db-field__error">{errors.observations}</span>}
          </div>

          {/* Challenges */}
          <div className="db-field">
            <label className="db-field__label">Challenges Faced <span className="db-field__optional">(optional)</span></label>
            <textarea className="db-field__input db-field__textarea" rows={3}
              placeholder="Any difficulties? Topics students struggled with?"
              value={data.challenges} onChange={(e) => set('challenges', e.target.value)} />
          </div>

          {/* Next session plan */}
          <div className="db-field">
            <label className="db-field__label">Next Session Plan <span className="db-field__optional">(optional)</span></label>
            <textarea className="db-field__input db-field__textarea" rows={3}
              placeholder="What will you cover in the next class?"
              value={data.nextPlan} onChange={(e) => set('nextPlan', e.target.value)} />
          </div>

          {/* Session rating */}
          <div className={`db-field ${errors.rating ? 'has-error' : ''}`}>
            <label className="db-field__label">Session Rating</label>
            <div className="db-field__wrap db-field__wrap--select">
              <i className="fa-solid fa-star db-field__icon" aria-hidden="true"></i>
              <select className="db-field__input" value={data.rating} onChange={(e) => set('rating', e.target.value)}>
                <option value="">Rate this session</option>
                {RATINGS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
              </select>
              <i className="fa-solid fa-chevron-down db-field__chevron" aria-hidden="true"></i>
            </div>
            {errors.rating && <span className="db-field__error">{errors.rating}</span>}
          </div>

          <div className="db-form-actions">
            <button type="button" className="db-btn db-btn--ghost" onClick={() => setData(EMPTY)}>
              Clear Form
            </button>
            <button type="submit" className={`db-btn db-btn--primary ${loading ? 'loading' : ''}`} disabled={loading}>
              {loading
                ? <><span className="db-btn__loader" aria-hidden="true"></span> Submitting…</>
                : <><i className="fa-solid fa-paper-plane" aria-hidden="true"></i> Submit Report</>
              }
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default StaffReportForm
