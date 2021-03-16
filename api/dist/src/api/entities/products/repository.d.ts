/// <reference types="mongoose" />
export declare class ProductsRepository {
    constructor();
    getProducts(filters: Object): import("mongoose").Query<import("mongoose").Document<any, {}>[], import("mongoose").Document<any, {}>, {}>;
}
