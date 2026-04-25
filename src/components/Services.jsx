import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bus,
  CalendarDays,
  Megaphone,
  Paintbrush,
  Printer,
  Signpost,
  Store,
  Tent
} from "lucide-react";

const serviceItems = [
  {
    number: "01",
    icon: Paintbrush,
    title: "Creative Design and Development",
    description: "Identity systems, campaigns, and visuals that stop the scroll."
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Performance media, social strategy, and growth-first storytelling."
  },
  {
    number: "03",
    icon: Tent,
    title: "Exhibition Design and Conduction",
    description: "Built-to-impress stalls and immersive trade event experiences."
  },
  {
    number: "04",
    icon: CalendarDays,
    title: "Event Planning",
    description: "End-to-end event orchestration with flawless on-ground execution."
  },
  {
    number: "05",
    icon: Bus,
    title: "Roadshow and Outdoor Media",
    description: "Mobile brand activations engineered for impact and reach."
  },
  {
    number: "06",
    icon: Store,
    title: "Retail Branding",
    description: "Storefront and in-store systems that drive walk-ins and conversion."
  },
  {
    number: "07",
    icon: Signpost,
    title: "Signage Solutions",
    description: "High-visibility signage crafted for durability and attention."
  },
  {
    number: "08",
    icon: Printer,
    title: "Printing",
    description: "Premium print collateral with precision finish and color control."
  }
];

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="section-shell">
        <p className="font-accent text-xs uppercase tracking-[0.2em] text-brand-yellow">Capabilities</p>
        <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5.5rem)] uppercase leading-[0.9]">What We Do</h2>

        <motion.div
          ref={sectionRef}
          variants={cardContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {serviceItems.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={card}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 shadow-panel transition-colors hover:border-brand-red"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl leading-none text-brand-red">{service.number}</span>
                  <Icon size={20} className="text-white/65 transition group-hover:text-brand-yellow" />
                </div>
                <h3 className="mt-9 font-display text-3xl uppercase leading-[0.92] tracking-wide">{service.title}</h3>
                <p className="mt-3 text-sm text-white/65">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
