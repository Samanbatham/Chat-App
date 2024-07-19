import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const MessageContainer = () => {
  const  noChatSelected = true;
  return (
    <div className="message-container">
     {noChatSelected ?  <NoChatSelected /> :
     
      (
        <>
      <div className="header">
        <span>To:</span> <span> Saman</span>
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