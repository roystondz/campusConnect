/*import { useState, useEffect } from 'react';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../components/Login";
import Signup from  "../components/Signup";
import  Home from "../components/Home";
import { Navbar } from '../components/Navbar';





export default function App() {
  

  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-lightPurple-100 dark:bg-gray-800">
      
      <Router>
      <Navbar/>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    
  );
}