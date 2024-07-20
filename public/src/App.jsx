
import {Navigate , Routes , Route} from "react-router-dom";
import './App.css'
import Login from "./pages/Login/Login.jsx"
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Home/Home.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
    const {authUser} = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />}/>
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />}/>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
      </Routes>
    <Toaster/>
    </div>
  )
}

export default App
