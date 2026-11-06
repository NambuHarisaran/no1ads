import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../motion/gsap.js';
import { MQ } from '../motion/tokens.js';
import { scrollToTarget } from '../motion/SmoothScroll.jsx';
import { ActLabel, Arrow, YtThumb, useStoryReveals } from './primitives.jsx';
import { CHAPTERS, GROUP } from './storyData.js';

const pad = n => String(n).padStart(2, '0');

function ChapterMedia({ media, alt }) {
  if (media.type === 'yt') {
    return <YtThumb id={media.id} alt={media.alt} className="st-brief__img" />;
  }
  if (media.type === 'collage') {
    return (
      <div className="st-brief__collage">
        {media.items.map((item, i) => (
          <span className={`st-brief__phone st-brief__phone--${i}`} key={item.src} style={{ backgroundImage: `url(${item.lqip})` }}>
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" width="720" height="900" />
          </span>
        ))}
      </div>
    );
  }
  return (
    <img
      className="st-brief__img"
      src={media.src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={{ objectPosition: media.pos, backgroundImage: media.lqip ? `url(${media.lqip})` : undefined }}
    />
  );
}

/**
 * ACT II — ONE BRIEF. The signature scene, on every screen size: the section
 * pins and a scrubbed timeline steps through seven labelled chapters
 * (`ch0`…`ch6`, then `finale`). Each step wipes the next frame in (short
 * clip-path + scale-down), swaps the copy, and fills the progress rail. The
 * rail ticks are buttons that jump to their chapter label. Desktop lays the
 * stage out as copy | frame; phones stack frame over copy and use the short
 * chapter line. Reduced motion: chapters stack as plain cards.
 */
export default function ActOneBrief() {
  const root = useRef(null);
  const stRef = useRef(null);
  const [active, setActive] = useState(0);
  useStoryReveals(root);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const copies = q('[data-copy]');
        const medias = q('[data-media]');
        const imgs = medias.map(m => m.querySelector('.st-brief__img, .st-brief__collage'));
        const n = CHAPTERS.length;

        gsap.set(copies.slice(1), { autoAlpha: 0, y: 32 });
        gsap.set(medias.slice(1), { clipPath: 'inset(100% 0% 0% 0%)' });
        gsap.set(q('[data-finale]'), { autoAlpha: 0 });
        gsap.set(q('[data-finale-item]'), { autoAlpha: 0, y: 24 });

        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${(n + 1) * window.innerHeight * 0.72}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: self => {
              const label = self.animation.currentLabel();
              const idx = label === 'finale' ? n : Number(label.replace('ch', '')) || 0;
              setActive(prev => (prev === idx ? prev : idx));
            },
          },
        });
        stRef.current = tl.scrollTrigger;

        tl.addLabel('ch0').to({}, { duration: 0.7 });

        for (let i = 1; i < n; i += 1) {
          const at = `ch${i}`;
          tl.addLabel(at)
            .to(copies[i - 1], { autoAlpha: 0, y: -32, duration: 0.45, ease: 'power2.in' }, at)
            .to(imgs[i - 1], { scale: 1.03, autoAlpha: 0.35, duration: 1 }, at)
            .fromTo(medias[i], { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'power3.inOut' }, at)
            .fromTo(imgs[i], { scale: 1.04 }, { scale: 1, duration: 1.2, ease: 'power3.out' }, at)
            .fromTo(copies[i], { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, `${at}+=0.45`);

          const night = medias[i].querySelector('[data-night]');
          if (night) {
            tl.fromTo(night, { autoAlpha: 1 }, { autoAlpha: 0.15, duration: 0.7, ease: 'power2.out' }, `${at}+=0.9`)
              .fromTo(medias[i].querySelector('[data-bloom]'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7 }, `${at}+=0.95`);
          }
          tl.to({}, { duration: 0.55 });
        }

        tl.addLabel('finale')
          .to(copies[n - 1], { autoAlpha: 0, y: -32, duration: 0.45, ease: 'power2.in' }, 'finale')
          .to(medias, { autoAlpha: 0.12, scale: 0.97, duration: 0.8 }, 'finale')
          .to(q('.st-brief__caption'), { autoAlpha: 0, duration: 0.4 }, 'finale')
          .to(q('[data-finale]'), { autoAlpha: 1, duration: 0.5 }, 'finale+=0.2')
          .to(q('[data-finale-item]'), { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' }, 'finale+=0.3')
          .fromTo(q('[data-finale-line]'), { drawSVG: '0% 0%' }, { drawSVG: '0% 100%', duration: 0.9, ease: 'power1.inOut' }, 'finale+=0.5')
          .to({}, { duration: 0.6 });

        tl.fromTo(q('[data-rail-fill]'), { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: tl.duration() }, 0);

        return () => {
          stRef.current = null;
        };
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  const jumpTo = idx => {
    const st = stRef.current;
    if (!st) return;
    const label = idx >= CHAPTERS.length ? 'finale' : `ch${idx}`;
    scrollToTarget(st.labelToScroll(label) + 2, { duration: 1.2 });
  };

  return (
    <section className="st-act st-brief" id="act-brief" ref={root} aria-labelledby="brief-title" data-active={active}>
      <div className="st-brief__stage st-container">
        <header className="st-brief__head">
          <ActLabel num="II" title="One brief" />
          <h2 className="st-brief__title" id="brief-title">
            <span className="st-brief__title-en">
              One brief. Seven crafts. <em className="st-serif st-gold-text">One family.</em>
            </span>
          </h2>
        </header>

        <div className="st-brief__chapters">
          {CHAPTERS.map((ch, i) => (
            <article className="st-brief__chapter" key={ch.id} aria-labelledby={`ch-${ch.id}`}>
              <div className="st-brief__copy" data-copy={i}>
                <p className="st-brief__num">
                  {pad(i + 1)}
                  <span>/{pad(CHAPTERS.length)}</span>
                </p>
                <h3 className="st-brief__ch-title" id={`ch-${ch.id}`}>{ch.title}</h3>
                <p className="st-brief__ch-text">{ch.text}</p>
                <p className="st-brief__ch-short">{ch.short}</p>
                <Link className="st-link" to={ch.link.to}>
                  {ch.link.label} <Arrow />
                </Link>
              </div>
              <figure className={`st-brief__media ${ch.media.night ? 'is-night' : ''}`} data-media={i}>
                <ChapterMedia media={ch.media} alt={`${ch.title} — ${ch.caption}`} />
                {ch.media.night ? (
                  <>
                    <span className="st-brief__night" data-night aria-hidden="true" />
                    <span className="st-brief__bloom" data-bloom aria-hidden="true" />
                  </>
                ) : null}
                <figcaption className="st-brief__caption">{ch.caption}</figcaption>
              </figure>
            </article>
          ))}

          <div className="st-brief__finale" data-finale>
            <p className="st-brief__finale-kicker" data-finale-item>The whole journey, one roof</p>
            <div className="st-brief__family">
              <svg className="st-brief__family-line" viewBox="0 0 600 4" preserveAspectRatio="none" aria-hidden="true">
                <line x1="0" y1="2" x2="600" y2="2" data-finale-line />
              </svg>
              {GROUP.map(co => (
                <div className="st-brief__co" key={co.name} data-finale-item>
                  <span className="st-brief__co-logo">
                    <img src={co.logo} alt={co.name} loading="lazy" decoding="async" />
                  </span>
                  <span className="st-brief__co-role">{co.role}</span>
                </div>
              ))}
            </div>
            <p className="st-brief__finale-line" data-finale-item>
              It never left the family. <Link className="st-link" to="/about">Meet the group <Arrow /></Link>
            </p>
          </div>
        </div>

        <nav className="st-brief__rail" aria-label="One brief chapters">
          <span className="st-brief__rail-track" aria-hidden="true">
            <span className="st-brief__rail-fill" data-rail-fill />
          </span>
          <ol>
            {CHAPTERS.map((ch, i) => (
              <li key={ch.id}>
                <button
                  type="button"
                  className={`st-brief__tick ${active === i ? 'is-active' : ''} ${active > i ? 'is-done' : ''}`}
                  aria-current={active === i ? 'step' : undefined}
                  onClick={() => jumpTo(i)}
                >
                  <span className="st-brief__tick-num">{pad(i + 1)}</span>
                  <span className="st-brief__tick-label">{ch.title.replace('The ', '')}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
