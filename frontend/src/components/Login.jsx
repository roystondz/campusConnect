import {useState} from "react";
/*import Signup from "./Signup"; */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
    

    const response = await fetch('http://localhost:9786/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: inputData ,password:inputPassword}),  // Send data to the server
      });
        const data = await response.json();
        if(response.ok && data.success)
        {
          navigate("/Dashboard");
        }
    };


    return (
      <div className="flex items-start justify-center h-screen bg-purple-100 dark:bg-gray-800">
        <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-700 w-96 mt-16"> {/* Adjusted margin-top */}
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-900 dark:text-white">Welcome back</h2>
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
            <div className="text-right">
              <a href="" className="text-xs sm:text-sm font-medium text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">Forgot Password?</a>
            </div>
            <button 
              type="submit" 
              className="w-full py-2 text-white transition-colors duration-300 bg-purple-500 rounded-md hover:bg-purple-600"
            >
              Submit 
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
            Newbie?{" "}
            <a href="#" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">
              <Link to='/Signup'>Register Now</Link>
            </a>
          </p>
        </div>
      </div>
    );
};

export default Login;
