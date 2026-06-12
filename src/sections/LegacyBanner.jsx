import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';

const Flame = () => (
  <svg width="220" height="320" viewBox="0 0 110 160" fill="none" aria-hidden="true">
    <path
      d="M38 152 C18 120 26 92 44 70 C58 53 64 34 58 8 C76 28 84 52 78 76 C90 66 96 52 94 36 C108 64 110 100 92 126 C78 146 58 156 38 152 Z"
      fill="#FFFFFF"
    />
  </svg>
);

export default function LegacyBanner() {
  return (
    <section className="legacy-banner">
      <div className="legacy-ghost" aria-hidden="true">25</div>
      <div className="legacy-flame"><Flame /></div>
      <div className="legacy-content">
        <div className="legacy-eyebrow">
          <ShinyText text="A LEGACY BUILT ON" speed={5} color="#FFFFFF" shineColor="#FFE3CC" />
        </div>
        <h2 className="legacy-headline">
          <SplitText
            text="TRUST, CRAFT & COMMITMENT"
            splitType="chars"
            delay={20}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            tag="span"
          />
        </h2>
        <p className="legacy-sub">Since 2000 — Madurai's Most Trusted Advertising Partner</p>
      </div>
    </section>
  );
}
