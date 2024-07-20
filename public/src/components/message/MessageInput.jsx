import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {

  const [message,setMessage] = useState("")
  const {sendMessage,loading} = useSendMessage()
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("")
  }

  return (
    <div className="messageInput">
    <form onSubmit={handleSubmit}>
    
     <div className="keyboard">
        <input type="text" placeholder="Send Ur Message" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
        <button type="submit">
        <IoMdSend />
        </button>
     </div>
    
    </form>
    </div>
  )
}

export default MessageInput
