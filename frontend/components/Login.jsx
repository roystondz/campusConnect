import {useState} from "react";

const Login = () => {

    const [inputData,setInputData] = useState('');
    const [inputPassword,setInputPassword] =useState('');

    const handleInputChangeUsername = (e) =>{
        setInputData(e.target.value);
        
    } 
    const handleInputChangePassword=(e)=>{
        setInputPassword(e.target.value);
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const data = {
            username: inputData,
            password: inputPassword
        };

    await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // Send data to the server
      });
    };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputData} onChange={handleInputChangeUsername} placeholder="Enter username" />
        <input type="password" value={inputPassword} onChange={handleInputChangePassword} placeholder="Enter username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
