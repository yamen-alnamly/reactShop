import React from "react";
import { useContext } from "react";
import  {ShopContext} from '../../context//ShopContextProvider'
export const Product = (props) => {
  const { id, ProductName, ProductPrice, ProductImage } = props.data;
  const { addToCart , cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    
        <div className="products">
            <div className="product" key={ProductName}>
              <img src={ProductImage} width="200" height="200"></img>
              <div className="productDescription">
                <p><b>{ProductName}</b></p>
                <p>${ProductPrice}</p>
                </div>
                <button className="productButton" onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
            </div>
        </div>
   
  );
};
