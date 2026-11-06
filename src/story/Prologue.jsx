import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../motion/gsap.js';
import { EASE, MQ, SCRUB } from '../motion/tokens.js';
import Magnetic from '../motion/Magnetic.jsx';
import { scrollToTarget } from '../motion/SmoothScroll.jsx';
import { Arrow } from './primitives.jsx';
import HeroBulbs from './HeroBulbs.jsx';

const SWITCH = ['We', 'switch', 'on', 'the', 'lights.'];

// 25 perimeter marquee bulbs — one for each year of the 25-year legacy —
// arranged clockwise from 12 o'clock around the emblem (viewBox 0 0 200 200, r = 88).
const MARQUEE_BULBS = Array.from({ length: 25 }, (_, i) => {
  const angle = (i / 25) * Math.PI * 2 - Math.PI / 2;
  const r = 88;
  return {
    i,
    cx: +(100 + Math.cos(angle) * r).toFixed(2),
    cy: +(100 + Math.sin(angle) * r).toFixed(2),
  };
});

/**
 * PROLOGUE — "Every brand starts in the dark."
 * Centred headline on top; the 25-years emblem sits centre-bottom inside a
 * 25-bulb architectural marquee halo (one bulb per year since 2000).
 * "Our story" (left) and "Start a project" (right) flank the emblem on desktop
 * and sit side by side under it on phones.
 * Every screen size: load timeline, then a pinned scrubbed "switch-on" (switch
 * line lights, power ring draws, all 25 marquee bulbs ignite sequentially,
 * hanging Edison bulbs flicker on, 25 emblem & stage beams light up) before the
 * stage dims and hands off to Act I. Reduced motion: static, fully lit.
 */
