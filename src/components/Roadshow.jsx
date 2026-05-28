import { motion } from "framer-motion";
import { Zap, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Street Presence",
    description: "Real-world brand experiences that command attention in high-traffic zones"
  },
  {
    icon: MapPin,
    title: "Multi-City Execution",
    description: "Coordinated campaigns across 5-50 cities with precision logistics and brand consistency"
  },
  {
    icon: Users,
    title: "Audience Engagement",
    description: "Live interactions, product trials, and influencer collaborations that drive conversions"
  }
];

function Roadshow() {
  return (
    <section 
      id="roadshow"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-base)",
        background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(232,80,10,0.15), var(--bg-base))"
      }}
    >
      <div className="section-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-start">
          {/* Left: Headline stack */}
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
              SIGNATURE SERVICE
            </p>

            <h2 
              className="mt-6 font-display text-[clamp(2.4rem,6vw,4.2rem)] uppercase leading-[0.88] tracking-wider"
              style={{ color: "var(--text-primary)" }}
            >
              ROADSHOWS THAT TURN
            </h2>

            <h2 
              className="font-display text-[clamp(2.4rem,6vw,4.2rem)] uppercase leading-[0.88] tracking-wider"
              style={{ color: "var(--accent-fire)" }}
            >
              STREETS INTO BRAND STAGES
            </h2>

            <p 
              className="mt-8 max-w-xl font-body text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              We conceptualize, route-plan, execute, and amplify roadshows that put your brand in front of real people with cinematic on-ground experiences.
            </p>

            <motion.a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center rounded-sm px-8 py-4 font-body text-xs font-medium uppercase tracking-[0.12em] text-white transition-all border-2"
              style={{
                backgroundColor: "transparent",
                borderColor: "var(--accent-fire)",
                color: "var(--accent-fire)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-fire)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--accent-fire)";
              }}
              whileHover={{ scale: 1.02 }}
            >
              BOOK A ROADSHOW →
            </motion.a>
          </motion.div>

          {/* Right: Feature points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.12 + index * 0.08, duration: 0.6 }}
                  className="rounded-lg p-6 border transition-all"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border-subtle)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                    e.currentTarget.style.backgroundColor = "rgba(232,80,10,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.backgroundColor = "var(--bg-elevated)";
                  }}
                >
                  <div className="flex items-start gap-4">
                    <Icon 
                      size={24} 
                      style={{ color: "var(--accent-fire)", flexShrink: 0 }}
                    />
                    <div>
                      <h3 
                        className="font-headline text-lg font-bold uppercase tracking-wider"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="mt-2 font-body text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ROADSHOW watermark background */}
      <div 
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 -translate-x-20 text-[20vw] font-display font-bold uppercase leading-none"
        style={{ color: "rgba(232,80,10,0.05)", zIndex: 0 }}
      >
        ROADSHOW
      </div>
    </section>
  );
}

export default Roadshow;
