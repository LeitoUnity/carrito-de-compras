"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const routes_1 = require("./api/entities/discounts/routes");
const routes_2 = require("./api/entities/products/routes");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(cors({ origin: `http://176.16.1.*` }));
const routes = [routes_1.discountRoutes(app), routes_2.productRoutes(app)];
app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://${process.env.IP}:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map