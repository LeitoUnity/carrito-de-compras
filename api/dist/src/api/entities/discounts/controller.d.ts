/// <reference types="mongoose" />
export declare class DiscountsController {
    private discountsRepository;
    constructor();
    getAllDiscounts(filters?: any): Promise<import("mongoose").Document<any, {}>[]>;
    getDiscountByBrands(brands: Array<string>): Promise<import("mongoose").Document<any, {}>[]>;
}
