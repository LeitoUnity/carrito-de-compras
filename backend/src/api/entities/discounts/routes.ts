import { Express } from "express";
import { DiscountsController } from "./controller";

export async function discountRoutes(app: Express) {
  const discountsService = new DiscountsController();

  app.get("/discounts", async (req, res) => {
    const { query } = req;
    const discounts = await discountsService.getAllDiscounts(query);
    res.send(discounts);
  });

  app.get("/discounts/brands", async (req, res) => {
    const { query } = req;

    let brands = query ? query["brands"] : null;

    if (brands && typeof brands === "string") {
      brands = brands.split(",");
      const discounts = await discountsService.getDiscountByBrands(brands);
      res.send(discounts);
    } else {
      res.status(404);
      res.send("Unsupported Filter");
    }
  });
}
