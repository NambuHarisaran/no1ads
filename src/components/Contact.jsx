import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-shell text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.8rem,8vw,8rem)] uppercase leading-[0.86]"
        >
          Ready To Be Number One?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg"
        >
          Tell us what you are building. We will craft the strategy and execution to make your brand impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.65 }}
          className="mt-9"
        >
          <MagneticButton
            as="a"
            href="mailto:hello@numberoneads.com"
            className="inline-flex rounded-full border border-brand-red bg-brand-red px-7 py-3 font-accent text-xs uppercase tracking-[0.2em] text-black transition-colors hover:border-brand-yellow hover:bg-brand-yellow"
          >
            Start a Project
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.28, duration: 0.65 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <a
            href="mailto:hello@numberoneads.com"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white/80 transition hover:border-brand-red hover:text-white"
          >
            <Mail size={16} /> hello@numberoneads.com
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white/80 transition hover:border-brand-red hover:text-white"
          >
            <Phone size={16} /> +91 98765 43210
          </a>
          <p className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white/80">
            <MapPin size={16} /> Chennai, Tamil Nadu
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.35, duration: 0.65 }}
          className="mt-8 flex justify-center gap-3"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-brand-red hover:text-brand-red"
            aria-label="Facebook"
          >
            <Facebook size={17} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-brand-red hover:text-brand-red"
            aria-label="Instagram"
          >
            <Instagram size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
