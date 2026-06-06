import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-[1000]">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.94)" : "#FFFFFF",
          boxShadow: isScrolled ? "0 8px 32px rgba(100, 60, 20, 0.08)" : "none"
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="border-b border-[var(--border-light)] backdrop-blur"
      >
        <div className="section-shell flex h-[72px] items-center justify-between">
          <a href="#home" className="flex items-center transition-opacity hover:opacity-80">
            <img src="/logo.png" alt="Number One Ads" className="h-14 w-auto" />
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`border-b-2 py-2 font-body text-sm font-medium tracking-[0.02em] transition-colors ${
                  index === 0
                    ? "border-[var(--brand-orange)] text-[var(--brand-orange)]"
                    : "border-transparent text-[var(--text-secondary)] hover:border-[var(--brand-orange)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden min-h-11 items-center justify-center rounded-full bg-[var(--brand-orange)] px-6 font-body text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--brand-orange-light)] md:inline-flex"
          >
            Start a Project
          </a>

          <button
            type="button"
            aria-label={isOpen ? undefined : "Open menu"}
            tabIndex={isOpen ? -1 : 0}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--text-primary)] transition-colors hover:border-[var(--brand-orange)] md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1001] bg-[var(--bg-primary)] md:hidden"
          >
            <div className="flex min-h-[100dvh] flex-col px-6 pb-8 pt-5">
              <div className="flex items-center justify-between">
                <img src="/logo.png" alt="Number One Ads" className="h-14 w-auto" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--text-primary)]"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mt-16 flex flex-1 flex-col gap-5">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="font-display text-[clamp(2rem,12vw,3.4rem)] italic leading-none text-[var(--text-primary)] transition-colors hover:text-[var(--brand-orange)]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-6 font-body text-sm font-medium text-white"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
