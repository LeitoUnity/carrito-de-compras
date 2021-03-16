import { ProductsRepository } from "./repository";

export class ProductsController {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  async getAllProducts(filters?: any) {
    return this.productsRepository.getProducts(filters || {});
  }

  async getProductsByPrice(minPrice: Number, maxPrice: Number) {
    let filter: object = {
      price: {
        $gt: minPrice ? minPrice : Number.MIN_SAFE_INTEGER,
        $lt: maxPrice ? maxPrice : Number.MAX_SAFE_INTEGER
      }
    };

    return this.productsRepository.getProducts(filter);
  }
}
