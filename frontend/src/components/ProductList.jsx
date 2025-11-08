import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard.jsx";
import { getProducts } from "../api/api.js";
import { CartContext } from "../context/CartContext.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]); // make sure default is an array
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProducts()
      .then((res) => {
        // Ensure you get an array from response
        // If backend returns { products: [...] }, use res.data.products
        const data = Array.isArray(res.data) ? res.data : res.data.products;
        setProducts(data);
      })
      .catch(console.error);
  }, []);

  if (!Array.isArray(products)) return null; // safeguard

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {products.map((p) => (
        <ProductCard key={p._id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
