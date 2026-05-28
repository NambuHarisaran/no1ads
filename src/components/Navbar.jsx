import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 26);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled 
            ? "rgba(12, 12, 12, 0.95)" 
            : "rgba(12, 12, 12, 0)",
          borderColor: isScrolled 
            ? "rgba(255, 255, 255, 0.06)" 
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="border-b"
      >
        <div className="section-shell flex h-20 items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center transition-all hover:opacity-80"
            style={{
              filter: "drop-shadow(0 0 12px rgba(232, 80, 10, 0))",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(232, 80, 10, 0.4))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(232, 80, 10, 0))";
            }}
          >
            <img 
              src="/logo.png" 
              alt="Number One Ads" 
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-xs font-normal tracking-[0.08em] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-[var(--accent-fire)] px-8 py-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-white transition-all duration-200 hover:scale-105 hover:shadow-fire"
              style={{
                boxShadow: "0 8px 24px rgba(232, 80, 10, 0)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(232, 80, 10, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(232, 80, 10, 0)";
              }}
            >
              START A PROJECT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-fire)] hover:text-[var(--accent-fire)] lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] backdrop-blur-md lg:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-3 font-body text-xs font-normal tracking-[0.08em] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-fire)]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 inline-flex items-center justify-center rounded-sm bg-[var(--accent-fire)] px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-white transition-all hover:scale-105 hover:shadow-fire"
              >
                START A PROJECT
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
