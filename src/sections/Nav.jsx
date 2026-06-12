import { useEffect, useState } from 'react';

const LINKS = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Work', '#work'],
  ['Legacy', '#legacy'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo" aria-label="Number One Ads — home">
            <img src="/assets/logo.png" alt="number one ads" />
          </a>
          <ul className="nav-links">
            {LINKS.map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <a className="nav-cta" href="#contact">Get in Touch</a>
          <button
            className={`nav-burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-overlay ${open ? 'open' : ''}`}>
        {LINKS.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} style={{ color: 'var(--orange)' }}>Get in Touch</a>
      </div>
    </>
  );
}
