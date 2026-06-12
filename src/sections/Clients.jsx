import ShinyText from '../components/ShinyText.jsx';
import clients from '../data/clients.js';

export default function Clients() {
  // A scrolling ribbon of real client names — the full logo wall lives on /about.
  const names = clients.map(c => c.name);
  const row = [...names, ...names];
  return (
    <section className="clients-section" aria-label="Clients we serve">
      <div className="container clients-head">
        <span className="section-label">
          <ShinyText text="3000+ PROJECTS · 2000+ CLIENTS · 25 YEARS" speed={6} color="#808080" shineColor="#E87722" />
        </span>
      </div>
      <div className="clients-marquee" aria-hidden="true">
        <div className="clients-track">
          {row.map((name, i) => (
            <span className="client-chip" key={`${name}-${i}`}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
