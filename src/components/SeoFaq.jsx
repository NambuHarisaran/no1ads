import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[var(--bg-primary)] section-pad">
      <div className="mx-auto max-w-[760px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
            FAQ
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold">
            Questions brands ask us
          </h2>
        </motion.div>

        <div className="mt-10 border-t border-[var(--border-light)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.q} className="border-b border-[var(--border-light)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left font-body text-base font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--brand-orange)]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center text-2xl font-light transition-transform ${
                      isOpen ? "rotate-45 text-[var(--brand-orange)]" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div className={`faq-answer ${isOpen ? "is-open pb-6" : ""}`}>
                  <p className="font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SeoFaq;
