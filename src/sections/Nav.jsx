import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    const onKeyDown = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="Number One Ads — home" onClick={() => setOpen(false)}>
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
      <div className={`mobile-overlay ${open ? 'open' : ''}`} aria-hidden={!open}>
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
        <Link to="/contact" onClick={() => setOpen(false)} className="mobile-overlay-cta">
          Get in Touch
        </Link>
      </div>
    </>
  );
}
