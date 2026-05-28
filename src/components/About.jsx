import { motion } from "framer-motion";

const sectors = ["FMCG", "AUTOMOTIVE", "REAL ESTATE", "FOOD & BEVERAGE", "HEALTHCARE", "RETAIL", "TECHNOLOGY", "EDUCATION"];

function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p 
              className="font-body text-xs uppercase tracking-[0.12em]"
              style={{ color: "var(--accent-fire)" }}
            >
              ABOUT US
            </p>

            <h2 
              className="mt-6 font-display text-4xl font-bold uppercase leading-[0.9] tracking-wider"
              style={{ color: "var(--text-primary)" }}
            >
              WE ARE NO1ADS
            </h2>

            <h3 
              className="mt-3 font-headline text-3xl font-bold uppercase tracking-wider"
              style={{ color: "var(--accent-fire)" }}
            >
              A CREATIVE POWERHOUSE
            </h3>

            <p 
              className="mt-8 font-body text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              From local legends to national campaigns, we build brand systems that look powerful, feel premium, and perform in market. Our South-Indian creative DNA gives us speed, craft, and cultural precision. Our global ambition keeps our standards uncompromising.
            </p>

            <div className="mt-10 space-y-4">
              <div className="border-b border-[var(--border-subtle)] pb-3">
                <p 
                  className="font-body text-xs uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  FOUNDED
                </p>
                <p 
                  className="mt-2 font-headline text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  2010 · 15 Years in Market
                </p>
              </div>
              <div className="border-b border-[var(--border-subtle)] pb-3">
                <p 
                  className="font-body text-xs uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  HEADQUARTERS
                </p>
                <p 
                  className="mt-2 font-headline text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Chennai, Tamil Nadu
                </p>
              </div>
              <div>
                <p 
                  className="font-body text-xs uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  TEAM
                </p>
                <p 
                  className="mt-2 font-headline text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  48 Creative Specialists
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-col items-center justify-center rounded-lg p-12"
            style={{ backgroundColor: "var(--bg-elevated)" }}
          >
            <div 
              className="font-display text-[140px] font-bold leading-none tracking-wider"
              style={{ color: "var(--accent-fire)" }}
            >
              25+
            </div>
            <h3 
              className="mt-4 font-headline text-2xl font-bold uppercase text-center tracking-wide max-w-xs"
              style={{ color: "var(--text-primary)" }}
            >
              YEARS BUILDING BRANDS
            </h3>

            {/* Sectors served */}
            <div className="mt-12 grid grid-cols-2 gap-3 text-center">
              {sectors.map((sector) => (
                <div 
                  key={sector}
                  className="font-body text-xs font-medium uppercase tracking-[0.1em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {sector}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee ticker */}
      <motion.div 
        className="mt-16 border-t border-[var(--border-subtle)] py-6 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="ticker-track flex min-w-max">
          {["360° ADVERTISING", "CREATIVE", "DIGITAL", "OUTDOOR", "EVENTS", "PRINT", "BRANDING"].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="px-6 font-body text-xs uppercase tracking-[0.15em]"
              style={{ color: "var(--text-muted)" }}
            >
              {item} ·
            </span>
          ))}
          {["360° ADVERTISING", "CREATIVE", "DIGITAL", "OUTDOOR", "EVENTS", "PRINT", "BRANDING"].map((item, index) => (
            <span
              key={`${item}-${index}-2`}
              className="px-6 font-body text-xs uppercase tracking-[0.15em]"
              style={{ color: "var(--text-muted)" }}
            >
              {item} ·
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
