import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const Products = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <h1>PRODUCTS</h1>
        <div>
            <h2>Product 1</h2>
            <img src="https://via.placeholder.com/150" alt="product 1" />
            <button onClick={()=>{dispatch(addToCart({id:101,name:"iphone",price:1000}))}}>Add to Cart</button>
        </div>
        <div>
            <h2>Product 2</h2>
            <img src="https://via.placeholder.com/150" alt="product 1" />
            <button onClick={()=>{dispatch(addToCart({id:102,name:"ipad",price:900}))}}>Add to Cart</button>
        </div>
    </div>
  )
}
