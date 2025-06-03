// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import './Navbar.css';  // Import the Navbar styles

const Navbar = () => (
  <header className="navbar">
    <div className="logo">TechCheck</div>
    <nav className="nav-links">
      <Link to="/">Home</Link>  {/* Link to Home page */}
      <Link to="/check">Check</Link>  {/* Link to KeyboardLoader page */}
      <Link to="/map">Map</Link>  {/* Link to Map page */}
    </nav>
  </header>
);

export default Navbar;
