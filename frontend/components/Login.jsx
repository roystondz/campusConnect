import React ,{useState} from "react";

const Login = () => {

    const [inputData,setInputData] = useState('');
    const [inputPassword,setInputPassword] =useState('');

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
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="bg-white p-8 rounded shadow-md">
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={inputData} onChange={handleInputChange} placeholder="Enter username" className="w-full px-3 py-2 border rounded" />
      <input type="password" value={inputPassword} onChange={handleInputChange} placeholder="Enter password" className="w-full px-3 py-2 border rounded" />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default Login
