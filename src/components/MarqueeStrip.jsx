function MarqueeStrip() {
  const clients = ["TATA", "IBRIZZ", "SASTHA OIL", "CLIENT CO", "BRAND X", "METRO BUILD", "SOUTH STAR"];

  return (
    <section className="border-b border-white/10 border-t border-white/10 bg-black py-6">
      <div className="overflow-hidden">
        <div className="ticker-track-reverse flex min-w-max items-center">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="grayscale px-7 font-accent text-sm uppercase tracking-[0.2em] text-white/70 transition duration-300 hover:grayscale-0 hover:text-brand-yellow"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarqueeStrip;
