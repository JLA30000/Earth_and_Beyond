import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const homeHeroImage =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=80';
const actionImage =
  'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80';

const impactMetrics = [
  {
    value: '000+',
    label: 'Students reached',
    description: 'Placeholder for total students served.',
  },
  {
    value: '00',
    label: 'Workshops hosted',
    description: 'Placeholder for completed workshop sessions.',
  },
  {
    value: '00',
    label: 'Curriculum lessons',
    description: 'Placeholder for NGSS-aligned lessons.',
  },
  {
    value: '00',
    label: 'Community partners',
    description: 'Placeholder for collaborators and host sites.',
  },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useScrollAnimation();

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <PageHero
        image={homeHeroImage}
        minHeight="86vh"
        className="page-hero--home"
        contentClassName="page-hero__copy--home"
      >
        <div className="fade-in-up">
          <h1 className="page-hero__title">
            Inspiring Young Minds, Shaping a Sustainable Future
          </h1>
          <div className="page-hero__actions">
            <Link to="/about" className="btn btn-light">
              Learn More
            </Link>
          </div>
        </div>
      </PageHero>

      <section className="section-steel home-mission-section">
        <div className="section-inner section-inner--narrow center-text">
          <div className="fade-in-up">
            <h2 className="section-heading section-heading--underlined">Our Mission</h2>
            <p className="section-intro">
              Centered in Acton-Boxborough, Earth and Beyond is a nonprofit dedicated to
              building a brighter future for students who do not have access to meaningful
              education in Astronomy and Environmental Science. We believe the next generation
              of scientists, researchers, and changemakers should be equipped to understand
              both our planet and the universe beyond it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-steel impact-section">
        <div className="section-inner">
          <div className="impact-header fade-in-up center-text">
            <h2 className="section-heading">Our Impact</h2>
            <p className="section-intro">
              Placeholder impact numbers for Earth and Beyond programming.
            </p>
          </div>

          <div className="impact-grid stagger">
            {impactMetrics.map((metric) => (
              <article key={metric.label} className="impact-card fade-in-up">
                <div className="impact-card__value">{metric.value}</div>
                <h3 className="impact-card__label">{metric.label}</h3>
                <p>{metric.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy">
        <div className="section-inner">
          <div className="split-layout split-layout--reverse">
            <div className="fade-in-up">
              <div className="circular-media">
                <img
                  src={actionImage}
                  alt="Students exploring nature together"
                />
              </div>
            </div>

            <div className="content-stack fade-in-up">
              <h2 className="section-heading">Ready to take the next step?</h2>
              <p className="section-intro">
                Whether you want to volunteer your time or support our programming through a
                donation, every contribution helps Earth and Beyond grow its classes, camps,
                and student-led initiatives.
              </p>
              <div>
                <Link to="/take-action" className="btn btn-cream">
                  Take Action
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="section-inner section-inner--narrow center-text">
          <blockquote className="quote-block fade-in-up">
            <p>&ldquo;The important thing is to never stop questioning.&rdquo;</p>
            <cite>Albert Einstein</cite>
          </blockquote>
        </div>
      </section>

      <section className="section-cream">
        <div className="section-inner">
          <div className="signup-layout">
            <div className="content-stack fade-in-up">
              <h2 className="section-heading">Stay Updated</h2>
              <p className="section-intro">
                To stay updated, you can sign up on our email list.
              </p>
            </div>

            <div className="content-stack fade-in-up">
              {subscribed ? (
                <p className="confirmation-copy">
                  Thank you! You&apos;re signed up and will be the first to hear about upcoming
                  programming and new initiatives.
                </p>
              ) : (
                <form className="email-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email Address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                  <div>
                    <button type="submit" className="btn btn-cream">
                      Sign Up
                    </button>
                  </div>
                </form>
              )}

              <p className="supporting-copy">
                Sign up to be the first to know about our initiatives. We aim to post updates
                about current programming and upcoming opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
