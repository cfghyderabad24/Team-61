import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }} className='my-24'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotComponent;
