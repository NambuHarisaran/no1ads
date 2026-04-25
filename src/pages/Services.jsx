import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import { services } from "../data/services";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <>
      <SEOHead 
        title="Our Services – Number One Ads Chennai"
        description="Explore NO1ADS's full advertising services: creative design, digital marketing, exhibitions, events, roadshows, branding, signage & printing."
        canonical="/services"
      />
      
      <PageHero 
        title="OUR SERVICES"
        subtitle="Every brand has a story. We make sure the world hears it."
      />

      <section className="services-grid">
        <div className="services-container">
          {services.map((service, idx) => {
            const IconComponent = Icons[service.icon];
            
            return (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-card-number">{String(service.id).padStart(2, "0")}</div>
                
                <div className="service-card-header">
                  {IconComponent && (
                    <div className="service-icon" style={{ color: service.color }}>
                      <IconComponent size={32} />
                    </div>
                  )}
                  <h3>{service.title}</h3>
                </div>

                <p className="service-short-desc">{service.shortDesc}</p>

                <div className="service-features">
                  {service.features.map((feature) => (
                    <span key={feature} className="feature-pill">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/services/${service.slug}`}
                  className="service-link"
                >
                  Explore Service →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="services-cta">
        <h2>Ready to Find Your Perfect Solution?</h2>
        <Link to="/contact" className="cta-button">
          Start Your Project
        </Link>
      </section>
    </>
  );
}
