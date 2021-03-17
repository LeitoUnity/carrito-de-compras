import { model, Schema } from "mongoose";

export const Discount = model(
  "Discount",
  new Schema({
    brand: String,
    threshold: Number,
    discount: Number
  })
);
