import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const filters = ["All", "Branding", "Print", "Digital", "Events", "Outdoor"];

const projects = [
  {
    id: 1,
    name: "South Blaze Rebrand",
    category: "Branding",
    size: "tall",
    image: "https://picsum.photos/seed/southblaze/600/800"
  },
  {
    id: 2,
    name: "Metro Fest Launch Film",
    category: "Digital",
    size: "regular",
    image: "https://picsum.photos/seed/metrofest/600/600"
  },
  {
    id: 3,
    name: "Retail Rush Visual Merch",
    category: "Branding",
    size: "wide",
    image: "https://picsum.photos/seed/retailrush/800/500"
  },
  {
    id: 4,
    name: "City Line Expo Pavilion",
    category: "Events",
    size: "tall",
    image: "https://picsum.photos/seed/cityline/600/800"
  },
  {
    id: 5,
    name: "SunPeak Packaging Series",
    category: "Print",
    size: "regular",
    image: "https://picsum.photos/seed/sunpeak/600/600"
  },
  {
    id: 6,
    name: "Road Rage Van Blitz",
    category: "Outdoor",
    size: "wide",
    image: "https://picsum.photos/seed/roadrage/800/500"
  }
];

const sizeClass = {
  tall: "row-span-2",
  regular: "row-span-1",
  wide: "col-span-2"
};

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg-base)" }}>
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
            PORTFOLIO
          </p>
          <h2 
            className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] uppercase leading-[0.9] tracking-wider"
            style={{ color: "var(--text-primary)" }}
          >
            OUR WORK
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-sm px-5 py-2 font-body text-xs font-medium uppercase tracking-[0.1em] transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[var(--accent-fire)] text-white"
                  : "border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-fire)] hover:text-[var(--accent-fire)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <motion.div 
          layout 
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-lg border border-[var(--border-subtle)] cursor-pointer ${sizeClass[project.size]}`}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  style={{ filter: "grayscale(30%)" }}
                />

                {/* Category tag */}
                <div className="absolute left-4 top-4 z-10">
                  <span 
                    className="inline-block rounded-sm px-3 py-1 font-body text-xs font-medium uppercase tracking-[0.08em]"
                    style={{
                      backgroundColor: "var(--bg-base)",
                      color: "var(--accent-fire)",
                      border: "1px solid var(--accent-fire)"
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "linear-gradient(to top, rgba(12,12,12,0.95) 0%, rgba(12,12,12,0.7) 40%, transparent 100%)"
                  }}
                >
                  <h3 
                    className="font-headline text-2xl font-bold uppercase tracking-wide"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 font-body text-sm font-medium uppercase tracking-[0.08em]" style={{ color: "var(--accent-fire)" }}>
                    View Project
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
