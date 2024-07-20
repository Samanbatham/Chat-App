import Sidebar from "../../components/sidebar/sidebar.jsx"
import MessageContainer from "../../components/message/MessageContainer.jsx";

const Home = ()=>{

  
  return(
    <div className="app-container">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}
export default Home;