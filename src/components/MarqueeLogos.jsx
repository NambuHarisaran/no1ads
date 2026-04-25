import { motion } from "framer-motion";
import "../styles/marquee.css";
import { clients } from "../data/clients";
import PropTypes from "prop-types";

function MarqueeLogos() {
  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="marquee-section">
      <div className="marquee-wrapper">
        <motion.div 
          className="marquee-track"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div key={`${client.id}-${idx}`} className="marquee-card">
              <div 
                className="marquee-logo"
                style={{ backgroundColor: client.color }}
              >
                <span className="marquee-initials">{client.initials}</span>
              </div>
              <p className="marquee-name">{client.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="marquee-wrapper marquee-wrapper-reverse">
        <motion.div 
          className="marquee-track marquee-track-reverse"
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div key={`rev-${client.id}-${idx}`} className="marquee-card">
              <div 
                className="marquee-logo"
                style={{ backgroundColor: client.color }}
              >
                <span className="marquee-initials">{client.initials}</span>
              </div>
              <p className="marquee-name">{client.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MarqueeLogos;
