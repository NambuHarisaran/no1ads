import { useRef } from 'react';
import { gsap, useGSAP } from '../motion/gsap.js';
import { isFinePointer, prefersReducedMotion } from '../motion/tokens.js';

/**
 * Orange cursor dot + lagging ring, now driven by gsap.quickTo (one reused
 * tween per axis instead of a hand-rolled rAF loop). Elements can request a
 * contextual label with `data-cursor="Play"` — the ring grows into an orange
 * disc and shows the label. Desktop fine pointers only; off for reduced motion.
 */
const INTERACTIVE = 'a, button, input, textarea, select, summary, [role="button"]';

const CursorDot = () => {
  const root = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useGSAP(
    (_ctx, contextSafe) => {
      if (!isFinePointer() || prefersReducedMotion()) return;
      const dot = dotRef.current;
      const ring = ringRef.current;
      const label = labelRef.current;

      gsap.set([dot, ring, label], { xPercent: -50, yPercent: -50, x: 0, y: 0, autoAlpha: 0 });
      const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' });
      const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' });
      const ringX = gsap.quickTo([ring, label], 'x', { duration: 0.35, ease: 'power3.out' });
      const ringY = gsap.quickTo([ring, label], 'y', { duration: 0.35, ease: 'power3.out' });

      let revealed = false;
      let mode = 'idle';
      const setMode = contextSafe((next, text = '') => {
        if (next === mode && next !== 'label') return;
        mode = next;
        if (!revealed) return;
        if (next === 'label') {
          label.textContent = text;
          gsap.to(ring, { scale: 3.4, backgroundColor: 'rgba(232,119,34,1)', autoAlpha: 1, duration: 0.4 });
          gsap.to(label, { autoAlpha: 1, duration: 0.25, delay: 0.08 });
          gsap.to(dot, { autoAlpha: 0, duration: 0.2 });
        } else {
          gsap.to(ring, {
            scale: next === 'hover' ? 1.7 : 1,
            backgroundColor: 'rgba(232,119,34,0)',
            autoAlpha: next === 'hover' ? 1 : 0.6,
            duration: 0.35,
          });
          gsap.to(label, { autoAlpha: 0, duration: 0.15 });
          gsap.to(dot, { autoAlpha: 1, duration: 0.2 });
        }
      });

      const onMove = contextSafe(e => {
        if (!revealed) {
          revealed = true;
          gsap.set([dot, ring, label], { x: e.clientX, y: e.clientY });
          gsap.to(dot, { autoAlpha: 1, duration: 0.2, overwrite: 'auto' });
          gsap.to(ring, { autoAlpha: 0.6, duration: 0.2, overwrite: 'auto' });
        }
        dotX(e.clientX);
        dotY(e.clientY);
        ringX(e.clientX);
        ringY(e.clientY);
      });
      const onOver = contextSafe(e => {
        const labelled = e.target.closest('[data-cursor]');
        if (labelled) return setMode('label', labelled.dataset.cursor);
        setMode(e.target.closest(INTERACTIVE) ? 'hover' : 'idle');
      });

      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerover', onOver);
      document.documentElement.classList.add('has-custom-cursor');

      return () => {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerover', onOver);
        document.documentElement.classList.remove('has-custom-cursor');
      };
    },
    { scope: root }
  );

  return (
    <div ref={root} aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={labelRef} className="cursor-label" />
    </div>
  );
};

export default CursorDot;
