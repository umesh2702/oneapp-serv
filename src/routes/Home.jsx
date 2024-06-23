import React, { useState } from 'react';
import Banner from '../components/Banner';
import ServiceList from '../components/Services/ServiceList';
import AIChatButton from '../AIChatButton'; // Adjust the import path as per your folder structure
import Chat from '../Chat'; // Assuming Chat component is where you handle the chat overlay

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const handleAIChatClick = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <>
      <Banner />
      <ServiceList />
      <AIChatButton onClick={handleAIChatClick} />
      {chatOpen && <Chat />}
    </>
  );
};

export default Home;
  