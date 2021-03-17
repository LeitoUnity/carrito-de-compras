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
exports.productRoutes = void 0;
const controller_1 = require("./controller");
const _ = require("lodash");
function productRoutes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const productsController = new controller_1.ProductsController();
        app.get("/products", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { query } = req;
            const discounts = yield productsController.getAllProducts(query);
            res.send(discounts);
        }));
        app.get("/products/price", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { query } = req;
            let { minPrice, maxPrice } = query;
            const products = yield productsController.getProductsByPrice(_.toNumber(minPrice), _.toNumber(maxPrice));
            res.send(products);
        }));
    });
}
exports.productRoutes = productRoutes;
//# sourceMappingURL=routes.js.map