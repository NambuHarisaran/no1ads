import { useState } from 'react';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';
import { FacebookIcon, InstagramIcon } from './SocialIcons.jsx';
import { site, displayPhone, whatsappLink } from '../data/siteConfig.js';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);

function Field({ label, name, type = 'text', textarea = false, required = false }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {focused ? (
          <ShinyText text={label} speed={2} color="#808080" shineColor="#E87722" />
        ) : (
          label
        )}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
}

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact({ showHeading = true }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;

    const form = e.target;
    const data = new FormData(form);

    // Honeypot: real users leave this empty; bots fill it.
    if (data.get('botcheck')) return;

    if (!WEB3FORMS_KEY) {
      setStatus('error');
      setError('Form is not configured yet. Please email contact@no1ads.in directly.');
      return;
    }

    data.append('access_key', WEB3FORMS_KEY);
    data.append('subject', 'New enquiry from no1ads.in');
    data.append('from_name', 'Number One Ads Website');

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please check your connection and try again.');
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            {showHeading && (
              <Reveal>
                <div className="section-label">
                  <ShinyText text="READY TO BUILD SOMETHING GREAT?" speed={5} color="#E87722" shineColor="#FFFFFF" />
                </div>
                <h2 className="contact-headline">
                  <SplitText
                    text="Let's Talk."
                    splitType="chars"
                    delay={40}
                    duration={0.7}
                    ease="power3.out"
                    tag="span"
                  />
                </h2>
              </Reveal>
            )}
            {!showHeading && (
              <Reveal>
                <p className="contact-intro">
                  Tell us about your brand, your site and your timeline. We reply fast and,
                  for local projects, can visit to measure and quote in person.
                </p>
              </Reveal>
            )}
            <Reveal className="contact-info" stagger={120}>
              <div className="contact-info-item">
                <PinIcon />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
              {site.phone && (
                <div className="contact-info-item">
                  <PhoneIcon />
                  <span className="contact-phones">
                    <a href={`tel:${site.phone}`} className="ghost-link">{displayPhone()}</a>
                    {site.phoneSecondary && (
                      <a href={`tel:${site.phoneSecondary}`} className="ghost-link">{displayPhone(site.phoneSecondary)}</a>
                    )}
                  </span>
                </div>
              )}
              <div className="contact-info-item">
                <MailIcon />
                <a href="mailto:contact@no1ads.in" className="ghost-link">contact@no1ads.in</a>
              </div>
              <div className="contact-info-item">
                <div className="social-links">
                  <a href="https://www.facebook.com/no1teleadvertisors" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.instagram.com/no1teleadvertisers" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                </div>
                <span>@no1teleadvertisers</span>
              </div>
            </Reveal>
          </div>
          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Message" name="message" textarea required />
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
              aria-hidden="true"
            />
            <button type="submit" className="btn-orange" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>
            {status === 'success' && (
              <p className="form-status form-status-success" role="status">
                Thanks! Your message has been sent — we'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error" role="alert">
                {error}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
