// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';  // Correct the path
import Hero from '../components/Hero';      // Correct the path
import Footer from '../components/Footer';  // Correct the path
import ChatbotSection from '../components/ChatbotSection';  // Correct the path
import FactSection from '../components/FactSection';  // Correct the path
import CheckMapSection from '../components/CheckMapSection';  // Correct the path

const Home = () => {
  return (
    <div>
      <Hero />
      <ChatbotSection />
      <FactSection />
      <CheckMapSection />
    </div>
  );
}

export default Home;
