import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

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
    setIsScrolled(latest > 26);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.85)" : "rgba(10, 10, 10, 0)",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(18px)" : "blur(0px)"
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="border-b"
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="font-display text-4xl leading-none tracking-wide">
            NO1ADS<span className="text-brand-red">.</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-accent text-sm uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-brand-red"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton
              as="a"
              href="#contact"
              className="rounded-full border border-brand-red bg-brand-red px-6 py-3 font-accent text-xs uppercase tracking-[0.18em] text-black transition-colors hover:bg-brand-yellow hover:border-brand-yellow"
            >
              Start a Project
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-b border-white/10 bg-[#0f0f0f] px-4 pb-6 pt-2 lg:hidden"
          >
            <div className="mx-auto flex max-w-[1400px] flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-3 font-accent text-sm uppercase tracking-[0.15em] text-white/85"
                >
                  {link.label}
                </a>
              ))}
              <MagneticButton
                as="a"
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full border border-brand-red bg-brand-red px-6 py-3 text-center font-accent text-xs uppercase tracking-[0.18em] text-black"
              >
                Start a Project
              </MagneticButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
