import useGetMessage from "../../hooks/usegetMessage.js"
import useListenMessages from "../../hooks/useListenMessages.js";
import Message from "./Message.jsx"
import { useEffect, useRef } from "react";

const Messages = () => {
  const{messages , loading} = useGetMessage();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({ behavior : "smooth"});
    },100);
  },[messages])
  return (
    <div className="rahulgandhi">
      {messages.length === 0 ? (
        <p>Send a message to start the conversation</p>
      ) : (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
        ))
      )}
    </div>
  );
};

export default Messages;
