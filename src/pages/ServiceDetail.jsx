// src/pages/ServiceDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { services } from '../data/services.jsx';
import './pages.css';
import '../components/components.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const bodyRef = useScrollReveal();

  if (!service) {
    return (
      <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', flexDirection: 'column', gap: 'var(--sp-6)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)' }}>Service not found</h2>
        <Button to="/services" arrow>Back to Services</Button>
      </div>
    );
  }

  return (
    <div className="page">
      <PageHero
        title={service.title}
        eyebrow={service.title}
        bgImage={service.image}
      />

      <section className="section" ref={bodyRef}>
        <div className="container">
          <div className="service-detail">
            {/* Main Content */}
            <div className="service-detail__body">
              <div className="service-detail__image reveal">
                <img src={service.image} alt={service.title} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
                <div
                  className="section-header__eyebrow reveal"
                  style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--clr-green)', display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}
                >
                  <span style={{ width: 24, height: 2, background: 'var(--clr-green)', display: 'block' }} />
                  Services Details
                </div>

                <p className="service-detail__prose reveal">
                  {service.longDescription}
                </p>
                <p className="service-detail__prose reveal reveal-delay-1">
                  {service.description}
                </p>

                <div className="reveal reveal-delay-2">
                  <div className="service-detail__features-title">Effective Solutions</div>
                  <div className="service-detail__feature-list">
                    {service.features.map((feat) => (
                      <div key={feat} className="service-detail__feature-item">{feat}</div>
                    ))}
                    <div className="service-detail__feature-item">Exhibition Shipments</div>
                    <div className="service-detail__feature-item">Project Cargo</div>
                    <div className="service-detail__feature-item">Customs Brokerage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="service-detail__sidebar">
              <div className="service-detail__quote-box reveal">
                <h3>Get a business Quote</h3>
                <p>Our list of services does not end here. We'll adapt to your particular needs.</p>
                <Button to="/contact" variant="outline" arrow size="sm">Request a Quote</Button>
              </div>

              <div className="service-detail__services-list reveal reveal-delay-1">
                <h4>All Services</h4>
                {services.map((svc) => (
                  <Link
                    key={svc.id}
                    to={`/services/${svc.slug}`}
                    className={`service-detail__services-link ${svc.slug === slug ? 'service-detail__services-link--active' : ''}`}
                  >
                    <span>{svc.title}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
