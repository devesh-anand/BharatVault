import sql, { Connection } from "mysql2/promise";
import Locals from "./Locals";

export default async function createConnection(): Promise<sql.Connection> {
    const { databaseUrl } = Locals.config();
    const connection = sql.createConnection(databaseUrl as string);
    return connection;
}
