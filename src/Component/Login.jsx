import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navi = useNavigate();

    const [data, setdata] = useState({
        name:"",
        email:"",
        password:"",
    })

    const handleChange = (e)=>{
        const{name,value} = e.target;
        setdata((prev)=>({
            ...prev,
            [name]:value,
        }));
    };
    
  const handleSubmit = (e)=>{
    e.preventDefault();
    const {name, email, password} = data;

    if(!name || !email || !password){
        alert("Please fill all the details before submitting!");
        return;
    }

    navi('/Success');
}

    
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8  w-full max-w-md text-white flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">Name:</label>
          <input
            id="name" name="name" value={data.name} onChange={handleChange} type="text" required placeholder="Enter your name" className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email:</label>
          <input
            id="email" name="email" value={data.email} onChange={handleChange} type="email" required placeholder="Enter your email" className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1">Password:</label>
          <input id="password" value={data.password}  onChange = {handleChange} name="password" required type="password" placeholder="Enter your password" className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"/>
        </div>

        <button
          type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
