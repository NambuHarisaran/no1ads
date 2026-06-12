import { useEffect, useRef, useState } from 'react';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const MILESTONES = [
  ['2000', 'Founded in Madurai. First print campaigns for local businesses.'],
  ['2003', 'Expanded into outdoor hoarding & roadshow advertising.'],
  ['2008', 'Film production wing launched. First TVC shoots.'],
  ['2013', 'Exhibition & event design division established.'],
  ['2018', 'Digital marketing & social media services added.'],
  ['2024', '25 Years. 360° capabilities. One agency.'],
];

const STATS = [
  [25, 'Years'],
  [3000 , 'Projects'],
  [2000 , 'Clients'],
];

function StatCounter({ target, label }) {
  const ref = useRef(null);
  const numRef = useRef(null);
  // idle -> counting (numRef driven) -> shine (1s ShinyText) -> done
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('done');
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer.unobserve(el);
          const start = performance.now();
          const dur = 2000;
          const tick = now => {
            const t = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            if (numRef.current) numRef.current.textContent = `${Math.round(eased * target)}+`;
            if (t < 1) {
              requestAnimationFrame(tick);
            } else {
              setPhase('shine');
              setTimeout(() => setPhase('done'), 1000);
            }
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <div className="stat-number">
        {phase === 'shine' ? (
          <ShinyText text={`${target}+`} speed={1} color="#E87722" shineColor="#FFFFFF" />
        ) : phase === 'done' ? (
          <span>{target}+</span>
        ) : (
          <span ref={numRef}>0+</span>
        )}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="timeline-section" id="legacy">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text="OUR JOURNEY" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="headline">
            <SplitText
              text="25 Years of Advertising Excellence"
              splitType="chars"
              delay={35}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
          <p className="subtext">From print to pixels — we've been telling Tamil Nadu's brand stories since 2000.</p>
        </Reveal>

        <Reveal className="timeline-rail" stagger={200} as="div">
          {MILESTONES.map(([year, desc]) => (
            <div className="timeline-node" key={year} tabIndex={0}>
              <div className="node-circle">{year}</div>
              <div className="node-year">
                <ShinyText text={year} speed={1.5} color="#3A3A3A" shineColor="#E87722" />
              </div>
              <p className="node-desc">{desc}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="stats-row" stagger={120}>
          {STATS.map(([target, label]) => (
            <StatCounter key={label} target={target} label={label} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
