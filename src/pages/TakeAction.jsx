import { useState } from 'react';
import PageHero from '../components/PageHero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const takeActionHeroImage =
  'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1800&q=80';

export default function TakeAction() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
  });

  useScrollAnimation();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interest: '',
    });
  };

  return (
    <>
      <PageHero image={takeActionHeroImage} minHeight="72vh">
        <div className="fade-in-up">
          <h1 className="page-hero__title">Take Action</h1>
        </div>
      </PageHero>

      <section className="section-navy">
        <div className="section-inner">
          <div className="take-action-grid">
            <div className="take-action-panel fade-in-up">
              <h2 className="section-heading">Donate</h2>
              <p className="section-intro take-action-panel__copy">
                Donations help fund classes, camps, special initiatives, and the outreach work that
                allows Earth and Beyond to keep expanding access to Astronomy and Environmental
                Science.
              </p>
              <div>
                <a
                  href="mailto:earthandbeyondinc@gmail.com?subject=Earth%20and%20Beyond%20Donation"
                  className="btn btn-light"
                >
                  Donate Now!
                </a>
              </div>
            </div>

            <div className="take-action-panel fade-in-up">
              <h2 className="section-heading">Volunteer</h2>
              <p className="section-intro take-action-panel__copy">
                We encourage high school students in grades 9-12 to volunteer and help build
                meaningful programming for younger learners in our community.
              </p>

              {submitted ? (
                <p className="confirmation-copy">
                  Thank you for your interest. Your volunteer submission has been recorded.
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
                  <input
                    className="input"
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, phone: event.target.value }))
                    }
                  />
                  <textarea
                    className="textarea"
                    placeholder="What makes you interested in being a volunteer?"
                    value={form.interest}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, interest: event.target.value }))
                    }
                    required
                  />
                  <div>
                    <button type="submit" className="btn btn-cream">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
