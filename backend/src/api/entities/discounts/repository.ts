import { DbSingleton } from "../../services/db";
import { Discount } from "./model";

export class DiscountsRepository {
  constructor() {
    DbSingleton.getDbConnection();
  }
  getDiscounts(filters: Object) {
    return Discount.find(filters);
  }
}
