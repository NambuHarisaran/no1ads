import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="bg-[var(--bg-secondary)] section-pad">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
            LET'S BUILD SOMETHING UNSTOPPABLE
          </p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.25rem,5vw,4rem)] font-black leading-tight">
            Ready to be
            <span className="block italic text-[var(--brand-orange)]">Number One?</span>
          </h2>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-[var(--text-secondary)]">
            Tell us what you're building. We'll craft the strategy and execution to make your
            brand impossible to ignore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="lg:justify-self-end"
        >
          <a
            href="mailto:hello@numberoneads.com"
            className="inline-flex min-h-14 w-full items-center justify-center rounded bg-[var(--brand-orange)] px-10 font-body text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--brand-orange-light)] hover:shadow-[0_8px_24px_rgba(217,79,0,0.3)] sm:w-auto"
          >
            Start a Project →
          </a>
          <p className="mt-5 max-w-sm font-mono text-xs leading-relaxed text-[var(--text-muted)]">
            hello@numberoneads.com · +91 98765 43210 · Chennai, Tamil Nadu
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
