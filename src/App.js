import "./App.css";
import Navbar from './components/Navbar/Navbar';
import  { Route, Routes } from 'react-router-dom';
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import Home from './pages/Home';
import Login from './pages/Login';
import RequireAuth from "./hoc/RequiredAuth"
function App() {
  return (
    <div className="App">
     <Navbar/>
   <Routes>
   <Route path="" element={<Home/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="products"
        element={
         <RequireAuth>
           <Products/>
         </RequireAuth>
       }
       /> 
        <Route path="/products/:id" element={<Product/>}/>
   </Routes>
    </div>
  );
}

export default App;
