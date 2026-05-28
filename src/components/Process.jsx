import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "DISCOVER",
    description: "Learn your brand's context, category, competition, and customer truth."
  },
  {
    id: "02",
    title: "STRATEGIZE",
    description: "Map data-led creative strategy against your specific growth priorities."
  },
  {
    id: "03",
    title: "EXECUTE",
    description: "Pixel-perfect production with strict quality control and speed."
  },
  {
    id: "04",
    title: "GROW",
    description: "Track outcomes, optimize, and scale only what works."
  }
];

function Process() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="process" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg-elevated)" }}>
      <div className="section-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="font-body text-xs uppercase tracking-[0.12em]"
            style={{ color: "var(--accent-fire)" }}
          >
            METHODOLOGY
          </p>
          <h2 
            className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] uppercase leading-[0.9] tracking-wider"
            style={{ color: "var(--text-primary)" }}
          >
            OUR PROCESS
          </h2>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div ref={sectionRef} className="relative mt-16 hidden lg:block">
          {/* Connecting line */}
          <div className="absolute left-[60px] top-[120px] h-[1px] w-[calc(100%-120px)] border-t border-dashed" style={{ borderColor: "var(--border-subtle)" }} />

          {/* Steps grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-4 gap-12"
          >
            {steps.map((step) => (
              <motion.div key={step.id} variants={itemVariants}>
                {/* Step number background */}
                <div 
                  className="font-display text-[120px] font-bold leading-none tracking-wider transition-all duration-300"
                  style={{ 
                    color: "var(--text-primary)",
                    opacity: 0.04
                  }}
                >
                  {step.id}
                </div>

                {/* Content */}
                <div className="relative -mt-20">
                  {/* Accent dot on timeline */}
                  <div 
                    className="absolute -left-[66px] top-[36px] h-4 w-4 rounded-full border-2"
                    style={{ 
                      borderColor: "var(--accent-fire)",
                      backgroundColor: "var(--bg-elevated)"
                    }}
                  />

                  {/* Title */}
                  <h3 
                    className="font-headline text-2xl font-bold uppercase tracking-wide"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="mt-3 font-body text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: Vertical stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 space-y-6 lg:hidden"
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="border-l-2 pl-6"
              style={{ borderColor: "var(--accent-fire)" }}
            >
              <div 
                className="font-display text-4xl font-bold tracking-wider"
                style={{ color: "var(--accent-fire)" }}
              >
                {step.id}
              </div>
              <h3 
                className="mt-2 font-headline text-2xl font-bold uppercase tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                {step.title}
              </h3>
              <p 
                className="mt-3 font-body text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
