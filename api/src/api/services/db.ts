import * as Mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export class DbSingleton {
  private static dbConnection: typeof Mongoose;

  constructor() {}

  public static async getDbConnection(): Promise<typeof Mongoose> {
    if (!DbSingleton.dbConnection) {
      DbSingleton.dbConnection = await Mongoose.connect(
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
