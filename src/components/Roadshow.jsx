import { motion } from "framer-motion";

const metrics = [
  ["50+", "cities executed"],
  ["100+", "roadshows run"],
  ["1:1", "on-ground engagement"]
];

function Roadshow() {
  return (
    <section id="roadshow" className="relative overflow-hidden bg-[var(--bg-ink)] section-pad">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
            SIGNATURE SERVICE
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,9vw,4.5rem)] font-black leading-tight text-white md:text-[clamp(2.25rem,5vw,4.5rem)]">
            Roadshows that turn
            <span className="block italic text-[var(--brand-orange)]">
              streets into brand stages.
            </span>
          </h2>
          <p className="mt-7 max-w-xl font-body text-base leading-relaxed text-[rgba(250,248,244,0.65)]">
            We conceptualize, route-plan, execute, and amplify roadshows that put your brand in
            front of real people with cinematic on-ground experiences.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded border-2 border-white px-8 font-body text-sm font-medium text-white transition-colors hover:bg-white hover:text-[var(--bg-ink)]"
          >
            Book a Roadshow →
          </a>
        </motion.div>

        <div className="mt-12 flex flex-col gap-5 md:flex-row md:gap-10">
          {metrics.map(([number, label]) => (
            <div key={label}>
              <div className="font-display text-4xl font-black leading-none text-white">{number}</div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -right-12 bottom-0 font-display text-[18vw] font-black leading-none text-white/[0.035]">
        ROADSHOW
      </div>
    </section>
  );
}

export default Roadshow;
