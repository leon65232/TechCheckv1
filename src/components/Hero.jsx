// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>TechCheck</h1>
      <p>Jangan biarkan perangkat Anda menjadi limbah elektronik sebelum waktunya! Cek perangkat Anda dan temukan solusinya!</p>
      <a href="#" className="hero-button">Check</a>
    </div>
    <div className="hero-image">
      <img src="/image 3 (1).png" alt="E-Waste Image" />
    </div>
  </section>
);

export default Hero;
