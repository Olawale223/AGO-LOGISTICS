// src/components/ServiceCard.jsx
import { Link } from 'react-router-dom';
import './components.css';

/**
 * @param {object} service - service data object from data/services.js
 * @param {string} animDelay - CSS class for stagger animation delay
 */
export default function ServiceCard({ service, animDelay = '' }) {
  return (
    <article className={`service-card reveal ${animDelay}`}>
      <div className="service-card__image-wrap">
        <img
          className="service-card__image"
          src={service.image}
          alt={service.title}
          loading="lazy"
        />
        <div className="service-card__icon" aria-hidden="true">
          {service.icon}
        </div>
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__tagline">{service.tagline}</p>

        <div className="service-card__features">
          {service.features.map((feat) => (
            <span key={feat} className="service-card__feature-tag">{feat}</span>
          ))}
        </div>

        <Link to={`/services/${service.slug}`} className="service-card__link">
          Learn more <span>→</span>
        </Link>
      </div>
    </article>
  );
}
