import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation}) => {

         const {selectedConversation,setSelectedConversation} = useConversation()

         const isSelected = selectedConversation?._id === conversation._id

         const {onlineUsers} = useSocketContext();
         const isOnline = onlineUsers.includes(conversation._id)
         console.log(isOnline)

  return (
    <div className={isSelected ? "selected" : "conversation"}
    onClick={()=> setSelectedConversation(conversation)}
    >
      <div className={`avater ${isOnline} ? "online" : ""`}>
        <div className="image">
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
      </div>
      <div className="username">
        <div>
            <p>{conversation.fullName}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Conversation;
