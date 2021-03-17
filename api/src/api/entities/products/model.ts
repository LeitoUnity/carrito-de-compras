import { model, Schema } from "mongoose";

export const Product = model(
  "Product",
  new Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number
  })
);
