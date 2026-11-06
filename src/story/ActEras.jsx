import { useRef } from 'react';
import { gsap, useGSAP } from '../motion/gsap.js';
import { MQ } from '../motion/tokens.js';
import CountUp from '../components/reactbits/CountUp/CountUp.jsx';
import { ActLabel, useStoryReveals } from './primitives.jsx';
import { ERAS, STATS } from './storyData.js';

/**
 * ACT VI — FIVE ERAS. Proof, told last: the medium changed five times, the
 * promise didn't. Each era name switches on (unlit → its colour on the
 * grey→orange ramp) as the reader scrolls past it; its year and line follow.
 * Closes on counted-up stats (ReactBits CountUp).
 */
export default function ActEras() {
  const root = useRef(null);
  useStoryReveals(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        `${MQ.desktop}, ${MQ.mobile}`,
        () => {
          gsap.utils.toArray('.st-era', root.current).forEach(era => {
            gsap
              .timeline({ scrollTrigger: { trigger: era, start: 'top 78%', end: 'top 46%', scrub: 0.8 } })
              .fromTo(era.querySelector('.st-era__on'), { autoAlpha: 0 }, { autoAlpha: 1, ease: 'none' })
              .fromTo(era.querySelectorAll('.st-era__meta > *'), { autoAlpha: 0, x: -16 }, { autoAlpha: 1, x: 0, stagger: 0.15, ease: 'power2.out' }, 0.2);
          });
        },
        root
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="st-act st-eras" id="act-eras" ref={root} aria-labelledby="eras-title">
      <div className="st-container st-eras__grid">
        <div className="st-eras__intro">
          <ActLabel num="VI" title="Five eras" />
          <h2 className="st-eras__title" id="eras-title" data-st-reveal>
            Advertising changed five times. <em className="st-serif">Our promise didn&rsquo;t.</em>
          </h2>
          <p className="st-eras__body" data-st-reveal>
            We started in 2000 with print and a small team in Madurai. The tools changed with every era — the
            standard never did: one team that owns the outcome, from the first sketch to the final bolt on the wall.
          </p>
        </div>

        <ol className="st-eras__list">
          {ERAS.map(era => (
            <li className="st-era" key={era.name}>
              <span className="st-era__name" style={{ '--era-color': era.color }}>
                <span className="st-era__off" aria-hidden="true">{era.name}</span>
                <span className="st-era__on">{era.name}</span>
              </span>
              <span className="st-era__meta">
                <span className="st-era__years">{era.years}</span>
                <span className="st-era__desc">{era.desc}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <dl className="st-container st-eras__stats">
        {STATS.map(stat => (
          <div className="st-stat" key={stat.label} data-st-reveal>
            <dt className="st-stat__label">{stat.label}</dt>
            <dd className="st-stat__value">
              <CountUp to={stat.to} duration={2.2} separator={stat.separator || ''} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
