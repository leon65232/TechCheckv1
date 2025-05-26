import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import remarkGfm from 'remark-gfm';       // Import remarkGfm for GitHub Flavored Markdown
import './Chatbot.css';

// !!! IMPORTANT: Replace with your actual Gemini API key.
// THIS IS HIGHLY INSECURE FOR PRODUCTION. ONLY FOR PERSONAL, ISOLATED USE.
const GEMINI_API_KEY = "AIzaSyD39DB1-3o8Soj-KWLgZdFi8w1xeoMLBuU";

// Initialize the Gemini API client
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
        Gemini Chatbot (Personal Project)
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {/* Conditional rendering for markdown for bot messages */}
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