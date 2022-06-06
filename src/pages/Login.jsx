import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const[logincreds,setLogincreds] =useState({})
  const {login}=useContext(AuthContext)
 
   const handleChange=(e)=>{
       // console.log(e.target)
       const [name,value]=e.target;
       setLogincreds({...logincreds,[name]:value,})
   }
   const handlesubmit=(e)=>{
    e.preventDefault()
    console.log("gddgdhdhdhd")
    login()
    
   }
  return (
    <div>
         <form onSubmit={handlesubmit}
        style={{display:"flex",flexDirection:"column" ,maxWidth:"200px",margin:"auto", gap:"20px", marginTop:"20px"}}>
      <input data-cy="login-email" name="email" type="email" placeholder='Enter Email' onChange={handleChange} />
      <input data-cy="login-password" name="password" type="password" placeholder='Enter Password' onChange={handleChange} />
      <button data-cy="login-submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
