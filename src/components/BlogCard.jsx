// src/components/BlogCard.jsx
import { Link } from 'react-router-dom';
import './components.css';

/**
 * @param {object} post       - blog post data from data/blog.js
 * @param {string} animDelay  - CSS class for stagger animation delay
 */
export default function BlogCard({ post, animDelay = '' }) {
  return (
    <article className={`blog-card reveal ${animDelay}`}>
      <div className="blog-card__image-wrap">
        <img
          className="blog-card__image"
          src={post.image}
          alt={post.title}
          loading="lazy"
        />
      </div>

      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>{post.author}</span>
          <span className="blog-card__meta-dot" />
          <span>{post.date}</span>
          <span className="blog-card__meta-dot" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>

        <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
          Read more <span>→</span>
        </Link>
      </div>
    </article>
  );
}
