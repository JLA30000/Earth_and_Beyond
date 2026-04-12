import { Link } from 'react-router-dom';
import brandLogo from '../logo/Earth and Beyond logo design (5).png';
import { SocialLinks } from './SocialLinks';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <Link to="/" className="site-footer__brand" aria-label="Earth and Beyond home">
            <div className="site-footer__brandmark">
              <img src={brandLogo} alt="Earth and Beyond" />
            </div>
          </Link>
          <p className="site-footer__summary">
            Inspiring Young Minds, Shaping a Sustainable Future.
          </p>
        </div>

        <div className="site-footer__groups">
          <div className="site-footer__group">
            <h2 className="site-footer__heading">Navigate</h2>
            <nav className="site-footer__nav" aria-label="Footer">
              <Link to="/">Home</Link>
              <Link to="/initiatives">Events</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/take-action">Take Action</Link>
            </nav>
          </div>

          <div className="site-footer__group">
            <h2 className="site-footer__heading">Contact</h2>
            <div className="site-footer__contact">
              <a href="mailto:aatmaj.nagarkar@gmail.com">aatmaj.nagarkar@gmail.com</a>
              <a href="mailto:aqua3717@gmail.com">aqua3717@gmail.com</a>
            </div>
          </div>

          <div className="site-footer__group">
            <h2 className="site-footer__heading">Follow</h2>
            <SocialLinks linkClassName="footer-social-link" />
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; 2026 Earth and Beyond Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
