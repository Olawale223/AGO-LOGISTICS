// src/pages/Services.jsx
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { services } from '../data/services.jsx';
import './pages.css';
import '../components/components.css';

export default function Services() {
  const gridRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="page">
      <PageHero
        title="Services."
        eyebrow="Services"
        bgImage="https://images.unsplash.com/photo-1606897450498-2b40c1f7c2ef?w=1400&q=80"
      />

      <section className="section" ref={gridRef}>
        <div className="container">
          <SectionHeader
            eyebrow="What We Offer"
            title="Full-Spectrum Logistics"
            body="International supply chains involve challenging regulations. We handle every dimension so your cargo moves without friction."
            center
          />
          <div className="services__grid">
            {services.map((svc, i) => (
              <ServiceCard
                key={svc.id}
                service={svc}
                animDelay={`reveal-delay-${(i % 3) + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section section--dark"
        ref={ctaRef}
        style={{ textAlign: 'center' }}
      >
        <div className="container">
          <SectionHeader
            eyebrow="Bespoke Solutions"
            title="Our list of services does not end here."
            body="We'll adapt to your particular needs. Tell us what you require and we'll build a custom solution."
            center
            light
          />
          <div style={{ marginTop: 'var(--sp-8)' }}>
            <Button to="/contact" size="lg" arrow>Get a Business Quote</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
