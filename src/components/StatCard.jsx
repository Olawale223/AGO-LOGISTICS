// src/components/StatCard.jsx
import { useCountUp } from '../hooks/useCountUp';
import './components.css';

/**
 * @param {object} stat - { value, suffix, label }
 * @param {string} animDelay - CSS class for stagger
 */
export default function StatCard({ stat, animDelay = '' }) {
  const { ref, count } = useCountUp(stat.value);

  return (
    <div className={`stat-card reveal ${animDelay}`} ref={ref}>
      <div className="stat-card__value">
        {count.toLocaleString()}
        <span className="stat-card__suffix">{stat.suffix}</span>
      </div>
      <div className="stat-card__label">{stat.label}</div>
    </div>
  );
}
