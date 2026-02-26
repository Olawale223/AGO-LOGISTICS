// src/pages/About.jsx
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import { aboutHighlights } from '../data/stats';
import './pages.css';
import '../components/components.css';

const WHY_ITEMS = [
  {
    icon: '🌍',
    title: 'Global Network',
    body: 'Partnerships across 38 countries give your cargo access to every major port, airport, and distribution hub on the planet.',
  },
  {
    icon: '📡',
    title: 'Real-Time Tracking',
    body: 'Our digital platform gives you live shipment visibility, proactive exception alerts, and full audit trails.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Account Teams',
    body: 'Every client gets a named account manager who knows your business, your lanes, and your compliance requirements.',
  },
  {
    icon: '🔒',
    title: 'Compliance First',
    body: 'We navigate customs regimes, sanctions lists, and trade agreements so your goods always move without surprises.',
  },
];

export default function About() {
  const introRef = useScrollReveal();
  const highlightsRef = useScrollReveal();
  const whyRef = useScrollReveal();

  return (
    <div className="page">
      <PageHero
        title="About."
        eyebrow="About"
        bgImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1400&q=80"
      />

      {/* ── INTRO ── */}
      <section className="section" ref={introRef}>
        <div className="container">
          <div className="about-intro">
            <div className="about-intro__image-wrap reveal">
              <img
                className="about-intro__image"
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                alt="AGO Logistics warehouse operations"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
              <SectionHeader
                eyebrow="Who We Are"
                title="Find reasons to choose us as your freight partner"
              />
              <p className="reveal" style={{ fontSize: 'var(--text-base)', color: 'var(--clr-gray-600)', lineHeight: 1.8 }}>
                The phrase cargo refers to products or produce transported for trading purposes by
                ship, boat, or airplane, while the term is increasingly frequently used to apply to
                all sorts of freight, including those transported by rail, van, truck, or intermodal
                container.
              </p>
              <p className="reveal reveal-delay-1" style={{ fontSize: 'var(--text-base)', color: 'var(--clr-gray-600)', lineHeight: 1.8 }}>
                Multi-modal container units, designed as reusable carriers to facilitate unit load
                handling of the goods contained, are also referred to as cargo, specially by shipping
                lines and logistics operators.
              </p>
              <div className="reveal reveal-delay-2">
                <Button to="/contact" arrow>Work With Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section section--gray" ref={highlightsRef}>
        <div className="container">
          <SectionHeader
            eyebrow="What We Offer"
            title="What We Do"
            body="We combine deep logistics expertise with digital tools to deliver a frictionless freight experience."
            center
          />
          <div className="about-highlights__grid">
            {aboutHighlights.map((item, i) => (
              <FeatureCard
                key={item.title}
                feature={item}
                animDelay={`reveal-delay-${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AGO ── */}
      <section className="section" ref={whyRef}>
        <div className="container">
          <SectionHeader
            eyebrow="Why AGO Services"
            title="The AGO Advantage"
            body="Every choice we make is designed to reduce your risk, cut your costs, and protect your reputation."
          />
          <div className="about-why__grid">
            {WHY_ITEMS.map((item, i) => (
              <FeatureCard
                key={item.title}
                feature={item}
                animDelay={`reveal-delay-${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
