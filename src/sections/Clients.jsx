import ShinyText from '../components/ShinyText.jsx';
import BrandLogo from '../components/BrandLogo.jsx';
import clients from '../data/clients.js';

export default function Clients() {
  // A scrolling ribbon of real client logos and wordmarks — the full logo wall lives on /about.
  const row = [...clients, ...clients];
  return (
    <section className="clients-section" aria-label="Clients we serve">
      <div className="container clients-head">
        <span className="section-label">
          <ShinyText text="3000+ PROJECTS · 2000+ CLIENTS · 25 YEARS" speed={6} color="#808080" shineColor="#E87722" />
        </span>
      </div>
      <div className="clients-marquee" aria-hidden="true">
        <div className="clients-track">
          {row.map((c, i) => (
            <span className={`client-chip ${c.logo ? 'client-chip--logo' : ''}`} key={`${c.slug}-${i}`} title={c.name}>
              <BrandLogo src={c.logo} name={c.name} className="client-chip-brand" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
