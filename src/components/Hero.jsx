// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>TechCheck</h1>
      <p style={{ color: 'white' }}>Jangan biarkan perangkat Anda menjadi limbah elektronik sebelum waktunya! Cek perangkat Anda dan temukan solusinya!</p>
      <Link to="/check" className="hero-button">Check</Link>
      {/* <a href="#" className="hero-button">Check</a> */}
    </div>
    <div className="hero-image">
      <img src="/image 3 (1).png" alt="E-Waste Image" />
    </div>
  </section>
);

export default Hero;
