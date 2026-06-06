import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0"
      style={{ zIndex: "var(--z-nav)" }}
    >
      <nav
        style={{
          backgroundColor: isScrolled
            ? "rgba(250, 250, 247, 0.92)"
            : "rgba(250, 250, 247, 0.98)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid var(--border-subtle)",
          boxShadow: isScrolled ? "var(--shadow-sm)" : "none",
          transition: "box-shadow 0.3s ease"
        }}
      >
        <div
          className="section-shell flex items-center justify-between"
          style={{ height: 72 }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center transition-opacity hover:opacity-80"
            onClick={() => handleNavClick("#home")}
          >
            <img src="/logo.png" alt="Number One Ads" style={{ height: 40, width: "auto" }} />
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center md:flex" style={{ gap: 36 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: activeLink === link.href ? 600 : 500,
                  color: activeLink === link.href
                    ? "var(--orange)"
                    : "var(--text-secondary)",
                  transition: "color 0.2s ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== link.href) e.target.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== link.href) e.target.style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: "10px 22px", marginLeft: 24, fontSize: 13 }}
            onClick={() => handleNavClick("#contact")}
          >
            Start a Project
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((o) => !o)}
            className="flex md:hidden"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 44,
              height: 44,
              background: "none",
              border: "none",
              cursor: "pointer",
              gap: isOpen ? 0 : 5,
              position: "relative"
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform: isOpen ? "translateY(0.75px) rotate(45deg)" : "none",
                position: isOpen ? "absolute" : "relative"
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                opacity: isOpen ? 0 : 1,
                position: isOpen ? "absolute" : "relative"
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform: isOpen ? "translateY(-0.75px) rotate(-45deg)" : "none",
                position: isOpen ? "absolute" : "relative"
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: "var(--z-overlay)",
          background: "var(--bg-ink)",
          transition: "opacity 0.35s ease, visibility 0.35s ease",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none"
        }}
        className="flex md:hidden flex-col items-center justify-center"
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 44,
            height: 44,
            background: "none",
            border: "none",
            color: "var(--text-on-dark)",
            fontSize: 24,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ✕
        </button>

        {/* Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 12vw, 54px)",
                fontStyle: "italic",
                fontWeight: 700,
                color: "var(--text-on-dark)",
                transition: "color 0.2s ease, transform 0.4s ease",
                textDecoration: "none",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: isOpen ? `${index * 0.06}s` : "0s"
              }}
              onMouseEnter={(e) => { e.target.style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { e.target.style.color = "var(--text-on-dark)"; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Footer info */}
        <p
          style={{
            position: "absolute",
            bottom: 32,
            fontFamily: "var(--font-label)",
            fontSize: 11,
            color: "rgba(250, 250, 247, 0.35)",
            textAlign: "center",
            letterSpacing: "0.05em"
          }}
        >
          hello@numberoneads.com · +91 98765 43210
        </p>
      </div>
    </header>
  );
}

export default Navbar;
