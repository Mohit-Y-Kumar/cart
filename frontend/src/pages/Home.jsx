import React, { useState } from "react";
import ProductList from "../components/ProductList.jsx";
import Cart from "../components/Cart.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar onCartClick={toggleCart} />

      {/* Main content */}
      <div className="container mx-auto p-4 pt-6">
        <ProductList />
      </div>

      {/* Cart drawer */}
      {showCart && <Cart onClose={toggleCart} />}
    </div>
  );
};

export default Home;
