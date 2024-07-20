import useGetConversation from "../../hooks/useGetConversation.js"
import Conversation from "./Conversation.jsx"
const Conversations = () => {
  const {loading,conversations} = useGetConversation();
  return (
    <div className="conversations">
      {conversations.map((conversation)=>(
        <Conversation  key={conversation._id} conversation={conversation}  />
))}
    </div>
  )
}

export default Conversations
