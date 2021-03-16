import axios from "axios";
import { Discount } from "./models/discount";
import { Product } from "./models/product";

export const getDiscounts = async (filters?: Object) => {
  try {
    return (await axios.get<Array<Discount>>("/discounts", { params: filters }))
      .data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getDiscountsByBrands = async (filters?: Object) => {
  try {
    return (
      await axios.get<Array<Discount>>("/discounts/brands", { params: filters })
    ).data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getProducts = async (filters?: Object) => {
  try {
    return (await axios.get<Array<Product>>("/products", { params: filters }))
      .data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
