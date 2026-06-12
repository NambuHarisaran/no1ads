import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LINKS = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Work', '/work'],
  ['Contact', '/contact'],
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
          <Link to="/" className="nav-logo" aria-label="Number One Ads — home">
            <img src="/assets/logo.png" alt="number one ads" />
          </Link>
          <ul className="nav-links">
            {LINKS.map(([label, href]) => (
              <li key={label}>
                <NavLink to={href} end={href === '/'} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="nav-cta" to="/contact">Get in Touch</Link>
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
          <NavLink
            key={label}
            to={href}
            end={href === '/'}
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contact" onClick={() => setOpen(false)} style={{ color: 'var(--orange)' }}>Get in Touch</Link>
      </div>
    </>
  );
}
