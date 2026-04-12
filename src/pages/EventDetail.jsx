import { Link, Navigate, useParams } from 'react-router-dom';
import { events } from '../data/events';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);

  useScrollAnimation();

  if (!event) {
    return <Navigate to="/initiatives" replace />;
  }

  return (
    <div className="detail-page">
      <div className="detail-shell">
        <Link to="/initiatives" className="detail-back-link">
          <span aria-hidden="true">←</span>
          Back to Initiatives
        </Link>

        <div className="detail-header-image fade-in-up">
          <img src={event.image} alt={event.title} />
        </div>

        <div className="fade-in-up">
          <h1 className="detail-title">{event.title}</h1>
          <div className="detail-meta">
            <span>{event.author}</span>
            <span>{event.dateLong}</span>
          </div>
          <div className="detail-content">
            {event.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
