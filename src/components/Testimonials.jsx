const featured = {
  quote: "Roadshow execution was flawless across cities. They think like owners, not vendors.",
  name: "Naveen Raj",
  role: "Director, SunPeak Consumer"
};

const testimonials = [
  {
    quote:
      "NO1ADS brought energy, speed, and strategic clarity. Our campaign performance jumped within weeks.",
    name: "Arvind Krishnan",
    role: "Brand Lead, South Blaze"
  },
  {
    quote:
      "From our exhibition pavilion to digital follow-up, every touchpoint felt premium and synchronized.",
    name: "Dharani Menon",
    role: "Marketing Head, Metro Build Expo"
  }
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "var(--bg-alt)",
        padding: "var(--section-v) var(--section-h)"
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Section header */}
        <div data-reveal>
          <span className="section-label">SOCIAL PROOF</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.08
            }}
          >
            What clients say.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontStyle: "italic",
              color: "var(--text-muted)",
              marginTop: 12,
              marginBottom: 56
            }}
          >
            From roadshows to rebrands — straight from the people we've worked with.
          </p>
        </div>

        {/* Testimonials layout */}
        <div className="testimonials-layout">
          {/* LEFT — Featured Quote */}
          <article
            data-reveal
            style={{
              background: "var(--bg-ink)",
              borderRadius: "var(--radius-lg)",
              padding: "48px 40px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            {/* Decorative "NO1" watermark */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -40,
                right: -20,
                fontFamily: "var(--font-display)",
                fontSize: 200,
                fontWeight: 900,
                color: "rgba(242, 110, 34, 0.06)",
                pointerEvents: "none",
                lineHeight: 1
              }}
            >
              NO1
            </span>

            <div>
              {/* Opening quote mark */}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 120,
                  fontWeight: 900,
                  color: "var(--orange)",
                  opacity: 0.4,
                  lineHeight: 0.7,
                  display: "block",
                  marginBottom: 16
                }}
              >
                "
              </span>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "white",
                  lineHeight: 1.55,
                  maxWidth: 340
                }}
              >
                {featured.quote}
              </p>
            </div>

            <div style={{ marginTop: 32 }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "white"
                }}
              >
                {featured.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: "rgba(250, 250, 247, 0.4)",
                  marginTop: 4,
                  textTransform: "uppercase"
                }}
              >
                {featured.role}
              </p>
            </div>
          </article>

          {/* RIGHT — Two stacked cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {testimonials.map((item) => (
              <article
                key={item.name}
                data-reveal
                data-reveal-delay="2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "32px 28px",
                  flex: 1,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = "var(--border-medium)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                {/* Opening quote mark */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 48,
                    color: "var(--gold)",
                    lineHeight: 0.8,
                    display: "block",
                    marginBottom: 12,
                    opacity: 0.6
                  }}
                >
                  "
                </span>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    fontSize: 15,
                    color: "var(--text-primary)",
                    lineHeight: 1.75
                  }}
                >
                  {item.quote}
                </p>

                <div
                  style={{
                    height: 1,
                    background: "var(--border-subtle)",
                    margin: "20px 0"
                  }}
                />

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-primary)"
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    marginTop: 4,
                    textTransform: "uppercase"
                  }}
                >
                  {item.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-layout {
          display: grid;
          grid-template-columns: 0.4fr 0.6fr;
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 767px) {
          .testimonials-layout {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .testimonials-layout > article:first-child {
            padding: 36px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
