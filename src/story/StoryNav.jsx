import { useRef, useState } from 'react';
import { ScrollTrigger, useGSAP } from '../motion/gsap.js';
import { scrollToTarget } from '../motion/SmoothScroll.jsx';
import { ACTS } from './storyData.js';

/**
 * Fixed act index (≥1200px). Tells the reader where they are in a long story
 * and lets them jump between acts. One standalone ScrollTrigger per act —
 * created after every pinned scene (this component renders last), so pin
 * spacing is already accounted for.
 */
export default function StoryNav() {
  const root = useRef(null);
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
      const last = document.getElementById(ACTS[ACTS.length - 1].id);
      if (first && last) {
        ScrollTrigger.create({
          trigger: first,
          start: 'top 80%',
          endTrigger: last,
          end: 'bottom 40%',
          onToggle: self => setVisible(self.isActive),
        });
      }
    },
    { scope: root }
  );

  return (
    <nav ref={root} className={`st-storynav ${visible ? 'is-visible' : ''}`} aria-label="Story chapters">
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
  );
}
