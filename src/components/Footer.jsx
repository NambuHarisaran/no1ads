import { Facebook, Instagram } from "lucide-react";

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
  return (
    <footer className="bg-[var(--bg-ink)] px-[clamp(24px,5vw,80px)] pb-8 pt-16 text-[var(--text-inverse)]">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="inline-block">
              <img src="/logo.png" alt="Number One Ads" className="h-16 w-auto brightness-0 invert" />
            </a>
            <p className="mt-3 max-w-xs font-body text-sm text-[rgba(250,248,244,0.5)]">
              Making brands unstoppable since 2010.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/15 text-white/60 transition-colors hover:border-white hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/15 text-white/60 transition-colors hover:border-white hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--brand-orange)]">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[rgba(250,248,244,0.65)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--brand-orange)]">
              Services
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {serviceLinks.map((service) => (
                <li key={service} className="font-body text-sm text-[rgba(250,248,244,0.65)]">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 font-mono text-[11px] text-[rgba(250,248,244,0.35)] md:flex-row md:items-center md:justify-between">
          <p>© 2025 Number One Ads. All Rights Reserved.</p>
          <div className="flex gap-3">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
