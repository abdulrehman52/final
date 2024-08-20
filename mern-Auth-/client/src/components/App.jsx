import { useState } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import RefreshHandler from '../refreshHandler';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false);

  const privateRoute=({element})=>{
    return isAuthenticated ? element :<Navigate to='/login'/>
  }

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<privateRoute element={<Home/>} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
