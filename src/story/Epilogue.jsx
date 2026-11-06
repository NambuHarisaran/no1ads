import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../motion/gsap.js';
import { MQ } from '../motion/tokens.js';
import Magnetic from '../motion/Magnetic.jsx';
import { site } from '../data/siteConfig.js';
import QuickContact from '../components/QuickContact.jsx';
import { ActLabel, Arrow, useStoryReveals } from './primitives.jsx';
import { SIGNS } from './storyData.js';

const RESERVED_AT = 6;

/**
 * EPILOGUE — "Your chapter is next." A callback to the prologue: a wall of
 * signs switches on in random order, except one empty frame reserved for the
 * visitor's brand. Magnetic primary CTA, then WhatsApp / call and email.
 */
export default function Epilogue() {
  const root = useRef(null);
  useStoryReveals(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        `${MQ.desktop}, ${MQ.mobile}`,
        () => {
          gsap.fromTo(
            '.st-sign:not(.st-sign--reserved)',
            { opacity: 0.14 },
            {
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out',
              stagger: { each: 0.09, from: 'random' },
              scrollTrigger: { trigger: '.st-epilogue__wall', start: 'top 75%', once: true },
            }
          );
          gsap.fromTo(
            '.st-sign--reserved',
            { autoAlpha: 0, scale: 0.92 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.9,
              delay: 1.1,
              ease: 'expo.out',
              scrollTrigger: { trigger: '.st-epilogue__wall', start: 'top 75%', once: true },
            }
          );
        },
        root
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  const signs = [...SIGNS];
  signs.splice(RESERVED_AT, 0, null);

  return (
    <section className="st-act st-epilogue" id="act-epilogue" ref={root} aria-labelledby="epilogue-title">
      <div className="st-container st-epilogue__grid">
        <div className="st-epilogue__copy">
          <ActLabel title="Your chapter" />
          <h2 className="st-epilogue__title" id="epilogue-title" data-st-reveal>
            Your chapter <em className="st-serif">is next.</em>
          </h2>
          <p className="st-epilogue__text" data-st-reveal>
            Tell us where you want to be seen — a single signboard or a city-wide launch. We&rsquo;ll take it from
            the first sketch to the switch-on.
          </p>
          <div className="st-epilogue__ctas" data-st-reveal>
            <Magnetic>
              <Link to="/contact" className="st-btn st-btn--primary st-btn--lg">
                Start a project <Arrow />
              </Link>
            </Magnetic>
          </div>
          <div className="st-epilogue__quick" data-st-reveal>
            <QuickContact />
          </div>
          <p className="st-epilogue__meta" data-st-reveal>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span aria-hidden="true">·</span>
            <span>Mon–Sat, 9:30 AM – 7:00 PM</span>
            <span aria-hidden="true">·</span>
            <span>Kochadai, Madurai</span>
          </p>
        </div>

        <div className="st-epilogue__wall" aria-hidden="true">
          {signs.map((name, i) =>
            name ? (
              <span className="st-sign" key={name} style={{ '--i': i }}>{name}</span>
            ) : (
              <span className="st-sign st-sign--reserved" key="reserved">
                <span className="st-sign__you">Your brand</span>
                <span className="st-sign__note">Reserved</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
