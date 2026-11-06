import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../motion/gsap.js';
import { getLenis, scrollToTarget } from '../motion/SmoothScroll.jsx';

/**
 * On every route change, jump to the top of the page — unless the URL carries a
 * hash, in which case scroll to that anchor instead. Keeps the multi-page
 * experience feeling like real page loads. Goes through Lenis when it is
 * active so its internal scroll position never drifts from the real one, then
 * re-measures ScrollTriggers once the new route has laid out.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timer;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        scrollToTarget(el, { offset: -72 });
        return undefined;
      }
    }
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    timer = setTimeout(() => ScrollTrigger.refresh(), 350);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
