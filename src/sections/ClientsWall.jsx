import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';
import BrandLogo from '../components/BrandLogo.jsx';
import clients from '../data/clients.js';

export default function ClientsWall() {
  return (
    <section className="clients-wall-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text="OUR VALUABLE CLIENTS" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="headline clients-wall-headline">
            <SplitText
              text="Brands That Trust Us With Theirs"
              splitType="chars"
              delay={18}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
          <p className="showcase-sub">
            From Madurai’s biggest silk and jewellery houses to hospitality and retail —
            a few of the names we’re proud to have branded over the years.
          </p>
        </Reveal>

        <Reveal className="clients-wall-grid" stagger={40}>
          {clients.map(c => (
            <div className="client-tile" key={c.slug} title={c.name}>
              <BrandLogo src={c.logo} name={c.name} className="client-tile-logo" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
