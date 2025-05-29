// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import Check from '../pages/KeyboardLoader';
import Map from '../pages/Map';

const Navbar = () => (
  <header className="navbar">
    <div className="logo">TechCheck</div>
    <nav className="nav-links">
      <a href="#home">Home</a>
      <a href="../pages/KeyboardLoader.jsx">Check</a>
      <a href="Map">Map</a>
      <a href="#about-us">About Us</a>
    </nav>
  </header>
);

export default Navbar;

// src/components/Navbar.jsx
// import React from 'react';
// import { '../pages/' } from 'react-router-dom';  // Import Link from React Router
// import './Navbar.css';

// const Navbar = () => (
//   <header className="navbar">
//     <div className="logo">TechCheck</div>
//     <nav className="nav-links">
//       <Link to="#home">Home</Link> {/* Link to Home section */}
//       <Link to="#check">Check</Link> {/* Link to Check section */}
//       <Link to="#map">Map</Link> {/* Link to Map section */}
//       <Link to="#about-us">About Us</Link> {/* Link to About Us section */}
//     </nav>
//   </header>
// );

// export default Navbar;
