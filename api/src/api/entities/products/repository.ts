import { DbSingleton } from "../../services/db";
import { Product } from "./model";

export class ProductsRepository {
  constructor() {
    DbSingleton.getDbConnection();
  }
  getProducts(filters: Object) {
    return Product.find(filters);
  }
}
