import { useRef } from 'react';
import { gsap, SplitText, useGSAP } from '../motion/gsap.js';
import { MQ } from '../motion/tokens.js';
import ClientMarquee from './ClientMarquee.jsx';
import { ActLabel, useStoryReveals } from './primitives.jsx';
import { CLIENT_ROWS, QUOTES } from './storyData.js';

const Initials = ({ name }) => (
  <span className="st-quote__avatar" aria-hidden="true">
    {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
  </span>
);

/**
 * ACT V — REMEMBERED. The payoff of the client's journey: they come back.
 * Two opposing marquee rows of real client names, a large "TRUST" watermark,
 * and a featured quote revealed line by line through masks (SplitText
 * autoSplit re-runs on resize).
 */
export default function ActRemembered() {
  const root = useRef(null);
  useStoryReveals(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        `${MQ.desktop}, ${MQ.mobile}`,
        () => {
          const quote = root.current.querySelector('.st-quote__text--feature');
          const split = SplitText.create(quote, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            linesClass: 'st-quote__line',
            onSplit: self =>
              gsap.from(self.lines, {
                yPercent: 105,
                duration: 1,
                ease: 'power4.out',
                stagger: 0.11,
                scrollTrigger: { trigger: quote, start: 'top 82%', once: true },
              }),
          });
          gsap.fromTo(
            '.st-remembered__watermark',
            { yPercent: 18 },
            { yPercent: -18, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1.2 } }
          );
          return () => split.revert();
        },
        root
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="st-act st-remembered" id="act-remembered" ref={root} aria-labelledby="remembered-title">
      <div className="st-container st-remembered__head">
        <ActLabel num="V" title="Remembered" />
        <h2 className="st-remembered__title" id="remembered-title" data-st-reveal>
          The names Tamil Nadu <em className="st-serif">grew up with</em> — and the reason they keep coming back.
        </h2>
        <p className="st-remembered__watermark" aria-hidden="true">
          <span>TRUST</span>
        </p>
        <p className="st-remembered__gloss" data-st-reveal>
          Built on <em>twenty-five years of trust</em> — most of the brands we started with in our earliest years are
          still with us today.
        </p>
      </div>

      <div className="st-remembered__loops">
        <ClientMarquee
          names={CLIENT_ROWS[0]}
          direction="left"
          duration={70}
          label="Silk, textile and consumer brands we work with"
        />
        <ClientMarquee
          names={CLIENT_ROWS[1]}
          direction="right"
          duration={70}
          label="Jewellery brands we work with"
          className="st-marquee--alt"
        />
      </div>

      <div className="st-container st-remembered__quotes">
        <figure className="st-quote st-quote--feature">
          <span className="st-quote__mark" aria-hidden="true">&ldquo;</span>
          <blockquote className="st-quote__text st-quote__text--feature">{QUOTES.feature.quote}</blockquote>
          <figcaption className="st-quote__author" data-st-reveal>
            <Initials name={QUOTES.feature.name} />
            <span>
              <span className="st-quote__name">{QUOTES.feature.name}</span>
              <span className="st-quote__role">{QUOTES.feature.role}</span>
            </span>
          </figcaption>
        </figure>
        <div className="st-quote__minis">
          {QUOTES.minis.map(t => (
            <figure className="st-quote st-quote--mini" key={t.name} data-st-reveal>
              <blockquote className="st-quote__text">{t.quote}</blockquote>
              <figcaption className="st-quote__author">
                <Initials name={t.name} />
                <span>
                  <span className="st-quote__name">{t.name}</span>
                  <span className="st-quote__role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
