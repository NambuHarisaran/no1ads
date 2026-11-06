import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger } from './gsap.js';
import { prefersReducedMotion } from './tokens.js';

/**
 * Lenis smooth scroll with GSAP as the single frame-clock owner
 * (lenis-gsap pattern): Lenis `autoRaf` is off, `gsap.ticker` drives
 * `lenis.raf(time * 1000)` (ticker = seconds, Lenis = ms), and every Lenis
 * scroll notifies ScrollTrigger. Reduced-motion users get native scrolling.
 *
 * Renders nothing. Mounted once in <Layout />.
 */
let lenisInstance = null;

export const getLenis = () => lenisInstance;

/** Scroll to a selector / element / y. Falls back to native when Lenis is off. */
export function scrollToTarget(target, options = {}) {
  const lenis = lenisInstance;
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.4, ...options });
    return;
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'auto' });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  el?.scrollIntoView({ block: 'start' });
}

/** Pause/resume smooth scroll (menus, dialogs). Safe when Lenis is off. */
export function lockScroll(locked) {
  if (!lenisInstance) return;
  if (locked) lenisInstance.stop();
  else lenisInstance.start();
}

export default function SmoothScroll() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    let cancelled = false;
    document.fonts?.ready.then(() => !cancelled && refresh());
    window.addEventListener('load', refresh);

    if (prefersReducedMotion()) {
      return () => {
        cancelled = true;
        window.removeEventListener('load', refresh);
      };
    }

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      anchors: true,
    });
    lenisInstance = lenis;
    window.__lenis = lenis; // QA hook (scripted scroll screenshots)

    const unsubscribe = lenis.on('scroll', ScrollTrigger.update);
    const update = time => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelled = true;
      window.removeEventListener('load', refresh);
      gsap.ticker.remove(update);
      unsubscribe?.();
      lenis.destroy();
      lenisInstance = null;
      delete window.__lenis;
    };
  }, []);

  return null;
}
