import 'react-chatbot-kit/build/main.css';
import './Chat.css';
import { useState } from 'react';

function Chat() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleChatbot = () => {
    if (!isVisible) {
      // Redirect to chatbot URL when opening
      window.location.href = "https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=a0531798-3a04-4821-857d-8be74c526320";
    } else {
      // Redirect back when closing
      window.location.href = "https://capstone-flood-final.vercel.app"; // Replace with your desired fallback URL
    }
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        {isVisible ? 'Close Bot' : 'Chat Bot'}
      </button>
    </>
  );
}

export default Chat;
