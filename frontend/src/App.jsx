import React from "react";
import { CartProvider } from "./context/CartContext.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
