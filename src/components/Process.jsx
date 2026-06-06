const steps = [
  {
    id: "01",
    title: "Discover",
    description: "Learn your brand's context, category, competition, and customer truth."
  },
  {
    id: "02",
    title: "Strategize",
    description: "Map data-led creative strategy against your specific growth priorities."
  },
  {
    id: "03",
    title: "Execute",
    description: "Pixel-perfect production with strict quality control and speed."
  },
  {
    id: "04",
    title: "Grow",
    description: "Track outcomes, optimize, and scale only what works."
  }
];

function Process() {
  return (
    <section
      id="process"
      style={{
        background: "var(--bg-page)",
        padding: "var(--section-v) var(--section-h)"
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Section header */}
        <div data-reveal>
          <span className="section-label">METHODOLOGY</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.08
            }}
          >
            Our process.
          </h2>
        </div>

        {/* Step grid */}
        <div className="process-grid" data-reveal data-reveal-delay="2">
          {steps.map((step, index) => (
            <article
              key={step.id}
              className="process-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--bg-gold-tint)";
                const num = e.currentTarget.querySelector(".process-num");
                if (num) num.style.color = "var(--gold-glow)";
                const name = e.currentTarget.querySelector(".process-name");
                if (name) name.style.color = "var(--orange)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-page)";
                const num = e.currentTarget.querySelector(".process-num");
                if (num) num.style.color = "var(--border-subtle)";
                const name = e.currentTarget.querySelector(".process-name");
                if (name) name.style.color = "var(--text-primary)";
              }}
              style={{
                background: "var(--bg-page)",
                padding: "36px 28px",
                position: "relative",
                transition: "background 0.3s ease"
              }}
            >
              {/* Connector arrow (desktop only, on cards 1-3) */}
              {index < steps.length - 1 && (
                <span
                  className="process-connector"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 60,
                    right: -1,
                    color: "var(--border-medium)",
                    fontSize: 14,
                    zIndex: 2
                  }}
                >
                  →
                </span>
              )}

              <span
                className="process-num"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 88,
                  fontWeight: 900,
                  color: "var(--border-subtle)",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 20,
                  transition: "color 0.3s ease"
                }}
              >
                {step.id}
              </span>

              <h3
                className="process-name"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  marginBottom: 10,
                  transition: "color 0.3s ease"
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7
                }}
              >
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border-subtle);
          margin-top: 56px;
        }
        .process-connector {
          display: block;
        }
        @media (max-width: 767px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
          .process-card {
            padding: 28px 20px !important;
          }
          .process-num {
            font-size: 64px !important;
          }
          .process-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Process;
