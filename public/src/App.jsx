import { useState } from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css'
import Login from "./pages/Login/Login.jsx"
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
