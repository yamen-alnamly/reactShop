import React, {useContext} from 'react'
import { PRODUCTS } from '../../producs'
import  {ShopContext} from '../../context//ShopContextProvider'
import { useNavigate } from 'react-router-dom';
import { CartItem } from './CartItem'
import FailImage from '..//..//transparent-sad-21.png'
function Cart() {
  const { cartItems , getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const Navigate = useNavigate()
  return (
    <div className="cart">
      <h1>Your cart:</h1>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
         if (cartItems[product.id] !== 0) {
          return <CartItem data={product}/>
         }
      })}
      {totalAmount > 0 ?
       <div className='cartfooter'>
          <p>your total is :${totalAmount}</p>
          <div>
            <button onClick={() => Navigate('/')}>continue shopping </button>
            <button>Pay</button>
          </div>
      </div>
: <div className='failCart'><h2>is Empty</h2>
<img src={FailImage} width='150' height='150'></img>
<button onClick={() => Navigate('/')} className='failButton'>Go back to home page!</button>
</div>}
      </div>
    </div>
  )
}

export default Cart