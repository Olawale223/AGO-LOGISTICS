// src/components/PageHero.jsx
import './components.css';

/**
 * @param {string} title     - page heading
 * @param {string} eyebrow   - breadcrumb label (e.g. "/ About")
 * @param {string} bgImage   - CSS background-image URL
 */
export default function PageHero({ title, eyebrow = 'Home', bgImage }) {
  return (
    <div
      className="page-hero"
      style={bgImage ? { '--page-hero-bg': `url(${bgImage})` } : undefined}
    >
      <div
        className="page-hero__bg"
        style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
      />
      <div className="page-hero__overlay" />
      <div className="page-hero__content">
        {/* <div className="page-hero__breadcrumb">
          <span>Home</span>
          <span className="page-hero__breadcrumb-sep">/</span>
          <span>{eyebrow}</span>
        </div> */}
        <h1 className="page-hero__title">{title}</h1>
      </div>
    </div>
  );
}
