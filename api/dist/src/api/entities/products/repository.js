"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const db_1 = require("../../services/db");
const model_1 = require("./model");
class ProductsRepository {
    constructor() {
        db_1.DbSingleton.getDbConnection();
    }
    getProducts(filters) {
        return model_1.Product.find(filters);
    }
}
exports.ProductsRepository = ProductsRepository;
//# sourceMappingURL=repository.js.map