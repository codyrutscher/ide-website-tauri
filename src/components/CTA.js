import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiTwitter } from 'react-icons/fi';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">
            Ready to code faster?
          </h2>
          <p className="cta-subtitle">
            Join thousands of developers who are already using TauriDE to build amazing software.
          </p>
          
          <div className="cta-actions">
            <button className="btn btn-primary btn-large">
              Start Coding Now
              <FiArrowRight />
            </button>
          </div>

          <div className="cta-stats">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Developers</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Lines of Code Written</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         
            
          
          <div className="footer-bottom">
            <p>&copy; 2024 TauriDE. All rights reserved.</p>
            <p className="footer-note">Built with Tauri • Made with ❤️ for developers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;