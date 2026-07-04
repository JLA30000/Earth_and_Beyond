import PageHero from '../components/PageHero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import workshop1 from '../pictures/IMG_0927.jpeg';
import workshop2 from '../pictures/IMG_1014.jpeg';
import workshop3 from '../pictures/IMG_1015.jpeg';
import workshop4 from '../pictures/IMG_1992.jpeg';
import workshop5 from '../pictures/IMG_1994.jpeg';
import workshop6 from '../pictures/IMG_1995.jpeg';
import workshop7 from '../pictures/IMG_1996.jpeg';
import workshop8 from '../pictures/IMG_2018.jpeg';

const initiativesHeroImage =
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80';

const workshopImages = [
  workshop1,
  workshop2,
  workshop3,
  workshop4,
  workshop5,
  workshop6,
  workshop7,
  workshop8,
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
                <section className="workshop-year-block">
                  <h4>2025&ndash;2026</h4>
                  <div className="workshop-collage">
                    {workshopImages.map((image, index) => (
                      <div key={image} className="workshop-collage__item">
                        <img src={image} alt={`Elementary workshop ${index + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </article>

            <article className="initiative-section-card fade-in-up">
              <div className="initiative-section-card__content">
                <div className="initiative-section-card__eyebrow">Collaborators</div>
                <h3 className="initiative-section-card__title">
                  2025 NASA Amplification Collaborators
                </h3>
                <p className="initiative-section-card__description">
                  Our team was thrilled to serve as a 2025 NASA Amplification Collaborator
                  through the NASA Space Apps community. In this role, we helped expand
                  awareness and engagement around the NASA Space Apps Challenge, supporting
                  its mission of bringing together innovators, creators, and problem-solvers
                  from around the world to use NASA&rsquo;s open data to address real-world
                  challenges and inspire future discoveries.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
