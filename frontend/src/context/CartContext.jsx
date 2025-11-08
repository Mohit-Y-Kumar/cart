import React, { createContext, useState, useEffect } from "react";
import {
  addToCart as addToCartAPI,
  getCart,
  removeFromCart as removeFromCartAPI,
} from "../api/api.js";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🔹 Load cart from backend when app starts
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await getCart();
      setCartItems(res.data.cartItems || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  // 🔹 Add item to backend cart
  const addToCart = async (product) => {
    try {
      await addToCartAPI(product._id, 1);
      await fetchCart(); // refresh cart after adding
      alert(`${product.name} added to cart!`);
    } catch (err) {
      console.error("Add to cart failed:", err);
      alert("Error adding to cart. Check backend.");
    }
  };

  // 🔹 Remove item from backend
  const removeFromCart = async (id) => {
    try {
      await removeFromCartAPI(id);
      await fetchCart();
    } catch (err) {
      console.error("Remove from cart failed:", err);
    }
  };

  // 🔹 Update local quantity (optional UI only)
  const updateQty = (id, qty) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: qty > 0 ? qty : 1 } : item
      )
    );

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
