import { useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../motion/gsap.js';
import { DUR, EASE, MQ, STAGGER } from '../motion/tokens.js';

/** Act marker: roman numeral · hairline · title. Pure typography (no states). */
export function ActLabel({ num, title, tone = 'default' }) {
  return (
    <p className={`st-act-label st-act-label--${tone}`} data-st-reveal>
      {num ? <span className="st-act-label__num">{num}</span> : null}
      <span className="st-act-label__line" aria-hidden="true" />
      <span className="st-act-label__title">{title}</span>
    </p>
  );
}

export function Arrow({ dir = 'right' }) {
  const d =
    dir === 'down'
      ? 'M12 5v14M6 13l6 6 6-6'
      : dir === 'left'
        ? 'M19 12H5M11 6l-6 6 6 6'
        : 'M5 12h14M13 6l6 6-6 6';
  return (
    <svg
      className="st-arrow"
      data-dir={dir}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

/**
 * YouTube thumbnail that prefers the 1280px `maxresdefault` and falls back to
 * `hqdefault` (always present) if the high-res frame was never generated.
 */
export function YtThumb({ id, alt, className = '', eager = false }) {
  const [src, setSrc] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width="1280"
      height="720"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={e => {
        // A missing maxres frame comes back as a 120×90 grey placeholder.
        if (e.currentTarget.naturalWidth < 200) setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
      }}
      onError={() => setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
    />
  );
}

/**
 * Batched fade-up for every `[data-st-reveal]` inside `scope` (labels,
 * headings, copy). Start state comes from CSS under html.has-motion, so
 * reduced-motion / no-JS users simply see the content.
 */
export function useStoryReveals(scope) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MQ.desktop}, ${MQ.mobile}`, () => {
        const targets = gsap.utils.toArray('[data-st-reveal]', scope.current);
        if (!targets.length) return;
        ScrollTrigger.batch(targets, {
          start: 'top 86%',
          once: true,
          onEnter: batch =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: DUR.reveal,
              ease: EASE.text,
              stagger: STAGGER.cards,
              overwrite: true,
            }),
        });
      });
      return () => mm.revert();
    },
    { scope }
  );
}
