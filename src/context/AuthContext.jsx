import React, { createContext,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isauth,setIsauth]=useState(false)
 
  const navigate=useNavigate()
  const {state} = useLocation()
  const login=()=>{
    setIsauth(true)
    if(state.from){
        navigate(state.from )  
    }else{
        navigate("/products")
    }
    // ,{replace:true}
};

const logout=()=>{
    setIsauth(false)
    navigate("/")
};

  return <AuthContext.Provider value={{isauth,login,logout}}>{children}</AuthContext.Provider>;
};
