import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";

const services = [
  "BRANDING",
  "ROADSHOWS",
  "EXHIBITIONS",
  "DIGITAL",
  "PRINT",
  "EVENTS",
  "OUTDOOR",
  "RETAIL"
];

const stats = [
  { value: 3000, suffix: "+", label: "Projects" },
  { value: 2000, suffix: "+", label: "Clients" },
  { value: 25, suffix: "+", label: "Years" },
  { value: 98, suffix: "%", label: "Retention" }
];

function Hero() {
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[var(--bg-primary)] pb-0 pt-[96px] md:pt-[120px]"
      >
        <div className="section-shell relative grid gap-10 pb-12 pt-8 md:min-h-[calc(100dvh-72px)] md:grid-cols-[minmax(0,0.62fr)_minmax(260px,0.38fr)] md:items-center md:pb-20 md:pt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="relative z-10"
          >
            <motion.p
              variants={itemVariants}
              className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]"
            >
              NO1ADS · CHENNAI · EST. 2010
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="max-w-5xl font-display text-[clamp(2.5rem,11vw,6rem)] font-black leading-none text-[var(--text-primary)] md:text-[clamp(3.25rem,7vw,6rem)]"
            >
              We make brands
              <span className="block italic text-[var(--brand-orange)]">Unstoppable.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-xl font-body text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-lg"
            >
              360° full-service advertising — Creative, Digital, Outdoor, Events, Print.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded bg-[var(--brand-orange)] px-8 font-body text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--brand-orange-light)] hover:shadow-[0_8px_24px_rgba(217,79,0,0.3)]"
              >
                Start a Project →
              </a>
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center px-5 font-body text-[15px] font-medium text-[var(--text-primary)] underline-offset-4 transition-colors hover:text-[var(--brand-orange)] hover:underline"
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="pointer-events-none absolute right-[-20px] top-1/2 hidden -translate-y-1/2 font-display text-[240px] font-black leading-none text-[var(--border-light)] md:block"
          >
            01
          </motion.div>
        </div>

        <div className="static z-[1] mt-10 w-full overflow-hidden bg-[var(--bg-ink)] py-3 md:relative md:mt-0">
          <div className="ticker-track flex min-w-max items-center gap-8">
            {[...services, ...services, ...services].map((service, index) => (
              <span
                key={`${service}-${index}`}
                className="font-mono text-xs uppercase tracking-[0.12em] text-white"
              >
                {service}
                <span className="mx-8 text-[var(--brand-orange)]">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-light)] bg-[var(--bg-secondary)] px-0 py-10 md:py-12">
        <div className="section-shell grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="md:border-r md:border-[var(--border-light)] md:last:border-r-0"
            >
              <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black leading-none text-[var(--text-primary)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
