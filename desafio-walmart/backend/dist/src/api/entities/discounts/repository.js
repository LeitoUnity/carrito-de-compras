"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsRepository = void 0;
const db_1 = require("../../services/db");
const model_1 = require("./model");
class DiscountsRepository {
    constructor() {
        db_1.DbSingleton.getDbConnection();
    }
    getDiscounts(filters) {
        return model_1.Discount.find(filters);
    }
}
exports.DiscountsRepository = DiscountsRepository;
//# sourceMappingURL=repository.js.map