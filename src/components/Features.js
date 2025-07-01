import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiShield, FiCode, FiCpu, FiGlobe, FiLock } from 'react-icons/fi';
import './Features.css';

const features = [
  {
    icon: <FiZap />,
    title: "AI-Powered Coding",
    description: "Get intelligent code suggestions, explanations, and refactoring with our advanced AI assistant.",
    gradient: "gradient-1"
  },
  {
    icon: <FiCpu />,
    title: "Native Performance",
    description: "Built with Tauri for blazing-fast performance and minimal memory footprint.",
    gradient: "gradient-2"
  },
  {
    icon: <FiGlobe />,
    title: "Cross-Platform",
    description: "Works seamlessly on Windows, macOS, and Linux with a consistent experience.",
    gradient: "gradient-3"
  },
  {
    icon: <FiShield />,
    title: "Privacy First",
    description: "Your code stays on your machine. No telemetry, no tracking, complete privacy.",
    gradient: "gradient-4"
  },
  {
    icon: <FiCode />,
    title: "Smart Autocomplete",
    description: "Context-aware suggestions that understand your entire codebase.",
    gradient: "gradient-5"
  },
  {
    icon: <FiLock />,
    title: "Secure by Design",
    description: "Enterprise-grade security with local processing and encrypted storage.",
    gradient: "gradient-6"
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="features-title">
            Everything you need to
            <br />
            <span className="gradient-text">code faster and smarter</span>
          </h2>
          <p className="features-subtitle">
            Designed for developers who want the power of AI without compromising on privacy or performance.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`feature-icon ${feature.gradient}`}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="features-comparison"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="comparison-title">Why developers choose TauriDE</h3>
          <div className="comparison-grid">
            <div className="comparison-item">
              <div className="comparison-metric">75%</div>
              <div className="comparison-label">Less Memory Usage</div>
              <div className="comparison-vs">vs Electron-based editors</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-metric">100%</div>
              <div className="comparison-label">Local Processing</div>
              <div className="comparison-vs">No cloud dependencies</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-metric">10ms</div>
              <div className="comparison-label">Response Time</div>
              <div className="comparison-vs">Near-instant AI suggestions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;