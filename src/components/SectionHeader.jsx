// src/components/SectionHeader.jsx
import './components.css';

/**
 * @param {string} eyebrow  - small label above the title
 * @param {string} title    - main heading
 * @param {string} body     - optional paragraph
 * @param {boolean} center  - center-aligned variant
 * @param {boolean} light   - light text (for dark backgrounds)
 */
export default function SectionHeader({ eyebrow, title, body, center = false, light = false }) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''} reveal`}>
      {eyebrow && (
        <div className="section-header__eyebrow">{eyebrow}</div>
      )}
      <h2 className={`section-header__title ${light ? 'section-header__title--light' : ''}`}>
        {title}
      </h2>
      {body && <p className="section-header__body">{body}</p>}
    </div>
  );
}
