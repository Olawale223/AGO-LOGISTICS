// src/pages/BlogPost.jsx
import { useParams, Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { blogPosts } from '../data/blog';
import './pages.css';
import '../components/components.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug);
  const articleRef = useScrollReveal();

  if (!post) {
    return (
      <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', flexDirection: 'column', gap: 'var(--sp-6)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)' }}>Post not found</h2>
        <Button to="/blog" arrow>Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className="page">
      <PageHero
        title={post.title}
        eyebrow="Blog"
        bgImage={post.image}
      />

      <section className="section" ref={articleRef}>
        <div className="container">
          <div className="blog-post">
            {/* Article */}
            <article className="blog-post__article">
              <div className="blog-post__header">
                <div className="blog-post__meta">
                  <span>{post.author}</span>
                  <span className="blog-post__meta-dot" />
                  <span>{post.date}</span>
                  <span className="blog-post__meta-dot" />
                  <span>{post.readTime}</span>
                </div>
                <h1 className="blog-post__title reveal">{post.title}</h1>
              </div>

              <img
                className="blog-post__hero-image reveal"
                src={post.image}
                alt={post.title}
              />

              <div className="blog-post__body">
                {post.body.map((block, i) =>
                  block.type === 'paragraph' ? (
                    <p key={i} className={`blog-post__paragraph reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                      {block.content}
                    </p>
                  ) : null
                )}
              </div>

              <div style={{ marginTop: 'var(--sp-10)', paddingTop: 'var(--sp-8)', borderTop: '1px solid var(--clr-gray-200)' }}>
                <Button to="/blog" variant="outline-dark">← Back to Blog</Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-post__sidebar">
              {/* Tags */}
              <div className="blog-post__sidebar-card reveal">
                <h4>Tags</h4>
                <div className="blog-post__tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-post__tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="blog-post__sidebar-card reveal reveal-delay-1">
                  <h4>Related Posts</h4>
                  {related.map((rel) => (
                    <Link key={rel.id} to={`/blog/${rel.slug}`} className="blog-post__related-item">
                      <img
                        className="blog-post__related-image"
                        src={rel.image}
                        alt={rel.title}
                      />
                      <div>
                        <div className="blog-post__related-title">{rel.title}</div>
                        <div className="blog-post__related-date">{rel.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div
                className="blog-post__sidebar-card reveal reveal-delay-2"
                style={{ background: 'var(--clr-black)', color: 'var(--clr-white)' }}
              >
                <h4 style={{ color: 'var(--clr-white)' }}>Need a Freight Solution?</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,.6)', lineHeight: 1.7, margin: 'var(--sp-3) 0 var(--sp-5)' }}>
                  Talk to our team about your logistics requirements.
                </p>
                <Button to="/contact" size="sm" arrow>Get a Quote</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
