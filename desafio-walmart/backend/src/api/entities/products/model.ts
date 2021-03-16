import mongoose, { Schema } from "mongoose";

export const Product = mongoose.model(
  "Product",
  new Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number
  })
);
