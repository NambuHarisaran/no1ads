import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../motion/gsap.js';
import { MQ } from '../motion/tokens.js';
import { bindHorizontalSwipe, stepHorizontalTrigger } from '../motion/horizontalSwipe.js';
import { ActLabel, Arrow, useStoryReveals } from './primitives.jsx';
import { FESTIVALS } from './storyData.js';

/**
 * ACT III — A YEAR IN TAMIL NADU. Every creative here is a real campaign.
 * Every screen size: the section pins and BOTH vertical scrolling ("scroll down")
 * AND horizontal swiping ("swipe left/right" + Prev/Next buttons) drive the
 * calendar track sideways (linear `ease: none`, required for
 * containerAnimation) — you see the whole year before the next act. Each
 * card's artwork drifts inside its frame and the month bar fills Jan → Dec.
 * Reduced motion: a native horizontal scroller with snap.
 */
export default function ActYear() {
  const root = useRef(null);
  const stRef = useRef(null);
  const viewportRef = useRef(null);
  useStoryReveals(root);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const track = q('[data-track]')[0];
        const pinEl = q('.st-year__pin')[0];
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        stRef.current = tl.scrollTrigger;

        tl.to(track, { x: () => -distance(), duration: 1 }, 0).fromTo(
          q('[data-year-fill]'),
          { scaleX: 0 },
          { scaleX: 1, duration: 1 },
          0
        );

        q('.st-year__card').forEach(card => {
          gsap.fromTo(
            card.querySelector('img'),
            { xPercent: -7 },
            {
              xPercent: 7,
              ease: 'none',
              scrollTrigger: { trigger: card, containerAnimation: tl, start: 'left right', end: 'right left', scrub: true },
            }
          );
          gsap.fromTo(
            card.querySelector('.st-year__month'),
            { autoAlpha: 0.25, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, containerAnimation: tl, start: 'left 85%', end: 'left 45%', scrub: true },
            }
          );
        });

        // Bind horizontal touch swipe + trackpad wheel + mouse drag to the pinned ScrollTrigger
        const unbindSwipe = bindHorizontalSwipe(pinEl, () => stRef.current, { speed: 1.35 });

        return () => {
          unbindSwipe();
          stRef.current = null;
        };
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  const handleStep = dir => {
    stepHorizontalTrigger(stRef.current, dir, FESTIVALS.length, viewportRef.current);
  };

  return (
    <section className="st-act st-year" id="act-year" ref={root} aria-labelledby="year-title">
      <div className="st-year__pin">
        <header className="st-year__head st-container">
          <ActLabel num="III" title="A year in Tamil Nadu" />
          <div className="st-year__head-row">
            <h2 className="st-year__title" id="year-title">
              Your customers live by the calendar. <em className="st-serif">So do we.</em>
            </h2>
            <p className="st-year__sub" data-st-reveal>
              Every major retail moment of the year — planned, designed and launched ahead of the rush.
            </p>
          </div>
        </header>

        <div
          className="st-year__viewport"
          ref={viewportRef}
          tabIndex={0}
          aria-label="Festival campaign calendar — swipe sideways or scroll down"
        >
          <ul className="st-year__track" data-track>
            {FESTIVALS.map(f => (
              <li className="st-year__card" key={f.slug}>
                <p className="st-year__month">
                  <span className="st-year__greg">{f.month}</span>
                  <span className="st-year__season">{f.season}</span>
                </p>
                <figure className="st-year__media" style={{ backgroundImage: f.lqip ? `url(${f.lqip})` : undefined }}>
                  <img src={f.img} alt={f.alt} loading="lazy" decoding="async" width="720" height="900" draggable="false" />
                </figure>
                <p className="st-year__fest">
                  <span className="st-year__fest-title">{f.title}</span>
                  <span className="st-year__fest-en">{f.tag}</span>
                </p>
              </li>
            ))}
            <li className="st-year__end">
              <p className="st-year__end-big">Every season.<br />Every year<br /><em className="st-serif">since 2000.</em></p>
              <Link className="st-btn st-btn--ghost" to="/work">
                See all 69 pieces <Arrow />
              </Link>
            </li>
          </ul>
        </div>

        <div className="st-year__bar st-container">
          <span aria-hidden="true">Jan</span>
          <span className="st-year__bar-track" aria-hidden="true">
            <span className="st-year__bar-fill" data-year-fill />
          </span>
          <span aria-hidden="true">Dec</span>

          <div className="st-year__controls">
            <span className="st-year__swipe-hint" aria-hidden="true">
              Swipe <span className="st-year__swipe-arrows">↔</span> or scroll <span className="st-year__swipe-arrows">↓</span>
            </span>
            <button
              type="button"
              className="st-year__step-btn"
              onClick={() => handleStep(-1)}
              aria-label="Previous festival campaign"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              className="st-year__step-btn"
              onClick={() => handleStep(1)}
              aria-label="Next festival campaign"
            >
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
