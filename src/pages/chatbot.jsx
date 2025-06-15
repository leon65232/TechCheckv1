import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import remarkGfm from 'remark-gfm';       // Import remarkGfm for GitHub Flavored Markdown
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import './Chatbot.css';

// Dead API Key for Gemini
const GEMINI_API_KEY = "AIzaSyD39DB1-3o8Soj-KWLgZdFi8w1xeoMLBuU";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' }); 

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatSessionRef = useRef(null);

  const navigate = useNavigate()

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!chatSessionRef.current) {
      chatSessionRef.current = model.startChat({ history: [] });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    const message = userInput.trim();
    if (message === '' || isLoading) return;

    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
    setUserInput('');
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        chatSessionRef.current = model.startChat({ history: [] });
      }

      const result = await chatSessionRef.current.sendMessage(message);
      const responseText = await result.response.text();

      setMessages((prevMessages) => [...prevMessages, { text: responseText, sender: 'bot' }]);

    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      if (error.message.includes("First content should be with role 'user'")) {
          setMessages((prevMessages) => [...prevMessages, { text: "Chat history error: The conversation must start with a user message for the AI.", sender: 'bot' }]);
      } else {
          setMessages((prevMessages) => [...prevMessages, { text: "Oops! Something went wrong. Please try again.", sender: 'bot' }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
  <div className="chat-container">
    <div className="chat-header">
      <button className="back-button" onClick={() => navigate('/')}>
        <IoArrowBackCircleOutline size={28}/>
      </button>
      <div className="chat-header-title">Chatbot</div>
    </div>
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          {msg.sender === 'bot' ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {msg.text}
            </ReactMarkdown>
          ) : (
            msg.text
          )}
        </div>
      ))}
      {isLoading && (
        <div className="message bot typing-indicator">
          Thinking...
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
    <div className="chat-input-container">
      <input
        type="text"
        id="user-input"
        placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
      />
      <button id="send-button" onClick={sendMessage} disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </div>
  </div>
);
}


export default Chatbot;