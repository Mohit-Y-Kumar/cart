import React from "react";

const ProductCard = ({ product, addToCart }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg transition">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover mb-3 rounded"
    />
    <h2 className="font-bold text-lg">{product.name}</h2>
    <p className="text-gray-700 mt-1">${product.price}</p>
    <button
      className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-600 w-full"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
