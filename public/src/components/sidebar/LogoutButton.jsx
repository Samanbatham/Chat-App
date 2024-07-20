import { SlLogout } from "react-icons/sl";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {

  const {loading,logout}= useLogout();
  return (
    <div className="logout-btn">
      <button>
      <SlLogout 
      onClick={logout}
      />
      </button>
    </div>
  )
}

export default LogoutButton;
