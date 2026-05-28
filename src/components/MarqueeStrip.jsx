function MarqueeStrip() {
  const clients = ["TATA", "IBRIZZ", "SASTHA OIL", "CLIENT CO", "BRAND X", "METRO BUILD", "SOUTH STAR"];

  return (
    <section 
      className="border-t border-b py-6 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-elevated)",
        borderColor: "var(--border-subtle)"
      }}
    >
      <div className="ticker-track-reverse flex min-w-max items-center">
        {[...clients, ...clients, ...clients].map((client, index) => (
          <span
            key={`${client}-${index}`}
            className="px-7 font-body text-xs uppercase tracking-[0.15em] transition duration-300 cursor-default"
            style={{
              color: "var(--text-muted)",
              opacity: 0.6
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent-fire)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.opacity = "0.6";
            }}
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}

export default MarqueeStrip;
