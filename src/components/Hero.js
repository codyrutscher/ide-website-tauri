import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [detectedOS, setDetectedOS] = useState('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) {
      setDetectedOS('Windows');
    } else if (userAgent.includes('mac')) {
      setDetectedOS('macOS');
    } else if (userAgent.includes('linux')) {
      setDetectedOS('Linux');
    }
  }, []);

  const handleDownloadClick = () => {
    const downloadSection = document.querySelector('.download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
      </div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="badge-text">Cody</span>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The Cody Editor
          <br />
          <span className="gradient-text">A Cleaner Code Editor</span>
        </motion.h1>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Write, edit, and chat about your code with a powerful AI, all in one place.
          <br />
          Native performance. Cross-platform. Privacy-focused.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn btn-primary" onClick={handleDownloadClick}>
            Free Download
          </button>
          
        </motion.div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="stat">
            <span className="stat-value">10x</span>
            <span className="stat-label">Faster Development</span>
          </div>
          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Privacy Guaranteed</span>
          </div>
          <div className="stat">
            <span className="stat-value">3</span>
            <span className="stat-label">Platforms Supported</span>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <img 
          src="/cody.png" 
          alt="Cody Editor Screenshot" 
          className="editor-screenshot"
        />
      </motion.div>
      
      <motion.div 
        className="demo-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h3 className="demo-title">See Cody in Action</h3>
        <div className="video-container">
          <video 
            src="/cody.mp4" 
            controls
            className="demo-video"
            poster="/cody.png"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;