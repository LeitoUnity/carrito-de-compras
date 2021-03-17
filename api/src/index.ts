import * as express from "express";
import * as dotenv from "dotenv";
import { discountRoutes } from "./api/entities/discounts/routes";
import { productRoutes } from "./api/entities/products/routes";
import * as cors from "cors";

dotenv.config();
const app = express();
app.use(cors({ origin: `http://176.16.1.*` }));
const routes = [discountRoutes(app), productRoutes(app)];

app.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://${process.env.IP}:${process.env.PORT}`
  );
});
