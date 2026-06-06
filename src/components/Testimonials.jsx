import { motion } from "framer-motion";

const featured = {
  quote: "Roadshow execution was flawless across cities. They think like owners, not vendors.",
  name: "Naveen Raj",
  role: "Director, SunPeak Consumer"
};

const testimonials = [
  {
    quote:
      "NO1ADS brought energy, speed, and strategic clarity. Our campaign performance jumped within weeks.",
    name: "Arvind Krishnan",
    role: "Brand Lead, South Blaze"
  },
  {
    quote:
      "From our exhibition pavilion to digital follow-up, every touchpoint felt premium and synchronized.",
    name: "Dharani Menon",
    role: "Marketing Head, Metro Build Expo"
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--bg-secondary)] section-pad">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
            SOCIAL PROOF
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold">
            What clients say
          </h2>
          <p className="mt-3 font-display text-xl italic text-[var(--text-secondary)]">
            From small businesses to national brands — what they told us.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.4fr_0.6fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="rounded-lg bg-[var(--bg-ink)] p-8 text-white md:p-10 lg:p-12"
          >
            <div className="font-display text-[96px] leading-[0.7] text-[var(--brand-orange)]">“</div>
            <p className="mt-3 font-display text-xl italic leading-relaxed text-white">
              {featured.quote}
            </p>
            <p className="mt-7 font-body text-sm font-semibold text-white">{featured.name}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">
              {featured.role}
            </p>
          </motion.article>

          <div className="grid gap-5">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + index * 0.07, duration: 0.55 }}
                className="rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] p-7 shadow-[var(--shadow-sm)]"
              >
                <p className="font-body text-[15px] italic leading-[1.7] text-[var(--text-primary)]">
                  “{item.quote}”
                </p>
                <p className="mt-6 font-body text-sm font-semibold text-[var(--text-primary)]">
                  {item.name}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {item.role}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
