import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [usn, setUsn] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleUsnChange = (e) => setUsn(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        fname: firstName,
        lname: lastName,
        pno: phoneNumber,
        usn,
      }),
    });
    const data = await response.json();
    if (response.ok && data.success) {
      navigate('/Dashboard');
    } else {
      alert(data.error || "Signup failed");
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen pt-12 bg-purple-100 dark:bg-gray-800">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input 
              id="firstName"
              type="text" 
              value={firstName} 
              onChange={handleFirstNameChange} 
              placeholder="First Name" 
              className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input 
              id="lastName"
              type="text" 
              value={lastName} 
              onChange={handleLastNameChange} 
              placeholder="Last Name" 
              className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
            <input 
              id="phoneNumber"
              type="text" 
              value={phoneNumber} 
              onChange={handlePhoneNumberChange} 
              placeholder="Phone Number" 
              className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="usn" className="sr-only">USN</label>
            <input 
              id="usn"
              type="text" 
              value={usn} 
              onChange={handleUsnChange} 
              placeholder="USN" 
              className="w-full px-3 py-2 text-sm border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500"
              required
            />
          </div>
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
