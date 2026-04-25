import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import { services } from "../data/services";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    if (!service) {
      navigate("/services");
    }
  }, [service, navigate]);

  if (!service) return null;

  const relatedServices = services
    .filter(s => s.id !== service.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const IconComponent = Icons[service.icon];

  return (
    <>
      <SEOHead 
        title={`${service.title} – NO1ADS Chennai`}
        description={service.shortDesc}
        canonical={`/services/${service.slug}`}
      />
      
      <PageHero 
        title={service.title}
        subtitle={service.heroTagline}
      />

      {/* Service Overview */}
      <section className="service-detail-overview">
        <div className="service-detail-container">
          <div className="service-detail-content">
            <div className="service-detail-icon" style={{ color: service.color }}>
              {IconComponent && <IconComponent size={80} />}
            </div>
            <p className="service-detail-description">{service.fullDesc}</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="service-detail-features">
        <div className="service-detail-container">
          <h2>What's Included</h2>
          <div className="features-list">
            {service.features.map((feature, idx) => (
              <motion.div
                key={feature}
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="feature-check" style={{ backgroundColor: service.color }}>✓</span>
                <p>{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NO1ADS */}
      <section className="service-detail-why">
        <div className="service-detail-container">
          <h2>Why NO1ADS?</h2>
          <div className="why-grid">
            <div className="why-card">
              <h4>15+ Years Experience</h4>
              <p>Proven track record across 200+ brands and diverse industries.</p>
            </div>
            <div className="why-card">
              <h4>End-to-End Delivery</h4>
              <p>From concept to completion, we handle every detail with precision.</p>
            </div>
            <div className="why-card">
              <h4>Pan-India Reach</h4>
              <p>Capable of executing campaigns across Tamil Nadu and all major Indian cities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="service-detail-related">
        <div className="service-detail-container">
          <h2>Related Services</h2>
          <div className="related-grid">
            {relatedServices.map((relService) => (
              <Link
                key={relService.id}
                to={`/services/${relService.slug}`}
                className="related-card"
              >
                <h4>{relService.title}</h4>
                <p>{relService.shortDesc}</p>
                <span>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-detail-cta">
        <div className="service-detail-container">
          <h2>Let's Bring Your Vision to Life</h2>
          <Link to="/contact" className="cta-button">
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  );
}
