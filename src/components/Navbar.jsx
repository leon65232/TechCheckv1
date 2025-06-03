// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';  // Import Link from React Router
import './Navbar.css';  // Import the Navbar styles

const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="logo">TechCheck</div>
      <div className="nav-links">
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li> {/* Link to Home page */}
        <li><NavLink to="/check" className="nav-link">Check</NavLink></li> {/* Link to KeyboardLoader page */}
        <li><NavLink to="/map" className="nav-link">Map</NavLink></li> {/* Link to Map page */}
      </div>
    </nav>
  );
}

export default Navbar;
