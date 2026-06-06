const clients = [
  "South Star",
  "Tata",
  "IBrizz",
  "Sastha Oil",
  "SunPeak",
  "Metro Build Expo",
  "South Blaze",
  "Retail Rush",
  "City Line",
  "Tamil Fresh"
];

function Badge({ client }) {
  return (
    <span className="inline-flex items-center gap-2 rounded border border-[var(--border-light)] bg-[var(--bg-card)] px-5 py-2.5 font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-[var(--text-secondary)] shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--brand-orange)] hover:text-[var(--text-primary)]">
      {client}
      <span className="font-mono text-[10px] font-normal text-[var(--text-muted)]">BRAND</span>
    </span>
  );
}

function MarqueeStrip() {
  return (
    <section className="overflow-hidden bg-[var(--bg-primary)] py-8">
      <div className="ticker-track flex min-w-max items-center gap-6">
        {[...clients, ...clients].map((client, index) => (
          <Badge key={`${client}-a-${index}`} client={client} />
        ))}
      </div>
      <div className="ticker-track-reverse mt-5 flex min-w-max items-center gap-6">
        {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
          <Badge key={`${client}-b-${index}`} client={client} />
        ))}
      </div>
    </section>
  );
}

export default MarqueeStrip;
