import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import MarqueeLogos from "../components/MarqueeLogos";
import { Link } from "react-router-dom";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getAggregateStatisticSchema,
  mergeSchemas,
} from "../utils/schemaUtils";

export default function Home() {
  const homeSchema = mergeSchemas([
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getAggregateStatisticSchema([
      { name: "Brands Served", value: "3000+" },
      { name: "Years Experience", value: "25+" },
      { name: "Core Services", value: "8" },
      { name: "Geographic Coverage", value: "Pan-India" },
    ]),
  ]);

  return (
    <>
      <SEOHead 
        title="Number One Ads – Leading Ad Agency in Chennai"
        description="NO1ADS is Chennai's premier advertising agency offering creative design, digital marketing, roadshows, exhibitions & branding."
        canonical="/"
        schema={homeSchema}
        ogImage="https://www.no1ads.in/og-home.jpg"
        keywords="creative agency, digital marketing, branding, advertising, Chennai, India"
      />
      
      {/* Hero Section - you can keep existing or modify */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bold Creative Work That Moves Markets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We're a full-service advertising and branding agency in Chennai. 25+ years of strategic creativity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/contact" className="cta-button">
              Let's Work Together
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <MarqueeLogos />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>200+</h3>
            <p>Brands Served</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>8</h3>
            <p>Core Services</p>
          </div>
          <div className="stat-card">
            <h3>Pan-India</h3>
            <p>Coverage</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <Link to="/services" className="view-all-link">
          View All Services →
        </Link>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <h2>Ready to Transform Your Brand?</h2>
        <p>Let's create something extraordinary together.</p>
        <Link to="/contact" className="cta-button-secondary">
          Get In Touch
        </Link>
      </section>
    </>
  );
}
