import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const icons = {
  design: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
    </svg>
  ),
  print: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
    </svg>
  ),
  film: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  ),
  media: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  events: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="14" rx="2" /><path d="M7 21h10" /><path d="M12 18v3" /><path d="M6 8l4 4 3-3 5 5" />
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

const SERVICES = [
  ['01', icons.design, 'Creative Design', 'Expert brand craft from concept to final art. Every pixel refined with purpose and precision.'],
  ['02', icons.print, 'Printing Solutions', 'Premium print across all formats and scales — hoarding, handbills, brochures — meeting every deadline.'],
  ['03', icons.film, 'Film & Photography', 'From TVCs to product shoots, we translate your brand into compelling visual stories.'],
  ['04', icons.media, 'Media & Advertising', 'Tailored media strategies spanning print, outdoor, broadcast, and digital channels.'],
  ['05', icons.events, 'Roadshow & Events', 'End-to-end roadshow production and event design that commands attention at every venue.'],
  ['06', icons.brand, 'Branding & Identity', "Building brand identities that carve a distinct, lasting space in consumers' minds."],
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text="WHAT WE DO" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="headline">
            <SplitText
              text="Full-Spectrum Creative Solutions"
              splitType="chars"
              delay={25}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
        </Reveal>
        <Reveal className="services-grid" stagger={120}>
          {SERVICES.map(([num, icon, title, body]) => (
            <article className="service-card" key={num}>
              <div className="service-num">{num}</div>
              <div className="service-icon">{icon}</div>
              <h3 className="service-title">
                <SplitText text={title} splitType="words" delay={80} duration={0.5} ease="power3.out" tag="span" />
              </h3>
              <p className="service-body">{body}</p>
              <a href="#contact" className="service-more">Learn More →</a>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
