import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import LazyImage from '../components/LazyImage.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Partners from '../sections/Partners.jsx';
import BniBadge from '../sections/BniBadge.jsx';
import servicePages, { getServiceBySlug } from '../data/servicePages.js';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = servicePages.filter(s => s.slug !== slug).slice(0, 6);

  return (
    <>
      <Seo
        title={`${service.title} — Number One Ads | Madurai`}
        description={`${service.tagline}. ${service.intro[0]}`}
        path={`/services/${service.slug}`}
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
      </section>

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
