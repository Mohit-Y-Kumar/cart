import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ onCartClick }) => {
  const { cartItems } = useContext(CartContext);

  // total quantity of items in cart
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="bg-stone-400 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left: Logo / Brand */}
      <div className="text-2xl font-bold">Vibe Commerce</div>

      {/* Right: Cart */}
      <div className="relative cursor-pointer" onClick={onCartClick}>
        <FaShoppingCart size={24} />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalQty}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
