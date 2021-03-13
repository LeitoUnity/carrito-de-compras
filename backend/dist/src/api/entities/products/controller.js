"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const repository_1 = require("./repository");
class ProductsController {
    constructor() {
        this.productsRepository = new repository_1.ProductsRepository();
    }
    getAllProducts(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productsRepository.getProducts(filters || {});
        });
    }
    getProductsByPrice(minPrice, maxPrice) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = {
                price: {
                    $gt: minPrice ? minPrice : Number.MIN_SAFE_INTEGER,
                    $lt: maxPrice ? maxPrice : Number.MAX_SAFE_INTEGER
                }
            };
            return this.productsRepository.getProducts(filter);
        });
    }
}
exports.ProductsController = ProductsController;
//# sourceMappingURL=controller.js.map