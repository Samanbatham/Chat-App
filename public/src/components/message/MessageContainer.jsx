import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";

const MessageContainer = () => {
  return (
    <div className="message-container">
      <div className="header">
        <span>To:</span> <span> Saman</span>
      </div>

      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
