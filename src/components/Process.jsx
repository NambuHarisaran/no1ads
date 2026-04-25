import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discover",
    description: "We learn your brand inside-out, from category context to customer behavior."
  },
  {
    id: "02",
    title: "Strategize",
    description: "We map a focused growth plan where data and creative thinking move together."
  },
  {
    id: "03",
    title: "Execute",
    description: "We launch with pixel-perfect production, strict quality control, and speed."
  },
  {
    id: "04",
    title: "Grow",
    description: "We track outcomes, optimize relentlessly, and scale what works best."
  }
];

function Process() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeStep, setActiveStep] = useState("01");

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="section-shell">
        <p className="font-accent text-xs uppercase tracking-[0.2em] text-brand-yellow">Methodology</p>
        <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5.6rem)] uppercase leading-[0.9]">Our Process</h2>

        <div ref={sectionRef} className="relative mt-14 hidden lg:block">
          <svg
            className="pointer-events-none absolute left-0 top-10 h-8 w-full"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
          >
            <path d="M30 30 L970 30" stroke="rgba(245,245,245,0.12)" strokeWidth="2" fill="none" />
            <motion.path
              d="M30 30 L970 30"
              stroke="#FF3D00"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.55, delay: Number(step.id) * 0.12 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="font-display text-5xl leading-none text-brand-red">{step.id}</div>
                <h3 className="mt-6 font-display text-4xl uppercase leading-[0.9]">{step.title}</h3>
                <p className="mt-3 text-sm text-white/70">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-3 lg:hidden">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <div key={step.id} className="rounded-2xl border border-white/10 bg-white/[0.02]">
                <button
                  type="button"
                  onClick={() => setActiveStep(isActive ? "" : step.id)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-display text-4xl leading-none text-brand-red">{step.id}</span>
                  <span className="font-display text-3xl uppercase">{step.title}</span>
                </button>
                <AnimatePresence>
                  {isActive ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-white/70">{step.description}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
