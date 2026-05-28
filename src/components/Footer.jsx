import { Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" }
];

const serviceLinks = [
  "CREATIVE",
  "DIGITAL",
  "EXHIBITIONS",
  "EVENTS",
  "ROADSHOWS",
  "RETAIL",
  "SIGNAGE",
  "PRINTING"
];

function Footer() {
  return (
    <footer 
      style={{ backgroundColor: "var(--bg-elevated)", borderTopColor: "var(--border-subtle)" }}
      className="border-t"
    >
      {/* Marquee ticker */}
      <div 
        className="border-b border-t ticker-track flex min-w-max overflow-hidden py-4"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        {["360° ADVERTISING", "CREATIVE", "DIGITAL", "OUTDOOR", "EVENTS", "PRINT", "BRANDING"].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="px-6 font-headline text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "var(--text-muted)" }}
          >
            {item} ·
          </span>
        ))}
        {["360° ADVERTISING", "CREATIVE", "DIGITAL", "OUTDOOR", "EVENTS", "PRINT", "BRANDING"].map((item, index) => (
          <span
            key={`${item}-${index}-2`}
            className="px-6 font-headline text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "var(--text-muted)" }}
          >
            {item} ·
          </span>
        ))}
      </div>

      {/* Main footer content */}
      <div className="section-shell py-12">
        {/* Top row: Logo + Tagline */}
        <div className="grid gap-12 items-start lg:grid-cols-[1fr_auto_1fr] mb-12">
          <a href="#home" className="inline-block">
            <img 
              src="/logo.png" 
              alt="Number One Ads" 
              className="h-20 w-auto"
            />
          </a>

          <div className="hidden lg:block text-center">
            <p 
              className="font-body text-xs font-medium uppercase tracking-[0.1em] italic"
              style={{ color: "var(--text-secondary)" }}
            >
              Built to be Unstoppable
            </p>
          </div>

          <div className="text-right">
            <img 
              src="/25.png" 
              alt="25 Years Legacy" 
              className="h-20 w-auto ml-auto"
            />
          </div>
        </div>

        {/* Grid: 4 columns */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Navigate */}
          <div>
            <p 
              className="font-body text-xs font-semibold uppercase tracking-[0.1em]"
              style={{ color: "var(--accent-fire)" }}
            >
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent-fire)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p 
              className="font-body text-xs font-semibold uppercase tracking-[0.1em]"
              style={{ color: "var(--accent-fire)" }}
            >
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((service) => (
                <li 
                  key={service}
                  className="font-body text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p 
              className="font-body text-xs font-semibold uppercase tracking-[0.1em]"
              style={{ color: "var(--accent-fire)" }}
            >
              Contact
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="mailto:hello@numberoneads.com"
                  className="font-body text-sm transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-fire)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  hello@numberoneads.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919876543210"
                  className="font-body text-sm transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-fire)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  +91 98765 43210
                </a>
              </li>
              <li 
                className="font-body text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Chennai, Tamil Nadu
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p 
              className="font-body text-xs font-semibold uppercase tracking-[0.1em]"
              style={{ color: "var(--accent-fire)" }}
            >
              Follow
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-all"
                style={{
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-secondary)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-fire)";
                  e.currentTarget.style.color = "var(--accent-fire)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-all"
                style={{
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-secondary)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-fire)";
                  e.currentTarget.style.color = "var(--accent-fire)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          className="border-t pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs font-medium"
          style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
        >
          <p>© 2025 NUMBER ONE ADS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-[var(--accent-fire)]">PRIVACY POLICY</a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-[var(--accent-fire)]">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
