import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const RequiredAuth = ({ children }) => {
  const {isauth} = useContext(AuthContext)
    const {pathname}= useLocation()
  
    if(isauth){
      return children;
    }else{
     return <Navigate to="/login" state={{from:pathname}} replace/>
    }
};

export default RequiredAuth;
