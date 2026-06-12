import { useState } from 'react';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';
import { FacebookIcon, InstagramIcon } from './SocialIcons.jsx';

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

function Field({ label, name, type = 'text', textarea = false }) {
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
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
}

export default function Contact({ showHeading = true }) {
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
          <Reveal as="form" className="contact-form" onSubmit={e => e.preventDefault()}>
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Message" name="message" textarea />
            <button type="submit" className="btn-orange">Send Message →</button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
