import React from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime.js";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? "chat_end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bgColor = fromMe ? "blue" : "grey";
  return (
    <div className={chatClassName}>
      <div className="profile">
        <img src={profilePic} alt="" />
      </div>
      <div className={bgColor}>
        <p>{message.message}</p>
        <div className="time">{formattedTime}</div>
      </div>

      
    </div>
  );
};

export default Message;
