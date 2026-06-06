import { useState } from "react";

const faqs = [
  {
    q: "What services does Number One Ads provide?",
    a: "Number One Ads is a full-service advertising and branding agency based in Chennai, India. We handle creative design and campaign development, digital marketing, exhibition design and conduction, event planning, roadshow and outdoor media activations, retail branding, signage solutions, and print production. Our model is built for brands that need one strategic partner from concept to execution, not disconnected vendors."
  },
  {
    q: "Why do brands choose NO1ADS for roadshows and on-ground campaigns?",
    a: "Brands choose NO1ADS for roadshows because we combine strategy, production, logistics, and real-time optimization under one roof. Our teams plan city routes, permissions, stage and vehicle branding, crew operations, and local engagement formats. We also connect roadshow activity with digital amplification so campaign momentum continues after on-ground interaction."
  },
  {
    q: "How does NO1ADS approach campaign execution for measurable growth?",
    a: "Our execution framework follows four steps: Discover, Strategize, Execute, and Grow. We begin by understanding business goals, audience, and market context. Next, we align creative and channel strategy around clear performance priorities. During execution, we run production with strict quality control and timeline discipline across every asset."
  },
  {
    q: "What is your typical project timeline from discovery to delivery?",
    a: "Project timelines vary based on scope, but typical campaigns span 6-12 weeks from strategic discovery to execution launch. Roadshows typically require 8-16 weeks for route planning, production, logistics, and crew hiring. We build flexibility into every timeline to accommodate brand feedback and market changes without compromising quality."
  },
  {
    q: "Do you work with international brands or only local clients?",
    a: "We work with both international brands entering India and leading Indian brands expanding regionally. Our South-Indian base gives us advantage in market dynamics, local partnerships, and cultural adaptation. We have successfully executed campaigns across 12+ cities and 5+ sectors with brands of all sizes."
  },
  {
    q: "What industries or sectors are you best suited for?",
    a: "We specialize in FMCG, automotive, real estate, food & beverage, healthcare, retail, technology, and education sectors. Our experience across these sectors helps us recognize market patterns, audience behaviors, and competitive pressures that inform our creative and strategic recommendations."
  }
];

function SeoFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      style={{
        background: "var(--bg-page)",
        padding: "var(--section-v) var(--section-h)"
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div data-reveal>
          <span className="section-label">FAQ</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.08
            }}
          >
            Questions brands ask us.
          </h2>
        </div>

        <div
          style={{
            marginTop: 48,
            borderTop: "1px solid var(--border-subtle)"
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="faq-question"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "24px 0",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    gap: 24
                  }}
                  onMouseEnter={(e) => {
                    const text = e.currentTarget.querySelector(".faq-q-text");
                    if (text) text.style.color = "var(--orange)";
                  }}
                  onMouseLeave={(e) => {
                    const text = e.currentTarget.querySelector(".faq-q-text");
                    if (text) text.style.color = "var(--text-primary)";
                  }}
                >
                  <span
                    className="faq-q-text"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      transition: "color 0.2s ease"
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* + / × icon */}
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        width: 14,
                        height: 1.5,
                        background: isOpen ? "var(--orange)" : "var(--text-muted)",
                        borderRadius: 1,
                        transition: "transform 0.25s ease, background 0.2s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        width: 14,
                        height: 1.5,
                        background: isOpen ? "var(--orange)" : "var(--text-muted)",
                        borderRadius: 1,
                        transition: "transform 0.25s ease, background 0.2s ease",
                        transform: isOpen ? "rotate(-45deg)" : "rotate(90deg)"
                      }}
                    />
                  </span>
                </button>

                <div
                  className={`faq-answer ${isOpen ? "is-open" : ""}`}
                  style={{
                    paddingBottom: isOpen ? 24 : 0
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      maxWidth: 640
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SeoFaq;
