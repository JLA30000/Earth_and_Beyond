import PageHero from '../components/PageHero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import curriculumCover from '../pictures/habitability-curriculum-cover.png';
import agencyMessages from '../pictures/agency-cards-messages.jpg';
import agencyArt from '../pictures/agency-cards-art.jpg';
import satellite from '../pictures/diy-satellite.jpg';
import solarOven from '../pictures/solar-oven-project.jpg';
import smores from '../pictures/solar-oven-smores.jpg';
import dannysPlace from '../pictures/dannys-place.jpg';
import spaceApps from '../pictures/nasa-space-apps.jpg';
import solarSystem from '../pictures/solar-system-map.jpg';
import workshopCollage from '../pictures/workshop-2025-collage.png';

const initiativesHeroImage =
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80';

export default function Initiatives() {
  useScrollAnimation();

  return (
    <>
      <PageHero image={initiativesHeroImage} minHeight="66vh" align="center" wide>
        <div className="fade-in-up">
          <h1 className="page-hero__title">Initiatives</h1>
          <p className="page-hero__text">From classroom discoveries to worlds beyond our own.</p>
        </div>
      </PageHero>

      <nav className="initiative-nav" aria-label="Explore our initiatives">
        <a href="#upcoming-workshop">Upcoming Workshop</a>
        <a href="#workshops-2026">2026 Workshops</a>
        <a href="#workshops-2025">2025 Workshops</a>
        <a href="#our-resources">Our Resources</a>
      </nav>

      <section id="upcoming-workshop" className="section-cream initiative-chapter" aria-labelledby="upcoming-title">
        <div className="section-inner initiative-feature">
          <div className="content-stack fade-in-up">
            <p className="eyebrow">Coming up next</p>
            <h2 id="upcoming-title" className="section-heading">Upcoming Workshop at Danny&rsquo;s Place</h2>
            <p className="section-intro">
              We&rsquo;re bringing Earth and Beyond to Danny&rsquo;s Place in Acton!
              Join us for a workshop that invites young learners to explore science,
              ask questions, and discover something new together.
            </p>
            <p className="event-note">Date and registration details coming soon.</p>
            <a href="https://www.dannys-place.org/" target="_blank" rel="noreferrer" className="btn btn-cream">
              Explore Danny&rsquo;s Place <span aria-hidden="true">&nbsp;↗</span>
            </a>
          </div>
          <figure className="feature-photo fade-in-up">
            <img src={dannysPlace} alt="The gathering space at Danny's Place in Acton" loading="lazy" />
            <figcaption>Our upcoming workshop venue. Photo: <a href="https://www.dannys-place.org/" target="_blank" rel="noreferrer">Danny&rsquo;s Place</a>.</figcaption>
          </figure>
        </div>
      </section>

      <section id="workshops-2026" className="section-navy initiative-chapter" aria-labelledby="workshops-2026-title">
        <div className="section-inner">
          <header className="chapter-heading fade-in-up">
            <p className="eyebrow">Learning by doing</p>
            <h2 id="workshops-2026-title" className="section-heading">2026 Workshops</h2>
            <p className="section-intro">Letters, satellites, and solar-powered s&rsquo;mores: connecting space and environmental science to everyday life.</p>
          </header>
          <div className="workshop-stories">
            <article className="workshop-story">
              <div className="content-stack fade-in-up">
                <p className="eyebrow">Gates &amp; Douglas</p>
                <h3>Letters to the people protecting our planet</h3>
                <p>Students in our 2026 workshop at the Gates and Douglas schools created cards to space and environmental agencies, sharing their appreciation through words and drawings.</p>
              </div>
              <div className="photo-pair">
                <figure className="fade-in-up"><img src={agencyMessages} alt="Students' handwritten cards to NASA, NOAA, and the EPA" loading="lazy" width="900" height="1200" /></figure>
                <figure className="fade-in-up"><img src={agencyArt} alt="Student cards illustrated with Earth, oceans, and the solar system" loading="lazy" width="900" height="1200" /></figure>
              </div>
            </article>
            <article className="workshop-story">
              <div className="content-stack fade-in-up">
                <p className="eyebrow">Conant</p>
                <h3>Building a mission of their own</h3>
                <p>Students in our 2026 workshop at Conant school created DIY satellites to understand how data collection in space works.</p>
              </div>
              <figure className="workshop-single-photo fade-in-up"><img src={satellite} alt="A DIY satellite made from a foil-covered bottle and hand-drawn solar panels" loading="lazy" width="900" height="1200" /></figure>
            </article>
            <article className="workshop-story">
              <div className="content-stack fade-in-up">
                <p className="eyebrow">McCarthy-Towne &amp; Merriam</p>
                <h3>A sweet introduction to solar energy</h3>
                <p>Students in our 2026 workshops at McCarthy-Towne and Merriam made s&rsquo;mores using solar ovens, exploring how passive and active solar energy can be utilized in everyday life.</p>
              </div>
              <div className="photo-pair">
                <figure className="fade-in-up"><img src={solarOven} alt="A homemade cardboard solar oven with a foil reflector heating a s'more" loading="lazy" width="901" height="1200" /></figure>
                <figure className="fade-in-up"><img src={smores} alt="Graham crackers and marshmallows warming inside a solar oven outdoors" loading="lazy" width="901" height="1200" /></figure>
              </div>
            </article>
          </div>
          <aside className="space-apps-feature initiative-feature" aria-labelledby="space-apps-title">
            <figure className="feature-photo fade-in-up">
              <img src={spaceApps} alt="NASA Space Apps Challenge participants collaborating around a laptop at a local event" loading="lazy" width="580" height="435" />
              <figcaption>A local NASA Space Apps Challenge event. Photo: <a href="https://www.spaceappschallenge.org/" target="_blank" rel="noreferrer">NASA Space Apps</a>.</figcaption>
            </figure>
            <div className="content-stack fade-in-up">
              <p className="eyebrow">Connecting with a global community</p>
              <h3 id="space-apps-title">2025 &amp; 2026 NASA Amplification Collaborators</h3>
              <p>As a NASA Amplification Collaborator in 2025 and 2026, Earth and Beyond helps expand awareness and engagement around the NASA Space Apps Challenge. We support its mission of bringing innovators, creators, and problem-solvers together to use NASA&rsquo;s open data to address real-world challenges and inspire new discoveries.</p>
              <a href="https://www.spaceappschallenge.org/" target="_blank" rel="noreferrer" className="text-link">Explore The NASA Space Apps Challenge <span aria-hidden="true">↗</span></a>
            </div>
          </aside>
        </div>
      </section>

      <section id="workshops-2025" className="section-cream initiative-chapter" aria-labelledby="workshops-2025-title">
        <div className="section-inner">
          <header className="chapter-heading chapter-heading--centered fade-in-up">
            <p className="eyebrow">Imagining what&rsquo;s out there</p>
            <h2 id="workshops-2025-title" className="section-heading">2025 Workshops</h2>
            <p className="section-intro">Students from our 2025 workshops drew their visions of extraterrestrial life before an interactive lesson about life on other planets.</p>
          </header>
          <div className="archive-gallery">
            <figure className="archive-gallery__collage fade-in-up">
              <div className="archive-gallery__image">
                <img src={workshopCollage} alt="A collage of students’ drawings imagining extraterrestrial life, including aliens, planets, and rockets." loading="lazy" width="1414" height="2000" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section id="our-resources" className="section-steel initiative-chapter" aria-labelledby="resources-title">
        <div className="section-inner">
          <header className="chapter-heading fade-in-up">
            <p className="eyebrow">Keep exploring</p>
            <h2 id="resources-title" className="section-heading">Our Resources</h2>
            <p className="section-intro">Bring the questions from our workshops into your classroom or explore them at home.</p>
          </header>
          <div className="resource-grid">
            <article className="resource-card fade-in-up">
              <img className="resource-card__image resource-card__image--art" src={curriculumCover} alt="Illustration for Understanding Habitable Worlds: What Makes a World Suitable for Life?" loading="lazy" width="1828" height="946" />
              <div className="resource-card__body content-stack">
                <p className="eyebrow">Curriculum · Coming Soon</p>
                <h3>Understanding Habitable Worlds</h3>
                <p>Our upcoming NGSS-informed habitability curriculum explores a big question: what makes a world suitable for life? Connect astronomy and environmental science through the study of habitable worlds.</p>
                <p className="resource-status">Curriculum Materials Coming Soon</p>
              </div>
            </article>
            <article className="resource-card fade-in-up">
              <a href="https://solar-system-missions.netlify.app/" target="_blank" rel="noreferrer" aria-label="Launch The Solar System Simulation">
                <img className="resource-card__image resource-card__image--map" src={solarSystem} alt="Illustrated solar system map from the Goldilocks Mission simulation" loading="lazy" />
              </a>
              <div className="resource-card__body content-stack">
                <p className="eyebrow">Interactive · Explore Now</p>
                <h3>Solar System Simulation</h3>
                <p>Choose a planet and start a Goldilocks Mission. Explore planetary conditions and investigate what makes a planet habitable in our interactive solar system simulation.</p>
                <a href="https://solar-system-missions.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-cream">Launch The Simulation <span aria-hidden="true">&nbsp;↗</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
