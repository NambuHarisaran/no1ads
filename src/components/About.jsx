const info = [
  ["FOUNDED", "2010 · 15 Years in Market"],
  ["HQ", "Chennai, Tamil Nadu"],
  ["TEAM", "48 Creative Specialists"]
];

const sectors = [
  { name: "FMCG", size: "large" },
  { name: "Automotive", size: "large" },
  { name: "Real Estate", size: "large" },
  { name: "Food & Beverage", size: "medium" },
  { name: "Healthcare", size: "medium" },
  { name: "Retail", size: "medium" },
  { name: "Technology", size: "small" },
  { name: "Education", size: "small" }
];

const sizeMap = { large: 18, medium: 15, small: 13 };

function About() {
  return (
    <>
      {/* ─── ABOUT SECTION ─── */}
      <section
        id="about"
        style={{
          background: "var(--bg-alt)",
          padding: "var(--section-v) var(--section-h)"
        }}
      >
        <div className="about-layout" style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          {/* LEFT COLUMN */}
          <div data-reveal>
            <span className="section-label">ABOUT US</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.08
              }}
            >
              We are NO1ADS.
              <br />
              <em className="gradient-text">A creative powerhouse.</em>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginTop: 24,
                maxWidth: 520
              }}
            >
              From local legends to national campaigns, we build brand systems that look powerful,
              feel premium, and perform in market. Our South-Indian creative DNA gives us speed,
              craft, and cultural precision. Our global ambition keeps our standards uncompromising.
            </p>

            {/* Info table */}
            <div style={{ marginTop: 36, maxWidth: 520 }}>
              {info.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 24,
                    padding: "18px 0",
                    borderBottom: "1px solid var(--border-subtle)"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      color: "var(--text-muted)",
                      width: 130,
                      flexShrink: 0,
                      textTransform: "uppercase"
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--text-primary)"
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div data-reveal data-reveal-delay="2" className="about-right">
            {/* Decorative vertical line */}
            <div
              aria-hidden="true"
              style={{
                width: 1,
                height: 80,
                background: "linear-gradient(to bottom, var(--gold), var(--orange))",
                marginBottom: 20
              }}
            />

            {/* Big stat number */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
              <img
                src="/25.png"
                alt="25"
                className="about-big-img"
                style={{
                  height: "160px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block"
                }}
              />
              <span
                className="gradient-text"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 80,
                  fontWeight: 900,
                  lineHeight: 1
                }}
              >
                +
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 12,
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginTop: 8,
                textTransform: "uppercase"
              }}
            >
              Years building brands.
            </p>

            {/* Secondary stat badges */}
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              {["48 specialists", "12+ cities"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-pill)",
                    padding: "10px 18px",
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-secondary)"
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES SECTION ─── */}
      <section
        style={{
          background: "var(--bg-page)",
          padding: "var(--section-v) var(--section-h)"
        }}
      >
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <div data-reveal>
            <span className="section-label">SECTORS</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 64px)",
                fontWeight: 700
              }}
            >
              Industries we've shaped.
            </h2>
          </div>

          <div
            data-reveal
            data-reveal-delay="2"
            className="industry-tags"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 48
            }}
          >
            {sectors.map((sector) => (
              <span
                key={sector.name}
                className="industry-tag"
                style={{
                  border: "1.5px solid var(--border-medium)",
                  borderRadius: "var(--radius-pill)",
                  padding: "12px 22px",
                  fontFamily: "var(--font-body)",
                  fontSize: sizeMap[sector.size],
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  cursor: "default",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "var(--bg-ink)";
                  e.currentTarget.style.background = "var(--bg-ink)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border-medium)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {sector.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-layout {
          display: grid;
          grid-template-columns: 0.55fr 0.45fr;
          gap: 64px;
          align-items: start;
        }
        .about-big-img {
          height: 160px;
        }
        @media (max-width: 767px) {
          .about-layout {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .about-right {
            margin-top: 40px;
          }
          .about-big-img {
            height: 110px !important;
          }
          .industry-tags .industry-tag {
            padding: 10px 16px !important;
          }
        }
      `}</style>
    </>
  );
}

export default About;
