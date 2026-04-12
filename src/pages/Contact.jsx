import { useState } from 'react';
import { SocialLinks } from '../components/SocialLinks';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  useScrollAnimation();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-page">
      <div className="section-inner">
        <div className="contact-layout">
          <div className="contact-copy fade-in-up">
            <h1>Contact Us</h1>
            <p>
              Contact us to learn more about our mission and work, ask questions about
              programming, or explore ways to get involved.
            </p>
            <div className="contact-emails">
              <a href="mailto:aatmaj.nagarkar@gmail.com">aatmaj.nagarkar@gmail.com</a>
              <a href="mailto:aqua3717@gmail.com">aqua3717@gmail.com</a>
            </div>
            <div style={{ marginTop: '1.75rem' }}>
              <SocialLinks linkClassName="inline-social-link" />
            </div>
          </div>

          <div className="contact-form-panel fade-in-up">
            <h2>Send a Message</h2>

            {submitted ? (
              <p className="confirmation-copy">
                Thank you. Your message has been recorded and we&apos;ll follow up soon.
              </p>
            ) : (
              <form className="form-stack" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, firstName: event.target.value }))
                    }
                    required
                  />
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, lastName: event.target.value }))
                    }
                    required
                  />
                </div>
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                  required
                />
                <textarea
                  className="textarea"
                  placeholder="Message"
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, message: event.target.value }))
                  }
                  required
                />
                <div>
                  <button type="submit" className="btn btn-cream">
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
