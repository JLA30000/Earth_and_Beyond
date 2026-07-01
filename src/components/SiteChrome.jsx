import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import brandLogo from '../logo/Earth and Beyond logo design (5).png';
import { SocialLinks } from './SocialLinks';

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/about', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
];

export default function SiteChrome() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header${isHome ? ' site-header--home' : ' site-header--compact'}${scrolled ? ' is-scrolled' : ''}`}>
      {isHome ? (
        <div className="home-header">
          <div className="home-header__topbar">
            <SocialLinks className="home-header__socials" linkClassName="home-social-link" />

            <Link to="/" className="home-brand" aria-label="Earth and Beyond home">
              <div className="home-brand__lockup">
                <span className="home-brand__mark">
                  <img src={brandLogo} alt="Earth and Beyond" />
                </span>
              </div>
            </Link>

            <div className="home-header__actions">
              <Link to="/take-action" className="btn btn-cream home-header__cta">
                Take Action
              </Link>
            </div>
          </div>

          <nav className="home-header__nav" aria-label="Primary">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `home-header__nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : (
        <div className="site-navbar">
          <Link to="/" className="site-brand" aria-label="Earth and Beyond home">
            <div className="site-brand__logo">
              <img src={brandLogo} alt="Earth and Beyond" />
            </div>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `site-nav__link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-navbar__utility">
            <Link to="/take-action" className="btn btn-cream site-navbar__cta">
              Take Action
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
