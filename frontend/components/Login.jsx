import React ,{useState} from "react";

const Login = () => {
  const [inputData, setInputData] = useState('');
  const [inputPassword, setInputPassword] = useState('');

    const handleInputChange = (e) =>{
        setInputData(e.target.value);
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
    <div className="flex justify-center items-center h-screen bg-purple-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb text-center mb-6">Welcome back</h2>
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
            onChange={handleInputChange} 
            placeholder="Enter password" 
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
          />
          <h3 className="dark:text-zinc-300"><a href=""></a>Forgot Password?</h3>
          <button 
            type="submit" 
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors duration-300"
          >
            
            Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
