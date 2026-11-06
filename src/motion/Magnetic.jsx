import { useRef } from 'react';
import { gsap, useGSAP } from './gsap.js';
import { DUR, EASE, isFinePointer, prefersReducedMotion } from './tokens.js';

/**
 * Magnetic hover wrapper (cinematic motion system). The wrapper — not the
 * child — follows the pointer via gsap.quickTo, so the child keeps its own
 * hover/active/focus styles. Translate only, no scale. Disabled on touch and
 * for reduced-motion users.
 *
 * Pure layout primitive: skeleton/empty states N/A.
 */
export default function Magnetic({ children, strength = 0.22, className = '' }) {
  const ref = useRef(null);

  useGSAP(
    (_ctx, contextSafe) => {
      const el = ref.current;
      if (!el || prefersReducedMotion() || !isFinePointer()) return;

      const xTo = gsap.quickTo(el, 'x', { duration: DUR.hover, ease: EASE.ui });
      const yTo = gsap.quickTo(el, 'y', { duration: DUR.hover, ease: EASE.ui });

      const onMove = contextSafe(e => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * strength);
        yTo((e.clientY - r.top - r.height / 2) * strength);
      });
      const onLeave = contextSafe(() => {
        xTo(0);
        yTo(0);
      });

      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
      };
    },
    { scope: ref, dependencies: [strength] }
  );

  return (
    <span ref={ref} className={`st-magnetic ${className}`}>
      {children}
    </span>
  );
}
