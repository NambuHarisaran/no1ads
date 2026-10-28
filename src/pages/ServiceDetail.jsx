import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import LazyImage from '../components/LazyImage.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Partners from '../sections/Partners.jsx';
import BniBadge from '../sections/BniBadge.jsx';
import servicePages, { getServiceBySlug } from '../data/servicePages.js';
import videos, { CHANNEL_URL, watchUrl, thumbUrl } from '../data/videos.js';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="rgba(232,119,34,0.92)" />
    <path d="M10 8l6 4-6 4V8z" fill="#0D0D0D" />
  </svg>
);

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = servicePages.filter(s => s.slug !== slug).slice(0, 6);
  const ogImage = service.image ? `https://no1ads.in${service.image}` : undefined;

  return (
    <>
      <Seo
        title={`${service.title} — Number One Ads | Madurai`}
        description={`${service.tagline}. ${service.intro[0]}`}
        path={`/services/${service.slug}`}
        image={ogImage}
      />
      <PageHero
        key={`hero-${service.slug}`}
        eyebrow="SERVICE"
        title={service.title}
        subtitle={service.tagline}
        crumb={service.label}
      />

      <section className="service-page-section">
        <div className="container service-page-grid">
          <Reveal className="service-page-copy">
            {service.intro.map((p, i) => (
              <p key={i} className={i === 0 ? 'service-page-lead' : undefined}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="service-page-deliverables">
            <h2 className="service-page-subtitle">What’s included</h2>
            <ul>
              {service.deliverables.map(d => (
                <li key={d}><span className="deliverable-check"><CheckIcon /></span>{d}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        {service.image && (
          <div className="container">
            <Reveal className="service-page-media">
              <LazyImage
                src={service.image}
                alt={`${service.title} by Number One Ads`}
                className="service-page-image"
              />
            </Reveal>
          </div>
        )}

        {service.gallery && service.gallery.length > 0 && (
          <div className="container">
            <Reveal>
              <h2 className="service-page-subtitle service-showcase-heading">Selected work</h2>
            </Reveal>
            <Reveal className="service-showcase-grid" stagger={60}>
              {service.gallery.map(src => (
                <div className="service-showcase-item" key={src}>
                  <LazyImage src={src} alt={`${service.title} creative by Number One Ads`} />
                </div>
              ))}
            </Reveal>
          </div>
        )}
      </section>

      {service.showcase === 'film' && (
        <section className="film-showcase">
          <div className="container">
            <Reveal>
              <h2 className="service-page-subtitle service-showcase-heading">Our films &amp; ad reels</h2>
              <p className="film-showcase-sub">
                A look across our YouTube catalogue — commercials, brand films and campaign
                reels produced in-house. Tap any film to watch.
              </p>
            </Reveal>
            <Reveal className="film-grid" stagger={70}>
              {videos.map(v => (
                <a
                  className="film-card"
                  key={v.id}
                  href={watchUrl(v.id)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch ${v.title} on YouTube`}
                >
                  <span className="film-thumb-wrap">
                    <img className="film-thumb" src={thumbUrl(v.id)} alt={v.title} loading="lazy" decoding="async" />
                    <span className="film-play"><PlayIcon /></span>
                  </span>
                  <span className="film-card-title">{v.title}</span>
                </a>
              ))}
            </Reveal>
            <Reveal className="film-cta-row">
              <a className="btn-orange" href={CHANNEL_URL} target="_blank" rel="noreferrer">
                Visit @No1ads on YouTube →
              </a>
            </Reveal>

            {service.productShoots && service.productShoots.length > 0 && (
              <>
                <Reveal>
                  <h2 className="service-page-subtitle service-showcase-heading film-shoot-heading">
                    Product &amp; catalogue shoots
                  </h2>
                </Reveal>
                <Reveal className="service-showcase-grid" stagger={60}>
                  {service.productShoots.map(src => (
                    <div className="service-showcase-item" key={src}>
                      <LazyImage src={src} alt="Product shoot by Number One Ads" />
                    </div>
                  ))}
                </Reveal>
              </>
            )}
          </div>
        </section>
      )}

      {service.feature === 'digital' && (
        <>
          <Partners />
          <BniBadge />
        </>
      )}

      <section className="related-services">
        <div className="container">
          <Reveal>
            <h2 className="related-title">Explore other services</h2>
          </Reveal>
          <Reveal className="related-grid" stagger={70}>
            {others.map(s => (
              <Link className="related-card" to={`/services/${s.slug}`} key={s.slug}>
                <span className="related-card-name">{s.label}</span>
                <span className="related-card-tag">{s.tagline}</span>
                <span className="related-card-arrow">→</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        key={`cta-${service.slug}`}
        variant="orange"
        eyebrow="START YOUR PROJECT"
        title={`Ready to talk ${service.label.toLowerCase()}?`}
        buttonLabel="Get in Touch →"
      />
    </>
  );
}
