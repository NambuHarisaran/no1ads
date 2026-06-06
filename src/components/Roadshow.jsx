import { useRef, useCallback } from "react";

const metrics = [
  {
    number: "50+",
    title: "CITIES EXECUTED",
    sub: "Coordinated campaigns coast to coast"
  },
  {
    number: "100+",
    title: "ROADSHOWS RUN",
    sub: "Street-level brand experiences delivered"
  },
  {
    number: "1:1",
    title: "DIRECT ENGAGEMENT",
    sub: "Real people, real interaction, real results"
  }
];

function Roadshow() {
  const sectionRef = useRef(null);

  // W1 — Cursor spotlight on dark sections
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spot-x", `${x}px`);
    e.currentTarget.style.setProperty("--spot-y", `${y}px`);
  }, []);

  return (
    <section
      id="roadshow"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="roadshow-section"
      style={{
        background: "var(--bg-ink)",
        position: "relative",
        overflow: "hidden",
        padding: "var(--section-v) var(--section-h)"
      }}
    >
      {/* Ambient glow backgrounds */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,159,5,0.12) 0%, transparent 70%)",
          top: -200,
          right: -200,
          pointerEvents: "none"
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,110,34,0.08) 0%, transparent 70%)",
          bottom: -200,
          left: -100,
          pointerEvents: "none"
        }}
      />

      <div
        className="roadshow-layout"
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          position: "relative",
          zIndex: 10
        }}
      >
        {/* LEFT — Headline + CTA */}
        <div data-reveal>
          <span
            className="section-label"
            style={{ color: "var(--gold)" }}
          >
            SIGNATURE SERVICE
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4.5vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.05
            }}
          >
            <span style={{ color: "white" }}>Roadshows that turn</span>
            <br />
            <em className="gradient-text">streets into brand stages.</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(250, 250, 247, 0.62)",
              maxWidth: 480,
              lineHeight: 1.7,
              margin: "24px 0 40px"
            }}
          >
            We conceptualize, route-plan, execute, and amplify roadshows that put your brand in
            front of real people with cinematic on-ground experiences.
          </p>

          <a href="#contact" className="btn-outline-light">
            Book a Roadshow →
          </a>
        </div>

        {/* RIGHT — Metric rows */}
        <div data-reveal data-reveal-delay="2">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className="roadshow-metric"
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 16,
                padding: "28px 0",
                borderBottom:
                  index < metrics.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.08)"
                    : "none"
              }}
              onMouseEnter={(e) => {
                const num = e.currentTarget.querySelector(".metric-number");
                if (num) {
                  num.style.background = "linear-gradient(135deg, var(--gold), var(--orange))";
                  num.style.webkitBackgroundClip = "text";
                  num.style.webkitTextFillColor = "transparent";
                  num.style.webkitTextStroke = "0";
                }
              }}
              onMouseLeave={(e) => {
                const num = e.currentTarget.querySelector(".metric-number");
                if (num) {
                  num.style.background = "none";
                  num.style.webkitBackgroundClip = "unset";
                  num.style.webkitTextFillColor = "transparent";
                  num.style.webkitTextStroke = "1px rgba(255, 255, 255, 0.3)";
                }
              }}
            >
              <span
                className="metric-number"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 56,
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
                  transition: "all 0.3s ease",
                  lineHeight: 1,
                  flexShrink: 0,
                  minWidth: 100
                }}
              >
                {metric.number}
              </span>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "0.04em"
                  }}
                >
                  {metric.title}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 11,
                    color: "rgba(250, 250, 247, 0.4)",
                    marginTop: 4
                  }}
                >
                  {metric.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cursor spotlight overlay */}
      <style>{`
        .roadshow-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--spot-x, 50%) var(--spot-y, 50%),
            rgba(242, 159, 5, 0.06) 0%,
            transparent 60%
          );
          pointer-events: none;
          z-index: 5;
        }
        .roadshow-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .roadshow-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .metric-number {
            font-size: 40px !important;
            min-width: 72px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Roadshow;
