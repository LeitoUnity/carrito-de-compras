/// <reference types="mongoose" />
export declare class DiscountsRepository {
    constructor();
    getDiscounts(filters: Object): import("mongoose").Query<import("mongoose").Document<any, {}>[], import("mongoose").Document<any, {}>, {}>;
}
