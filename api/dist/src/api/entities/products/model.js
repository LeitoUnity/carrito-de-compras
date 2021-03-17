"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
exports.Product = mongoose_1.model("Product", new mongoose_1.Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number
}));
//# sourceMappingURL=model.js.map