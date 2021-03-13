import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export class DbSingleton {
  private static dbConnection: typeof mongoose;

  constructor() {}

  public static async getDbConnection(): Promise<typeof mongoose> {
    if (!DbSingleton.dbConnection) {
      DbSingleton.dbConnection = await mongoose.connect(
        `${process.env.DB_URL}`,
        {
          auth: {
            user: `${process.env.DB_USER}`,
            password: `${process.env.DB_PASS}`
          },
          dbName: process.env.DB_NAME
        }
      );
    }

    return DbSingleton.dbConnection;
  }
}
