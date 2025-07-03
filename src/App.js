import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import CTA from './components/CTA';
import Brainlift from './components/Brainlift';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Download />
      <CTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brainlift" element={<Brainlift />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;