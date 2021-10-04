import  asyncHandler  from "express-async-handler";
import Product from "../models/product.js";

export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product(req.body);
  const savedProduct = await product.save();
  res.json(savedProduct);
});

export const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export const findOneProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new Error("Product not found");
  }
  res.json(product);
});
