import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TrueFocus from '../components/TrueFocus.jsx';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';

const TICKER_ITEMS = [
  'CREATIVE DESIGN & DEVELOPMENT', 'DIGITAL MARKETING', 'EXHIBITION DESIGN & CONDUCTION',
  'EVENT PLANNING', 'ROADSHOW & OUTDOOR MEDIA SOLUTIONS', 'RETAIL BRANDING',
  'SIGNAGE SOLUTIONS', 'PRINTING',
];

// `years` is flagged so the phone layout can drop it — the 25 badge says it.
const HERO_STATS = [
  { value: '25+', label: 'Years of legacy', years: true },
  { value: '3000+', label: 'Projects delivered' },
  { value: '2000+', label: 'Brands served' },
];

export default function Hero() {
  const tickerText = TICKER_ITEMS.map(s => `${s} · `).join('');
  // Start at the server value (desktop) so the first client render matches the
  // prerendered HTML, then refine after mount — avoids a hydration mismatch.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow--visual" />
        <div className="hero-glow hero-glow--corner" />
      </div>

      <div className="hero-inner">
        <div className="hero-label">
          <span className="hero-label-dot" aria-hidden="true" />
          <ShinyText text="EST. 2000 · MADURAI, INDIA" speed={4} color="#808080" shineColor="#FFFFFF" />
        </div>

        <h1 className="sr-only">
          Number One Ads — 360° Advertising Agency in Madurai, Tamil Nadu
        </h1>
        <div className="hero-headline" aria-hidden="true">
          <TrueFocus
            sentence="360° ADVERTISING AGENCY"
            manualMode={false}
            blurAmount={isMobile ? 2 : 4}
            borderColor="#E87722"
            glowColor="rgba(232,119,34,0.5)"
            animationDuration={1.3}
            pauseBetweenAnimations={0.8}
          />
        </div>

        <div className="hero-sub">
          <SplitText
            text="25 years of precision, creativity & legacy"
            splitType="chars"
            delay={isMobile ? 15 : 25}
            duration={0.6}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            textAlign="left"
            tag="p"
          />
        </div>

        <div className="hero-ctas">
          <Link to="/work" className="btn-orange hero-cta-primary">Explore Our Work</Link>
          <Link to="/about" className="hero-cta-secondary">Our Story →</Link>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true">
            <span className="hero-orbit-ring hero-orbit-ring--outer" />
            <span className="hero-orbit-ring hero-orbit-ring--inner" />
            <span className="hero-orbit-dot" />
          </div>
          <img
            className="hero-badge-img"
            src="/assets/25.png"
            alt="25 Years of Legacy"
            width="1565"
            height="1561"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <ul className="hero-stats" aria-label="Number One Ads at a glance">
          {HERO_STATS.map(s => (
            <li key={s.label} className={`hero-stat ${s.years ? 'hero-stat--years' : ''}`}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>{tickerText}</span>
          <span>{tickerText}</span>
        </div>
      </div>
    </section>
  );
}
