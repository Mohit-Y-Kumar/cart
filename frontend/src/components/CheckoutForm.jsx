import React, { useState, useContext } from "react";
import { checkout } from "../api/api.js";
import { CartContext } from "../context/CartContext.jsx";
import ReceiptModal from "./ReceiptModal.jsx";

const CheckoutForm = ({ onClose }) => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) return alert("Please enter your name and email.");
    if (!cartItems.length) return alert("Your cart is empty!");

    setLoading(true);
    try {
      const { data } = await checkout({ name, email });
      if (data.receipt) {
        setReceiptData(data.receipt);
        setShowReceipt(true);
        clearCart();
          alert("Checkout successful! Thank you for your order.");
      } else {
        alert(data.error || "Checkout failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed. Please make sure your cart has items.");
    } finally {
      setLoading(false);
    }
  };

  const handleReceiptClose = () => {
    setShowReceipt(false);
    onClose();
  };

  return (
    <>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accentBlue"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accentBlue"
          required
        />
        <button
          type="submit"
          className="w-full bg-sky-600 hover:bg-accentBlue/90 text-white px-4 py-2 rounded mt-2"
          disabled={loading}
        >
          {loading ? "Processing..." : "Checkout"}
        </button>
      </form>

      {showReceipt && receiptData && (
        <ReceiptModal receipt={receiptData} onClose={handleReceiptClose} />
      )}
    </>
  );
};

export default CheckoutForm;
