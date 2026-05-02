import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/products.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/Home/subs/:subcategory", async (req, res) => {
  const { subcategory } = req.params;

  try {
    const currProducts = await Product.find({ subcategory });
    res.json(currProducts);
  } catch (err) {
    console.error("Error fetching subcategory products:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const currProduct = await Product.findById(id);

    if (!currProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(currProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/Home/:category", async (req, res) => {
  const { category } = req.params;

  try {
    const subcategories = await Product.distinct("subcategory", { category });
    res.json({ category, subcategories });
  } catch (err) {
    console.error("Error fetching subcategories:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/Home/:category/:subcategory", async (req, res) => {
  const { category, subcategory } = req.params;

  try {
    let products;

    if (subcategory === "All") {
      products = await Product.find({ category });
    } else {
      products = await Product.find({ category, subcategory });
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/api/cart/add", async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (typeof quantity !== "number") {
      return res.status(400).json({ message: "Invalid quantity" });
    }

    if (quantity > 0 && product.stock < quantity) {
      return res.status(400).json({
        message: "Insufficient stock",
      });
    }

    product.stock -= quantity;

    if (product.stock < 0) product.stock = 0;

    await product.save();

    res.json({
      message: "Cart updated successfully",
      productId,
      remainingStock: product.stock,
    });
  } catch (err) {
    console.error("Error updating cart:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });