import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductComponent = () => {
  const [products, setproducts] = useState([]);

  const getAllProducts = async () => {
    const res = await axios.get("http://localhost:4000/products/product");
    console.log("res in getAllProducts", res);
    setproducts(res.data.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const searchHandler = async (e) => {
    //console.log("e.target.value", e.target.value);
    try {
      const res = await axios.get(
        "http://localhost:4000/products/productfilter",
        {
          params: {
            name: e.target.value,
          },
        }
      );
      console.log("res in searchHandler", res.data.data);
      setproducts(res.data.data);
    } catch (err) {
      setproducts([]);
    }
  };
  return (
    <div>
      <h1>ALL PRODUCTS 1</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          searchHandler(e);
        }}
      />
      {products?.map((prod) => {
        return (
          <div>
            <h1>{prod.name}</h1>
            <h2>{prod.price}</h2>
          </div>
        );
      })}
    </div>
  );
};
