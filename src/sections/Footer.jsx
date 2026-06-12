import ShinyText from '../components/ShinyText.jsx';

const LINKS = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Work', '#work'],
  ['Legacy', '#legacy'],
  ['Contact', '#contact'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <a href="#home" className="footer-logo" aria-label="Number One Ads — home">
          <img src="/assets/logo.png" alt="number one ads" />
        </a>
        <ul className="footer-links">
          {LINKS.map(([label, href]) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <span className="footer-copy">© 2026 Number One Ads. All rights reserved.</span>
      </div>
      <div className="footer-legacy">
        <ShinyText text="25 YEARS OF LEGACY" speed={7} color="#808080" shineColor="#FFFFFF" />
      </div>
    </footer>
  );
}
