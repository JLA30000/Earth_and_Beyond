import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { events } from '../data/events';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const initiativesHeroImage =
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80';

export default function Events() {
  useScrollAnimation();

  return (
    <>
      <PageHero image={initiativesHeroImage} minHeight="66vh" />

      <section className="section-steel">
        <div className="section-inner">
          <div className="fade-in-up center-text" style={{ marginBottom: '2.5rem' }}>
            <h1 className="section-heading">Current Initiatives</h1>
          </div>

          <div className="initiative-grid stagger">
            {events.map((event) => (
              <article key={event.slug} className="initiative-card fade-in-up">
                <div className="initiative-card__image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="initiative-card__body">
                  <div className="initiative-card__meta">
                    <span>{event.author}</span>
                    <span>{event.dateShort}</span>
                  </div>
                  <h2 className="initiative-card__title">{event.title}</h2>
                  <p className="initiative-card__excerpt">{event.excerpt}</p>
                  <Link
                    to={`/initiatives/${event.slug}`}
                    className="initiative-card__link"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
