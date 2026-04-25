import { motion } from "framer-motion";

const faqs = [
  {
    q: "What services does Number One Ads provide?",
    a: "Number One Ads is a full-service advertising and branding agency based in Chennai, India. We handle creative design and campaign development, digital marketing, exhibition design and conduction, event planning, roadshow and outdoor media activations, retail branding, signage solutions, and print production. Our model is built for brands that need one strategic partner from concept to execution, not disconnected vendors. This integrated workflow helps teams move faster, maintain brand consistency, and achieve measurable outcomes across online and offline touchpoints."
  },
  {
    q: "Why do brands choose NO1ADS for roadshows and on-ground campaigns?",
    a: "Brands choose NO1ADS for roadshows because we combine strategy, production, logistics, and real-time optimization under one roof. Our teams plan city routes, permissions, stage and vehicle branding, crew operations, and local engagement formats that are tailored to audience behavior. We also connect roadshow activity with digital amplification so campaign momentum continues after on-ground interaction. The result is higher visibility, better recall, and stronger campaign efficiency compared with fragmented execution models. This is especially valuable for launches, retail drives, and regional market expansion."
  },
  {
    q: "How does NO1ADS approach campaign execution for measurable growth?",
    a: "Our execution framework follows four steps: Discover, Strategize, Execute, and Grow. We begin by understanding business goals, audience, and market context. Next, we align creative and channel strategy around clear performance priorities. During execution, we run production with strict quality control and timeline discipline across every asset and touchpoint. Finally, we measure results, identify what is working, and optimize for stronger return. This cycle helps clients reduce campaign waste, improve brand consistency, and scale winning ideas with confidence."
  }
];

function SeoFaq() {
  return (
    <section id="faq" className="border-t border-white/10 py-20 md:py-24">
      <div className="section-shell">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-accent text-xs uppercase tracking-[0.2em] text-brand-yellow"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.08 }}
          className="mt-2 font-display text-[clamp(2rem,5vw,4.2rem)] uppercase leading-[0.9]"
        >
          Questions Brands Ask Us
        </motion.h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.article
              key={faq.q}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="font-display text-3xl uppercase leading-[0.92]">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">{faq.a}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeoFaq;
