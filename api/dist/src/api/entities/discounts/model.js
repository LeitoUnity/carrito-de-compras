"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discount = void 0;
const mongoose_1 = require("mongoose");
exports.Discount = mongoose_1.model("Discount", new mongoose_1.Schema({
    brand: String,
    threshold: Number,
    discount: Number
}));
//# sourceMappingURL=model.js.map