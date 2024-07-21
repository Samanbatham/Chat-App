import { useState } from "react";
import { FaHandLizard, FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const[search,setSearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversation();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      toast.error("Search term must be at least 4 character long")
    }
    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch("");
    }else{
      toast.error("No such user found")
    }
    
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search"  
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button className="search-btn">
        <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput
