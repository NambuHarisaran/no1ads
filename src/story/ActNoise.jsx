import { useRef } from 'react';
import { gsap, SplitText, useGSAP } from '../motion/gsap.js';
import { MQ } from '../motion/tokens.js';
import { ScrollVelocity } from '../components/reactbits/ScrollVelocity.jsx';
import { ActLabel, useStoryReveals } from './primitives.jsx';
import { MARQUEE, NOISE_PAYOFF, NOISE_STATEMENT } from './storyData.js';

/**
 * ACT I — THE NOISE. The visitor's problem, stated plainly. Each word of the
 * statement "switches on" as it is read (scrubbed opacity, the ReactBits
 * ScrollReveal pattern rebuilt on our SplitText). The payoff line lights in
 * orange. A velocity-reactive marquee (ReactBits ScrollVelocity) carries the
 * crafts into Act II.
 */
export default function ActNoise() {
  const root = useRef(null);
  useStoryReveals(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MQ.desktop}, ${MQ.mobile}`, () => {
        const statement = root.current.querySelector('.st-noise__statement');
        const split = SplitText.create(statement, { type: 'words', wordsClass: 'st-noise__word' });
        gsap.fromTo(
          split.words,
          { opacity: 0.12 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: { trigger: statement, start: 'top 78%', end: 'bottom 42%', scrub: true },
          }
        );
        gsap.fromTo(
          '.st-noise__payoff',
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: { trigger: '.st-noise__payoff', start: 'top 80%', once: true },
          }
        );
        return () => split.revert();
      }, root);
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="st-act st-noise" id="act-noise" ref={root} aria-labelledby="noise-title">
      <div className="st-container">
        <ActLabel num="I" title="The noise" />
        <h2 className="st-noise__title" id="noise-title">
          <span className="st-noise__statement">{NOISE_STATEMENT}</span>
        </h2>
        <p className="st-noise__payoff">{NOISE_PAYOFF}</p>
      </div>

      <div className="st-noise__marquee" aria-hidden="true">
        <ScrollVelocity
          texts={MARQUEE}
          velocity={42}
          numCopies={4}
          className="st-velocity__item"
          parallaxClassName="st-velocity"
          scrollerClassName="st-velocity__track"
          outlineAlternate
          fadeEdges
        />
      </div>

      <div className="st-container">
        <p className="st-bridge" data-st-reveal>
          Here&rsquo;s how a brand gets remembered — one brief, start to finish.
        </p>
      </div>
    </section>
  );
}
