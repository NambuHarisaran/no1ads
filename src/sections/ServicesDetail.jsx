import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';
import LazyImage from '../components/LazyImage.jsx';
import services from '../data/services.json';

// Map a services.json entry onto the closest /services/:slug detail page.
const PAGE_FOR = {
  design: 'creative-design',
  'led-signage': 'led-signage',
  'signage-boards': 'signage-boards',
  'acp-elevation': 'acp-elevation',
  'exhibition-stall': 'exhibition-stalls',
  roadshow: 'roadshow-outdoor',
  'in-shop': 'in-shop-branding',
  'backlight-board': 'signage-boards',
  'pylon-branding': 'signage-boards',
  'lamp-post-branding': 'roadshow-outdoor',
  standee: 'in-shop-branding',
  signage: 'led-signage',
  'auto-back-branding': 'roadshow-outdoor',
};

export default function ServicesDetail() {
  return (
    <section className="services-detail-section" id="capabilities">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text="SIGNAGE & ON-GROUND" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="headline services-detail-headline">
            <SplitText
              text="Every Surface, Every Format, One Crew"
              splitType="chars"
              delay={18}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
          <p className="showcase-sub">
            Thirteen production capabilities — designed, fabricated and installed by our own
            teams across Tamil Nadu. Numbers below are recent project counts.
          </p>
        </Reveal>

        <Reveal className="services-detail-grid" stagger={90}>
          {services.map(svc => (
            <Link className="service-detail-card" key={svc.slug} to={`/services/${PAGE_FOR[svc.slug] || ''}`}>
              <div className="service-detail-media">
                <LazyImage
                  src={svc.image}
                  lqip={svc.lqip}
                  alt={`${svc.title} by Number One Ads`}
                  w={svc.w}
                  h={svc.h}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
                {svc.count ? <span className="service-detail-count">{svc.count}+ projects</span> : null}
              </div>
              <div className="service-detail-body">
                <h3 className="service-detail-title">{svc.title}</h3>
                <p className="service-detail-blurb">{svc.blurb}</p>
                <span className="service-detail-more">Learn more →</span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
