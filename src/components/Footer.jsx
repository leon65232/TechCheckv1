// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
const Footer = () => (
  <footer className="footer">
    <div className="footer-column">
      <h2 className="footer-brand">TechCheck</h2>
    </div>

    <div className="footer-column">
      <h3>Community</h3>
      <a href="#">Twitter</a>
      <a href="#">Discord</a>
    </div>

    <div className="footer-column">
      <h3>Connect</h3>
      <a href="#">Newsletter</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>

    <div className="footer-column">
      <div className="social">
        <a href="#"><img src="./facebook.png" alt="Facebook" />Facebook</a>
        <a href="#"><img src="/instagram.png" alt="Instagram" />Instagram</a>
        <a href="#"><img src="/linkedin-logo.png" alt="LinkedIn" />LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
