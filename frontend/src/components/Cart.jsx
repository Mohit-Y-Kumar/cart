import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";
import CheckoutForm from "./CheckoutForm.jsx";

const Cart = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (!cartItems.length) return (
    <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg p-4 z-50">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <p>Your cart is empty</p>
      <button
        className="mt-4 bg-gray-400 text-white px-4 py-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );

  return (
    <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg p-4 z-50 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>

      <h3 className="text-lg font-bold mt-4">Total: ${total}</h3>

      <CheckoutForm onClose={onClose} />
    </div>
  );
};

export default Cart;
