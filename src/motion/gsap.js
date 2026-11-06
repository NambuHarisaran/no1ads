// Single GSAP entry point. Every story/motion file imports from here so the
// plugins are registered exactly once (safe at module scope: registerPlugin
// does not touch the DOM, so it is fine during SSG prerender).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP);
gsap.defaults({ ease: 'power3.out', duration: 0.85 });

// Mobile browsers resize the viewport when the URL bar shows/hides; refreshing
// pinned scenes on every one of those causes visible jumps.
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP };
