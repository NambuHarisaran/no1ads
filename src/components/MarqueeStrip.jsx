const row1Clients = [
  "South Star",
  "Tata",
  "IBrizz",
  "Sastha Oil",
  "SunPeak Consumer",
  "Metro Build Expo",
  "South Blaze",
  "Naveen Brands"
];

const row2Clients = [
  "FMCG Sector",
  "Automotive",
  "Real Estate",
  "Healthcare",
  "Education",
  "Retail",
  "Technology",
  "Food & Bev"
];

function ClientBadge({ name }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-sm)",
        padding: "10px 18px",
        marginRight: 16,
        boxShadow: "var(--shadow-xs)",
        cursor: "default",
        transition: "all 0.25s ease",
        flexShrink: 0,
        whiteSpace: "nowrap"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--orange)";
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        const dot = e.currentTarget.querySelector(".client-dot");
        if (dot) {
          dot.style.background = "var(--orange)";
          dot.style.opacity = "1";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
        e.currentTarget.style.color = "var(--text-secondary)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-xs)";
        const dot = e.currentTarget.querySelector(".client-dot");
        if (dot) {
          dot.style.background = "var(--gold)";
          dot.style.opacity = "0.6";
        }
      }}
    >
      <span
        className="client-dot"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--gold)",
          opacity: 0.6,
          flexShrink: 0,
          transition: "all 0.25s ease"
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-secondary)",
          letterSpacing: "0.03em",
          textTransform: "uppercase"
        }}
      >
        {name}
      </span>
    </span>
  );
}

function MarqueeStrip() {
  const duplicatedRow1 = [...row1Clients, ...row1Clients];
  const duplicatedRow2 = [...row2Clients, ...row2Clients];

  return (
    <section
      style={{
        background: "var(--bg-page)",
        padding: "40px 0",
        overflow: "hidden"
      }}
    >
      {/* Row 1 — scrolls LEFT */}
      <div
        className="ticker-track"
        style={{
          display: "flex",
          alignItems: "center",
          minWidth: "max-content"
        }}
      >
        {duplicatedRow1.map((client, index) => (
          <ClientBadge key={`r1-${client}-${index}`} name={client} />
        ))}
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div
        className="ticker-track-reverse"
        style={{
          display: "flex",
          alignItems: "center",
          minWidth: "max-content",
          marginTop: 16
        }}
      >
        {duplicatedRow2.map((client, index) => (
          <ClientBadge key={`r2-${client}-${index}`} name={client} />
        ))}
      </div>
    </section>
  );
}

export default MarqueeStrip;
