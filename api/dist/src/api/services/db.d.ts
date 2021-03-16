import mongoose from "mongoose";
export declare class DbSingleton {
    private static dbConnection;
    constructor();
    static getDbConnection(): Promise<typeof mongoose>;
}
