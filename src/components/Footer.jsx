// src/components/Footer.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { footerColumns } from '../data/navigation';
import './components.css';
import Logo from '../media/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <div className="footer__newsletter-label">Subscribe to our Newsletter</div>
        {submitted ? (
          <p style={{ color: 'var(--clr-green)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
            ✓ Thank you for subscribing!
          </p>
        ) : (
          <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="footer__newsletter-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="footer__newsletter-submit">Subscribe</button>
          </form>
        )}
      </div>

      {/* Top grid */}
      <div className="footer__top">
        <div className="footer__brand">
          <>
          <Link to="/" className="footer__brand-logo" >
          <Logo className="navbar__logo-icon" />
          <div className="footer_text-container">
            <div className="footer__brand-text">AGO</div>
            <div className="footer__brand-text">Logistics</div>
          </div>      
          </Link>
          
          </>
          <p>
            We are one of the newly and fast growing ship agencies, delivering reliable freight
            solutions across Africa, Europe, and the Americas.
          </p>
          <p style={{ marginTop: 'var(--sp-2)', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.4)' }}>
            13B Creek Road, G.P.O Box 4434 Marina Lagos, Apapa
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading}>
            <div className="footer__col-heading">{col.heading}</div>
            <ul className="footer__links">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">© {new Date().getFullYear()} AGO Haulage & Logistics Ltd. All rights reserved.</p>
        <div className="footer__socials">
          <button className="footer__social-btn" aria-label="Facebook">f</button>
          <button className="footer__social-btn" aria-label="WhatsApp">w</button>
          <button className="footer__social-btn" aria-label="LinkedIn">in</button>
          <button className="footer__social-btn" aria-label="Twitter">𝕏</button>
        </div>
      </div>
    </footer>
  );
}
