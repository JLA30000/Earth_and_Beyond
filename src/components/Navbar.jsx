import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      } border-b border-gray-200`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Earth and Beyond" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-lg font-semibold text-dark font-heading hidden sm:inline">
              Earth and Beyond
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-[15px] font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-brand'
                    : 'text-body hover:text-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/take-action"
              className="ml-3 px-6 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-full transition-colors"
            >
              Take Action
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-body hover:text-dark"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          menuOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-md text-[15px] font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-brand bg-brand-light'
                  : 'text-body hover:text-dark hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/take-action"
            className="block mt-2 px-4 py-3 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-full transition-colors text-center"
          >
            Take Action
          </Link>
        </div>
      </div>
    </nav>
  );
}
