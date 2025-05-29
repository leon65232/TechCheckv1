// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router components
import Navbar from './components/Navbar';  // Import Navbar component
import Home from './pages/Home';  // Home page component
import Check from './pages/Check';  // KeyboardLoader page component
import Map from './pages/Map';  // Map page component
import Chatbot from './pages/Chatbot';  // Map page component
import Footer from './components/Footer';  // Footer component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* The Navbar will be available on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        {/* <Route path="/keyboard" element={<Keyboard />} />  KeyboardLoader page */}
        <Route path="/map" element={<Map />} />  {/* Map page */}
        <Route path="/check" element={<Check />} />  
        <Route path="/chatbot" element={<Chatbot />} /> 
        {/* Add other routes as needed */}
      </Routes>
      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
};

export default App;
