import { useState } from "react";
import {Link} from "react-router-dom"

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
  };

    

  return (
    <div className="flex items-start justify-center min-h-screen bg-purple-100 dark:bg-gray-800 pt-12"> {/* Added padding-top */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input 
              id="username"
              type="text" 
              value={username} 
              onChange={handleUsernameChange} 
              placeholder="Username" 
              className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              id="email"
              type="email" 
              value={email} 
              onChange={handleEmailChange} 
              placeholder="Email" 
              className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input 
              id="password"
              type="password" 
              value={password} 
              onChange={handlePasswordChange} 
              placeholder="Password" 
              className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
            <input 
              id="confirmPassword"
              type="password" 
              value={confirmPassword} 
              onChange={handleConfirmPasswordChange} 
              placeholder="Confirm Password" 
              className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 text-sm font-medium text-white transition-colors duration-300 bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/Login" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
  
  
};

export default Signup;