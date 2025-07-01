import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiChevronDown } from 'react-icons/fi';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import './Download.css';

const Download = () => {
  const [detectedOS, setDetectedOS] = useState('');
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  const [showMacInstructions, setShowMacInstructions] = useState(false);

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

  const platforms = [
    {
      name: 'Windows',
      icon: <FaWindows />,
      version: 'Windows 10+',
      size: '85 MB',
      downloadUrl: '#',
      architecture: ['x64', 'ARM64']
    },
    {
      name: 'macOS',
      icon: <FaApple />,
      version: 'macOS 10.15+',
      size: '8.1 MB',
      downloadUrl: '/downloads/CodyEditor.dmg',
      architecture: ['Intel', 'Apple Silicon']
    },
    {
      name: 'Linux',
      icon: <FaLinux />,
      version: 'Ubuntu, Fedora, Debian',
      size: '88 MB',
      downloadUrl: '#',
      architecture: ['x64', 'ARM64']
    }
  ];

  const primaryPlatform = platforms.find(p => p.name === detectedOS) || platforms[0];
  const otherPlatforms = platforms.filter(p => p.name !== detectedOS);

  return (
    <section className="download">
      <div className="container">
        <motion.div 
          className="download-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="download-title">
            Download Cody Editor
          </h2>
          <p className="download-subtitle">
            Free forever. No account required. Start coding in seconds.
          </p>
        </motion.div>

        <motion.div 
          className="download-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="platform-card primary">
            <div className="platform-icon">
              {primaryPlatform.icon}
            </div>
            <div className="platform-info">
              <h3 className="platform-name">Cody Editor for {primaryPlatform.name}</h3>
              <p className="platform-details">
                {primaryPlatform.version} • {primaryPlatform.size}
              </p>
              <div className="platform-architectures">
                {primaryPlatform.architecture.map((arch, index) => (
                  <span key={index} className="architecture-tag">{arch}</span>
                ))}
              </div>
            </div>
            {primaryPlatform.name === 'macOS' ? (
              <button 
                className="download-btn"
                onClick={() => setShowMacInstructions(true)}
              >
                <FiDownload />
                Download for {primaryPlatform.name}
              </button>
            ) : (
              <a href={primaryPlatform.downloadUrl} download>
                <button className="download-btn">
                  <FiDownload />
                  Download for {primaryPlatform.name}
                </button>
              </a>
            )}
          </div>

          <button 
            className="show-all-btn"
            onClick={() => setShowAllPlatforms(!showAllPlatforms)}
          >
            <span>Other platforms</span>
            <FiChevronDown className={showAllPlatforms ? 'rotated' : ''} />
          </button>
        </motion.div>

        {showAllPlatforms && (
          <motion.div 
            className="download-others"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {otherPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="platform-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="platform-icon small">
                  {platform.icon}
                </div>
                <div className="platform-info">
                  <h4 className="platform-name small">{platform.name}</h4>
                  <p className="platform-details small">
                    {platform.version} • {platform.size}
                  </p>
                </div>
                {platform.name === 'macOS' ? (
                  <button 
                    className="download-btn small"
                    onClick={() => setShowMacInstructions(true)}
                  >
                    <FiDownload />
                    Download
                  </button>
                ) : (
                  <a href={platform.downloadUrl} download>
                    <button className="download-btn small">
                      <FiDownload />
                      Download
                    </button>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div 
          className="download-features"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="download-feature">
            <div className="feature-check">✓</div>
            <div>
              <h4>No Sign-up Required</h4>
              <p>Download and start coding immediately</p>
            </div>
          </div>
          <div className="download-feature">
            <div className="feature-check">✓</div>
            <div>
              <h4>Automatic Updates</h4>
              <p>Always stay on the latest version</p>
            </div>
          </div>
          <div className="download-feature">
            <div className="feature-check">✓</div>
            <div>
              <h4>Import Settings</h4>
              <p>Migrate from VS Code with one click</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="system-requirements"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>System Requirements</h3>
          <div className="requirements-grid">
            <div className="requirement">
              <strong>Processor:</strong> 1.6 GHz or faster
            </div>
            <div className="requirement">
              <strong>RAM:</strong> 4 GB minimum, 8 GB recommended
            </div>
            <div className="requirement">
              <strong>Storage:</strong> 500 MB available space
            </div>
          </div>
        </motion.div>

        {showMacInstructions && (
          <div className="modal-overlay" onClick={() => setShowMacInstructions(false)}>
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>macOS Installation Instructions</h3>
              <p className="modal-warning">
                ⚠️ The app is not yet code-signed, so macOS may show a "damaged" error.
              </p>
              
              <div className="instructions-section">
                <h4>To install Cody Editor on macOS:</h4>
                <ol>
                  <li>
                    <a href={platforms.find(p => p.name === 'macOS').downloadUrl} download>
                      Download CodyEditor.dmg
                    </a>
                  </li>
                  <li>Open Terminal and run this command to remove the quarantine flag:
                    <code>xattr -cr "/Applications/Tauri IDE.app"</code>
                  </li>
                  <li>Alternatively, right-click the app and select "Open" twice</li>
                </ol>
              </div>
              
              <div className="instructions-section">
                <h4>Why does this happen?</h4>
                <p>macOS requires apps to be signed by registered developers. We're working on getting our developer certificate.</p>
              </div>
              
              <button 
                className="btn btn-primary"
                onClick={() => setShowMacInstructions(false)}
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Download;