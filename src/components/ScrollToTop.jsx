import { useEffect, useState } from 'react'
import './ScrollToTop.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const CIRCUMFERENCE = 2 * Math.PI * 18  // r=18 → ≈113.1

    function onScroll() {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight

      setVisible(scrolled > 300)
      setProgress(total > 0 ? (scrolled / total) * CIRCUMFERENCE : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const CIRCUMFERENCE = 2 * Math.PI * 18

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <span className="scroll-top__ring" aria-hidden="true"></span>

      <svg
        className="scroll-top__arrow"
        width="18" height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>

      <svg className="scroll-top__progress" viewBox="0 0 42 42" aria-hidden="true">
        <circle className="scroll-top__track" cx="21" cy="21" r="18" />
        <circle
          className="scroll-top__fill"
          cx="21" cy="21" r="18"
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: CIRCUMFERENCE - progress,
          }}
        />
      </svg>
    </button>
  )
}

export default ScrollToTop
