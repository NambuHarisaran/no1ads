import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import SEOHead from "../components/SEOHead";
import MagneticButton from "../components/ui/MagneticButton";
import { services } from "../data/services";
import { Mail, Phone, MapPin, Facebook, Instagram, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — just show success state
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: ""
      });
      setSubmitted(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <SEOHead
        title="Contact Us – Number One Ads Chennai"
        description="Call +91 98432 88864 or email contact@no1ads.in to start your project with Chennai's top advertising agency."
        canonical="/contact"
      />

      <PageHero
        title="LET'S MAKE SOMETHING GREAT"
        subtitle="Tell us about your brand, and we'll show you what's possible."
      />

      <section className="py-20 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Contact Info Grid */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href="mailto:contact@no1ads.in"
              className="flex flex-col items-start gap-3 p-6 border border-gray-800 rounded-lg hover:border-red-600 transition-colors group"
              variants={itemVariants}
            >
              <Mail className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Email</div>
                <div className="text-lg font-semibold group-hover:text-red-600 transition-colors">
                  contact@no1ads.in
                </div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+919843288864"
              className="flex flex-col items-start gap-3 p-6 border border-gray-800 rounded-lg hover:border-red-600 transition-colors group"
              variants={itemVariants}
            >
              <Phone className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Phone</div>
                <div className="text-lg font-semibold group-hover:text-red-600 transition-colors">
                  +91 98432 88864
                </div>
              </div>
            </motion.a>

            <motion.div
              className="flex flex-col items-start gap-3 p-6 border border-gray-800 rounded-lg"
              variants={itemVariants}
            >
              <MapPin className="w-8 h-8 text-red-600" />
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Location</div>
                <div className="text-lg font-semibold">
                  Chennai, Tamil Nadu, India
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-3 p-6 border border-gray-800 rounded-lg"
              variants={itemVariants}
            >
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/no1teleadvertisors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-red-600 hover:scale-110 transition-transform"
                >
                  <Facebook className="w-full h-full" />
                </a>
                <a
                  href="https://www.instagram.com/no1teleadvertisers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-red-600 hover:scale-110 transition-transform"
                >
                  <Instagram className="w-full h-full" />
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Social</div>
                <div className="text-lg font-semibold">Follow us</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {submitted && (
              <motion.div
                className="mb-8 p-4 bg-green-600/20 border border-green-600 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-semibold text-green-600">Message Received!</div>
                  <div className="text-sm text-green-600/80">We'll get back to you within 24 hours.</div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Brand"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </motion.div>

              <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </motion.div>

              <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                >
                  <option value="">Select a Service</option>
                  {services.map(service => (
                    <option key={service.id} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                </select>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                >
                  <option value="">Budget Range</option>
                  <option value="under-25k">Under ₹25,000</option>
                  <option value="25k-1l">₹25,000 – ₹1,00,000</option>
                  <option value="1l-5l">₹1,00,000 – ₹5,00,000</option>
                  <option value="5l-plus">₹5,00,000+</option>
                </select>
              </motion.div>

              <motion.textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
                variants={itemVariants}
              />

              <motion.div variants={itemVariants}>
                <MagneticButton type="submit">
                  Send Message
                </MagneticButton>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
