import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";

const MessageContainer = () => {
  const {selectedConversation , setSelectedConversation} = useConversation();

  useEffect(()=>{
    return()=> setSelectedConversation(null)},[setSelectedConversation])
  return (
    <div className="message-container">
     {!selectedConversation ?  <NoChatSelected /> :
     
      (
        <>
      <div className="header">
        <span>To:</span><span>{selectedConversation.fullName}</span>
      </div>

      <Messages />
      <MessageInput />
      </>
    )}
    
    </div>
  );
};

export default MessageContainer;


const NoChatSelected = ()=>{
  return(
    <div className="nochat">
      <div className="welcome">
        <p>Welcome Saman</p>
        <p>Select a chat to start messaging</p>
        <p className="chat-icon">
        <HiOutlineChatAlt2 />
        </p>
      </div>
    </div>
  )
}