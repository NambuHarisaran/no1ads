import TrueFocus from '../components/TrueFocus.jsx';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';

const TICKER_ITEMS = [
  'CREATIVE DESIGN & DEVELOPMENT', 'DIGITAL MARKETING', 'EXHIBITION DESIGN & CONDUCTION',
  'EVENT PLANNING', 'ROADSHOW & OUTDOOR MEDIA SOLUTIONS', 'RETAIL BRANDING',
  'SIGNAGE SOLUTIONS', 'PRINTING',
];

export default function Hero() {
  const tickerText = TICKER_ITEMS.map(s => `${s} · `).join('');

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-label">
            <ShinyText text="EST. 2000 · MADURAI, INDIA" speed={4} color="#808080" shineColor="#FFFFFF" />
          </div>
          <div className="hero-headline">
            <TrueFocus
              sentence="360° ADVERTISING AGENCY"
              manualMode={false}
              blurAmount={window.innerWidth <= 768 ? 2 : 4}
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
              delay={window.innerWidth <= 768 ? 15 : 25}
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
            <a href="#work" className="btn-orange">Explore Our Work</a>
            <a href="#legacy" className="ghost-link">Our Story →</a>
          </div>
        </div>
        <div className="hero-badge">
          <img src="/assets/25.png" alt="25 Years of Legacy" />
        </div>
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
