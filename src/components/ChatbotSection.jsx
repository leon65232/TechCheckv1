// src/components/ChatbotSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import './ChatbotSection.css';

const ChatbotSection = () => (
  <section className="chatbot-section">
    <div className="chatbot-overlay">
      <h2>Want to check Our Chatbot?</h2>
      <Link to="/chatbot" className="chatbot-button">
        <button>Chatbot</button>  {/* This will navigate to the Chatbot page */}
      </Link>
    </div>
  </section>
);

export default ChatbotSection;
