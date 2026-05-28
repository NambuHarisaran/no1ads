import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  { value: 3000, suffix: "+", label: "PROJECTS" },
  { value: 2000, suffix: "+", label: "CLIENTS" },
  { value: 25, suffix: "+", label: "YEARS" },
  { value: 98, suffix: "%", label: "RETENTION" }
];

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(232, 80, 10, 0.12), transparent)"
          }}
        />
      </div>

      {/* Watermark NO1 */}
      <div 
        className="pointer-events-none absolute -bottom-10 -right-20 opacity-[0.05] text-[30vw] font-display font-bold tracking-wider"
        style={{ color: "var(--text-primary)" }}
      >
        NO1
      </div>

      {/* Main content */}
      <div className="section-shell relative z-10 grid gap-12 md:grid-cols-3 md:gap-16">
        {/* Left column - 2/3 width */}
        <motion.div 
          className="md:col-span-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Label pill */}
          <motion.div 
            variants={itemVariants}
            className="mb-8 inline-flex items-center rounded-sm border border-[var(--border-strong)] bg-[rgba(232,80,10,0.08)] px-4 py-2"
          >
            <span 
              className="font-body text-xs uppercase tracking-[0.12em]"
              style={{ color: "var(--accent-fire)" }}
            >
              NUMBER ONE ADS · INDIA · EST. 2010
            </span>
          </motion.div>

          {/* Headline - split color */}
          <motion.div variants={itemVariants}>
            <h1 
              className="font-display text-[clamp(2.8rem,10vw,9rem)] uppercase leading-[0.88] tracking-wider"
              style={{ color: "var(--text-primary)" }}
            >
              WE MAKE BRANDS
            </h1>
            <h1 
              className="font-display text-[clamp(2.8rem,10vw,9rem)] uppercase leading-[0.88] tracking-wider"
              style={{ color: "var(--accent-fire)" }}
            >
              UNSTOPPABLE.
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="mt-8 max-w-xl font-body text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            360° full-service advertising — Creative, Digital, Outdoor, Events, Print.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded-sm bg-[var(--accent-fire)] px-8 py-3 font-body text-xs font-medium uppercase tracking-[0.1em] text-white transition-all hover:scale-105"
              style={{
                boxShadow: "0 8px 24px rgba(232, 80, 10, 0)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(232, 80, 10, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(232, 80, 10, 0)";
              }}
            >
              START A PROJECT
              <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border-b-2 border-transparent font-body text-xs uppercase tracking-[0.1em] transition-colors hover:border-[var(--accent-fire)] hover:text-[var(--accent-fire)]"
              style={{ color: "var(--text-secondary)" }}
            >
              VIEW OUR WORK
            </a>
          </motion.div>
        </motion.div>

        {/* Right column - 1/3 width */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Vertical ticker */}
          <div 
            className="flex flex-col gap-6 border-l border-[var(--border-strong)] pl-8"
            style={{
              animation: "scroll-up 20s linear infinite"
            }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={`${service}-${index}`}
                className="font-headline text-2xl font-bold uppercase tracking-wider"
                style={{
                  color: index % 2 === 0 ? "var(--text-primary)" : "var(--accent-fire)"
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats bar - bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 border-t border-[var(--border-subtle)] px-4 py-8 md:px-0"
        style={{ background: "rgba(232, 80, 10, 0.04)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6 }}
      >
        <div className="section-shell grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div 
                className="font-display text-4xl md:text-5xl leading-none"
                style={{ color: "var(--accent-fire)" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p 
                className="mt-3 font-body text-xs uppercase tracking-[0.08em]"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
}

export default Hero;
