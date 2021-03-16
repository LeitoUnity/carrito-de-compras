/// <reference types="mongoose" />
export declare class ProductsController {
    private productsRepository;
    constructor();
    getAllProducts(filters?: any): Promise<import("mongoose").Document<any, {}>[]>;
    getProductsByPrice(minPrice: Number, maxPrice: Number): Promise<import("mongoose").Document<any, {}>[]>;
}
