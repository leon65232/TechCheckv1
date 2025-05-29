// src/components/CheckMapSection.jsx
import React from 'react';
import './CheckMapSection.css';

const CheckMapSection = () => (
  <section className="check-map">
    <div className="container">
      <div className="card">
        <h1>Check</h1>
        <p>Perangkat elektronik Anda bermasalah?<br />Sebelum membuangnya, pastikan dulu kondisinya!</p>
        <button>Check</button>
      </div>
      <div className="card">
        <h1>Map</h1>
        <p>Cari tahu di mana Anda bisa membuang perangkat elektronik bekas dengan aman dan ramah lingkungan di lokasi terdekat.</p>
        <button>Map</button>
      </div>
    </div>
  </section>
);

export default CheckMapSection;
