require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./models/Product");  

const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log(" MongoDB connected");

    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(products);
      console.log(" Products inserted successfully");
    } else {
      console.log(" Products already exist — skipping insert");
    }
  })
  .catch((err) => console.error(" MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(` Server running on port ${PORT}`)
);
