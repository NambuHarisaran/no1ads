import { useRef, useCallback } from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const serviceLinks = [
  "Creative",
  "Digital",
  "Exhibitions",
  "Events",
  "Roadshows",
  "Retail",
  "Signage",
  "Printing"
];

function Footer() {
  const footerRef = useRef(null);

  // W1 — Cursor spotlight on dark sections
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spot-x", `${x}px`);
    e.currentTarget.style.setProperty("--spot-y", `${y}px`);
  }, []);

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="footer-section"
      style={{
        background: "var(--bg-ink)",
        color: "var(--text-on-dark)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative gradient top border */}
      <div
        style={{
          height: 3,
          background: "linear-gradient(90deg, var(--gold), var(--orange), var(--gold))",
          width: "100%"
        }}
      />

      <div
        style={{
          padding: "72px var(--section-h) 32px",
          maxWidth: "var(--max-w)",
          margin: "0 auto"
        }}
      >
        {/* Top section — 3 columns */}
        <div className="footer-grid">
          {/* Column 1 — Brand */}
          <div>
            <a href="#home" style={{ display: "inline-block" }}>
              <img
                src="/logo.png"
                alt="Number One Ads"
                style={{
                  height: 48,
                  width: "auto",
                  filter: "brightness(0) invert(1)"
                }}
              />
            </a>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "rgba(250, 250, 247, 0.45)",
                marginTop: 12,
                maxWidth: 220,
                lineHeight: 1.6
              }}
            >
              Making brands unstoppable since 2010.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
              {[
                { label: "Facebook", icon: "f" },
                { label: "Instagram", icon: "📷" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={`https://${social.label.toLowerCase()}.com`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="footer-social-icon"
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(250, 250, 247, 0.55)",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                    e.currentTarget.style.background = "rgba(242, 159, 5, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.color = "rgba(250, 250, 247, 0.55)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 10,
                letterSpacing: "0.15em",
                color: "var(--orange)",
                textTransform: "uppercase",
                marginBottom: 20
              }}
            >
              Navigate
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(250, 250, 247, 0.55)",
                      display: "block",
                      lineHeight: 2.4,
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                      paddingLeft: 0
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "white";
                      e.target.style.paddingLeft = "6px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "rgba(250, 250, 247, 0.55)";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 10,
                letterSpacing: "0.15em",
                color: "var(--orange)",
                textTransform: "uppercase",
                marginBottom: 20
              }}
            >
              Services
            </p>
            <ul className="footer-services-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(250, 250, 247, 0.55)",
                      display: "block",
                      lineHeight: 2.4,
                      transition: "all 0.2s ease",
                      cursor: "default",
                      paddingLeft: 0
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "white";
                      e.target.style.paddingLeft = "6px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "rgba(250, 250, 247, 0.55)";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: 11,
              color: "rgba(250, 250, 247, 0.25)"
            }}
          >
            © 2025 Number One Ads. All Rights Reserved.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              fontFamily: "var(--font-label)",
              fontSize: 11,
              color: "rgba(250, 250, 247, 0.25)"
            }}
          >
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => { e.target.style.color = "rgba(250, 250, 247, 0.55)"; }}
              onMouseLeave={(e) => { e.target.style.color = "rgba(250, 250, 247, 0.25)"; }}
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => { e.target.style.color = "rgba(250, 250, 247, 0.55)"; }}
              onMouseLeave={(e) => { e.target.style.color = "rgba(250, 250, 247, 0.25)"; }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Cursor spotlight */}
      <style>{`
        .footer-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--spot-x, 50%) var(--spot-y, 50%),
            rgba(242, 159, 5, 0.05) 0%,
            transparent 60%
          );
          pointer-events: none;
          z-index: 1;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          position: relative;
          z-index: 2;
        }
        .footer-bottom {
          margin-top: 56px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 8px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
