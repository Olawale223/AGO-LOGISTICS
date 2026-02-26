// src/pages/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import { services } from '../data/services.jsx';
import { homeStats } from '../data/stats';
import { blogPosts } from '../data/blog';
import './pages.css';
import '../components/components.css';

const ABOUT_TABS = [
  {
    label: 'Who We Are',
    content:
      'AGO Logistics is one of the fastest-growing ship agencies in West Africa. Founded on a commitment to reliability and transparency, we have grown from a Lagos-based operation into an international freight partner serving clients across three continents.',
  },
  {
    label: 'What We Do',
    content:
      'Multi-modal container units, designed as reusable carriers to facilitate unit load handling of the goods contained, are also referred to as cargo, specially by shipping lines and logistics operators. We manage every link of your supply chain.',
  },
  {
    label: 'Why AGO',
    content:
      'The word cargo refers in particular to goods or produce being conveyed generally for commercial gain — and AGO makes that journey seamless. Our technology-first approach, dedicated account teams, and global carrier relationships set us apart.',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const statsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const blogRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="page">
      {/* ── HERO ── */}
      <section className="hero">
        <div
          className="hero__bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=1600&q=80)' }}
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="hero__eyebrow">Global Freight Solutions</div>
          <h1 className="hero__heading">Full Sustainable<br />Cargo Solutions</h1>
          <p className="hero__subheading">
            Representative logistics operator providing a full range of services in the sphere of
            customs clearance and transportation worldwide.
          </p>
          <div className="hero__actions">
            <Button to="/services" size="lg" arrow>Our Services</Button>
            <Button to="/contact" variant="outline" size="lg">Get a Quote</Button>
          </div>
        </div>
        <div className="hero__scroll-hint">Scroll</div>
      </section>

      {/* ── STATS BAND ── */}
      {/* <section className="home-stats section--dark" ref={statsRef}>
        <div className="container">
          <div className="home-stats__grid">
            {homeStats.map((stat, i) => (
              <StatCard
                key={stat.id}
                stat={stat}
                animDelay={`reveal-delay-${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* ── SERVICES ── */}
      <section className="section" ref={servicesRef}>
        <div className="container">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Core Services"
            body="From ocean freight to same-day cargo express, we cover every mile of your supply chain."
          />
          <div className="home-services__grid">
            {services.slice(0, 3).map((svc, i) => (
              <ServiceCard
                key={svc.id}
                service={svc}
                animDelay={`reveal-delay-${(i % 3) + 1}`}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--sp-10)' }}>
            <Button to="/services" variant="outline-dark" arrow>View All Services</Button>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="section section--gray" ref={aboutRef}>
        <div className="container">
          <div className="home-about">
            <div className="home-about__image-wrap reveal">
              <img
                className="home-about__image"
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                alt="AGO Logistics operations"
              />
              <div className="home-about__badge">
                <div className="home-about__badge-number">12</div>
                <div className="home-about__badge-label">Years in<br />Operation</div>
              </div>
            </div>

            <div className="home-about__content">
              <SectionHeader
                eyebrow="About AGO"
                title="Find reasons to choose us as your freight partner"
              />
              <div className="home-about__tabs">
                {ABOUT_TABS.map((tab, i) => (
                  <button
                    key={tab.label}
                    className={`home-about__tab ${activeTab === i ? 'home-about__tab--active' : ''}`}
                    onClick={() => setActiveTab(i)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <p className="home-about__tab-content reveal">
                {ABOUT_TABS[activeTab].content}
              </p>
              <div>
                <Button to="/about" arrow>Learn More About Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="section" ref={blogRef}>
        <div className="container">
          <SectionHeader
            eyebrow="Our Blog"
            title="Latest Insights"
            body="Stay up to date with industry news, case studies, and thought leadership from the AGO team."
            center
          />
          <div className="home-blog__grid">
            {blogPosts.map((post, i) => (
              <BlogCard
                key={post.id}
                post={post}
                animDelay={`reveal-delay-${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="home-cta" ref={ctaRef}>
        <div className="home-cta__inner">
          <div className="home-cta__text reveal">
            <SectionHeader
              title="Our list of services does not end here."
              body="We'll adapt to your particular needs. Tell us what you require and we'll build a bespoke solution."
              light
            />
          </div>
          <div className="reveal reveal-delay-2">
            <Button to="/contact" variant="outline" size="lg" arrow>
              Get a Business Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
