import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import CTA from './components/CTA';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Download />
      <CTA />
    </div>
  );
}

export default App;