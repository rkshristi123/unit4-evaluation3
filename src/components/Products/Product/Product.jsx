import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({name,description,Id}) => {
  const {handlecountinc,handlecountdec,handlenuminc,handlenumdec,num,del}=useContext(CartContext)
  // Note: this id should come from api
  const product = { id: Id };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
 
      <button data-cy="product-add-item-to-cart-button" onClick={()=>handlecountinc(Id)}>Add to cart</button>
      

      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={handlenuminc}>+</button>
        <span data-cy="product-count">{num}
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={handlenumdec}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>handlecountdec(Id)}>remove from cart</button>
      </div>

    </div>
  );
};

export default Product;
