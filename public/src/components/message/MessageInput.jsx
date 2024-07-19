import { IoMdSend } from "react-icons/io";
const MessageInput = () => {
  return (
    <div className="messageInput">
     <div className="keyboard">
        <input type="text" placeholder="Send Ur Message" />
        <button>
        <IoMdSend />
        </button>
     </div>
    </div>
  )
}

export default MessageInput
