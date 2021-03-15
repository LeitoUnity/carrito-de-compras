import { DiscountsRepository } from "./repository";

export class DiscountsController {
  private discountsRepository: DiscountsRepository;

  constructor() {
    this.discountsRepository = new DiscountsRepository();
  }

  async getAllDiscounts(filters?: any) {
    return this.discountsRepository.getDiscounts(filters || {});
  }

  async getDiscountByBrands(brands: Array<string>) {
    return this.discountsRepository.getDiscounts({ brand: { $in: brands } });
  }
}
