import { useMemo, useState } from "react";

const filters = ["All", "Branding", "Print", "Digital", "Events", "Outdoor"];

const projects = [
  {
    id: 1,
    name: "South Blaze Rebrand",
    category: "Branding",
    image: "https://picsum.photos/seed/southblaze/600/800"
  },
  {
    id: 2,
    name: "Metro Fest Launch Film",
    category: "Digital",
    image: "https://picsum.photos/seed/metrofest/600/600"
  },
  {
    id: 3,
    name: "Retail Rush Visual Merch",
    category: "Branding",
    image: "https://picsum.photos/seed/retailrush/800/500"
  },
  {
    id: 4,
    name: "City Line Expo Pavilion",
    category: "Events",
    image: "https://picsum.photos/seed/cityline/600/800"
  },
  {
    id: 5,
    name: "SunPeak Packaging Series",
    category: "Print",
    image: "https://picsum.photos/seed/sunpeak/600/600"
  },
  {
    id: 6,
    name: "Road Rage Van Blitz",
    category: "Outdoor",
    image: "https://picsum.photos/seed/roadrage/800/500"
  }
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="work"
      style={{
        background: "var(--bg-alt)",
        padding: "var(--section-v) var(--section-h)"
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Section header */}
        <div data-reveal>
          <span className="section-label">PORTFOLIO</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.08
            }}
          >
            Our work.
          </h2>
        </div>

        {/* Filter tabs */}
        <div
          data-reveal
          data-reveal-delay="1"
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginTop: 28,
            marginBottom: 40
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              style={{
                background: activeFilter === filter ? "var(--bg-ink)" : "var(--bg-card)",
                color: activeFilter === filter ? "white" : "var(--text-secondary)",
                border: `1px solid ${activeFilter === filter ? "var(--bg-ink)" : "var(--border-subtle)"}`,
                borderRadius: "var(--radius-pill)",
                padding: "8px 18px",
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                minHeight: 44
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.borderColor = "var(--border-medium)";
                  e.target.style.color = "var(--text-primary)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.borderColor = "var(--border-subtle)";
                  e.target.style.color = "var(--text-secondary)";
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio masonry grid */}
        <div className="portfolio-masonry">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="portfolio-card"
              style={{
                breakInside: "avoid",
                marginBottom: 20,
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transition: "box-shadow 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.04)";
                const overlay = e.currentTarget.querySelector(".portfolio-overlay");
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
                const overlay = e.currentTarget.querySelector(".portfolio-overlay");
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                }}
              />

              {/* Category badge — always visible */}
              <span
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  background: "var(--bg-ink)",
                  color: "white",
                  fontFamily: "var(--font-label)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 2,
                  zIndex: 2
                }}
              >
                {project.category}
              </span>

              {/* Hover overlay */}
              <div
                className="portfolio-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 60%)",
                  opacity: 0,
                  transition: "opacity 0.35s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "24px 20px",
                  zIndex: 1
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    marginBottom: 4
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontStyle: "italic",
                    color: "white",
                    fontWeight: 700
                  }}
                >
                  {project.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-masonry {
          column-count: 2;
          column-gap: 20px;
        }
        @media (max-width: 767px) {
          .portfolio-masonry {
            column-count: 1;
          }
          .portfolio-card {
            margin-bottom: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
