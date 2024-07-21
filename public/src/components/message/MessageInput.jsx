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
    <form onSubmit={handleSubmit}>
     <div className="keyboard">
        <input type="text" placeholder="Send a Message" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
        <button className="sendbutton" type="submit">
        <IoMdSend />
        </button>
     </div>
    </form>
    
  )
}

export default MessageInput
