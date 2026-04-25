import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const filters = ["All", "Branding", "Print", "Digital", "Events", "Outdoor"];

const projects = [
  {
    id: 1,
    name: "South Blaze Rebrand",
    category: "Branding",
    size: "tall",
    gradient: "from-[#412016] to-[#130d0b]"
  },
  {
    id: 2,
    name: "Metro Fest Launch Film",
    category: "Digital",
    size: "regular",
    gradient: "from-[#131f2b] to-[#090d12]"
  },
  {
    id: 3,
    name: "Retail Rush Visual Merch",
    category: "Branding",
    size: "wide",
    gradient: "from-[#2a2711] to-[#111109]"
  },
  {
    id: 4,
    name: "City Line Expo Pavilion",
    category: "Events",
    size: "tall",
    gradient: "from-[#2c1712] to-[#100b09]"
  },
  {
    id: 5,
    name: "SunPeak Packaging Series",
    category: "Print",
    size: "regular",
    gradient: "from-[#222224] to-[#0b0b0c]"
  },
  {
    id: 6,
    name: "Road Rage Van Blitz",
    category: "Outdoor",
    size: "wide",
    gradient: "from-[#2c120f] to-[#130909]"
  }
];

const sizeClass = {
  tall: "h-[360px]",
  regular: "h-[280px]",
  wide: "h-[240px] md:h-[320px]"
};

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="border-y border-white/10 bg-[#090909] py-24 md:py-32">
      <div className="section-shell">
        <p className="font-accent text-xs uppercase tracking-[0.2em] text-brand-yellow">Portfolio</p>
        <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5.6rem)] uppercase leading-[0.9]">Our Work</h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 font-accent text-[11px] uppercase tracking-[0.17em] transition ${
                activeFilter === filter
                  ? "border-brand-red bg-brand-red text-black"
                  : "border-white/15 bg-transparent text-white/65 hover:border-brand-red hover:text-brand-red"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 ${sizeClass[project.size]}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <span className="w-fit rounded-full border border-white/20 bg-black/35 px-3 py-1 font-accent text-[10px] uppercase tracking-[0.16em] text-brand-yellow">
                    {project.category}
                  </span>
                  <h3 className="max-w-[14ch] font-display text-4xl uppercase leading-[0.9]">{project.name}</h3>
                </div>

                <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-red/80 via-brand-red/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-5 left-5 font-accent text-xs uppercase tracking-[0.16em] text-black">
                    View Project -&gt;
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
