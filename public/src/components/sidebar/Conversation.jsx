import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation}) => {

         const {selectedConversation,setSelectedConversation} = useConversation()

         const isSelected = selectedConversation?._id === conversation._id


  return (
    <div className={isSelected ? "selected" : "conversation"}
    onClick={()=> setSelectedConversation(conversation)}
    >
      <div className="avatar online">
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
