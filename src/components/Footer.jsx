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
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#home" className="font-display text-5xl leading-none tracking-wide">
            NO1ADS<span className="text-brand-red">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-white/60">We Make Brands Unstoppable.</p>
        </div>

        <div>
          <p className="font-accent text-xs uppercase tracking-[0.16em] text-brand-yellow">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-brand-red">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-accent text-xs uppercase tracking-[0.16em] text-brand-yellow">Services</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/75">
            {serviceLinks.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-shell mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <p>© 2025 Number One Ads. All rights reserved.</p>
        <p>Built to be Unstoppable</p>
        <div className="flex gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-red hover:text-brand-red"
            aria-label="Facebook"
          >
            <Facebook size={14} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-red hover:text-brand-red"
            aria-label="Instagram"
          >
            <Instagram size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
