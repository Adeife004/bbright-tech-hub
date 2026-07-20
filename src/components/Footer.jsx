import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Brand column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link" aria-label="B Bright Tech Hub home">
            <img src="/logo.png" alt="B Bright Tech Hub" />
          </Link>
          <p className="footer__tagline">
            The place where tech careers are built. Come learn, build, and grow with us.
          </p>
          <div className="footer__socials" aria-label="Social media links">
            <a href="#" className="footer__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" className="footer__social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="#" className="footer__social" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Nav columns */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/programmes">Programmes</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Programmes</h3>
            <ul>
              <li><Link to="/july-of-tech">July of Tech</Link></li>
              <li><Link to="/summer-classes">Summer Classes</Link></li>
              <li><Link to="/after-school">After School</Link></li>
              <li><Link to="/programmes">All Programmes</Link></li>
              <li><Link to="/apply">Apply Now</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact-list">
              <li>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>19 Gbola onibiyo Ahmadiyyah, Lagos, Nigeria</span>
              </li>
              <li>
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <a href="tel:+2348054264981">+234 805 426 4981</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <a href="mailto:bbrightkidsconsult@gmail.com">bbrightkidsconsult@gmail.com</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} B Bright Tech Hub. All rights reserved.</p>
        <div className="footer__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
