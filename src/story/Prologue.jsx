import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../motion/gsap.js';
import { EASE, MQ, SCRUB } from '../motion/tokens.js';
import Magnetic from '../motion/Magnetic.jsx';
import { scrollToTarget } from '../motion/SmoothScroll.jsx';
import { Arrow } from './primitives.jsx';
import HeroBulbs from './HeroBulbs.jsx';

const SWITCH = ['We', 'switch', 'on', 'the', 'lights.'];
const RING_TEXT = 'Number One Ads \u2726 25 years of legacy \u2726 Madurai \u2726 Since 2000 \u2726 ';
// Circle the text rides on (viewBox 0 0 200 200, r = 80) and its length,
// so the phrase spaces itself evenly around the full ring.
const RING_PATH = 'M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0';
const RING_LEN = Math.round(2 * Math.PI * 80);

/**
 * PROLOGUE — "Every brand starts in the dark."
 * Centred headline on top; the 25-years emblem sits centre-bottom inside a
 * ring with the agency's name set on a curve around it. "Our story" (left)
 * and "Start a project" (right) flank the emblem on desktop and sit side by
 * side under it on phones.
 * Every screen size: load timeline, then a pinned scrubbed "switch-on" (switch
 * line lights, orbit draws, curved type turns gold, the hanging bulbs flicker
 * on, 25 lights up) before the
 * stage dims and hands off to Act I. Reduced motion: static, fully lit.
 */
