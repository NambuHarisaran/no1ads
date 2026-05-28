import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "NO1ADS brought energy, speed, and strategic clarity. Our campaign performance jumped within weeks.",
    name: "Arvind Krishnan",
    company: "Brand Lead, South Blaze",
    rating: 5
  },
  {
    id: 2,
    quote: "From our exhibition pavilion to digital follow-up, every touchpoint felt premium and synchronized.",
    name: "Dharani Menon",
    company: "Marketing Head, Metro Build Expo",
    rating: 5
  },
  {
    id: 3,
    quote: "Roadshow execution was flawless across cities. They think like owners, not vendors.",
    name: "Naveen Raj",
    company: "Director, SunPeak Consumer",
    rating: 5
  },
  {
    id: 4,
    quote: "The creative team understood our brand DNA from day one. Results speak for themselves.",
    name: "Priya Desai",
    company: "CEO, Retail Rush",
    rating: 5
  }
];

function Testimonials() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const carouselRef = useRef(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
    <section id="testimonials" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="section-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="font-body text-xs uppercase tracking-[0.12em]"
            style={{ color: "var(--accent-fire)" }}
          >
            SOCIAL PROOF
          </p>
          <h2 
            className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] uppercase leading-[0.9] tracking-wider"
            style={{ color: "var(--text-primary)" }}
          >
            WHAT CLIENTS SAY
          </h2>
        </motion.div>

        {/* Featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-12 rounded-lg p-10"
          style={{
            backgroundColor: "var(--bg-elevated)",
            borderLeft: "3px solid var(--accent-fire)"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentQuote].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <Quote 
                  size={32} 
                  style={{ color: "var(--accent-fire)", opacity: 0.4 }}
                  className="flex-shrink-0"
                />
                <div>
                  <p 
                    className="font-body text-lg leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    "{testimonials[currentQuote].quote}"
                  </p>

                  <div className="mt-6">
                    <div className="flex items-center gap-3">
                      <div>
                        <p 
                          className="font-headline text-base font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {testimonials[currentQuote].name}
                        </p>
                        <p 
                          className="font-body text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {testimonials[currentQuote].company}
                        </p>
                      </div>
                      <div className="flex gap-1 ml-auto">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className="fill-[var(--accent-fire)]"
                            style={{ color: "var(--accent-fire)" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicator */}
          <div className="mt-6 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentQuote(index)}
                className="h-1 transition-all"
                style={{
                  width: index === currentQuote ? "24px" : "8px",
                  backgroundColor: index === currentQuote ? "var(--accent-fire)" : "var(--border-subtle)"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Carousel of testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-12 relative"
        >
          <div ref={carouselRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: -dragLimit, right: 0 }}
              className="flex cursor-grab gap-4 active:cursor-grabbing md:gap-6"
            >
              {testimonials.map((item) => (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -4 }}
                  className="w-[280px] md:w-[320px] flex-shrink-0 rounded-lg border p-6 transition-all"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border-subtle)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className="fill-[var(--accent-fire)]"
                        style={{ color: "var(--accent-fire)" }}
                      />
                    ))}
                  </div>

                  <p 
                    className="mt-3 font-body text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    "{item.quote}"
                  </p>

                  <div className="mt-5 border-t border-[var(--border-subtle)] pt-4">
                    <p 
                      className="font-headline text-sm font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.name}
                    </p>
                    <p 
                      className="font-body text-xs mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.company}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
