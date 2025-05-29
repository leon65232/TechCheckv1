// src/components/FactSection.jsx
import React from 'react';
import './FactSection.css';

const FactSection = () => (
  <section className="fact-section">
    <div className="fact-item">
      <h2>Apa itu E-Waste?</h2>
      <p>E-waste (electronic waste) adalah limbah elektronik yang berasal dari perangkat elektronik yang sudah tidak digunakan atau rusak, seperti ponsel, laptop, televisi, kulkas, baterai, dan perangkat elektronik lainnya.</p>
    </div>
    <div className="fact-item">
      <h2>Bahaya E-Waste!</h2>
      <p>E-waste mengandung bahan berbahaya seperti merkuri, timbal, dan kadmium, yang bisa mencemari lingkungan jika tidak didaur ulang dengan benar.</p>
    </div>
    <div className="fact-item">
      <h2>Dampak E-Waste!</h2>
      <p>E-waste dapat menimbulkan dampak-dampak negatif terhadap lingkungan dan kesehatan jika tidak dikelola dengan baik, yaitu dapat mencemari tanah, air, udara, serta menyebabkan masalah kesehatan.</p>
    </div>
    <div className="fact-item">
      <h2>Cara mengelola E-Waste!</h2>
      <p>Cara mengelola e-waste yang tepat adalah dengan memperpanjang masa pakai barang elektronik dan memilih produk yang ramah lingkungan.</p>
    </div>
  </section>
);

export default FactSection;
