import { motion } from "framer-motion";

const facts = [
  { label: "Founded", value: "2010" },
  { label: "Team", value: "48 Creative Specialists" },
  { label: "HQ", value: "Chennai, Tamil Nadu" }
];

function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-[#080808] py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <span className="mb-4 inline-flex h-[2px] w-20 bg-brand-red" />
          <h2 className="font-display text-[clamp(2.5rem,7vw,6.2rem)] uppercase leading-[0.88]">
            We are NO1ADS - a creative powerhouse built on bold ideas, flawless execution, and an obsession with results.
          </h2>
          <span className="mt-8 inline-flex h-[2px] w-28 bg-brand-yellow" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed text-white/75 md:text-lg">
            From local legends to national campaigns, we build brand systems that look powerful, feel premium, and perform in market. Our
            South-Indian creative DNA gives us speed, craft, and cultural precision. Our global ambition keeps our standards uncompromising.
          </p>

          <div className="space-y-4">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <p className="font-accent text-xs uppercase tracking-[0.16em] text-white/55">{fact.label}</p>
                <p className="mt-1 font-display text-4xl uppercase leading-none text-brand-yellow">{fact.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
