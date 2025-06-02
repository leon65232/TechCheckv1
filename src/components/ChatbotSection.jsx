// src/components/ChatbotSection.jsx
import React from 'react';
import './ChatbotSection.css';
import { Link } from 'react-router-dom';

const ChatbotSection = () => (
  <section className="chatbot-section">
    <div className="chatbot-overlay">
      <h2>Want to check Our Chatbot?</h2>
      {/* <a href="" className="chatbot-button">Chatbot</a> */}
      <Link to="/chatbot" className="chatbot-button">Chatbot</Link>
    </div>
  </section>
);

export default ChatbotSection;
