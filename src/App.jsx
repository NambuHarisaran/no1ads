import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Roadshow from "./components/Roadshow";
import Contact from "./components/Contact";
import SeoFaq from "./components/SeoFaq";
import Footer from "./components/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // ── Page progress bar
    const bar = document.querySelector('.progress-bar');
    const floatBtn = document.querySelector('.floating-cta');

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? scrolled / total : 0;
      if (bar) bar.style.transform = `scaleX(${pct})`;

      // Show floating CTA after scrolling past hero (approx 600px)
      if (floatBtn) {
        floatBtn.classList.toggle('visible', scrolled > 600);
      }
    };

    // ── Scroll reveal (IntersectionObserver)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [loaded]);

  return (
    <div className="relative min-h-[100dvh]" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      {/* Page loader */}
      <div className={`page-loader ${loaded ? 'hidden' : ''}`}>
        <img src="/logo.png" alt="NO1ADS" style={{ height: 56, width: 'auto' }} />
      </div>

      {/* Progress bar */}
      <div className="progress-bar" aria-hidden="true" />

      <Navbar />
      <main className="relative" style={{ zIndex: 'var(--z-content)' }}>
        <Hero />
        <MarqueeStrip />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <Roadshow />
        <SeoFaq />
        <Contact />
      </main>
      <Footer />

      {/* Floating CTA */}
      <button
        className="floating-cta"
        onClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Start a Project →
      </button>
    </div>
  );
}

export default App;
