import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

function Roadshow() {
  return (
    <section id="roadshow" className="relative isolate overflow-hidden border-y border-white/10 py-24 md:py-28">
      <div className="roadshow-pulse pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(255,61,0,0.3),rgba(10,10,10,0)_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#220d09] to-[#0a0a0a]" />

      <div className="section-shell">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-accent text-xs uppercase tracking-[0.2em] text-brand-yellow"
        >
          Signature Service
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65 }}
          className="mt-3 max-w-4xl font-display text-[clamp(2.5rem,7vw,6.4rem)] uppercase leading-[0.88]"
        >
          Roadshows That Turn Streets Into Brand Stages.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="mt-5 max-w-2xl text-base text-white/75 md:text-lg"
        >
          We conceptualize, route-plan, execute, and amplify roadshows that put your brand in front of real people with cinematic on-ground
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.18, duration: 0.65 }}
          className="mt-10"
        >
          <MagneticButton
            as="a"
            href="#contact"
            className="inline-flex rounded-full border border-brand-red bg-brand-red px-7 py-3 font-accent text-xs uppercase tracking-[0.2em] text-black transition-colors hover:border-brand-yellow hover:bg-brand-yellow"
          >
            Book a Roadshow -&gt;
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

export default Roadshow;
