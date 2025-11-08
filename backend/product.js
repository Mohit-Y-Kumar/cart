const mongoose = require('mongoose');

// Product model
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});
const Product = mongoose.model('Product', ProductSchema);

// Products with Amazon-style images
const products = [
  { name: 'Wireless Headphones', price: 150, image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=813' },
  { name: 'Smart Watch', price: 120, image: 'https://images.pexels.com/photos/2779018/pexels-photo-2779018.jpeg' },
  { name: 'Bluetooth Speaker', price: 80, image: 'https://images.unsplash.com/photo-1668649175276-fa4f96beb185?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435' },
  { name: 'Gaming Mouse', price: 60, image: 'https://images.unsplash.com/photo-1613141412501-9012977f1969?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870tps://m.media-amazon.com/images/I/61LymrNqfSL._AC_SL1500_.jpg' },
  { name: 'Laptop Stand', price: 45, image: 'https://images.unsplash.com/photo-1705907014753-3535d03914ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1008ps://m.media-amazon.com/images/I/61tZk9XQ0tL._AC_SL1500_.jpg' },
  { name: 'USB-C Hub', price: 35, image:'https://images.unsplash.com/photo-1760376789487-994070337c76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870s://m.media-amazon.com/images/I/61uV4y90roL._AC_SL1500_.jpg' },
  { name: 'Portable SSD', price: 100, image: 'https://images.unsplash.com/photo-1659543038858-9673fc324a89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870//m.media-amazon.com/images/I/71U8oQb2vDL._AC_SL1500_.jpg' },
  { name: 'Mechanical Keyboard', price: 90, image: 'https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871://m.media-amazon.com/images/I/71qkzYc1iXL._AC_SL1500_.jpg' },
  { name: 'Wireless Charger', price: 40, image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=386s://m.media-amazon.com/images/I/61J62v2A2XL._AC_SL1500_.jpg' },
  { name: 'HD Webcam', price: 70, image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870s://m.media-amazon.com/images/I/61SjF5uPfQL._AC_SL1500_.jpg' }
];

// Connect to MongoDB and insert products
mongoose.connect('mongodb://127.0.0.1:27017/mockEcom', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected');

  // Optional: clear existing products
  await Product.deleteMany({});

  // Insert products
  await Product.insertMany(products);
  console.log('10 products inserted successfully');

  mongoose.disconnect();
})
.catch(err => console.error('MongoDB connection error:', err));
