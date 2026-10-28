import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText.jsx';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './SocialIcons.jsx';
import { site, displayPhone, whatsappLink } from '../data/siteConfig.js';

const NAV = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Work', '/work'],
  ['Contact', '/contact'],
];

const SERVICE_LINKS = [
  ['Creative Design', '/services/creative-design'],
  ['Digital Marketing', '/services/digital-marketing'],
  ['LED Signage', '/services/led-signage'],
  ['ACP Elevation', '/services/acp-elevation'],
  ['Exhibition Stalls', '/services/exhibition-stalls'],
  ['Roadshow & Outdoor', '/services/roadshow-outdoor'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Number One Ads — home">
            <img src="/assets/logo.png" alt="Number One Ads logo" />
          </Link>
          <p className="footer-tagline">
            Madurai's 360° advertising agency. Twenty-five years of design, signage,
            branding and on-ground execution across Tamil Nadu.
          </p>
          <div className="social-links">
            {site.social.facebook && (
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            )}
            {site.social.instagram && (
              <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            )}
            {site.social.youtube && (
              <a href={site.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            )}
          </div>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h3 className="footer-col-title">Explore</h3>
          <ul>
            {NAV.map(([label, href]) => (
              <li key={label}><Link to={href}>{label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h3 className="footer-col-title">Services</h3>
          <ul>
            {SERVICE_LINKS.map(([label, href]) => (
              <li key={label}><Link to={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Get in Touch</h3>
          <ul>
            {site.phone && (
              <li><a href={`tel:${site.phone}`}>{displayPhone()}</a></li>
            )}
            {site.phoneSecondary && (
              <li><a href={`tel:${site.phoneSecondary}`}>{displayPhone(site.phoneSecondary)}</a></li>
            )}
            {whatsappLink() && (
              <li><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp us</a></li>
            )}
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>
              <span>
                {site.streetAddress ? `${site.streetAddress}, ` : ''}
                {site.locality}{site.postalCode ? ` — ${site.postalCode}` : ''}, {site.region}, India
              </span>
            </li>
            <li><Link to="/contact" className="footer-cta-link">Start a project →</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} Number One Ads. All rights reserved.</span>
        <ShinyText text="25 YEARS OF LEGACY" speed={7} color="#808080" shineColor="#FFFFFF" />
      </div>
    </footer>
  );
}
