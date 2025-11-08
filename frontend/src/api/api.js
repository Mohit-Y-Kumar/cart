import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});

// Products
export const getProducts = () => api.get("api/products");

// Cart
export const addToCart = (productId, qty) => api.post("api/cart", { productId, qty });
export const getCart = () => api.get("api/cart");
export const removeFromCart = (id) => api.delete(`api/cart/${id}`);

// ✅ Checkout
export const checkout = (user) => api.post("api/cart/checkout", { user });

export default api;
