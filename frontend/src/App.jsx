import { useState, useEffect } from 'react';
import Login from "../components/Login";
import Signup from  "../components/Signup";



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
    <div className="min-h-screen bg-lightPurple-100 dark:bg-gray-800 transition-colors duration-300 relative">
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={toggleDarkMode}
          className="bg-lightPurple-500 dark:bg-darkPurple-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-lightPurple-600 dark:hover:bg-darkPurple-600 transition-colors duration-300"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="pt-16"> {/* Add padding to the top to prevent overlap with the button */}
        <Signup />
      </div>
    </div>
  );
}