import { motion } from "framer-motion";

const serviceItems = [
  {
    number: "01",
    title: "Creative",
    description: "Identity systems, campaigns, and visuals that stop the scroll."
  },
  {
    number: "02",
    title: "Digital",
    description: "Performance media, social strategy, and growth-first storytelling."
  },
  {
    number: "03",
    title: "Exhibitions",
    description: "Built-to-impress stalls and immersive trade event experiences."
  },
  {
    number: "04",
    title: "Events",
    description: "End-to-end event orchestration with flawless on-ground execution."
  },
  {
    number: "05",
    title: "Roadshows",
    description: "Mobile brand activations engineered for impact and reach."
  },
  {
    number: "06",
    title: "Retail",
    description: "Storefront and in-store systems that drive walk-ins and conversion."
  },
  {
    number: "07",
    title: "Signage",
    description: "High-visibility signage crafted for durability and attention."
  },
  {
    number: "08",
    title: "Printing",
    description: "Premium print collateral with precision finish and color control."
  }
];

function Services() {
  return (
    <section id="services" className="bg-[var(--bg-primary)] section-pad">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
            CAPABILITIES
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-tight">
            Eight disciplines.
            <span className="block italic text-[var(--brand-orange)]">One partner.</span>
          </h2>
          <p className="mt-3 font-body text-base text-[var(--text-muted)]">Zero compromises.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {serviceItems.map((service, index) => {
            const featured = index < 2;

            return (
              <motion.article
                key={service.number}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className={`group relative flex min-h-[200px] flex-col overflow-hidden rounded-lg p-6 transition-all ${
                  featured
                    ? "min-h-[240px] bg-[var(--bg-ink)] text-white lg:col-span-2"
                    : "border border-[var(--border-light)] bg-[var(--bg-card)] hover:border-[var(--brand-orange)] hover:bg-[var(--bg-card-tinted)] hover:shadow-[var(--shadow-md)]"
                }`}
              >
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.12em] ${
                    featured ? "text-[var(--brand-orange)]" : "text-[var(--text-muted)]"
                  }`}
                >
                  {service.number}
                </p>
                <div className="mt-auto">
                  <h3
                    className={`font-display font-bold ${
                      featured ? "text-[28px] text-white" : "text-xl text-[var(--text-primary)]"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-3 max-w-sm font-body leading-relaxed ${
                      featured ? "text-sm text-white/65" : "text-[13px] text-[var(--text-secondary)]"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                <span
                  className={`absolute bottom-5 right-6 text-2xl transition-transform group-hover:translate-x-1 ${
                    featured ? "text-[var(--brand-orange)]" : "text-[var(--brand-orange)]"
                  }`}
                >
                  →
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
