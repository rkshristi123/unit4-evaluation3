import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import  { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isauth,logout}=useContext(AuthContext)
  const {count}=useContext(CartContext)
  const navigate=useNavigate()
  const handleloginclick=()=>{
     if(isauth){
         logout()
      //    navigate("/")
     }else{
         navigate("/login")
     }
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="">Home</Link>
      <span data-cy="navbar-cart-items-count">cart:{count}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleloginclick}>{isauth ?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
