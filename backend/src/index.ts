import express from "express";
import * as dotenv from "dotenv";
import { discountRoutes } from "./api/entities/discounts/routes";
import { productRoutes } from "./api/entities/products/routes";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
const routes = [discountRoutes(app), productRoutes(app)];

app.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
  );
});
