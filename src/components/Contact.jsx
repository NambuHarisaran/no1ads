function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-alt)",
        padding: "var(--section-v) var(--section-h)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative "NO1" watermark */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -40,
          right: -40,
          fontFamily: "var(--font-display)",
          fontSize: 300,
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "1px var(--border-subtle)",
          pointerEvents: "none",
          userSelect: "none",
          opacity: 0.5,
          lineHeight: 1
        }}
      >
        NO1
      </span>

      <div className="contact-layout" style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* LEFT — Headline */}
        <div data-reveal>
          <span className="section-label">LET'S BUILD SOMETHING UNSTOPPABLE</span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.08
            }}
          >
            Ready to be
            <br />
            <em className="gradient-text">Number One?</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: 460,
              marginTop: 20
            }}
          >
            Tell us what you're building. We'll craft the strategy and execution
            to make your brand impossible to ignore.
          </p>
        </div>

        {/* RIGHT — CTA + contact */}
        <div
          data-reveal
          data-reveal-delay="2"
          className="contact-right"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <a
            href="mailto:hello@numberoneads.com"
            className="btn-primary contact-cta-btn"
            style={{ fontSize: 16, padding: "18px 40px" }}
          >
            Start a Project →
          </a>

          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "✉", text: "hello@numberoneads.com" },
              { icon: "☎", text: "+91 98765 43210" },
              { icon: "📍", text: "Chennai, Tamil Nadu" }
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    width: 16,
                    textAlign: "center",
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 12,
                    color: "var(--text-muted)"
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 0.55fr 0.45fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .contact-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
