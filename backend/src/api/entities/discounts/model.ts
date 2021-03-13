import mongoose, { Schema } from "mongoose";

export const Discount = mongoose.model(
  "Discount",
  new Schema({
    brand: String,
    threshold: Number,
    discount: Number
  })
);
