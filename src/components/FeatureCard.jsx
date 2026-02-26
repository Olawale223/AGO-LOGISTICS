import './components.css';

/**
 * @param {object} feature - { icon, title, body }
 * @param {string} animDelay - CSS class for stagger
 */
export default function FeatureCard({ feature, animDelay = '' }) {
  return (
    <div className={`feature-card reveal ${animDelay}`}>
      {/* <div className="feature-card__icon" aria-hidden="true">{feature.icon}</div> */}
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__body">{feature.body}</p>
    </div>
  );
}
