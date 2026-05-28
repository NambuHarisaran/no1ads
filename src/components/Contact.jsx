import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section 
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-base)",
        background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(232,80,10,0.18), var(--bg-base))"
      }}
    >
      <div className="section-shell relative z-10 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="font-body text-xs uppercase tracking-[0.12em]"
            style={{ color: "var(--accent-fire)" }}
          >
            LET'S BUILD SOMETHING UNSTOPPABLE
          </p>

          <h2 
            className="mt-6 font-display text-[clamp(2.8rem,8vw,6rem)] uppercase leading-[0.88] tracking-wider"
            style={{ color: "var(--text-primary)" }}
          >
            READY TO BE
          </h2>
          <h2 
            className="font-display text-[clamp(2.8rem,8vw,6rem)] uppercase leading-[0.88] tracking-wider"
            style={{ color: "var(--accent-fire)" }}
          >
            NUMBER ONE?
          </h2>

          <p 
            className="mx-auto mt-8 max-w-2xl font-body text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Tell us what you are building. We will craft the strategy and execution to make your brand impossible to ignore.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href="mailto:hello@numberoneads.com"
            className="inline-flex items-center justify-center rounded-sm px-10 py-4 font-body text-xs font-medium uppercase tracking-[0.12em] text-white transition-all"
            style={{
              backgroundColor: "var(--accent-fire)",
              boxShadow: "0 8px 24px rgba(232, 80, 10, 0)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(232, 80, 10, 0.35)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(232, 80, 10, 0)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            START A PROJECT
          </a>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <a
              href="mailto:hello@numberoneads.com"
              className="flex items-center gap-2 transition-colors hover:text-[var(--accent-fire)]"
              style={{ color: "var(--text-secondary)" }}
            >
              <Mail size={16} />
              hello@numberoneads.com
            </a>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 transition-colors hover:text-[var(--accent-fire)]"
              style={{ color: "var(--text-secondary)" }}
            >
              <Phone size={16} />
              +91 98765 43210
            </a>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <p 
              className="flex items-center gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <MapPin size={16} />
              Chennai, Tamil Nadu
            </p>
          </div>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-sm border transition-all"
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
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-sm border transition-all"
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
            <Instagram size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
