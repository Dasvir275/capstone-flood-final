import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import './Chat.css'
import { useState } from 'react';
function Chat() {
  let obj={
    name:'dasvir',
    rollno:'123'
  };
  const [isVisible, setIsVisible] = useState(false);
  const toggleChatbot = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {isVisible && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        {isVisible ? 'Close Bot' : 'Chat Bot'}
      </button>
    </>
  );
}

export default Chat;