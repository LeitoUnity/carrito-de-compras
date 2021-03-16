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
exports.discountRoutes = void 0;
const controller_1 = require("./controller");
function discountRoutes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const discountsService = new controller_1.DiscountsController();
        app.get("/discounts", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { query } = req;
            const discounts = yield discountsService.getAllDiscounts(query);
            res.send(discounts);
        }));
        app.get("/discounts/brands", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { query } = req;
            let brands = query ? query["brands"] : null;
            if (brands && typeof brands === "string") {
                brands = brands.split(",");
                const discounts = yield discountsService.getDiscountByBrands(brands);
                res.send(discounts);
            }
            else {
                res.status(404);
                res.send("Unsupported Filter");
            }
        }));
    });
}
exports.discountRoutes = discountRoutes;
//# sourceMappingURL=routes.js.map