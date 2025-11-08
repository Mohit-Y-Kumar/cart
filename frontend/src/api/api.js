import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});

// Products
export const getProducts = () => api.get("/products");

// Cart
export const addToCart = (productId, qty) => api.post("/cart", { productId, qty });
export const getCart = () => api.get("/cart");
export const removeFromCart = (id) => api.delete(`/cart/${id}`);

// ✅ Checkout
export const checkout = (user) => api.post("/cart/checkout", { user });

export default api;
