import { useRef } from 'react';
import { gsap, useGSAP } from '../motion/gsap.js';
import { MQ } from '../motion/tokens.js';
import { bindHorizontalSwipe } from '../motion/horizontalSwipe.js';
import { ActLabel, Arrow, YtThumb, useStoryReveals } from './primitives.jsx';
import { CHANNEL_URL, FILMS, watchUrl } from './storyData.js';

const Play = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="31" fill="rgba(232,119,34,.95)" />
    <path d="M26 21l18 11-18 11z" fill="#0D0D0D" />
  </svg>
);

/**
 * ACT IV — ON AIR. "House lights down": the feature film opens from a thin
 * letterbox slit to full frame.
 * Desktop: one short scrubbed clip-path as the film scrolls in, then the
 * supporting films rise in.
 * Phones/tablets: the act pins — the letterbox opens, then the supporting
 * films and the channel card slide across as a reel, so the whole act plays
 * out before the page moves on (same rhythm as the calendar).
 */
export default function ActOnAir() {
  const root = useRef(null);
  useStoryReveals(root);
  const [feature, ...rest] = FILMS;

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(MQ.desktop, () => {
        gsap
          .timeline({
            scrollTrigger: { trigger: q('.st-onair__feature')[0], start: 'top 92%', end: 'center 55%', scrub: 1 },
          })
          .fromTo(
            q('.st-onair__feature'),
            { clipPath: 'inset(38% 6% 38% 6% round 28px)', scale: 0.9 },
            { clipPath: 'inset(0% 0% 0% 0% round 28px)', scale: 1, ease: 'none' }
          )
          .fromTo(q('.st-onair__feature img'), { scale: 1.08 }, { scale: 1, ease: 'none' }, 0);

        gsap.fromTo(
          q('[data-reel] > *'),
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power4.out',
            stagger: 0.08,
            scrollTrigger: { trigger: q('[data-reel]')[0], start: 'top 88%', once: true },
          }
        );
      });

      mm.add(MQ.mobile, () => {
        const reel = q('[data-reel]')[0];
        const stage = q('.st-onair__stage')[0];
        const frame = reel.parentElement;
        const distance = () => {
          const pad = parseFloat(getComputedStyle(frame).paddingLeft) || 0;
          return Math.max(0, reel.scrollWidth - (frame.clientWidth - pad * 2));
        };

        const tl = gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: () => `+=${window.innerHeight * 0.8 + distance()}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(
            q('.st-onair__feature'),
            { clipPath: 'inset(40% 4% 40% 4% round 20px)', scale: 0.94 },
            { clipPath: 'inset(0% 0% 0% 0% round 20px)', scale: 1, duration: 1 }
          )
          .fromTo(q('.st-onair__feature img'), { scale: 1.08 }, { scale: 1, duration: 1 }, 0)
          .fromTo(q('[data-reel-fill]'), { scaleX: 0 }, { scaleX: 1, duration: 1.6 }, 0.6)
          .to(reel, { x: () => -distance(), duration: 1.6 }, 0.6)
          .to({}, { duration: 0.2 });

        const unbindSwipe = bindHorizontalSwipe(stage, () => tl.scrollTrigger, { speed: 1.35 });
        return () => unbindSwipe();
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="st-act st-onair" id="act-onair" ref={root} aria-labelledby="onair-title">
      <div className="st-container st-onair__stage">
        <ActLabel num="IV" title="On air" />
        <div className="st-onair__head">
          <h2 className="st-onair__title" id="onair-title" data-st-reveal>
            Lights. Camera. <em className="st-serif st-gold-text">Madurai.</em>
          </h2>
          <p className="st-onair__lede" data-st-reveal>
            Brand films and TVCs — written, shot and edited in-house for the silk houses, jewellers and
            household names Tamil Nadu grew up with.
          </p>
        </div>

        <a
          className="st-onair__feature"
          href={watchUrl(feature.id)}
          target="_blank"
          rel="noreferrer"
          data-cursor="Play"
          aria-label={`Watch ${feature.title} on YouTube (opens in a new tab)`}
        >
          <YtThumb id={feature.id} alt="" />
          <span className="st-onair__play"><Play /></span>
          <span className="st-onair__meta">
            <span className="st-onair__now">Now showing</span>
            <span className="st-onair__name">{feature.title}</span>
          </span>
        </a>

        <div className="st-onair__more" data-reel>
          {rest.map(v => (
            <a
              className="st-onair__card"
              key={v.id}
              href={watchUrl(v.id)}
              target="_blank"
              rel="noreferrer"
              data-cursor="Play"
              aria-label={`Watch ${v.title} on YouTube (opens in a new tab)`}
            >
              <span className="st-onair__card-media">
                <YtThumb id={v.id} alt="" />
                <span className="st-onair__play st-onair__play--sm"><Play /></span>
              </span>
              <span className="st-onair__card-name">{v.title}</span>
            </a>
          ))}
          <a className="st-onair__channel" href={CHANNEL_URL} target="_blank" rel="noreferrer">
            <span>15 films and counting</span>
            <strong>Watch all on YouTube</strong>
            <Arrow />
          </a>
        </div>

        <span className="st-onair__reel-bar" aria-hidden="true">
          <span className="st-onair__reel-fill" data-reel-fill />
        </span>
      </div>
    </section>
  );
}
