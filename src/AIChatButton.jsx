import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai'; // Import AI icon from React Icons library or your preferred icon library
import './AIChatButton.css'; // Import CSS for styling

const AIChatButton = ({ onClick }) => {
  return (
    <button className="ai-chat-button" onClick={onClick}>
      <AiOutlineRobot className="ai-icon" />
    </button>
  );
};

export default AIChatButton;
