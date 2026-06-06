import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  tall: "md:row-span-2",
  regular: "",
  wide: "lg:col-span-2"
};

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="bg-[var(--bg-primary)] section-pad pt-0">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--brand-orange)]">
            PORTFOLIO
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-tight">
            Work with room
            <span className="block italic text-[var(--brand-orange)]">to breathe.</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-9 flex flex-wrap gap-3"
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
              className={`min-h-11 rounded-full px-5 font-body text-[13px] font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-[var(--bg-ink)] text-white"
                  : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--border-light)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 px-0 md:auto-rows-[260px] md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className={`group relative min-h-[280px] cursor-pointer overflow-hidden rounded-lg bg-[var(--bg-card)] shadow-[var(--shadow-sm)] ${sizeClass[project.size]}`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full min-h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 z-10 rounded-sm bg-[var(--bg-ink)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white">
                  {project.category}
                </span>
                <div className="absolute inset-0 flex items-end bg-[rgba(26,20,16,0)] p-6 opacity-0 transition-all duration-300 group-hover:bg-[rgba(26,20,16,0.72)] group-hover:opacity-100">
                  <h3 className="font-display text-3xl font-bold text-white">{project.name}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
