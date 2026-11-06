// Motion tokens — the shared vocabulary of the cinematic motion system.
// Mirrors DESIGN.md › Motion tokens. Change values here, not inline.

export const EASE = {
  ui: 'power3.out',
  text: 'power4.out',
  hero: 'expo.out',
  scrub: 'none', // every scroll-scrubbed track must be linear
};

export const DUR = {
  reveal: 0.95,
  text: 1,
  hover: 0.45,
  cursor: 0.35,
};

export const SCRUB = {
  cinematic: 1.2,
  soft: 0.8,
  precise: true,
};

export const STAGGER = {
  words: 0.055,
  lines: 0.11,
  cards: 0.075,
};

export const START = 'top 82%';

// gsap.matchMedia conditions. `motion` = every screen size with motion
// allowed: the story scenes pin on phones too, so mobile gets the same
// scroll-driven experience as desktop. Reduced motion never pins.
export const MQ = {
  motion: '(prefers-reduced-motion: no-preference)',
  desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
  mobile: '(max-width: 1023px) and (prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia(MQ.reduce).matches;

export const isFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