export default function Prologue() {
  const root = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        // Load choreography: backdrop → emblem → headline → copy → CTAs.
        gsap
          .timeline({ defaults: { ease: EASE.text } })
          .addLabel('bg')
          .fromTo(q('.st-prologue__bg'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.4, ease: 'power2.out' }, 'bg')
          .fromTo(q('.st-prologue__sign'), { autoAlpha: 0, y: 40, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.5, ease: EASE.hero }, 'bg+=0.1')
          .addLabel('headline', 'bg+=0.25')
          .fromTo(q('.st-line__inner'), { y: 0, yPercent: 110 }, { y: 0, yPercent: 0, duration: 1.1, stagger: 0.11 }, 'headline')
          .fromTo(q('.st-prologue__switch'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 'headline+=0.45')
          .fromTo(q('[data-hero-in="copy"]'), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 'headline+=0.6')
          .fromTo(q('[data-hero-in="cta"]'), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 'headline+=0.75');

        // The curved type drifts slowly forever (cheap: one SVG group rotation).
        gsap.to(q('[data-ring-spin]'), { rotation: 360, svgOrigin: '100 100', duration: 48, ease: 'none', repeat: -1 });

        // Hanging bulbs sway gently, each on its own rhythm.
        q('[data-bulb]').forEach((bulb, i) => {
          gsap.fromTo(
            bulb,
            { rotation: i % 2 ? 2.4 : -2.4 },
            { rotation: i % 2 ? -2.4 : 2.4, duration: 2.6 + i * 0.45, ease: 'sine.inOut', repeat: -1, yoyo: true }
          );
        });

        // Pinned, scrubbed switch-on.
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: '+=110%',
              pin: true,
              scrub: SCRUB.cinematic,
              anticipatePin: 1,
            },
          })
          .addLabel('switch')
          .fromTo(q('.st-word__on'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, stagger: 0.16, ease: 'power2.out' }, 'switch')
          .fromTo(q('[data-ring]'), { drawSVG: '0% 0%' }, { drawSVG: '0% 100%', duration: 1.4, ease: 'power1.inOut' }, 'switch')
          .fromTo(q('.st-ring__text'), { fill: '#3A3A3A' }, { fill: '#F6C27A', duration: 0.9, ease: 'power2.inOut' }, 'switch+=0.3')
          .fromTo(q('.st-prologue__badge--on'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9, ease: 'power2.inOut' }, 'switch+=0.35')
          .fromTo(q('.st-prologue__glow'), { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 1.1, ease: 'power2.out' }, 'switch+=0.35');

        // Outer bulbs first, then inner: each flickers (on, dip, on) as you scroll.
        const order = [0, 3, 1, 2];
        const bulbs = q('[data-bulb]');
        order.forEach((idx, k) => {
          const lit = bulbs[idx]?.querySelectorAll('[data-bulb-on]');
          if (!lit?.length) return;
          tl.to(lit, { keyframes: { autoAlpha: [0.9, 0.15, 0.7, 0.3, 1] }, duration: 0.7, ease: 'none' }, `switch+=${0.05 + k * 0.18}`);
        });

        tl.to({}, { duration: 0.35 }) // hold the lit frame
          .addLabel('handoff')
          .to(q('.st-prologue__inner'), { scale: 0.95, autoAlpha: 0.25, duration: 0.9, ease: 'power1.in' }, 'handoff');
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="st-prologue" id="prologue" ref={root} aria-labelledby="prologue-title">
      <div className="st-prologue__bg" aria-hidden="true">
        <span className="st-prologue__grid" />
        <span className="st-prologue__vignette" />
      </div>

      <HeroBulbs />

      <div className="st-prologue__inner st-container">
        <div className="st-prologue__copy">
          <h1 className="st-prologue__title" id="prologue-title">
            <span className="sr-only">Number One Ads — 360° advertising agency in Madurai, Tamil Nadu. </span>
            <span className="st-line"><span className="st-line__inner">Every brand starts</span></span>
            <span className="st-line">
              <span className="st-line__inner">
                in the <em className="st-serif st-prologue__dark">dark.</em>
              </span>
            </span>
          </h1>

          <p className="st-prologue__switch">
            <span className="sr-only">We switch on the lights.</span>
            <span aria-hidden="true">
              {SWITCH.map(word => (
                <span className="st-word" key={word}>
                  <span className="st-word__off">{word}</span>
                  <span className="st-word__on">{word}</span>
                </span>
              ))}
            </span>
          </p>

          <p className="st-prologue__sub" data-hero-in="copy">
            Twenty-five years of making Madurai&rsquo;s brands impossible to walk past.
          </p>
        </div>

        <div className="st-prologue__stage">
          <div className="st-prologue__cta st-prologue__cta--story" data-hero-in="cta">
            <button type="button" className="st-btn st-btn--ghost" onClick={() => scrollToTarget('#act-noise')}>
              Our story <Arrow dir="down" />
            </button>
          </div>

          <div className="st-prologue__sign">
            <span className="st-prologue__glow" aria-hidden="true" />
            <svg className="st-prologue__ring" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="st-ring-path" d={RING_PATH} />
              </defs>
              <circle cx="100" cy="100" r="96" className="st-prologue__ring-track" />
              <circle cx="100" cy="100" r="96" className="st-prologue__ring-lit" data-ring transform="rotate(-90 100 100)" />
              <circle cx="100" cy="100" r="72" className="st-prologue__ring-inner" />
              <g data-ring-spin>
                <text className="st-ring__text">
                  <textPath href="#st-ring-path" textLength={RING_LEN} lengthAdjust="spacing">
                    {RING_TEXT}
                  </textPath>
                </text>
              </g>
            </svg>
            <img
              className="st-prologue__badge st-prologue__badge--off"
              src="/assets/25.png"
              alt=""
              aria-hidden="true"
              width="1565"
              height="1561"
              decoding="async"
            />
            <img
              className="st-prologue__badge st-prologue__badge--on"
              src="/assets/25.png"
              alt="25 years of legacy — Number One Ads"
              width="1565"
              height="1561"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          <div className="st-prologue__cta st-prologue__cta--start" data-hero-in="cta">
            <Magnetic>
              <Link to="/contact" className="st-btn st-btn--primary">
                Start a project <Arrow />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
