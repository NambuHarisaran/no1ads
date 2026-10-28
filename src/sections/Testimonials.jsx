import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const FEATURED = {
  quote:
    'Number One Ads handled our showroom ACP elevation, LED signage and launch roadshow as one unified team. Twenty years on, they remain our first call for every brand launch across Madurai.',
  name: 'Senthil Kumar',
  role: 'Managing Director · Flagship Jewellery & Silk Showroom, Madurai',
};

const SUPPORTING = [
  {
    quote:
      'From festive campaign artwork to the final installed storefront boards across our branches, the finish was flawless. They understand how a brand should command attention on the street, not just on paper.',
    name: 'Priya Rajan',
    role: 'Marketing Head · Multi-Outlet Retail Group, Tamil Nadu',
  },
  {
    quote:
      'Our exhibition stall and TVC launch were the most talked-about in our category. A tight brief and tighter festival deadline turned into something genuinely premium.',
    name: 'Arun Vetri',
    role: 'Founder · Regional Consumer & Food Brand, South India',
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
