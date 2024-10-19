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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputData} onChange={handleInputChange} placeholder="Enter username" />
        <input type="password" value={inputData} onChange={handleInputChange} placeholder="Enter username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
