const serviceItems = [
  {
    number: "01",
    title: "Creative Design & Development",
    description: "Identity systems, campaigns, and visuals that stop the scroll."
  },
  {
    number: "02",
    title: "Digital Marketing",
    description: "Performance media, social strategy, and growth-first storytelling."
  },
  {
    number: "03",
    title: "Exhibition Design & Conduction",
    description: "Built-to-impress stalls and immersive trade event experiences."
  },
  {
    number: "04",
    title: "Event Planning & Execution",
    description: "End-to-end event orchestration with flawless on-ground execution."
  },
  {
    number: "05",
    title: "Roadshow & Outdoor Media",
    description: "Mobile brand activations engineered for impact and reach."
  },
  {
    number: "06",
    title: "Retail Branding",
    description: "Storefront and in-store systems that drive walk-ins and conversion."
  },
  {
    number: "07",
    title: "Signage Solutions",
    description: "High-visibility signage crafted for durability and attention."
  },
  {
    number: "08",
    title: "Printing & Production",
    description: "Premium print collateral with precision finish and color control."
  }
];

function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "var(--section-v) var(--section-h)",
        background: "var(--bg-page)"
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Section header */}
        <div data-reveal>
          <span className="section-label">CAPABILITIES</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.08,
              maxWidth: 600,
            }}
          >
            Eight disciplines.
            <br />
            <em>One partner.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "var(--text-muted)",
              marginBottom: 56,
              marginTop: 12
            }}
          >
            Zero compromises.
          </p>
        </div>

        {/* Service Grid */}
        <div className="services-grid">
          {serviceItems.map((service, index) => {
            const featured = index < 2;

            return (
              <article
                key={service.number}
                data-reveal
                data-reveal-delay={String(Math.min(index + 1, 5))}
                className={featured ? "service-card-featured" : "service-card-standard"}
                style={{
                  gridColumn: featured ? "span 2" : "span 1",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  ...(featured
                    ? {
                        background: "var(--bg-ink)",
                        color: "white",
                        minHeight: 260,
                        padding: "40px 36px",
                        transition: "background 0.3s ease"
                      }
                    : {
                        background: "var(--bg-card-warm)",
                        minHeight: 200,
                        padding: "32px 28px",
                        transition: "background 0.25s ease, transform 0.25s ease"
                      })
                }}
                onMouseEnter={(e) => {
                  if (featured) {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%)";
                  } else {
                    e.currentTarget.style.background = "var(--bg-gold-tint)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    const name = e.currentTarget.querySelector(".service-name");
                    if (name) name.style.color = "var(--orange)";
                    const arrow = e.currentTarget.querySelector(".service-arrow");
                    if (arrow) {
                      arrow.style.color = "var(--orange)";
                      arrow.style.transform = "translate(3px, -3px)";
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  if (featured) {
                    e.currentTarget.style.background = "var(--bg-ink)";
                  } else {
                    e.currentTarget.style.background = "var(--bg-card-warm)";
                    e.currentTarget.style.transform = "translateY(0)";
                    const name = e.currentTarget.querySelector(".service-name");
                    if (name) name.style.color = "var(--text-primary)";
                    const arrow = e.currentTarget.querySelector(".service-arrow");
                    if (arrow) {
                      arrow.style.color = "var(--border-medium)";
                      arrow.style.transform = "translate(0, 0)";
                    }
                  }
                }}
              >
                {/* Decorative corner number for featured cards */}
                {featured && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: -20,
                      right: -10,
                      fontFamily: "var(--font-display)",
                      fontSize: 180,
                      fontWeight: 900,
                      color: "rgba(255, 255, 255, 0.04)",
                      pointerEvents: "none",
                      lineHeight: 1
                    }}
                  >
                    {service.number}
                  </span>
                )}

                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: featured ? "var(--gold)" : "var(--text-muted)",
                    marginBottom: 16
                  }}
                >
                  {service.number}
                </p>

                <div style={{ marginTop: "auto" }}>
                  <h3
                    className="service-name"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: featured ? 26 : 20,
                      fontWeight: 700,
                      color: featured ? "white" : "var(--text-primary)",
                      lineHeight: featured ? 1.15 : 1.2,
                      margin: featured ? "0 0 12px" : "10px 0 10px",
                      transition: "color 0.3s ease"
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: featured ? 14 : 13,
                      color: featured ? "rgba(250,250,247,0.6)" : "var(--text-secondary)",
                      lineHeight: 1.6,
                      maxWidth: 280
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <span
                  className="service-arrow"
                  style={{
                    position: "absolute",
                    bottom: featured ? 36 : 28,
                    right: featured ? 36 : 28,
                    fontSize: featured ? 20 : 18,
                    color: featured ? "var(--orange)" : "var(--border-medium)",
                    transition: "transform 0.3s ease, color 0.2s ease"
                  }}
                >
                  →
                </span>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border-subtle);
        }
        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .service-card-featured {
            grid-column: span 1 !important;
            min-height: 200px !important;
            padding: 28px 20px !important;
          }
          .service-card-featured .service-name {
            font-size: 20px !important;
          }
          .service-card-standard {
            min-height: 160px !important;
            padding: 24px 16px !important;
          }
          .service-card-standard .service-name {
            font-size: 16px !important;
          }
        }
        @media (max-width: 399px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Services;
