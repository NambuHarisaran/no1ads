import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../motion/gsap.js';
import { MQ } from '../motion/tokens.js';
import BrandLogo from '../components/BrandLogo.jsx';

/**
 * Infinite client-name marquee. One linear GSAP tween per row (xPercent over
 * two identical lists = seamless loop). Hover eases the speed down via
 * timeScale instead of a hard stop; the tween pauses while off-screen.
 * Reduced motion: no animation, names wrap into a static, readable list.
 *
 * Replaces ReactBits LogoLoop, whose internal measuring engine re-rendered
 * endlessly in this layout. Static build-time data → skeleton/empty N/A.
 */
export default function ClientMarquee({ names, direction = 'left', duration = 60, label, className = '' }) {
  const root = useRef(null);

  useGSAP(
    (_ctx, contextSafe) => {
      const mm = gsap.matchMedia();
      mm.add(
        `${MQ.desktop}, ${MQ.mobile}`,
        () => {
          const el = root.current;
          const track = el.querySelector('.st-marquee__track');
          const left = direction === 'left';
          const tween = gsap.fromTo(
            track,
            { xPercent: left ? 0 : -50 },
            { xPercent: left ? -50 : 0, ease: 'none', duration, repeat: -1 }
          );

          const st = ScrollTrigger.create({
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            onToggle: self => (self.isActive ? tween.play() : tween.pause()),
          });

          const slow = contextSafe(() => gsap.to(tween, { timeScale: 0.15, duration: 0.6, ease: 'power2.out' }));
          const resume = contextSafe(() => gsap.to(tween, { timeScale: 1, duration: 0.6, ease: 'power2.out' }));
          el.addEventListener('pointerenter', slow);
          el.addEventListener('pointerleave', resume);
          return () => {
            el.removeEventListener('pointerenter', slow);
            el.removeEventListener('pointerleave', resume);
            st.kill();
          };
        },
        root
      );
      return () => mm.revert();
    },
    { scope: root, dependencies: [direction, duration] }
  );

  const list = hidden => (
    <ul className="st-marquee__list" aria-hidden={hidden || undefined}>
      {names.map(item => {
        const name = typeof item === 'string' ? item : item.name;
        const logo = typeof item === 'object' ? item.logo : undefined;
        const key = typeof item === 'string' ? item : item.slug || item.name;
        return (
          <li key={key}>
            {logo ? (
              <span className="st-marquee__logo-pill" title={name}>
                <BrandLogo src={logo} name={name} className="st-marquee__logo" />
              </span>
            ) : (
              <span className="st-wordmark">{name}</span>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={`st-marquee ${className}`} ref={root} role="group" aria-label={label}>
      <div className="st-marquee__track">
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}
