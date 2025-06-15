// src/App.jsx
import React from 'react';
import Chatbot from "./pages/chatbot";
import Home from './pages/Home';
import Check from './pages/Check';  // KeyboardLoader page component
import Map from './pages/Map';  // Map page component
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Footer component
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const AppContent = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/chatbot';
  
  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/map" element={<Map />} />  
        <Route path="/check" element={<Check />} />  
        <Route path="/chatbot" element={<Chatbot />} /> 
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);
     
export default App;