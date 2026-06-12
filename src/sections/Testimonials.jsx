import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const FEATURED = {
  quote:
    'Number One Ads handled our showroom elevation, signage and launch roadshow as one team. Twenty years on, they are still the first call for anything brand-related.',
  name: 'Senthil Kumar',
  role: 'Managing Director, Automobile Showroom',
};

const SUPPORTING = [
  {
    quote:
      'From concept artwork to the final installed board, the finish was flawless. They understand how a brand should feel on the street, not just on paper.',
    name: 'Priya Rajan',
    role: 'Marketing Head, Retail Chain',
  },
  {
    quote:
      'Our exhibition stall was the most photographed at the expo. A tight brief and tighter deadline turned into something genuinely premium.',
    name: 'Arun Vetri',
    role: 'Founder, FMCG Brand',
  },
];

const Initials = ({ name }) => (
  <span className="t-avatar" aria-hidden="true">
    {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
  </span>
);

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <Reveal className="t-head">
          <div className="section-label">
            <ShinyText text="WHAT CLIENTS SAY" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="t-headline">
            <SplitText
              text="Trusted by Tamil Nadu's boldest brands"
              splitType="chars"
              delay={18}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
        </Reveal>

        <div className="t-layout">
          <Reveal as="figure" className="t-featured">
            <span className="t-quote-mark" aria-hidden="true">“</span>
            <blockquote className="t-featured-quote">{FEATURED.quote}</blockquote>
            <figcaption className="t-author">
              <Initials name={FEATURED.name} />
              <span>
                <span className="t-name">{FEATURED.name}</span>
                <span className="t-role">{FEATURED.role}</span>
              </span>
            </figcaption>
          </Reveal>

          <Reveal className="t-supporting" stagger={140}>
            {SUPPORTING.map(t => (
              <figure className="t-mini" key={t.name}>
                <blockquote className="t-mini-quote">{t.quote}</blockquote>
                <figcaption className="t-author">
                  <Initials name={t.name} />
                  <span>
                    <span className="t-name">{t.name}</span>
                    <span className="t-role">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
