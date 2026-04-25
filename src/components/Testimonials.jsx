import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "NO1ADS brought energy, speed, and strategic clarity. Our campaign performance jumped within weeks.",
    name: "Arvind Krishnan",
    company: "Brand Lead, South Blaze"
  },
  {
    id: 2,
    quote: "From our exhibition pavilion to digital follow-up, every touchpoint felt premium and synchronized.",
    name: "Dharani Menon",
    company: "Marketing Head, Metro Build Expo"
  },
  {
    id: 3,
    quote: "Roadshow execution was flawless across cities. They think like owners, not vendors.",
    name: "Naveen Raj",
    company: "Director, SunPeak Consumer"
  }
];

function Testimonials() {
  const carouselRef = useRef(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const updateLimit = () => {
      const element = carouselRef.current;
      if (!element) return;
      setDragLimit(Math.max(0, element.scrollWidth - element.offsetWidth));
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="section-shell">
        <p className="font-accent text-xs uppercase tracking-[0.2em] text-brand-yellow">Social Proof</p>
        <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5.6rem)] uppercase leading-[0.9]">What Clients Say</h2>

        <div ref={carouselRef} className="mt-12 overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -dragLimit, right: 0 }}
            className="flex cursor-grab gap-4 active:cursor-grabbing md:gap-6"
          >
            {testimonials.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -6 }}
                className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-[#171717] p-6 md:w-[380px]"
              >
                <Quote size={24} className="text-brand-red" />
                <p className="mt-5 text-base leading-relaxed text-white/85">{item.quote}</p>

                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                <p className="mt-6 font-display text-4xl uppercase leading-none">{item.name}</p>
                <p className="mt-2 text-sm text-white/55">{item.company}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
