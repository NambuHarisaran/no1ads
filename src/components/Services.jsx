import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const serviceItems = [
  {
    number: "01",
    title: "Creative Design & Development",
    description: "Identity systems, campaigns, and visuals that stop the scroll."
  },
  {
    number: "02",
    title: "Digital Marketing",
    description: "Performance media, social strategy, and growth-first storytelling."
  },
  {
    number: "03",
    title: "Exhibition Design & Conduction",
    description: "Built-to-impress stalls and immersive trade event experiences."
  },
  {
    number: "04",
    title: "Event Planning & Execution",
    description: "End-to-end event orchestration with flawless on-ground execution."
  },
  {
    number: "05",
    title: "Roadshow & Outdoor Media",
    description: "Mobile brand activations engineered for impact and reach."
  },
  {
    number: "06",
    title: "Retail Branding",
    description: "Storefront and in-store systems that drive walk-ins and conversion."
  },
  {
    number: "07",
    title: "Signage Solutions",
    description: "High-visibility signage crafted for durability and attention."
  },
  {
    number: "08",
    title: "Printing & Production",
    description: "Premium print collateral with precision finish and color control."
  }
];

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="section-shell">
        {/* Section header */}
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
            CAPABILITIES
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <h2 
              className="font-display text-[clamp(2.4rem,6vw,4rem)] uppercase leading-[0.9] tracking-wider"
              style={{ color: "var(--text-primary)" }}
            >
              WHAT WE DO
            </h2>
            <p 
              className="font-body text-lg leading-relaxed italic"
              style={{ color: "var(--text-secondary)" }}
            >
              Eight disciplines. One partner. Zero compromises.
            </p>
          </div>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 space-y-0"
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              className="group relative flex items-center gap-12 border-b border-[var(--border-subtle)] px-0 py-8 transition-all duration-300 hover:bg-[rgba(232,80,10,0.04)] hover:pl-4"
            >
              {/* Left border accent - appears on hover */}
              <div 
                className="absolute -left-0 top-0 bottom-0 w-1 bg-[var(--accent-fire)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Number */}
              <div 
                className="min-w-max font-display text-8xl font-bold tracking-wider transition-colors duration-300"
                style={{ 
                  color: "var(--text-primary)",
                  opacity: 0.06,
                  groupHover: { color: "var(--accent-fire)", opacity: 1 }
                }}
              >
                {service.number}
              </div>

              {/* Service name */}
              <div className="flex-1">
                <h3 
                  className="font-headline text-4xl font-bold uppercase tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p 
                className="max-w-xs font-body text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {service.description}
              </p>

              {/* Arrow */}
              <div 
                className="flex-none transition-all duration-300 group-hover:translate-x-2"
                style={{ color: "var(--accent-fire)" }}
              >
                <ArrowRight size={24} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
