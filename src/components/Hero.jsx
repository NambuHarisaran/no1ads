import { useEffect, useRef } from "react";
import AnimatedCounter from "./ui/AnimatedCounter";

const services = [
  "BRANDING",
  "ROADSHOWS",
  "EXHIBITIONS",
  "DIGITAL",
  "PRINT",
  "EVENTS",
  "OUTDOOR",
  "RETAIL"
];

const stats = [
  { value: 3000, suffix: "+", label: "Projects" },
  { value: 2000, suffix: "+", label: "Clients" },
  { value: 25, suffix: "+", label: "Years" },
  { value: 98, suffix: "%", label: "Retention" }
];

const heroStatCards = [
  { number: "3,000+", label: "PROJECTS", color: "var(--orange)", top: 48, left: 0 },
  { number: "98%", label: "RETENTION", color: "var(--gold)", top: 180, left: 40 },
  { number: "25+", label: "YEARS", color: "var(--text-primary)", bottom: 48, left: 0 }
];

function TickerSeparator() {
  return (
    <span
      style={{
        color: "var(--gold)",
        fontSize: 16,
        margin: "0 32px",
        display: "inline-block",
        transform: "scaleY(0.6)",
        opacity: 0.8
      }}
    >
      ◆
    </span>
  );
}

function Hero() {
  const cardsRef = useRef([]);

  // Parallax effect on hero stat cards
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      cards.forEach((card, i) => {
        const speed = (i + 1) * 0.05;
        card.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Word stagger for headline
  const line1Words = ["We", "make", "brands"];
  const line2Words = ["Unstoppable."];

  return (
    <>
      <section
        id="home"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 70% 40%, rgba(242,159,5,0.06) 0%, rgba(242,110,34,0.04) 40%, transparent 70%), var(--bg-page)`,
          minHeight: "100dvh",
          display: "grid",
          gridTemplateRows: "1fr auto",
          padding: `140px var(--section-h) 0`,
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Hero content grid */}
        <div
          className="section-shell"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "center",
            gap: 40,
            width: "100%",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            padding: 0
          }}
        >
          {/* Desktop: 2-column layout */}
          <div
            style={{
              display: "grid",
              gap: 40,
              alignItems: "center"
            }}
            className="hero-inner-grid"
          >
            {/* LEFT COLUMN */}
            <div style={{ position: "relative", zIndex: 10 }}>
              <span className="section-label">NO1ADS · CHENNAI · EST. 2010</span>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(48px, 6.5vw, 96px)",
                  lineHeight: 1.0,
                  marginBottom: 28,
                  color: "var(--text-primary)"
                }}
              >
                {line1Words.map((word, i) => (
                  <span
                    key={i}
                    className="hero-word"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    {word}{" "}
                  </span>
                ))}
                <br />
                {line2Words.map((word, i) => (
                  <span
                    key={`l2-${i}`}
                    className="hero-word gradient-text"
                    style={{
                      animationDelay: `${(line1Words.length + i) * 0.12}s`,
                      fontStyle: "italic"
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h1>

              <p
                data-reveal
                data-reveal-delay="2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  color: "var(--text-secondary)",
                  maxWidth: 480,
                  lineHeight: 1.7,
                  marginBottom: 44
                }}
              >
                360° full-service advertising — Creative, Digital, Outdoor, Events, Print.
              </p>

              <div
                data-reveal
                data-reveal-delay="3"
                className="hero-cta-row"
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap"
                }}
              >
                <a href="#contact" className="btn-primary">
                  Start a Project →
                </a>
                <a href="#work" className="btn-secondary">
                  View Our Work
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN — editorial typographic composition */}
            <div
              className="hero-right-col"
              style={{
                position: "relative",
                height: 440
              }}
            >
              {/* Big decorative outline image watermark */}
              <img
                src="/25.png"
                alt="25 Years"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  maxHeight: "340px",
                  width: "auto",
                  opacity: 0.08,
                  pointerEvents: "none",
                  zIndex: 1,
                  mixBlendMode: "luminosity"
                }}
              />

              {/* Thin gold vertical line */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: 80,
                  top: "20%",
                  height: "60%",
                  width: 1,
                  background: "linear-gradient(to bottom, transparent, var(--gold), transparent)"
                }}
              />

              {/* Floating stat cards */}
              {heroStatCards.map((card, i) => (
                <div
                  key={card.label}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="hero-stat-card"
                  style={{
                    position: "absolute",
                    top: card.top,
                    bottom: card.bottom,
                    left: card.left,
                    background: "white",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "20px 24px",
                    boxShadow: "var(--shadow-sm)",
                    cursor: "default",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    zIndex: 5
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform += " translateY(-4px)";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 32,
                      fontWeight: 900,
                      color: card.color,
                      lineHeight: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: "2px"
                    }}
                  >
                    {card.number === "25+" ? (
                      <>
                        <img
                          src="/25.png"
                          alt="25"
                          style={{
                            height: "26px",
                            width: "auto",
                            display: "inline-block",
                            objectFit: "contain",
                            verticalAlign: "middle"
                          }}
                        />
                        <span style={{ fontSize: "26px", lineHeight: 1 }}>+</span>
                      </>
                    ) : (
                      card.number
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      marginTop: 4
                    }}
                  >
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TICKER — sibling AFTER hero content, NOT inside it */}
        <div
          className="hero-ticker"
          style={{
            width: "100%",
            overflow: "hidden",
            background: "var(--bg-ink)",
            padding: "14px 0",
            marginTop: 48
          }}
        >
          <div
            className="ticker-track"
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              gap: 0,
              minWidth: "max-content"
            }}
          >
            {[...services, ...services, ...services].map((service, index) => (
              <span key={`${service}-${index}`} style={{ display: "inline-flex", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(250, 250, 247, 0.55)"
                  }}
                >
                  {service}
                </span>
                <TickerSeparator />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / PROOF BAR */}
      <section
        style={{
          background: "var(--bg-alt)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "52px var(--section-h)"
        }}
      >
        <div
          className="section-shell"
          style={{ padding: 0 }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-item"
                style={{ textAlign: "center" }}
              >
                <div
                  className="stat-number"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(40px, 4.5vw, 64px)",
                    fontWeight: 900,
                    color: "var(--text-primary)",
                    lineHeight: 1,
                    transition: "all 0.3s ease",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {stat.value === 25 ? (
                    <div style={{ display: "inline-flex", alignItems: "center", height: "clamp(40px, 4.5vw, 64px)", gap: "2px" }}>
                      <img
                        src="/25.png"
                        alt="25"
                        style={{
                          height: "90%",
                          width: "auto",
                          objectFit: "contain",
                          verticalAlign: "middle"
                        }}
                      />
                      <span style={{ fontSize: "80%", lineHeight: 1 }}>+</span>
                    </div>
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginTop: 6
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        .hero-inner-grid {
          grid-template-columns: 58% 42%;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-item {
          border-right: 1px solid var(--border-subtle);
        }
        .stat-item:last-child {
          border-right: none;
        }
        .stat-item:hover .stat-number {
          background: linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 767px) {
          .hero-inner-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right-col {
            display: none !important;
          }
          #home {
            padding: 100px 20px 0 !important;
            min-height: auto !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
          }
          .hero-cta-row .btn-primary,
          .hero-cta-row .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .hero-ticker {
            margin-top: 40px !important;
            width: 100vw !important;
            margin-left: -20px !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .stat-item {
            border-right: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;
