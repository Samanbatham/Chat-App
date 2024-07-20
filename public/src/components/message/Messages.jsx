import useGetMessage from "../../hooks/usegetMessage.js"
import Message from "./Message.jsx"
import { useEffect, useRef } from "react";

const Messages = () => {
  const{messages , loading} = useGetMessage();
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({ behaviour : "smooth"});
    },100);
  },[messages])
  return (
    <div>
      {messages.length === 0 ? (
        <p>Send a message to start the conversation</p>
      ) : (
        messages.map((message, index) => (
          <Message
            key={message._id}
            message={message}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          />
        ))
      )}
    </div>
  );
};
export default Messages;
