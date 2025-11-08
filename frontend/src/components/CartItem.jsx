import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQty } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between border p-2 rounded">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1 ml-4">
        <h3 className="font-bold">{item.name}</h3>
        <p>${item.price}</p>
        <input
          type="number"
          min="1"
          value={item.qty}
          onChange={(e) => updateQty(item._id, Number(e.target.value))}
          className="border rounded px-2 w-20 mt-1"
        />
      </div>
      <button className="bg-red-500 px-4 py-2 mt-2 rounded font-bold" onClick={() => removeFromCart(item._id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
