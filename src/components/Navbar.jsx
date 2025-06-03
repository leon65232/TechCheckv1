// src/components/Navbar.jsx
import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';  // Import Link from React Router
import './Navbar.css';  // Import the Navbar styles
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
<<<<<<< Updated upstream
import './Navbar.css';
import Check from '../pages/KeyboardLoader';
import Map from '../pages/Map';
>>>>>>> Stashed changes

const Navbar = () => (
  <header className="navbar">
    <div className="logo">TechCheck</div>
    <nav className="nav-links">
<<<<<<< Updated upstream
      <Link to="/">Home</Link>  {/* Link to Home page */}
      <Link to="/check">Check</Link>  {/* Link to KeyboardLoader page */}
      <Link to="/map">Map</Link>  {/* Link to Map page */}
=======
      <a href="#home">Home</a>
      <a href="../pages/KeyboardLoader.jsx">Check</a>
      <a href="Map">Map</a>
      <a href="#about-us">About Us</a>
=======
import { NavLink } from 'react-router-dom';  // Import Link from React Router
import './Navbar.css';  // Import the Navbar styles

=======
import { NavLink } from 'react-router-dom';  // Import Link from React Router
import './Navbar.css';  // Import the Navbar styles

>>>>>>> Stashed changes
=======
import { NavLink } from 'react-router-dom';  // Import Link from React Router
import './Navbar.css';  // Import the Navbar styles

>>>>>>> Stashed changes
const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="logo">TechCheck</div>
      <div className="nav-links">
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li> {/* Link to Home page */}
        <li><NavLink to="/check" className="nav-link">Check</NavLink></li> {/* Link to KeyboardLoader page */}
        <li><NavLink to="/map" className="nav-link">Map</NavLink></li> {/* Link to Map page */}
      </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </nav>
  );
}

export default Navbar;
