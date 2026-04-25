import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function PageHero({ title, subtitle = "" }) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="page-hero-title"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="page-hero-subtitle"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
