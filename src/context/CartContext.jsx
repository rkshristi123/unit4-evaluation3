import React, { createContext, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

 const [arr,setarr] =useState();
  const [count,setCount]=useState(0)
  const[num,setNum]=useState(0)
  
 const handlenuminc=()=>{
  setNum(num+1)
 }
 const handlenumdec =()=>{
  if(num>0){
  setNum(num-1)
  }
}

  const handlecountinc =(id)=>{
    setCount(count+1)
    

    axios.get(`http://localhost:8080/products/${id}`)
      
        .then((d)=>{
            setarr(d.data);
            console.log(arr)
            
           
        });
    axios.post("http://localhost:8080/cartItems",{
      ProductId:arr.id,
      count:count,
     
  })
  .then((res)=>console.log(res.data.ProductId))


  
  }

  const handlecountdec =(id)=>{
    if(count>0){
    setCount(count-1)
    }

    axios.delete(`http://localhost:8080/cartItems/${id}`)
    .then((response)=>{
        this.setState({
            filtered:response
        })
    })
    
  }


  return <CartContext.Provider value={{handlecountinc,handlecountdec,count,handlenuminc,handlenumdec,num}}>{children}</CartContext.Provider>;
};
