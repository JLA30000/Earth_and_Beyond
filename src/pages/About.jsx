import PageHero from '../components/PageHero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coreValues = [
  {
    title: 'Scientific Insight',
    description:
      'Students build a strong foundation in Astronomy and Environmental Science through hands-on learning and accessible scientific concepts.',
  },
  {
    title: 'Leadership',
    description:
      'Students learn how science can drive advocacy, public engagement, and meaningful social change in their communities.',
  },
  {
    title: 'Research & Innovation',
    description:
      'Students see how research and innovation contribute to current scientific missions and create opportunities to solve real problems.',
  },
  {
    title: 'Collaboration',
    description:
      'Students learn to work with others to develop ideas, projects, and solutions, which is essential in changemaking today.',
  },
  {
    title: 'Passion',
    description:
      'Students develop curiosity and lasting interest in these fields by connecting classroom learning to the wider world.',
  },
];

const leaders = [
  {
    name: 'Aatmaj Nagarkar',
    detail: '10th Grade',
    bio: 'Aatmaj Nagarkar is a tenth-grader at Acton-Boxborough Regional High School who is deeply interested in stellar astrophysics. His recent work includes a machine learning science fair project focused on analyzing supernovae yields.',
  },
  {
    name: 'August Patterson',
    detail: '10th Grade',
    bio: 'August Patterson is a tenth-grader at Acton-Boxborough Regional High School with a focus on Environmental Science. His recent work includes revising and advocating for a stronger sustainability policy in the Acton-Boxborough Regional School District.',
  },
];

const aboutHeroImage =
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=80';

export default function About() {
  useScrollAnimation();

  return (
    <>
      <PageHero image={aboutHeroImage} align="center" wide>
        <div className="fade-in-up">
          <h1 className="page-hero__title">
            Inspiring Young Minds, Shaping a Sustainable Future
          </h1>
        </div>
      </PageHero>

      <section className="section-steel">
        <div className="section-inner section-inner--narrow">
          <div className="fade-in-up">
            <h2 className="section-heading center-text">Importance</h2>
            <p className="section-intro">
              The work Earth and Beyond does is rooted in urgency. Astronomy sits at the edge
              of discovery, where new knowledge about planets, stars, and life beyond Earth is
              reshaping how we understand the universe. At the same time, climate change demands
              informed action, research, and leadership here on Earth.
            </p>
            <p className="section-intro">
              We believe those two realities make science education more important, not less.
              When schools leave these subjects underexplored, the next generation loses critical
              opportunities to build curiosity, confidence, and the skills needed to contribute.
              Earth and Beyond exists to close that gap and help prepare future researchers,
              innovators, and community leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="section-inner section-inner--narrow">
          <div className="fade-in-up">
            <h2 className="section-heading center-text">Core Values</h2>
            <p className="section-intro center-text">
              Our organization is built around scientific rigor, service, and student-led growth.
            </p>
          </div>

          <div className="values-list stagger">
            {coreValues.map((value) => (
              <div key={value.title} className="value-item fade-in-up">
                <div className="value-item__title">{value.title}</div>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-steel">
        <div className="section-inner">
          <div className="leadership-layout">
            <div className="leadership-label fade-in-up">
              <h2 className="section-heading">Co-Presidents</h2>
            </div>

            <div className="bio-grid stagger">
              {leaders.map((leader) => (
                <article key={leader.name} className="bio-card fade-in-up">
                  <div className="bio-card__meta">{leader.detail}</div>
                  <h3 className="bio-card__title">{leader.name}</h3>
                  <p>{leader.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
