import { motion } from "framer-motion";

const faqs = [
  {
    q: "What services does Number One Ads provide?",
    a: "Number One Ads is a full-service advertising and branding agency based in Chennai, India. We handle creative design and campaign development, digital marketing, exhibition design and conduction, event planning, roadshow and outdoor media activations, retail branding, signage solutions, and print production. Our model is built for brands that need one strategic partner from concept to execution, not disconnected vendors."
  },
  {
    q: "Why do brands choose NO1ADS for roadshows and on-ground campaigns?",
    a: "Brands choose NO1ADS for roadshows because we combine strategy, production, logistics, and real-time optimization under one roof. Our teams plan city routes, permissions, stage and vehicle branding, crew operations, and local engagement formats. We also connect roadshow activity with digital amplification so campaign momentum continues after on-ground interaction."
  },
  {
    q: "How does NO1ADS approach campaign execution for measurable growth?",
    a: "Our execution framework follows four steps: Discover, Strategize, Execute, and Grow. We begin by understanding business goals, audience, and market context. Next, we align creative and channel strategy around clear performance priorities. During execution, we run production with strict quality control and timeline discipline across every asset."
  },
  {
    q: "What is your typical project timeline from discovery to delivery?",
    a: "Project timelines vary based on scope, but typical campaigns span 6-12 weeks from strategic discovery to execution launch. Roadshows typically require 8-16 weeks for route planning, production, logistics, and crew hiring. We build flexibility into every timeline to accommodate brand feedback and market changes without compromising quality."
  },
  {
    q: "Do you work with international brands or only local clients?",
    a: "We work with both international brands entering India and leading Indian brands expanding regionally. Our South-Indian base gives us advantage in market dynamics, local partnerships, and cultural adaptation. We have successfully executed campaigns across 12+ cities and 5+ sectors with brands of all sizes."
  },
  {
    q: "What industries or sectors are you best suited for?",
    a: "We specialize in FMCG, automotive, real estate, food & beverage, healthcare, retail, technology, and education sectors. Our experience across these sectors helps us recognize market patterns, audience behaviors, and competitive pressures that inform our creative and strategic recommendations."
  }
];

function SeoFaq() {
  return (
    <section id="faq" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="section-shell">
        {/* Header */}
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
            FAQ
          </p>
          <h2 
            className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] uppercase leading-[0.9] tracking-wider"
            style={{ color: "var(--text-primary)" }}
          >
            QUESTIONS BRANDS ASK US
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div 
          layout
          className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {faqs.map((faq, index) => (
            <motion.article
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="rounded-lg p-6 border transition-all"
              style={{
                backgroundColor: "var(--bg-elevated)",
                borderColor: "var(--border-subtle)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            >
              <h3 
                className="font-headline text-lg font-bold uppercase tracking-wide leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {faq.q}
              </h3>
              <p 
                className="mt-3 font-body text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {faq.a}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SeoFaq;
