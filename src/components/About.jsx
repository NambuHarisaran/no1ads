import { motion } from "framer-motion";

const info = [
  ["Founded", "2010 · 15 Years in Market"],
  ["Headquarters", "Chennai, Tamil Nadu"],
  ["Team", "48 Creative Specialists"]
];

const sectors = [
  "FMCG",
  "Automotive",
  "Real Estate",
  "Food & Beverage",
  "Healthcare",
  "Retail",
  "Technology",
  "Education"
];

function About() {
  return (
    <>
      <section id="about" className="bg-[var(--bg-primary)] section-pad">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
              ABOUT US
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.35rem,5vw,4.75rem)] font-bold leading-tight">
              We are NO1ADS
              <span className="block italic text-[var(--brand-orange)]">A creative powerhouse.</span>
            </h2>
            <p className="mt-7 max-w-xl font-body text-base leading-[1.8] text-[var(--text-secondary)]">
              From local legends to national campaigns, we build brand systems that look powerful,
              feel premium, and perform in market. Our South-Indian creative DNA gives us speed,
              craft, and cultural precision. Our global ambition keeps our standards uncompromising.
            </p>

            <div className="mt-9 max-w-xl">
              {info.map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 border-b border-[var(--border-light)] py-4 sm:flex-row sm:items-center sm:gap-6"
                >
                  <span className="w-[120px] font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                    {label}
                  </span>
                  <span className="font-body text-[15px] font-semibold text-[var(--text-primary)]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="grid grid-cols-2 overflow-hidden rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] shadow-[var(--shadow-sm)]"
          >
            <div className="p-6 sm:p-8">
              <div className="font-display text-[60px] font-black leading-none text-[var(--text-primary)] md:text-[96px]">
                25+
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                Years in market
              </p>
            </div>
            <div className="relative min-h-[160px] overflow-hidden bg-[var(--brand-orange-pale)]">
              <div className="absolute -right-10 top-0 h-[140%] w-20 rotate-12 bg-[var(--brand-orange)]" />
              <div className="absolute bottom-6 left-6 h-16 w-16 border border-[var(--brand-orange)]" />
            </div>
            <div className="bg-[var(--bg-card-tinted)] p-6 sm:p-8">
              <p className="font-display text-xl italic leading-relaxed text-[var(--text-primary)]">
                "Cultural precision, production speed, and standards that travel."
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="font-display text-5xl font-black leading-none text-[var(--text-primary)]">
                48
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                Specialists
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--bg-primary)] px-[clamp(16px,5vw,80px)] pb-[var(--section-pad)]">
        <div className="mx-auto max-w-[1320px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
            INDUSTRIES
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold">
            Industries we've shaped
          </h2>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-[var(--border-medium)] px-4 py-2 font-body text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--bg-ink)] hover:bg-[var(--bg-ink)] hover:text-white"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
