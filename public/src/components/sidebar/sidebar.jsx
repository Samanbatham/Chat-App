import SearchInput from "./SearchInput.jsx"
import Conversations from "./Conversations.jsx"
import LogoutButton from "./LogoutButton.jsx"

const sidebar = () => {
  return (
    <div className="sidebar">
      <SearchInput />
         <Conversations />
        <LogoutButton />
    </div>
  )
}

export default sidebar
