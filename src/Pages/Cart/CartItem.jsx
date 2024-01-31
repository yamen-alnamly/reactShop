import React from 'react'
import '..//Cart//CartItem.css'
import { useContext } from "react";

import  {ShopContext} from '../../context//ShopContextProvider'
export const CartItem = (props) => {
    const { id, ProductName, ProductPrice, ProductImage } = props.data;
    const { cartItems , addToCart,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartItem'>
      <img src={ProductImage} width="200" height="200"/>
      <div className='cartInfo'>
            <p><b>{ProductName}</b></p>
            <p>${ProductPrice}</p>
      </div>
      <div className="valueSection">
          <input value={cartItems[id]}/>
          <div className='cartButtons'>
              <button onClick={() => addToCart(id)}> Add one item </button>
              <button onClick={() => removeFromCart(id)}> Remove one item</button>
          </div>
      </div>
    </div>
  )
}
