import { useState, useEffect } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Login from "../components/Login";
import Signup from  "../components/Signup";
import  Home from "../components/Home";
import { Navbar } from '../components/Navbar';





export default function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    
        
    <div className="relative min-h-screen transition-colors duration-300 bg-lightPurple-100 dark:bg-gray-800">
      <div className="absolute z-10 top-4 right-4">
        <button 
          onClick={toggleDarkMode}
          className="px-4 py-2 text-white transition-colors duration-300 rounded-md shadow-md bg-lightPurple-500 dark:bg-darkPurple-500 hover:bg-lightPurple-600 dark:hover:bg-darkPurple-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="pt-16"> {/* Add padding to the top to prevent overlap with the button */}
      
      <Router>
      <Navbar/>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </div>
    
    
  );
}