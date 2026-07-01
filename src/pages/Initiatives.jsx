import PageHero from '../components/PageHero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const initiativesHeroImage =
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80';

const workshopYears = [
  {
    year: '2025',
    label: '2025 workshop images coming soon',
  },
  {
    year: '2026',
    label: '2026 workshop images coming soon',
  },
];

export default function Initiatives() {
  useScrollAnimation();

  return (
    <>
      <PageHero image={initiativesHeroImage} minHeight="66vh" align="center" wide>
        <div className="fade-in-up">
          <h1 className="page-hero__title">Initiatives</h1>
        </div>
      </PageHero>

      <section className="section-steel">
        <div className="section-inner">
          <div className="fade-in-up center-text" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-heading">Initiatives</h2>
          </div>

          <div className="initiative-sections stagger">
            <article className="initiative-section-card fade-in-up">
              <div className="initiative-section-card__content">
                <div className="initiative-section-card__eyebrow">Coming Soon</div>
                <h3 className="initiative-section-card__title">
                  NGSS-Aligned Curriculum: Understanding Habitable Worlds (coming soon)
                </h3>
              </div>
            </article>

            <article className="initiative-section-card fade-in-up">
              <div className="initiative-section-card__content">
                <div className="initiative-section-card__eyebrow">Elementary Workshops</div>
                <h3 className="initiative-section-card__title">Elementary Workshops</h3>
                <div className="workshop-year-grid">
                  {workshopYears.map((workshop) => (
                    <section key={workshop.year} className="workshop-year-block">
                      <h4>{workshop.year}</h4>
                      <div className="initiative-image-placeholder">
                        <span>{workshop.label}</span>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </article>

            <article className="initiative-section-card fade-in-up">
              <div className="initiative-section-card__content">
                <div className="initiative-section-card__eyebrow">Collaborators</div>
                <h3 className="initiative-section-card__title">
                  2025 NASA Amplification Collaborators
                </h3>
                <div
                  className="initiative-description-blank"
                  aria-label="Description to be added"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
