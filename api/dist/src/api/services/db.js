"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSingleton = void 0;
const Mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
class DbSingleton {
    constructor() { }
    static getDbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!DbSingleton.dbConnection) {
                DbSingleton.dbConnection = yield Mongoose.connect(`${process.env.DB_URL}`, {
                    auth: {
                        user: `${process.env.DB_USER}`,
                        password: `${process.env.DB_PASS}`
                    },
                    dbName: process.env.DB_NAME
                });
            }
            return DbSingleton.dbConnection;
        });
    }
}
exports.DbSingleton = DbSingleton;
//# sourceMappingURL=db.js.map