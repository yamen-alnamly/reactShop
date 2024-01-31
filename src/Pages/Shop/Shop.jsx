import React from 'react'
import { PRODUCTS } from '../../producs'
import {Product} from '../Shop//Product'
import './Shop.css'
function Shop() {
  return (
    <div className='shop'>
      <h1 className='shoptitle'>Everything you need.</h1>
      <div className='shopProducts'>
        
        {PRODUCTS.map((product) => (
        <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop