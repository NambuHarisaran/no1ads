import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discover",
    description: "Learn your brand's context, category, competition, and customer truth."
  },
  {
    id: "02",
    title: "Strategize",
    description: "Map data-led creative strategy against your specific growth priorities."
  },
  {
    id: "03",
    title: "Execute",
    description: "Pixel-perfect production with strict quality control and speed."
  },
  {
    id: "04",
    title: "Grow",
    description: "Track outcomes, optimize, and scale only what works."
  }
];

function Process() {
  return (
    <section id="process" className="bg-[var(--bg-secondary)] section-pad">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
            METHODOLOGY
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold">
            How we move
            <span className="italic text-[var(--brand-orange)]"> work forward.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-4 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.id}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group relative rounded-lg border-t-[3px] border-[var(--border-light)] bg-[var(--bg-card)] p-7 shadow-[var(--shadow-sm)] transition-colors hover:border-t-[var(--brand-orange)]"
            >
              {index < steps.length - 1 ? (
                <span className="absolute left-[calc(100%+4px)] top-1/2 hidden h-px w-8 bg-[var(--border-light)] lg:block" />
              ) : null}
              <span className="block font-display text-[64px] font-black leading-none text-[var(--border-light)]">
                {step.id}
              </span>
              <h3 className="mt-4 font-body text-lg font-semibold uppercase tracking-[0.06em] text-[var(--text-primary)]">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
