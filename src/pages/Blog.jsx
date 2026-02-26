// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blog';
import './pages.css';
import '../components/components.css';

export default function Blog() {
  const gridRef = useScrollReveal();
  const [featured, ...rest] = blogPosts;

  return (
    <div className="page">
      <PageHero
        title="Our Blog."
        eyebrow="Blog"
        bgImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1400&q=80"
      />

      <section className="section" ref={gridRef}>
        <div className="container">
          <SectionHeader
            eyebrow="/ Blog"
            title="Latest Articles & Case Studies"
            center
          />

          {/* Featured post */}
          <Link to={`/blog/${featured.slug}`} style={{ display: 'block', marginBottom: 'var(--sp-6)', textDecoration: 'none' }}>
            <article className="blog-grid__featured-card reveal">
              <img
                className="blog-grid__featured-image"
                src={featured.image}
                alt={featured.title}
              />
              <div className="blog-grid__featured-body">
                <div className="blog-card__meta">
                  <span>{featured.author}</span>
                  <span className="blog-card__meta-dot" />
                  <span>{featured.date}</span>
                  <span className="blog-card__meta-dot" />
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="blog-grid__featured-title">{featured.title}</h2>
                <p className="blog-grid__featured-excerpt">{featured.excerpt}</p>
                <span className="blog-card__read-more" style={{ marginTop: 'var(--sp-4)' }}>
                  Read more →
                </span>
              </div>
            </article>
          </Link>

          {/* Rest of posts */}
          {rest.length > 0 && (
            <div className="blog-grid">
              {rest.map((post, i) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  animDelay={`reveal-delay-${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
