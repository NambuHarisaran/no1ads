import Reveal from '../components/Reveal.jsx';
import BrandLogo from '../components/BrandLogo.jsx';
import partners from '../data/partners.js';

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <Reveal>
          <p className="partners-eyebrow">OUR DIGITAL ADVERTISING PARTNERS</p>
        </Reveal>
        <Reveal className="partners-grid" stagger={100}>
          {partners.map(p => (
            <div className="partner-card" key={p.slug}>
              <BrandLogo src={`/partners/${p.slug}.webp`} name={p.name} className="partner-logo" />
              <span className="partner-note">{p.note}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
