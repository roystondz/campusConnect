import {useState} from "react";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState('');
  const [inputPassword, setInputPassword] = useState('');

    const handleInputChange = (e) =>{
        setInputData(e.target.value);
        
    }
    const handlePasswordChange=(e)=>{
      setInputPassword(e.target.value);
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
    

    await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: inputData },{password:inputPassword}),  // Send data to the server
      });
    };


  return (
    <div className="flex items-center justify-center h-screen bg-purple-100 dark:bg-gray-800">
      <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-700 w-96">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white mb">Welcome back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            value={inputData} 
            onChange={handleInputChange} 
            placeholder="Enter username" 
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
          />
          <input 
            type="password" 
            value={inputPassword} 
            onChange={handlePasswordChange} 
            placeholder="Enter password" 
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
          />
          <h3 className="dark:text-zinc-300"><a href=""></a>Forgot Password?</h3>
          <button 
            type="submit" 
            className="w-full py-2 text-white transition-colors duration-300 bg-purple-500 rounded-md hover:bg-purple-600"
          >
            
            Submit </button>
            <Link to="/Signup">New User</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