export default function Prologue() {
  const root = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        // Load choreography: backdrop → emblem → headline → copy → scroll cue → CTAs.
        gsap
          .timeline({ defaults: { ease: EASE.text } })
          .addLabel('bg')
          .fromTo(q('.st-prologue__bg'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.4, ease: 'power2.out' }, 'bg')
          .fromTo(q('.st-prologue__sign'), { autoAlpha: 0, y: 40, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.5, ease: EASE.hero }, 'bg+=0.1')
          .addLabel('headline', 'bg+=0.25')
          .fromTo(q('.st-line__inner'), { y: 0, yPercent: 110 }, { y: 0, yPercent: 0, duration: 1.1, stagger: 0.11 }, 'headline')
          .fromTo(q('.st-prologue__switch'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 'headline+=0.45')
          .fromTo(q('[data-hero-in="copy"]'), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 'headline+=0.6')
          .fromTo(q('[data-hero-in="cue"]'), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.85 }, 'headline+=0.68')
          .fromTo(q('[data-hero-in="cta"]'), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 'headline+=0.75');

        // Hanging Edison bulbs sway gently, each on its own rhythm.
        q('[data-bulb]').forEach((bulb, i) => {
          gsap.fromTo(
            bulb,
            { rotation: i % 2 ? 2.2 : -2.2 },
            { rotation: i % 2 ? -2.2 : 2.2, duration: 2.8 + i * 0.45, ease: 'sine.inOut', repeat: -1, yoyo: true }
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
          .fromTo(q('[data-ring]'), { drawSVG: '0% 0%' }, { drawSVG: '0% 100%', duration: 1.35, ease: 'power1.inOut' }, 'switch')
          .fromTo(
            q('[data-ring-bulb]'),
            { autoAlpha: 0, scale: 0.4, svgOrigin: '100 100' },
            { autoAlpha: 1, scale: 1, duration: 0.28, stagger: 0.042, ease: 'back.out(2)' },
            'switch+=0.05'
          )
          .fromTo(q('.st-prologue__badge--on'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9, ease: 'power2.inOut' }, 'switch+=0.35')
          .fromTo(q('.st-prologue__glow'), { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 1.1, ease: 'power2.out' }, 'switch+=0.35')
          .fromTo(q('[data-stage-lit]'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.1, ease: 'power2.out' }, 'switch+=0.2');

        // Outer hanging bulbs first, then inner: each flickers (on, dip, on) as you scroll.
        const order = [0, 3, 1, 2];
        const bulbs = q('[data-bulb]');
        order.forEach((idx, k) => {
          const lit = bulbs[idx]?.querySelectorAll('[data-bulb-on]');
          if (!lit?.length) return;
          tl.to(lit, { keyframes: { autoAlpha: [0.9, 0.15, 0.75, 0.3, 1] }, duration: 0.7, ease: 'none' }, `switch+=${0.05 + k * 0.18}`);
        });

        tl.to({}, { duration: 0.35 }) // hold the lit frame
          .addLabel('handoff')
          .to(q('.st-prologue__inner'), { scale: 0.95, autoAlpha: 0.25, duration: 0.9, ease: 'power1.in' }, 'handoff');
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  const handleScrollCue = () => {
    const vh = window.innerHeight || 800;
    if (window.scrollY < vh * 0.45) {
      scrollToTarget(Math.round(vh * 0.65), { duration: 1.1 });
    } else {
      scrollToTarget('#act-noise');
    }
  };

  return (
    <section className="st-prologue" id="prologue" ref={root} aria-labelledby="prologue-title">
      <div className="st-prologue__bg" aria-hidden="true">
        <span className="st-prologue__ambient" />
        <span className="st-prologue__beams" data-stage-lit />
        <span className="st-prologue__floor" data-stage-lit />
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

          <button
            type="button"
            className="st-prologue__cue"
            data-hero-in="cue"
            onClick={handleScrollCue}
            aria-label="Scroll down to switch on the lights and explore our story"
          >
            <span className="st-prologue__cue-mouse" aria-hidden="true">
              <span className="st-prologue__cue-wheel" />
            </span>
            <span className="st-prologue__cue-text">Scroll down to switch on</span>
            <span className="st-prologue__cue-chevron" aria-hidden="true">
              <Arrow dir="down" />
            </span>
          </button>
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
                <radialGradient id="st-marquee-glow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#FFE4AD" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#F59E36" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#E87722" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="st-ring-brass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(255, 224, 178, 0.35)" />
                  <stop offset="50%" stopColor="rgba(232, 119, 34, 0.12)" />
                  <stop offset="100%" stopColor="rgba(246, 194, 122, 0.3)" />
                </linearGradient>
              </defs>

              {/* Architectural luminaire housing rails */}
              <circle cx="100" cy="100" r="95" className="st-prologue__ring-outer" />
              <circle cx="100" cy="100" r="88" className="st-prologue__ring-track" />
              <circle cx="100" cy="100" r="88" className="st-prologue__ring-lit" data-ring transform="rotate(-90 100 100)" />
              <circle cx="100" cy="100" r="80" className="st-prologue__ring-inner" />

              {/* 25 unlit bulb sockets + smoked glass globes */}
              <g className="st-ring__sockets">
                {MARQUEE_BULBS.map(({ i, cx, cy }) => (
                  <g key={`off-${i}`}>
                    <circle cx={cx} cy={cy} r="3.1" fill="#171411" stroke="rgba(246, 194, 122, 0.24)" strokeWidth="0.6" />
                    <circle cx={cx} cy={cy} r="1.9" fill="#2a241e" />
                    <circle cx={cx - 0.5} cy={cy - 0.5} r="0.55" fill="rgba(255, 255, 255, 0.22)" />
                  </g>
                ))}
              </g>

              {/* 25 lit warm-tungsten marquee bulbs (ignite sequentially on scroll) */}
              <g className="st-ring__bulbs">
                {MARQUEE_BULBS.map(({ i, cx, cy }) => (
                  <g key={`on-${i}`} className="st-ring__bulb-on" data-ring-bulb>
                    <circle cx={cx} cy={cy} r="7.5" fill="url(#st-marquee-glow)" />
                    <circle cx={cx} cy={cy} r="2.7" fill="#FFC870" stroke="rgba(255, 244, 218, 0.85)" strokeWidth="0.5" />
                    <circle cx={cx} cy={cy} r="1.35" fill="#FFFDF7" />
                  </g>
                ))}
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
