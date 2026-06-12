import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';
import LazyImage from '../components/LazyImage.jsx';
import services from '../data/services.json';

export default function ServicesShowcase() {
  return (
    <section className="showcase-section" id="showcase">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text="SERVICES IN THE FIELD" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="headline">
            <SplitText
              text="Where Our Work Meets the Real World"
              splitType="chars"
              delay={20}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
          <p className="showcase-sub">
            From illuminated façades to roadshows — explore the on-ground services we deliver across Tamil Nadu.
          </p>
        </Reveal>

        <Reveal className="showcase-grid" stagger={100}>
          {services.map(svc => (
            <article className="showcase-card" key={svc.slug}>
              <div className="showcase-media">
                <LazyImage
                  src={svc.image}
                  lqip={svc.lqip}
                  alt={`${svc.title} by Number One Ads`}
                  w={svc.w}
                  h={svc.h}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              </div>
              <div className="showcase-body">
                <h3 className="showcase-title">{svc.title}</h3>
                <p className="showcase-blurb">{svc.blurb}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
