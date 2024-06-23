import React, { useState, useEffect } from 'react';
import './Chat.css';
import axios from 'axios';
import profile from './assets/images/providers/profile.png';

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const storedMessages = JSON.parse(sessionStorage.getItem('chatMessages')) || [];
    setMessages(storedMessages);
  }, []);

  const sendMessage = async () => {
    const newMessage = {
      sender: 'user',
      text: inputMessage.trim(),
    };

    try {
      const apiUrl = messages.length === 0
        ? 'http://localhost:9999/api/c3/user/greetchat'
        : 'http://localhost:9999/api/c3/user/chat';

      const jwtToken = localStorage.getItem('jwtToken');
      if (!jwtToken) {
        throw new Error('JWT token not found in localStorage');
      }

      const response = await axios.post(apiUrl, {
        question: newMessage.text,
      }, {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      });

      const botResponse = {
        sender: 'bot',
        text: response.data.answer,
      };
      const updatedMessages = [...messages, newMessage, botResponse];
      setMessages(updatedMessages);
      sessionStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    } catch (error) {
      console.error('Error sending/receiving message:', error);
      // Handle error state or redirect to login
    }
  };

  const handleCloseChat = () => {
    sessionStorage.removeItem('chatMessages');
    onClose();
  };

  return (
    <div className="mobile-chat-container">
      <div className="mobile-chat-border">
        <div className="chat-header">
          <img src={profile} alt="Avatar" className="profile-avatar" />
          <h5>Chatbot</h5>
          <button className="close-button" onClick={handleCloseChat}>Close</button>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input-form">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && inputMessage.trim() !== '') {
                sendMessage();
              }
            }}
          />
          <button
            className="send-button"
            onClick={sendMessage}
            disabled={inputMessage.trim() === ''}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
