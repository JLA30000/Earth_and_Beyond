import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section className="login-page">
      <div className="section-inner">
        <div className="login-panel">
          <h1 className="section-heading">Login</h1>
          <p>
            Member account access is not wired into this front-end yet. If you need access,
            reach out through the contact page and we can connect you directly.
          </p>
          <p>
            This keeps the required navigation item in place while avoiding a broken or
            misleading auth flow.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/contact-us" className="btn btn-cream">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
