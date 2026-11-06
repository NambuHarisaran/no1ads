import { useRef, useState } from 'react';
import { ScrollTrigger, useGSAP } from '../motion/gsap.js';
import { scrollToTarget } from '../motion/SmoothScroll.jsx';
import { Arrow } from './primitives.jsx';
import { ACTS } from './storyData.js';

/**
 * Story navigation:
 * 1. Fixed left act index (`>=1360px`) for jumping directly to any chapter.
 * 2. Floating bottom scroll-guide pill (`.st-scrollguide`, all screens) that
 *    tracks story progress, shows the active chapter + "Scroll down ↓", and
 *    steps aside during Act III where the calendar's own "Swipe ↔ or Scroll ↓"
 *    bar & Prev/Next controls occupy the bottom rail.
 */
export default function StoryNav() {
  const root = useRef(null);
  const fillRef = useRef(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useGSAP(
    () => {
      ACTS.forEach((act, i) => {
        const el = document.getElementById(act.id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: self => self.isActive && setActive(i),
        });
      });

      const first = document.getElementById(ACTS[1].id);
      const last = document.getElementById(ACTS[ACTS.length - 2].id); // hide before Epilogue CTA
      const epilogue = document.getElementById(ACTS[ACTS.length - 1].id);

      if (first && epilogue) {
        ScrollTrigger.create({
          trigger: first,
          start: 'top 85%',
          endTrigger: last || epilogue,
          end: 'bottom 35%',
          onToggle: self => setVisible(self.isActive),
          onUpdate: self => {
            if (fillRef.current) {
              fillRef.current.style.transform = `scaleX(${self.progress.toFixed(3)})`;
            }
          },
        });
      }
    },
    { scope: root }
  );

  const currentAct = ACTS[active] || ACTS[0];
  const isYearAct = currentAct.id === 'act-year';

  const handleStepDown = () => {
    const vh = window.innerHeight || 800;
    scrollToTarget(Math.round(window.scrollY + vh * 0.82), { duration: 0.95 });
  };

  return (
    <div ref={root}>
      <nav className={`st-storynav ${visible ? 'is-visible' : ''}`} aria-label="Story chapters">
        <ol>
          {ACTS.map((act, i) => (
            <li key={act.id}>
              <button
                type="button"
                className={`st-storynav__item ${active === i ? 'is-active' : ''}`}
                aria-current={active === i ? 'true' : undefined}
                onClick={() => scrollToTarget(`#${act.id}`, { offset: act.id === 'prologue' ? 0 : 2 })}
                tabIndex={visible ? 0 : -1}
              >
                <span className="st-storynav__num">{act.num || (i === 0 ? '◦' : '•')}</span>
                <span className="st-storynav__title">{act.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className={`st-scrollguide ${visible && !isYearAct ? 'is-visible' : ''}`}>
        <button
          type="button"
          className="st-scrollguide__btn"
          onClick={handleStepDown}
          tabIndex={visible && !isYearAct ? 0 : -1}
          aria-label={`Current chapter: ${currentAct.title}. Scroll down to continue`}
        >
          <span className="st-scrollguide__chapter">
            {currentAct.num ? <em className="st-scrollguide__num">{currentAct.num}</em> : null}
            <span className="st-scrollguide__title">{currentAct.title}</span>
          </span>
          <span className="st-scrollguide__sep" aria-hidden="true" />
          <span className="st-scrollguide__action">
            Scroll down
            <Arrow dir="down" />
          </span>
          <span className="st-scrollguide__bar" aria-hidden="true">
            <span className="st-scrollguide__fill" ref={fillRef} />
          </span>
        </button>
      </div>
    </div>
  );
}
