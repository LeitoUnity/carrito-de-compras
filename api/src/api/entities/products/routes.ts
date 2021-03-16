import { Express } from "express";
import { ProductsController } from "./controller";
import * as _ from "lodash";

export async function productRoutes(app: Express) {
  const productsController = new ProductsController();

  app.get("/products", async (req, res) => {
    const { query } = req;
    const discounts = await productsController.getAllProducts(query);
    res.send(discounts);
  });

  app.get("/products/price", async (req, res) => {
    const { query } = req;
    let { minPrice, maxPrice } = query;

    const products = await productsController.getProductsByPrice(
      _.toNumber(minPrice),
      _.toNumber(maxPrice)
    );
    res.send(products);
  });
}
