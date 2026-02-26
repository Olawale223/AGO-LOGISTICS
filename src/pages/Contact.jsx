// src/pages/Contact.jsx
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { offices, contactReasons } from '../data/contact';
import './pages.css';
import '../components/components.css';

function OfficeCard({ office, animDelay = '' }) {
  return (
    <div className={`office-card ${office.primary ? 'office-card--primary' : ''} reveal ${animDelay}`}>
      <div className="office-card__country">{office.country}</div>
      <div className="office-card__detail">
       
        <span>{office.address}</span>
      </div>
      <div className="office-card__detail">
        
        <a href={`tel:${office.phone}`} style={{ transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = 'var(--clr-green)'} onMouseLeave={e => e.target.style.color = ''}>
          {office.phone}
        </a>
      </div>
      <div className="office-card__detail">
        
        <a href={`mailto:${office.email}`} style={{ transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = 'var(--clr-green)'} onMouseLeave={e => e.target.style.color = ''}>
          {office.email}
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', reason: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const officesRef = useScrollReveal();
  const formRef = useScrollReveal();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <PageHero
        title="Contact."
        eyebrow="Contact"
        bgImage="https://images.unsplash.com/photo-1568684240537-4a54a5f52694?w=1400&q=80"
      />

      <section className="section" ref={officesRef}>
        <div className="container">
          <SectionHeader
            eyebrow="Our Offices"
            title="Where to Find Us"
            body="We operate from three global offices to serve you wherever your business takes you."
          />
          <div className="contact-layout">
            <div className="contact-offices__grid">
              {offices.map((office, i) => (
                <OfficeCard
                  key={office.id}
                  office={office}
                  animDelay={`reveal-delay-${i + 1}`}
                />
              ))}
            </div>

            <div className="contact-form-wrap reveal" ref={formRef}>
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__icon">✓</div>
                  <h3>Message Received!</h3>
                  <p>Thank you for reaching out. A member of our team will be in touch within one business day.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline-dark">Send Another</Button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName" name="firstName" type="text"
                        value={formData.firstName} onChange={handleChange}
                        placeholder="John" required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName" name="lastName" type="text"
                        value={formData.lastName} onChange={handleChange}
                        placeholder="Doe" required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email" name="email" type="email"
                        value={formData.email} onChange={handleChange}
                        placeholder="john@example.com" required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={formData.phone} onChange={handleChange}
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="reason">Reason for Contact</label>
                    <select
                      id="reason" name="reason"
                      value={formData.reason} onChange={handleChange}
                      required
                    >
                      <option value="">Select a reason...</option>
                      {contactReasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={formData.message} onChange={handleChange}
                      placeholder="Tell us about your shipment requirements or how we can help…"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" arrow>Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
