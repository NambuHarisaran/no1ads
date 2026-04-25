import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import SplitText from "./ui/SplitText";
import AnimatedCounter from "./ui/AnimatedCounter";
import MagneticButton from "./ui/MagneticButton";

const highlights = [
  "Creative Design",
  "Digital Marketing",
  "Roadshows",
  "Exhibitions",
  "Branding",
  "Printing",
  "Events"
];

const stats = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 200, suffix: "+", label: "Clients" },
  { value: 15, suffix: "+", label: "Years" },
  { value: 98, suffix: "%", label: "Retention" }
];

function Hero() {
  return (
    <section id="home" className="noise-overlay relative flex min-h-[100dvh] items-center overflow-hidden border-b border-white/10 pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-red-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(255,214,0,0.08),transparent_38%)]" />

      <div className="section-shell pb-28 pt-24 md:pb-36 md:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55 }}
          className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-accent text-xs uppercase tracking-[0.2em] text-brand-yellow"
        >
          Number One Ads | India
        </motion.p>

        <SplitText
          text="We Make Brands Unstoppable"
          highlightWord="Unstoppable"
          className="max-w-5xl font-display text-[clamp(3rem,11vw,9.5rem)] uppercase leading-[0.88] tracking-[0.02em]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.25, duration: 0.65 }}
          className="mt-6 max-w-3xl text-base text-white/75 md:text-xl"
        >
          Full-service advertising agency - Creative, Digital, Outdoor, Events and everything your brand needs to dominate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.35, duration: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-brand-red bg-brand-red px-6 py-3 font-accent text-xs uppercase tracking-[0.2em] text-black transition-colors hover:border-brand-yellow hover:bg-brand-yellow"
          >
            See Our Work
            <ArrowRight size={16} />
          </MagneticButton>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3 font-accent text-xs uppercase tracking-[0.2em] text-white transition-colors hover:border-brand-red hover:text-brand-red"
          >
            Talk to Us
            <PhoneCall size={15} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 backdrop-blur"
            >
              <p className="font-display text-4xl leading-none text-brand-yellow md:text-5xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 font-accent text-xs uppercase tracking-[0.14em] text-white/70">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/10 bg-black/45 py-3 backdrop-blur">
        <div className="ticker-track flex min-w-max">
          {[...highlights, ...highlights].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="px-4 font-accent text-xs uppercase tracking-[0.18em] text-white/85"
            >
              {item} *
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
