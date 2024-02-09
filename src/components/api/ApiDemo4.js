import axios from 'axios'
import React, { useEffect } from 'react'

export const ApiDemo4 = () => {

    useEffect(() => {
      
    getProducts()
      
    }, [])
    
    const getProducts = async () => {

        const res = await axios.get("http://localhost:4000/products/product")
        console.log(res.data)
        console.log(res.data.data)



    }
  return (
    <div>ApiDemo4</div>
  )
}
