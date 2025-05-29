// src/components/CheckMapSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import './CheckMapSection.css';

const CheckMapSection = () => (
  <section className="check-map">
    <div className="container">
      <div className="card">
        <h1>Check</h1>
        <p>Perangkat elektronik Anda bermasalah?<br />Sebelum membuangnya, pastikan dulu kondisinya!</p>
        <Link to="/check">Check</Link>  {/* Link to KeyboardLoader page */}
      
      </div>
      <div className="card">
        <h1>Map</h1>
        <p>Cari tahu di mana Anda bisa membuang perangkat elektronik bekas dengan aman dan ramah lingkungan di lokasi terdekat.</p>
        <Link to="/map">Map</Link>
      </div>
    </div>
  </section>
);

export default CheckMapSection;
