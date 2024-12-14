import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatRedirect = () => {
  useEffect(() => {
    window.location.href = "https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=a0531798-3a04-4821-857d-8be74c526320";
  }, []);

  return null; // You can add a loading spinner or message if needed
};

export default ChatRedirect;
