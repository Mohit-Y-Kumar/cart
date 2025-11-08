const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');
const Order = require('../models/Order'); // ✅ Import Order model

// GET /api/cart - get cart items + total
router.get('/', async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('productId');
    const formattedItems = cartItems.map(item => ({
      _id: item._id,
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      qty: item.qty,
      image: item.productId.image,
    }));
    const total = formattedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    res.json({ cartItems: formattedItems, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/cart - add item to cart
router.post('/', async (req, res) => {
  try {
    const { productId, qty } = req.body;
    if (!productId || !qty) return res.status(400).json({ error: "Missing productId or qty" });

    let item = await CartItem.findOne({ productId });
    if (item) item.qty += qty;
    else item = new CartItem({ productId, qty });

    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/cart/:id - remove item
router.delete('/:id', async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST /api/cart/checkout - complete order
router.post('/checkout', async (req, res) => {
  try {
    const { user } = req.body; // expecting { name, email }
    if (!user || !user.name || !user.email)
      return res.status(400).json({ error: "User info missing" });

    // fetch cart items
    const cartItems = await CartItem.find().populate('productId');
    if (!cartItems.length)
      return res.status(400).json({ error: "Cart is empty" });

    const formattedItems = cartItems.map(item => ({
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      qty: item.qty,
    }));

    const total = formattedItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    // save order
    const order = new Order({
      user,
      cartItems: formattedItems,
      total,
    });
    await order.save();

    // clear cart
    await CartItem.deleteMany();

    res.json({
      message: "Checkout successful!",
      receipt: {
        total,
        timestamp: new Date(),
        items: formattedItems,
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
