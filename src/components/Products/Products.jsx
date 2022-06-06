import React from "react";
import axios from 'axios';
import { useEffect,useState } from 'react';
import Product from "./Product/Product";



const Products = () => {

  const [products,setProducts]=useState([])
  useEffect(()=>{
  
   axios.get(`http://localhost:8080/products`)
  // .then ((r)=>r.json())
   .then((d)=>{
       setProducts(d.data);
      //  console.log(d)
      
   });
   },[]);

  return <div><h1>Products</h1>
    {
      products.map((el)=>(
       <Product name={el.name} description={el.description} Id={el.id}/>
      ))
    }
  </div>;
};

export default Products;
